import s from "./sign.module.scss";
import logo from "../svg/Logo.png";
import leftArrow from "../svg/chevron-left.svg";
import { useState, useRef, useEffect } from "react";

function Form(props) {
  const [stage, setStage] = useState(0);
  const buttonRef = useRef(null);
  const backButtonRef = useRef(null);

  const followingFields = (ev) => {
    ev.preventDefault();
    setStage((prev) => prev + 1);
  };

  const previosFields = (ev) => {
    ev.preventDefault();

    if (stage > 0) setStage((prev) => prev - 1);
  };

  const defineButtons = (stagesCount) => {
    const button = buttonRef.current;

    if (stagesCount > stage + 1) {
      button.innerText = "Continue";
      button.onclick = (ev) => followingFields(ev);
    } else {
      button.innerText = props.buttonText;
      button.onclick = (ev) => props.submitHandler(ev);
    }
  };

  const replaceInputWithTextarea = () => {
    try {
      const input = document.getElementById("textarea");
      const textarea = document.createElement("textarea");
      textarea.id = "textarea";
      textarea.value = props.state["textarea"];
      textarea.addEventListener("change", (ev) => {
        props.setState((prev) => {
          return {
            ...prev,
            textarea: ev.target.value,
          };
        });
      });
      textarea.maxLength = 200;
      input.replaceWith(textarea);
    } catch {
      console.log(props.state.textarea);
    }
  };

  useEffect(() => {
    defineButtons(stages.length);
    const backButton = backButtonRef.current;

    replaceInputWithTextarea();

    if (stage === 0) {
      backButton.style.opacity = 0.2;
      backButton.style.cursor = "not-allowed";
    } else {
      backButton.style.opacity = 1;
      backButton.style.cursor = "pointer";
    }
  });

  const generateFields = () => {
    const stages = [];
    let fields = [];

    props.fields.forEach((field) => {
      fields.push(
        <>
          <input
            id={field["id"]}
            ref={props.refs?.[field["id"]]}
            name={field["name"]}
            placeholder={field["placeholder"]}
            type={field["type"]}
            value={props.state[field["id"]]}
            onChange={(ev) => {
              props.validator?.(field["id"], ev.target.value);

              if (ev.target.type !== "checkbox") {
                props.setState((prev) => {
                  return {
                    ...prev,
                    [field["id"]]: ev.target.value,
                  };
                });
              } else {
                props.setState((prev) => {
                  return {
                    ...prev,
                    [field["id"]]: ev.target.checked,
                  };
                });
              }
            }}
          />
          {field["label"] !== undefined ? (
            <label for={field["id"]}>{field["label"]}</label>
          ) : null}
        </>
      );
    });

    let fieldsInDiv = [];
    for (let i = 0; i < fields.length; i++) {
      fieldsInDiv.push(fields[i]);

      if ((i + 1) % 4 === 0) {
        stages.push(<div>{fieldsInDiv}</div>);
        fieldsInDiv = [];
      } else if (i + 1 === fields.length) stages.push(<div>{fieldsInDiv}</div>);
    }

    return stages;
  };

  const generateLinks = () => {
    return props.links?.map((link) => {
      return <a href={`${link.link}`}>{link.text}</a>;
    });
  };

  const stages = generateFields();
  return (
    <form className={s.form}>
      <img
        onClick={previosFields}
        ref={backButtonRef}
        className={s.backArrow}
        src={leftArrow}
        alt="back arrow"
      />
      <img alt="logo" src={logo} />
      <h2>{props.header}</h2>
      {stages[stage]}
      <button ref={buttonRef}></button>
      <div className={s.linkHolder}>{generateLinks()}</div>
    </form>
  );
}

export default Form;
