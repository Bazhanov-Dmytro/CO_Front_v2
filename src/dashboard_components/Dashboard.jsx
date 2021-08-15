import DashboardHeader from "./common/Header";
import Table from "./table/Table";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Dashboard(props) {
  const [curtain, setCurtain] = useState(null);
  const [redirect, setRedirect] = useState(
    localStorage.getItem("jwt_access") !== null ? null : <Redirect to="/" />
  );

  return (
    <>
      {redirect}
      {curtain}
      <DashboardHeader setRedirect={setRedirect} setCurtain={setCurtain} />
      <Table
        style={{ textAlign: "center" }}
        rows={[
          {
            cells: [
              { name: "Lastname" },
              { name: "Last Report" },
              { name: "Message" },
            ],
          },
          {
            cells: [
              { name: "Bazhanov" },
              {
                name: "21-8-2021",
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
                name: "New",
                menu: [
                  {
                    name: "Send Message",
                    func: function () {
                      alert("/writeMessage");
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
          },
          {
            cells: [
              { name: "Bazhanov" },
              {
                name: "21-8-2021",
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
                name: "New",
                menu: [
                  {
                    name: "Send Message",
                    func: function () {
                      alert("/writeMessage");
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
          },
          {
            cells: [
              { name: "Bazhanov" },
              {
                name: "21-8-2021",
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
                name: "New",
                menu: [
                  {
                    name: "Send Message",
                    func: function () {
                      alert("/writeMessage");
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
          },
        ]}
      />
    </>
  );
}

export default Dashboard;
