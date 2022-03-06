import React, { useState } from "react";
import LoginForm from './components/Box/LoginForm';
import './App.css';

function App() {
  const adminUser = {
    email: "newbie@test.fr",
    password: "test123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Connexion reussi");
    setUser({
      name: details.name,
      email: details.email
    });

  } else {
    console.log("Ce compte n'existe pas");
    setError("Ce compte n'existe pas");
    }
  }

  const Logout = () => {
    setUser({
      name: "",
      email: ""
    })
    setError("");
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div class="welcome">
          <h2>Salut, <span>{user.name}</span></h2>
          <button onClick={Logout}>Deconnexion</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
