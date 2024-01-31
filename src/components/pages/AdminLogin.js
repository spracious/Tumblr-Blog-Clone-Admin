import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "../pages/Welcome";



function AdminLogin() {
 
  const navigate = useNavigate();
  const [user, setUser] = useState({email:""});
  const [error, setError] =useState("");


  const adminUser = {
    email: "admin@pass.com",
    password: "admin123"
  }

  const Login = details =>{
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
      navigate("/Admin");
      console.log("Logged in");
      setUser({
        email:details.email
      })
    }else{
      alert("Wrong Admin Credentials!");
    }
  }

  return (
    <div className="App">
      {(user.email !="") ? (
        <div className="welcome">
        
        </div>
      ):(
        <Welcome Login={Login} error={error} />
      )}
    </div>
  );
}

export default AdminLogin;
