import DashboardHeader from "./common/Header";
import Table from "./table/Table";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Darkness from "./common/Darkness";
import MessageBuilder from "./functions/MessageBuilder";
import axios from "axios";
import MessageHistory from "./functions/MessageHistory";
import ReportHistory from "./functions/ReportHistory";
import RoleChanger from "./functions/RoleChanger";

function Dashboard(props) {
  const [curtain, setCurtain] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  const [redirect, setRedirect] = useState(
    localStorage.getItem("jwt_access") !== null ? null : <Redirect to="/" />
  );

  const notApproved =
    localStorage.getItem("user_role") === "null" ? (
      <h3 style={{ textAlign: "center" }}>Your account is not approved yet</h3>
    ) : null;

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

  const getUsers = () => {
    const header = {
      Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
    };

    return axios.get("http://localhost:8000/api/users/", { headers: header });
  };

  const serializeUsers = async () => {
    let users = await getUsers();
    if (users.data === "Not approved account") return false;
    const result = users.data.map((user) => {
      return {
        cells: [
          { email: user.email },
          { name: user.lastname },
          {
            name: user.name,
            menu: [
              +localStorage.getItem("user_role") === 3
                ? {
                    name: "Change Role",
                    func: function (ev) {
                      setCurtain(
                        <Darkness
                          close={() => setCurtain(null)}
                          name="Roles"
                          sectors={[
                            {
                              name: "Role List",
                              markup: <RoleChanger />,
                            },
                          ]}
                        />
                      );
                    },
                  }
                : {
                    name: "Report History",
                    func: function (ev) {
                      setCurtain(
                        <Darkness
                          close={() => setCurtain(null)}
                          name="Reports"
                          sectors={[
                            {
                              name: "Report List",
                              markup: <ReportHistory />,
                            },
                          ]}
                        />
                      );
                    },
                  },
              +localStorage.getItem("user_role") === 1
                ? {
                    name: "Generate Report",
                    func: generateReport,
                  }
                : null,
            ],
          },
          {
            name: user.id,
            menu:
              user.email !== localStorage.getItem("user_email")
                ? [
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
                              {
                                name: "Message History",
                                markup: <MessageHistory />,
                              },
                            ]}
                          />
                        );
                      },
                    },
                    {
                      name: "Message History",
                      func: function (ev) {
                        setCurtain(
                          <Darkness
                            close={() => setCurtain(null)}
                            name="Messages"
                            sectors={[
                              {
                                name: "Message History",
                                markup: <MessageHistory />,
                              },
                              {
                                name: "Send Message",
                                markup: <MessageBuilder />,
                              },
                            ]}
                          />
                        );
                      },
                    },
                  ]
                : null,
          },
        ],
      };
    });
    result.unshift({
      cells: [
        { name: "Lastname" },
        +localStorage.getItem("user_role") === 3
          ? { name: "Role" }
          : { name: "Last Report" },
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
      {notApproved}
      <Table style={{ textAlign: "center" }} rows={usersData} />
    </>
  );
}

export default Dashboard;
