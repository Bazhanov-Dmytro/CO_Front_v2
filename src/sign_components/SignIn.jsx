import Form from "./Form";
import { useState } from "react";

function SignIn(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const login = (ev) => {
    ev.preventDefault();
    console.log(state);
  };

  return (
    <Form
      state={state}
      setState={setState}
      submitHandler={login}
      header="Sign in"
      fields={[
        {
          id: "login",
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
  );
}

export default SignIn;
