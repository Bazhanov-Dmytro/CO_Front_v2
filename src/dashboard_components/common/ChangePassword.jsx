import Form from "../../sign_components/Form";
import { useState } from "react";
import axios from "axios";

function ChangePassword(props) {
  const [state, setState] = useState({
    old_password: "",
    new_password: "",
  });

  const changePasswordRequest = (ev) => {
    ev.preventDefault();
    const headers = {
      Authorization: localStorage.getItem("jwt_access"),
    };

    axios
      .put(
        `http://localhost:8000/api/users/1/`,
        {
          old_password: state.old_password,
          new_password: state.new_password,
          old_email: "dimafg12@gmail.com", // localStorage.getItem("user_email"),
          new_email: "dimafg12@gmail.com", // localStorage.getItem("user_email"),
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
      submitHandler={changePasswordRequest}
      header="Fill in the Fields"
      fields={[
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
      buttonText="Change Password"
    />
  );
}

export default ChangePassword;
