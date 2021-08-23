import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "../sign_components/Form";

function RegisterSeo(props) {
  const [state, setState] = useState({
    login: "",
    password1: "",
    password2: "",
    organization: "",
    name: "",
    lastname: "",
    age: "",
    role: 3,
  });

  const { price } = useParams();

  const getTarif = () => {
    if (price === "Basic") return 10;
    else if (price === "Advanced") return 25;
    else if (price === "Pro") return 50;
    else if (price === "Enterprise") return 100;
    else if (price === "Enterprise +") return 100;
  };

  const registerCompany = async () => {
    axios
      .post("http://localhost:8000/api/organizations/", {
        name: state["organization"],
        workers_count: getTarif(),
        ceo: state["lastname"],
      })
      .then((res) => {
        alert("Company created");
        createNewUser();
      })
      .catch((err) => "Error oqured");
  };

  const createNewUserJson = () => {
    return {
      email: state["login"],
      password: state["password2"],
      name: state["name"],
      lastname: state["lastname"],
      organization: state["organization"],
      age: state["age"],
      role: state["role"],
    };
  };

  const createNewUser = async (ev) => {
    axios
      .post("http://localhost:8000/api/users/", createNewUserJson())
      .then((response) => {
        alert(`User: ${state.login} was created`);
      })
      .catch((error) => {
        alert(`Error ocured. Check data you wrote in form.`);
      });
  };

  const registerNewSeo = async (ev) => {
    ev.preventDefault();
    registerCompany();
  };

  return (
    <Form
      setState={setState}
      state={state}
      submitHandler={(ev) => registerNewSeo(ev)}
      header="Sign up"
      fields={[
        {
          id: "login",
          name: "login",
          placeholder: "enter email",
          type: "email",
        },
        {
          id: "password1",
          name: "password_1",
          placeholder: "enter password",
          type: "password",
        },
        {
          id: "password2",
          name: "password_2",
          placeholder: "repeat password",
          type: "password",
        },
        {
          id: "organization",
          name: "organization",
          placeholder: "your organization name",
          type: "text",
        },
        {
          id: "name",
          name: "name",
          placeholder: "Your name",
          type: "text",
        },
        {
          id: "lastname",
          name: "lastname",
          placeholder: "Your lastname",
          type: "text",
        },
        {
          id: "age",
          name: "age",
          placeholder: "Specify your age",
          type: "number",
        },
      ]}
      buttonText="Sign up"
      links={[{ text: "Already have an account?", link: "/login" }]}
    />
  );
}

export default RegisterSeo;
