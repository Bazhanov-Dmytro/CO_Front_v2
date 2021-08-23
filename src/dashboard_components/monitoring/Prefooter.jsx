import s from "./monitoring.module.scss";

function Prefooter(props) {
  return (
    <div className={s.prefooter}>
      <h1>Statistics</h1>
      <h2>Health State: {props.critical ? "Critical" : "Normal"}</h2>
      <h2>Additional Timeouts: {props.timeouts}</h2>
    </div>
  );
}

export default Prefooter;
