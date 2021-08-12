import s from "./cases.module.scss";
import CaseLink from "./CaseLink";
import factory_png from "../images/Factories.png";
import safety_png from "../images/Safety.png";
import poor_health_png from "../images/poor_health.png";
import left from "../svg/chevron-left.svg";
import right from "../svg/chevron-right.svg";
import { useState } from "react";

function CasesLinks(props) {
  const [Case, setCase] = useState(0);

  const images = [factory_png, safety_png, poor_health_png];
  const headers = [
    "Hazardous factory work",
    "People with poor health",
    "For safety",
  ];
  const texts = [
    "People who are working at factories need to control their health especially careful.",
    "Particularly susceptible to stress and other hazards",
    "It's never too late to take care of your health just like that",
  ];

  const useInitialImage = () => {
    if (window.innerWidth > 850) {
      setCase(0);
      window.removeEventListener("resize", useInitialImage);
    }
  };

  const changeCaseRight = () => {
    setCase((prev) => (prev < 2 ? (prev += 1) : prev));
    window.addEventListener("resize", useInitialImage);
  };
  const changeCaseLeft = () => {
    setCase((prev) => (prev > 0 ? (prev -= 1) : prev));
  };

  return (
    <div className={s.linkHeader}>
      <h2>Use Cases</h2>
      <p>Make the work safer</p>

      <div className={s.linkHolderLeft} onClick={changeCaseLeft}>
        <img src={left} className={s.linkLeft} alt="arrow_left" />
      </div>
      <CaseLink
        id="mainCase"
        img={`url(${images[Case]})`}
        header={headers[Case]}
        text={texts[Case]}
      />
      <CaseLink classname="leftCase" header={headers[1]} text={texts[1]} />
      <CaseLink classname="rightCase" header={headers[2]} text={texts[2]} />
      <div className={s.linkHolderRight} onClick={changeCaseRight}>
        <img src={right} className={s.linkRight} alt="arrow_right" />
      </div>
    </div>
  );
}

export default CasesLinks;
