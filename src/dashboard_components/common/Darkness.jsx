import s from "../dashboard.module.scss";
import { useState } from "react";

function Darkness(props) {
  const [sectorNum, setSector] = useState(0);

  const showBookmarks = () => {
    return props.sectors.map((sector, index) => (
      <div
        onClick={() => setSector(index)}
        className={
          sectorNum === index ? `${s.active} ${s.bookmark}` : s.bookmark
        }
      >
        {sector.name}
      </div>
    ));
  };

  return (
    <>
      <div className={s.darkness}></div>
      <div className={s.newWindowWraper}>
        <div className={s.newWindow}>
          <div className={s.controlPanel}>
            <button
              onClick={() => props.close()}
              className={s.buttonClose}
            ></button>
            <h5>{props.name}</h5>
          </div>
          {showBookmarks()}
          <div className={s.main}>{props.sectors[sectorNum].markup}</div>
        </div>
      </div>
    </>
  );
}

export default Darkness;
