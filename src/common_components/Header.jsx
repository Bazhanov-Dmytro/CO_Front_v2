import s from "./common.module.scss";
import hamburger from "../svg/list.svg";
import logo from "../svg/Logo.png";
import { useRef } from "react";

function Header(props) {
  const menu = useRef(null);

  const showMenu = () => {
    const displayProp = menu.current.style.display;
    menu.current.style.display = displayProp === "block" ? "none" : "block";
  };

  const headerButtons = (
    <div className={s.headernButtons}>
      <button
        value="/about"
        onClick={(ev) => props.executeRedirect(ev.target.value)}
      >
        About Us
      </button>
      <button
        value="/cases"
        onClick={(ev) => props.executeRedirect(ev.target.value)}
      >
        Use Cases
      </button>
      <button
        value="/pricing"
        onClick={(ev) => props.executeRedirect(ev.target.value)}
      >
        Pricing
      </button>
      <button
        value="/login"
        onClick={(ev) => props.executeRedirect(ev.target.value)}
      >
        Login
      </button>
    </div>
  );
  return (
    <>
      {props.redirect}

      <header className={s.header}>
        <img
          src={logo}
          className={s.logo}
          alt="logo"
          id="/main"
          onClick={(ev) => props.executeRedirect(ev.target.id)}
        />
        <h2
          className={s.name}
          id="/main"
          onClick={(ev) => props.executeRedirect(ev.target.id)}
        >
          Condition Observer
        </h2>
        {headerButtons}
        <div className={s.hamburger}>
          <img src={hamburger} alt="hamburger button" onClick={showMenu} />
        </div>
      </header>
      <div ref={menu} className={s.menu}>
        <button
          value="/about"
          onClick={(ev) => props.executeRedirect(ev.target.value)}
        >
          About Us
        </button>
        <button
          value="/cases"
          onClick={(ev) => props.executeRedirect(ev.target.value)}
        >
          Use Cases
        </button>
        <button
          value="/pricing"
          onClick={(ev) => props.executeRedirect(ev.target.value)}
        >
          Pricing
        </button>
        <button
          value="/login"
          onClick={(ev) => props.executeRedirect(ev.target.value)}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Header;
