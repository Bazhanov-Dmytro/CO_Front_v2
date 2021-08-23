import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common_components/Header";
import Footer from "./common_components/Footer";
import Main from "./main_components/Mainpage";
import Pricing from "./pricing_components/Pricing";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Cases from "./cases_components/Cases";
import SignIn from "./sign_components/SignIn";
import SignUp from "./sign_components/SignUp";
import Dashboard from "./dashboard_components/Dashboard";
import Monitoring from "./dashboard_components/monitoring/Monitoring";
import RegisterSeo from "./pricing_components/RegisterSeo";

function App() {
  const [redirect, setRedirect] = useState();

  const executeRedirect = (link) => {
    setRedirect(<Redirect to={link} />);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/about">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <Main executeRedirect={executeRedirect} redirect={redirect} />
            <Footer />
          </Route>
          <Route path="/cases">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <Cases executeRedirect={executeRedirect} redirect={redirect} />
            <Footer />
          </Route>
          <Route path="/pricing">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <Pricing executeRedirect={executeRedirect} redirect={redirect} />
            <Footer />
          </Route>
          <Route path="/login">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <SignIn />
            <Footer />
          </Route>
          <Route exact path="/monitoring">
            <Monitoring executeRedirect={executeRedirect} redirect={redirect} />
          </Route>
          <Route path="/register">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <SignUp />
            <Footer />
          </Route>
          <Route path="/registerseo/:price">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <RegisterSeo
              executeRedirect={executeRedirect}
              redirect={redirect}
            />
            <Footer />
          </Route>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
