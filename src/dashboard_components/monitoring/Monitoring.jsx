import Board from "./Board";
import MonitoringButton from "./MonitoringButton";
import Prefooter from "./Prefooter";
import Footer from "../../common_components/Footer";
import s from "./monitoring.module.scss";
import DashboardHeader from "../common/Header";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function Monitoring(props) {
  const [redirect, setRedirect] = useState(
    localStorage.getItem("jwt_access") !== null ? null : <Redirect to="/" />
  );
  const [userState, setUserState] = useState({
    email: "",
    higher_pressure: 0,
    lower_pressure: 0,
    heartbeat_rate: 0,
    temperature: 0,
    is_critical: false,
    timeouts_taken: 0,
  });

  const generateReport = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    axios
      .post(
        "http://localhost:8000/api/reports/",
        {
          user: localStorage.getItem("chosen_user"),
        },
        {
          headers: headers,
        }
      )
      .then((resp) =>
        alert(`Report for ${localStorage.getItem("chosen_user")} was created.`)
      )
      .catch((error) => alert(error));
  };

  const giveTimeout = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    const params = {
      email: localStorage.getItem("chosen_user"),
    };

    axios
      .put(
        `http://localhost:8000/api/indicators/${localStorage.getItem(
          "user_id"
        )}/`,
        null,
        {
          headers: headers,
          params: params,
        }
      )
      .then((res) => () => console.log(res.message))
      .then((error) => () => console.log(error.message));
  };

  const getIndicators = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    const params = {
      email: localStorage.getItem("chosen_user"),
    };

    axios
      .get(
        `http://localhost:8000/api/indicators/${localStorage.getItem(
          "user_id"
        )}/`,
        {
          headers: headers,
          params: params,
        }
      )
      .then((res) => {
        const data = res.data;
        setUserState({
          email: data["user_email"],
          higher_pressure: data["higher_pressure"],
          lower_pressure: data["lower_pressure"],
          heartbeat_rate: data["heartbeat_rate"],
          temperature: data["temperature"],
          is_critical: data["is_critical"],
          timeouts_taken: data["timeouts_taken"],
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const dataProvider = setInterval(() => getIndicators(), 1000);
    return () => {
      clearInterval(dataProvider);
    };
  });
  return (
    <>
      {redirect}
      <DashboardHeader setRedirect={setRedirect} />
      <div className={s.monitoring}>
        <h1>{userState.email}</h1>
        <Prefooter
          critical={userState.critical}
          timeouts={userState.timeouts_taken}
        />
        <Board
          hp={userState.higher_pressure}
          lp={userState.lower_pressure}
          temp={userState.temperature}
          pulse={userState.heartbeat_rate}
        />
        <div className={s.buttons}>
          <MonitoringButton
            theme="green"
            text="Generate Report"
            click={generateReport}
          />
          <MonitoringButton
            theme="red"
            text="Give a Timeout"
            click={giveTimeout}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Monitoring;
