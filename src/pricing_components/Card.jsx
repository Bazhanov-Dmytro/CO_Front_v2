import s from "./pricing.module.scss";
import left from "../svg/chevron-left.svg";
import right from "../svg/chevron-right.svg";
function Card(props) {
  const createList = () => {
    const items = props.items;

    return items.map((item) => <li>{item}</li>);
  };

  return (
    <div className={s.Card}>
      {/* Cringe arrows down below, be careful */}
      <div className={s.arrowLeft} onClick={() => props.moveCard("left")}>
        <img src={left} alt="arrow_left" />
      </div>
      <div className={s.arrowRight} onClick={() => props.moveCard("right")}>
        <img src={right} alt="arrow_right" />
      </div>
      {/* Cringe arrows up there, am sorry for this.. */}

      <div className={s.topCard}>
        <h2>{props.header}</h2>
      </div>
      <ul>{createList()}</ul>
      <div className={s.bottomCard}>
        <p>
          <span>{props.price}</span> Single Payment
        </p>
        <button>Choose The Plan</button>
        <a href="about">Details</a>
      </div>
    </div>
  );
}

export default Card;
