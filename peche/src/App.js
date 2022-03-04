import Accueil from "./components/Accueil";
import React from "react";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

const App = () => {
  return (
  <>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          {/* <li>
            <Link to="/inscription">Inscription</Link>
          </li>
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
          <li>
            <Link to="/formules">Formules</Link>
          </li>
          <li>
            <Link to="/topics">Victimes</Link>
          </li>
          <li>
            <Link to="/commande">Commande</Link>
          </li> */}
        </ul>

        <Switch>
          <Route path="/">
            <Accueil />
          </Route>
          {/* <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/connexion">
            <Connexion />
          </Route>
          <Route path="/formules">
            <Formules />
          </Route>
          <Route path="/Victimes">
            <Victimes />
          </Route>
          <Route path="/Commande">
            <Commande />
          </Route> */}
        </Switch>
      </div>
    </Router>
  </>
  )
};
export default App;
