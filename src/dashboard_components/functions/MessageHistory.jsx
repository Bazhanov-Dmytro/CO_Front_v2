import axios from "axios";
import s from "../dashboard.module.scss";
import { useState, useEffect } from "react";

function MessageHistory(props) {
  const [messages, setMessages] = useState([]);
  const [firstRender, setFirstRender] = useState(true);

  const getMessages = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    const messages = await axios
      .get("http://localhost:8000/api/messages/", {
        headers: headers,
      })
      .then((resp) => resp.data);

    return fillWithMessages(messages);
  };

  const fillWithMessages = (messages) => {
    setMessages(
      messages.map((message) => {
        let style = s.fromUser;
        let senderEmail = "You:";
        if (message.recipient === localStorage.getItem("user_email")) {
          style = s.toUser;
          senderEmail = localStorage.getItem("chosen_user") + ":";
        }

        return (
          <>
            <p className={style}>
              <h4 className={s.recipient}>{senderEmail}</h4>
              {message.text}
            </p>
          </>
        );
      })
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (firstRender) {
      getMessages();
      setFirstRender(false);
    }
  });
  return (
    <>
      <div className={s.messages}>{messages}</div>
    </>
  );
}

export default MessageHistory;
