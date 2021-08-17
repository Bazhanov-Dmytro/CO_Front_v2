import Form from "../../sign_components/Form";
import { useState } from "react";
import axios from "axios";

function MessageBuilder(props) {
  const [state, setState] = useState({
    header: "",
    textarea: "",
  });

  const sendMessage = (ev) => {
    ev.preventDefault();
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    axios
      .post(
        "http://localhost:8000/api/messages/",
        {
          sender: localStorage.getItem("user_email"),
          recipient: localStorage.getItem("chosen_user"),
          header: state.header,
          text: state.textarea,
        },
        {
          headers: headers,
        }
      )
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  };

  return (
    <Form
      state={state}
      setState={setState}
      submitHandler={sendMessage}
      header="Fill in the Fields"
      fields={[
        {
          id: "header",
          name: "header",
          placeholder: "Topic",
          type: "text",
        },
        {
          id: "textarea",
          name: "textarea",
          placeholder: "Text here...",
          type: "textarea",
        },
      ]}
      buttonText="Send Message"
    />
  );
}

export default MessageBuilder;
