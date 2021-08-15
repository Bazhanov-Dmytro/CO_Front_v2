import Form from "../../sign_components/Form";
import { useState } from "react";
import axios from "axios";

function ChangeEmail(props) {
  const [state, setState] = useState({
    password: "",
    email: "dimafg12@gmail.com", // localStorage.getItem("user_email"),
  });

  const changeEmailRequest = (ev) => {
    ev.preventDefault();
    const headers = {
      Authorization: localStorage.getItem("jwt_access"),
    };

    axios
      .put(
        `http://localhost:8000/api/users/1/`, // user id
        {
          old_password: state.password,
          new_password: state.password,
          old_email: "dimafg12@gmail.com", // localStorage.getItem("user_email"),
          new_email: state.email,
        },
        { headers: headers }
      )
      .then((response) => alert(response.data))
      .catch((error) => alert(error.message));
  };

  return (
    <Form
      state={state}
      setState={setState}
      submitHandler={changeEmailRequest}
      header="Fill in the Fields"
      fields={[
        {
          id: "email",
          name: "new_email",
          placeholder: "new email",
          type: "email",
        },
        {
          id: "password",
          name: "password",
          placeholder: "password",
          type: "password",
        },
      ]}
      buttonText="Change Email"
    />
  );
}

export default ChangeEmail;
