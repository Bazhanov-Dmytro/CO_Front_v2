import s from "./monitoring.module.scss";

function MonitoringButton(props) {
  const themes = {
    green: {
      color: "green",
      backgroundColor: "rgba(0, 217, 0, 0.26)",
      border: "solid 1px green",
      boxShadow: "0px 0px 3px 1px green",
    },
    red: {
      color: "red",
      backgroundColor: "rgba(255, 0, 0, 0.26)",
      boxShadow: "0px 0px 3px 1px red",
    },
  };

  return (
    <button
      style={themes[`${props.theme}`]}
      className={s.mButton}
      onClick={() => props.click()}
    >
      {props.text}
    </button>
  );
}

export default MonitoringButton;
