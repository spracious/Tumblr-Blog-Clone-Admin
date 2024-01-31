import React, { useState } from "react";
import AdminNav from "./subComponents/AdminNav";

function AdminNewUsers() {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    
  let adminUsers = {
    fullName: fullName,
    phone: phone,
    email: email,
    userName: userName,
    password: password,
  };

  if (adminUsers === fullName, phone, email, userName, password) {
    alert("User Created Successfully")
  } else{
    alert("Error Creating User")
  }

  console.log(adminUsers)

    fetch("http://localhost:4001/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminUsers),
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("User Created");
        console.log(data);

      }).catch((err)=>{
        throw new Error
      })
      
      setFullName("");
      setPhone("");
      setEmail("");
      setUserName("");
      setPassword("");

  }

  

  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <header className="admin-nav">
          <i>Users Registration</i>
        </header>

        <div class="wrapper">
          <form id="form" name="form">
            <div class="title">
              <h2>Creating User</h2>
            </div>

            <div class="input-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />{" "}
            </div>

            
            <div class="input-group">
              <label for="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />{" "}
            </div>

            <div class="input-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />{" "}
            </div>

            <div class="input-group">
              <label for="userName">User Name</label>
              <input
                type="text"
                id="userName"
                placeholder="user Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />{" "}
            </div>

            <div class="input-group">
              <label for="password">Password</label>
              <input style={{width:"100%", padding:"10px", border:"navy 1px solid", height:"40px"}}
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />{" "}
            </div>

            <button type="submit" class="bts" id="bts" name="bts"   onClick={handleSubmit}>{" "}
              Create user
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminNewUsers;
