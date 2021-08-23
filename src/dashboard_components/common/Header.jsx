import s from "../dashboard.module.scss";
import logo from "../../svg/Logo.png";
import { Redirect, useLocation } from "react-router-dom";
import Darkness from "../common/Darkness";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";
import ChangeBoth from "./ChangeBoth";

function DashboardHeader(props) {
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    props.setRedirect(<Redirect to="/" />);
  };

  const monitoring =
    location.pathname === "/dashboard" ? null : (
      <button onClick={() => props.setRedirect(<Redirect to="/dashboard" />)}>
        Back
      </button>
    );

  const changeCredentials =
    location.pathname === "/dashboard" ? (
      <button
        className={s.biggerButton}
        onClick={() => {
          props.setCurtain(
            <Darkness
              close={() => props.setCurtain(null)}
              name="Change Credentials"
              sectors={[
                {
                  name: "Password",
                  markup: <ChangePassword />,
                },
                {
                  name: "Email",
                  markup: <ChangeEmail />,
                },
                {
                  name: "Both",
                  markup: <ChangeBoth />,
                },
              ]}
            />
          );
        }}
      >
        Chage Credentials
      </button>
    ) : null;

  return (
    <>
      <header className={s.dashheader}>
        <img className={s.logo} alt="logo" src={logo} />
        <div>
          {monitoring}
          {changeCredentials}
          <button onClick={logout}>Logout</button>
        </div>
      </header>
      <h1>{localStorage.getItem("user_organization")}</h1>
    </>
  );
}

export default DashboardHeader;
