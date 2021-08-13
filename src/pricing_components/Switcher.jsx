import s from "./pricing.module.scss";
import { useRef } from "react";

function Switcher(props) {
  const switch_0 = useRef(null);
  const switch_1 = useRef(null);

  const changeSector = (ev) => {
    const id = ev.target.id;
    props.setCard(0);

    if (id === "switch_0") {
      props.setCardset(props.cardsets[0]);
      switch_0.current.style.backgroundColor = "#69a27c";
      switch_1.current.style.backgroundColor = "#9e8e9d";
    } else {
      props.setCardset(props.cardsets[1]);
      switch_1.current.style.backgroundColor = "#69A27C";
      switch_0.current.style.backgroundColor = "#9e8e9d";
    }
  };

  return (
    <div className={s.switcher}>
      <button
        id="switch_0"
        ref={switch_0}
        onClick={(ev) => changeSector(ev)}
        className={s.switcherLeft}
      >
        Basic
      </button>
      <button
        id="switch_1"
        onClick={(ev) => changeSector(ev)}
        ref={switch_1}
        className={s.switcherRight}
      >
        Personalized
      </button>
    </div>
  );
}

export default Switcher;
