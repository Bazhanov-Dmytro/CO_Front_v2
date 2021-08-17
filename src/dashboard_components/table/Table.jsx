import s from "../dashboard.module.scss";
import Row from "./Row";
import { useState } from "react";

function Table(props) {
  const [menu, setMenu] = useState(null);

  const displayMenu = (ev, user) => {
    localStorage.setItem("chosen_user", user);

    if (ev.target.className === s.wraper) {
      const style = ev.target.firstChild.style;

      if (menu !== style) {
        if (menu !== null) menu.display = "none";

        style.display = "block";
        setMenu(style);
      } else {
        menu.display = menu.display === "block" ? "none" : "block";
      }
    }
  };

  const generateRows = () => {
    return props.rows.map((row) => {
      return (
        <Row displayMenu={displayMenu} style={row?.style} cells={row.cells} />
      );
    });
  };

  return (
    <table style={props?.style} className={s.table}>
      {generateRows()}
    </table>
  );
}

export default Table;
