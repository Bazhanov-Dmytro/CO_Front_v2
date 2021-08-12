import s from "./cases.module.scss";

function CaseLink(props) {
  return (
    <div
      id={props.id}
      className={s[props.classname] + " " + s.caseLink}
      style={{ backgroundImage: props.img, backgroundSize: "cover" }}
    >
      <h4>{props.header}</h4>
      <p>{props.text}</p>
      <a href="/">learn more</a>
    </div>
  );
}

export default CaseLink;
