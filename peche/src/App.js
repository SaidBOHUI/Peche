import React from "react";
import {Routes, Route} from "react-router-dom";
import Accueil from "./Accueil";
// import Victimes from "./components/Victimes";
import Formules from "./Formules";
// import Connexion from "./components/Connexion";
import Inscription from "./Inscription";
// import Commande from "./components/Commande";

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/" element = {<Accueil />}/>
      {/* <Route path="/victimes" element = { <Victimes />}/> */}
      <Route path="/formules" element = {<Formules />}/>
      {/* <Route path="/connexion" element = { <Connexion />}/> */}
      <Route path="/inscription" element = { <Inscription />}/>
      {/* <Route path="/commande" element = { <Commande />}/> */}
    </Routes>
  </>
  )
};
export default App;
 
