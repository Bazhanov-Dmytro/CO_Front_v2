import Form from "../../sign_components/Form";
import { useState } from "react";
import axios from "axios";

function ChangeBoth(props) {
  const [state, setState] = useState({
    old_password: "",
    new_password: "",
    email: "dimafg12@gmail.com", // localStorage.getItem("user_email"),
  });

  const ChangeBothRequest = (ev) => {
    ev.preventDefault();
    const headers = {
      Authorization: localStorage.getItem("jwt_access"),
    };

    axios
      .put(
        `http://localhost:8000/api/users/1/`, // user id
        {
          old_password: state.old_password,
          new_password: state.new_password,
          old_email: "dimafg@gmail.com", // localStorage.getItem("user_email"),
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
      submitHandler={ChangeBothRequest}
      header="Fill in the Fields"
      fields={[
        {
          id: "email",
          name: "new_email",
          placeholder: "new email",
          type: "email",
        },
        {
          id: "old_password",
          name: "old_password",
          placeholder: "old password",
          type: "password",
        },
        {
          id: "new_password",
          name: "new_password",
          placeholder: "new password",
          type: "password",
        },
      ]}
      buttonText="Change Credentials"
    />
  );
}

export default ChangeBoth;
