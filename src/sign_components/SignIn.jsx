import Form from "./Form";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function SignIn(props) {
  const [redirect, setRedirect] = useState(null);
  const [state, setState] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const getUserDetails = () => {
    return axios.get("http://localhost:8000/api/users/user/", {
      params: {
        email: state.email,
      },
    });
  };

  const login = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:8000/api/token/", {
        email: state["email"],
        password: state["password"],
      })
      .then((response) => {
        localStorage.setItem("jwt_access", response.data["access"]);
        getUserDetails()
          .then((response) => {
            localStorage.setItem("user_email", response.data.email);
            localStorage.setItem("user_role", response.data.role);
            localStorage.setItem(
              "user_organization",
              response.data.organizatin
            );
            localStorage.setItem("user_id", response.data.id);
            localStorage.setItem("remember_user", state.remember);
            console.log(response.data);
            setRedirect(<Redirect to="/dashboard" />);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    if (localStorage.getItem("jwt_access") !== null) {
      setRedirect(<Redirect to="/dashboard" />);
    }
  }, []);

  return (
    <>
      {redirect}
      <Form
        state={state}
        setState={setState}
        submitHandler={login}
        header="Sign in"
        fields={[
          {
            id: "email",
            name: "login",
            placeholder: "email address",
            type: "email",
          },
          {
            id: "password",
            name: "password",
            placeholder: "password",
            type: "password",
          },
          {
            id: "remember",
            name: "remember",
            placeholder: "",
            type: "checkbox",
            label: "Remember me",
          },
        ]}
        buttonText="Sign in"
        links={[
          { text: "Sign up", link: "/register" },
          { text: "Forgot credentials?", link: "/about" },
        ]}
      />
    </>
  );
}

export default SignIn;
