import Indicator from "./Indicator";
import s from "./monitoring.module.scss";

function Board(props) {
  return (
    <div className={s.board}>
      <Indicator name="Temperature" value={props.temp} />
      <Indicator name="Pressure" value1={props.hp} value2={props.lp} />
      <Indicator name="Heartbeat rate" value={props.pulse} />
    </div>
  );
}

export default Board;
