import Form from "./Form";
import { useState, useRef } from "react";
import axios from "axios";

function SignUp(props) {
  const [state, setState] = useState({
    login: "",
    password1: "",
    password2: "",
    organization: "",
    name: "",
    lastname: "",
    age: "",
  });

  const refs = {
    login: useRef(null),
    password1: useRef(null),
    password2: useRef(null),
    organization: useRef(null),
    name: useRef(null),
    lastname: useRef(null),
    age: useRef(null),
  };

  const colorField = (field, bool, check_all) => {
    if (check_all) return;
    const elem = refs[field].current;
    if (!bool) {
      elem.style.border = "solid rgba(255, 0, 0, 0.404) 3px";
      elem.style.borderRadius = "2px";

      return false;
    } else {
      elem.style.border = "solid gray 1px";
      elem.style.borderRadius = "2px";

      return true;
    }
  };

  const validateUserData = (field, value, check_all) => {
    let bool;
    switch (field) {
      case "login":
        bool = value.includes("@") && !value.slice(0, 3).includes("@");
        colorField(field, bool, check_all);
        return bool;

      case "password1":
        bool = value.length > 8;
        colorField(field, bool, check_all);
        return bool;
      case "password2":
        bool = value === state["password1"];
        colorField(field, bool, check_all);
        return bool;

      case "age":
        bool = 17 < value && value < 90;
        colorField(field, bool, check_all);
        return bool;

      default:
        return true;
    }
  };

  const checkALlFields = () => {
    return Object.keys(state).every((field) => {
      return validateUserData(field, state[field], true);
    });
  };

  const createNewUserJson = () => {
    return {
      email: state["login"],
      password: state["password2"],
      name: state["name"],
      lastname: state["lastname"],
      organization: state["organization"],
      age: state["age"],
    };
  };

  const createNewUser = (ev) => {
    ev.preventDefault();

    if (checkALlFields()) {
      axios
        .post("http://localhost:8000/api/users/", createNewUserJson())
        .then((response) => {
          alert(`User: ${state.login} was created`);
        })
        .catch((error) => {
          alert(`Error ocured. Check data you wrote in form.`);
        });
    } else {
      alert(`Error ocured. Check data you wrote in form.`);
    }
  };

  return (
    <Form
      validator={validateUserData}
      refs={refs}
      setState={setState}
      state={state}
      submitHandler={createNewUser}
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

export default SignUp;
