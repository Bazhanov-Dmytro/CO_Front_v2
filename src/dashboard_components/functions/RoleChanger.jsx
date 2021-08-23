import axios from "axios";
import s from "../dashboard.module.scss";

function RoleChanger(props) {
  const changeRole = async (role, message) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    axios
      .put(
        `http://localhost:8000/api/users/${localStorage.getItem("user_id")}/`,
        {
          role: role,
          email: localStorage.getItem("chosen_user"),
          change_role: true,
        },
        {
          headers: headers,
        }
      )
      .then((res) => alert(message));
  };

  const markup =
    localStorage.getItem("chosen_user") !==
    localStorage.getItem("user_email") ? (
      <div className={s.changeRole}>
        <p>Choose new role for {localStorage.getItem("chosen_user")}</p>
        <ul>
          <li
            onClick={() => changeRole(2, "Worker's role changed to 'Worker'")}
          >
            Worker
          </li>
          <li
            onClick={() => changeRole(1, "Worker's role changed to 'Manager'")}
          >
            Manager
          </li>
        </ul>
        <button onClick={() => changeRole(null, "Worker marked as fired")}>
          Fire Employee
        </button>
      </div>
    ) : (
      <h1>You cant change your role</h1>
    );

  return markup;
}

export default RoleChanger;
