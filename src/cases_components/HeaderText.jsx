import s from "./cases.module.scss";

export function CasesHeaderText(props) {
  return (
    <div className={s.text}>
      <h1>
        Protect the health of your employees without unnecessary spendings:
      </h1>
      <p>
        Both Condition Observer device and software are flexible and easy to
        setup. This removes the boundaries for using the system in certain
        enterprise.
        <p>
          You can attach the device to the factory worker or the bus driver, it
          doesn’t matter device will work efficiently under any circumstances.
        </p>
      </p>
    </div>
  );
}

export default CasesHeaderText;
