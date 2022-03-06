import React, {useState} from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
  return (
      <div className='center'>
    <form className="container-form" onSubmit={submitHandler}>
        <div classeName="form-inner container-form">
            <h2>Login</h2>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} valeue={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} valeue={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Mot de passe:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} valeue={details.password}/>
            </div>  
            <input type="submit" value="Connexion"/>
        </div>
    </form>
    </div>
  )
}

export default LoginForm