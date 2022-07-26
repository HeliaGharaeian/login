import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';
import Resupply from './images/Resupply.png';


function App() {
  const adminUser=
  {
    email: "gharaeianhelia@gmail.com",
    password: "admin123"

  };

  const[user, setUser] = useState({email:""})
  const[error,setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email
      });
    }else{
      console.log("Details do not match");
      setError("Details do not match");
    }
  }

  const Logout = ()=>{
    setUser({email:""});
  }
 
  return (
    <div className="App">
      <div className="Resupply">
       <img src={Resupply} alt="Resupply"/>   
      </div>
      {(user.email != "")?(
        <div className="welcome">
          <h2>welcome ,<span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
      
    </div>
    
  );

}

export default App;