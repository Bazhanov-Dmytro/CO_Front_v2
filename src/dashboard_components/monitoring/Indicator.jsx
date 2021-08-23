import s from "./monitoring.module.scss";

function Indicator(props) {
  return (
    <div className={s.indicator}>
      <h1>
        {props.name} -{" "}
        {props.name !== "Pressure"
          ? props.value
          : `${props.value1}/${props.value2}`}
      </h1>
    </div>
  );
}

export default Indicator;
