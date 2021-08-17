import DashboardHeader from "./common/Header";
import Table from "./table/Table";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Darkness from "./common/Darkness";
import MessageBuilder from "./functions/MessageBuilder";
import axios from "axios";

function Dashboard(props) {
  const [curtain, setCurtain] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  const [redirect, setRedirect] = useState(
    localStorage.getItem("jwt_access") !== null ? null : <Redirect to="/" />
  );

  const getUsers = () => {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    return axios.get("http://localhost:8000/api/users/", { headers: header });
  };

  const serializeUsers = async () => {
    let users = await getUsers();
    console.log(users.data);
    const result = users.data.map((user) => {
      return {
        cells: [
          { email: user.email },
          { name: user.lastname },
          {
            name: user.name,
            menu: [
              {
                name: "Report History",
                func: function () {
                  alert("/reportHistory");
                },
              },
              {
                name: "Last Report",
                func: function () {
                  alert("/showLast");
                },
              },
              {
                name: "Generate Report",
                func: function () {
                  alert("/generateReport");
                },
              },
            ],
          },
          {
            name: user.id,
            menu: [
              {
                name: "Send Message",
                func: function (ev) {
                  setCurtain(
                    <Darkness
                      close={() => setCurtain(null)}
                      name="Messages"
                      sectors={[
                        {
                          name: "Send Message",
                          markup: <MessageBuilder />,
                        },
                      ]}
                    />
                  );
                },
              },
              {
                name: "Message History",
                func: function () {
                  alert("/messageHistory");
                },
              },
            ],
          },
        ],
      };
    });
    result.unshift({
      cells: [
        { name: "Lastname" },
        { name: "Last Report" },
        { name: "Messages" },
      ],
    });
    setUsersData(result);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (firstRender) {
      serializeUsers();
      setFirstRender(false);
    }
  });

  return (
    <>
      {redirect}
      {curtain}
      <DashboardHeader setRedirect={setRedirect} setCurtain={setCurtain} />
      <Table style={{ textAlign: "center" }} rows={usersData} />
    </>
  );
}

export default Dashboard;
