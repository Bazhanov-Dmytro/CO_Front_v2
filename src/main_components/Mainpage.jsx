import pc from "../images/pc.png";
import phone from "../images/phone.jpg";
import device from "../images/device.png";
import s from "./mainpage.module.scss";
import cpu_svg from "../svg/cpu.svg";
import phone_svg from "../svg/phone.svg";
import laptop_svg from "../svg/laptop.svg";
import { useRef } from "react";

function Mainpage(props) {
  const image = useRef(null);

  const changeImage = (ev) => {
    const img = ev.target.src;
    image.current.src = img;
  };

  return (
    <>
      {props.redirect}

      <div className={s.main}>
        <div className={s.slogan}>
          <h2>Make Your Workers Safety Number One Priority</h2>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            harum laborum tempora voluptas numquam ullam facilis repellendus et,
            amet cumque aspernatur saepe reprehenderit incidunt ipsum fuga eos
            quia soluta sapiente?
          </p>
          <button
            value="cases"
            className={s.smallerButton}
            onClick={(ev) => props.executeRedirect(ev.target.value)}
          >
            Learn More
          </button>
        </div>
        <div className={s.imageHolder}>
          <h2>Increase safety level</h2>
          <img ref={image} src={pc} alt="main_image" />
        </div>
        <div className={s.imgLine}>
          <h3>Control workers health:</h3>
          <div>
            <img src={pc} alt="pc_image" onClick={(ev) => changeImage(ev)} />
            <img
              src={phone}
              alt="phone_image"
              onClick={(ev) => changeImage(ev)}
            />
            <img
              src={device}
              alt="device_image"
              onClick={(ev) => changeImage(ev)}
            />
          </div>
        </div>
        <div className={s.textLeft}>
          <h3>Header</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            accusamus? Non rerum omnis vero ratione officia. Quidem, quis ipsum.
            Quas laudantium cupiditate voluptate incidunt est reprehenderit odit
            rem porro veniam!
          </p>
          <img src={laptop_svg} alt="cpu_svg" />

          <h3>Header</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            accusamus? Non rerum omnis vero ratione officia. Quidem, quis ipsum.
            Quas laudantium cupiditate voluptate incidunt est reprehenderit odit
            rem porro veniam!
          </p>
        </div>
        <div className={s.textRight}>
          <img src={cpu_svg} alt="laptop_svg" />
          <h3>Header</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            accusamus? Non rerum omnis vero ratione officia. Quidem, quis ipsum.
            Quas laudantium cupiditate voluptate incidunt est reprehenderit odit
            rem porro veniam!
          </p>
          <img src={phone_svg} alt="phone_svg" />
        </div>
        <button
          value="pricing"
          onClick={(ev) => props.executeRedirect(ev.target.value)}
        >
          Order Condition Observer Set
        </button>
      </div>
    </>
  );
}

export default Mainpage;
