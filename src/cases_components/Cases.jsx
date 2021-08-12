import CasesLinks from "./CasesLinks";
import { CasesHeaderText as HeaderText } from "./HeaderText";
import s from "./cases.module.scss";

function Cases(props) {
  return (
    <>
      {props.redirect}
      <HeaderText />
      <CasesLinks />
      <button
        className={s.button}
        value="pricing"
        onClick={(ev) => props.executeRedirect(ev.target.value)}
      >
        Order Condition Observer Set
      </button>
    </>
  );
}

export default Cases;
