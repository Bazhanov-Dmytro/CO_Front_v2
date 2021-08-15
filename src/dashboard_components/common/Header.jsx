import s from "../dashboard.module.scss";
import logo from "../../svg/Logo.png";
import { Redirect } from "react-router-dom";
import Darkness from "../common/Darkness";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";
import ChangeBoth from "./ChangeBoth";

function DashboardHeader(props) {
  const logout = () => {
    localStorage.clear();
    props.setRedirect(<Redirect to="/" />);
  };

  return (
    <>
      <header className={s.dashheader}>
        <img className={s.logo} alt="logo" src={logo} />
        <div>
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
          <button onClick={logout}>Logout</button>
        </div>
      </header>
      <h1>Company name</h1>
    </>
  );
}

export default DashboardHeader;
