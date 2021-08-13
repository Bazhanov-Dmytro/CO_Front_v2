import s from "./pricing.module.scss";

function CardLine(props) {
  const defineLineSize = () => {
    return Object.keys(props.line).length === 2 ? s.smallerLine : s.cardLine;
  };

  return (
    <div className={defineLineSize()}>{props.line.map((card) => card)}</div>
  );
}

export default CardLine;
