function Report(props) {
  return (
    <>
      <li
        onClick={() => {
          const rdarr = [];
          let mark = 0;
          for (let i = 0; i < props.data["report_details"].length; i++) {
            if (
              props.data["report_details"][i + 1] === undefined ||
              props.data["report_details"][i + 1] ===
                props.data["report_details"][i + 1].toUpperCase()
            ) {
              rdarr.push(props.data["report_details"].slice(mark, i + 1));
              mark = i + 1;
            }
          }
          const arr = [];
          mark = 0;
          for (let i = 0; i < props.data["recommendation"].length; i++) {
            if (
              props.data["recommendation"][i + 1] === "-" ||
              props.data["recommendation"][i + 1] === undefined
            ) {
              arr.push(props.data["recommendation"].slice(mark, i));
              mark = i + 1;
            }
          }

          props.setCurrentReport({
            display: "block",
            creation_date: (
              <p>
                Created at: {props.data.creation_date.substr(0, 10)} Time:{" "}
                {props.data.creation_date.substr(11, 8)}
              </p>
            ),
            report_details: (
              <>
                <p>Heartbeat - {rdarr[0]}</p>
                <p>Pressure - {rdarr[1]}</p>
                <p>Temperature - {rdarr[2]}</p>
                <p>Danger Level: {props.data.danger_level}</p>
              </>
            ),

            recommendation: arr.map((line) => <p>{line}</p>),
          });
        }}
      >
        {props.text}
      </li>
    </>
  );
}

export default Report;
