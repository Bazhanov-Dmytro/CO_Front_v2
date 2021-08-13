import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common_components/Header";
import Footer from "./common_components/Footer";
import Main from "./main_components/Mainpage";
import Pricing from "./pricing_components/Pricing";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Cases from "./cases_components/Cases";

function App() {
  const [redirect, setRedirect] = useState();

  const executeRedirect = (link) => {
    setRedirect(<Redirect to={link} />);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
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
            <Pricing />
            <Footer />
          </Route>
          <Route path="/login">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
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
