import s from "./common.module.scss";
import logo from "../svg/Logo.png";

function Footer(props) {
  return (
    <footer>
      <div>
        <img src={logo} className={s.logo} alt="logo" />
        <h3 className={s.name}>Condition Observer</h3>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        <h4>@ 2021 Condition observer All Rights Reserved</h4>
      </div>
    </footer>
  );
}

export default Footer;
