import axios from "axios";
import s from "../dashboard.module.scss";
import { useState, useEffect } from "react";
import Report from "./Report";

function ReportHistory(props) {
  const [reports, setReports] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  const [currentReport, setCurrentReport] = useState({
    display: "none",
    creation_date: "",
    report_details: "",
    danger_level: "",
    recommendation: "",
  });

  const fillWithReports = (reportList) => {
    return reportList.map((report, index) => {
      const data = report;
      const text = `Report from: ${report.creation_date.substr(
        0,
        10
      )} Time: ${report.creation_date.substr(11, 8)}`;
      return (
        <Report
          setCurrentReport={setCurrentReport}
          text={text}
          data={data}
          id={index}
        ></Report>
      );
    });
  };

  const getReportList = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    const reports = await axios
      .get("http://localhost:8000/api/reports/", {
        headers: headers,
        params: { email: localStorage.getItem("chosen_user") },
      })
      .then((resp) => resp.data);

    setReports(fillWithReports(reports));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (firstRender) {
      getReportList();
      setFirstRender(false);
    }
  });

  return (
    <div className={s.reportContainer}>
      <ul className={s.reportList}>
        <li className={s.username}>
          Report History of <span>{localStorage.getItem("chosen_user")}</span>
        </li>
        {reports}
      </ul>
      <div style={{ display: currentReport["display"] }} className={s.report}>
        <p>
          <span style={{ fontWeight: 600 }}>Indicator Status</span>{" "}
          {currentReport.report_details.heartbeat}
        </p>
        <p>{currentReport.report_details}</p>
        <p>
          <span style={{ fontWeight: 600 }}>Recommendations: </span>
        </p>
        <p>{currentReport.recommendation}</p>
        <p>{currentReport.creation_date}</p>
        <button
          onClick={() =>
            setCurrentReport((prev) => {
              return {
                ...prev,
                display: "none",
              };
            })
          }
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ReportHistory;
