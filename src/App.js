import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common_components/Header";
import Footer from "./common_components/Footer";
import Main from "./main_components/Mainpage";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function App() {
  const [redirect, setRedirect] = useState();

  const executeRedirect = (link) => {
    setRedirect(<Redirect to={link} />);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/main">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <Main executeRedirect={executeRedirect} redirect={redirect} />
            <Footer />
          </Route>
          <Route path="/about">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <Footer />
          </Route>
          <Route path="/cases">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <Footer />
          </Route>
          <Route path="/pricing">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <Footer />
          </Route>
          <Route path="/login">
            <Header executeRedirect={executeRedirect} redirect={redirect} />
            <Footer />
          </Route>
          <Route path="/">
            <Redirect to="/main" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
