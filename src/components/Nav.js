import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/Screenshot (88).png";
import gif from "./images/gif.webm";


function Nav() {
  
  // login modal
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [getFullName, setGetFullName] = useState("");
  const [getPhone, setGetPhone] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const [getUserName, setGetUserName] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [getConfirmPassword, setGetConfirmPassword] = useState("");
 

  const [showModal, setShowModal] = useState(0);

  const showloginHandler = () => {
    setShowLogin(true);
    setShowModal((prevState) => prevState + 1);
  };

  const nextModalHandler = () => {
    setShowModal((prevState) => prevState + 1);
  };
  const closeloginHandler = () => {
    setShowModal((prevState) => prevState - 1);
  };

  const submitHandler = () => {
   
    let inputs = {
      fullName: getFullName,
      phone: getPhone,
      email: getEmail,
      userName: getUserName,
      password: getPassword,
    };


    console.log(inputs);


  //  const response = 
   fetch("http://localhost:4001/api/create-user",{
      method: "POST",
      headers: {"Content-Type":"application/json",
    },
      body: JSON.stringify(inputs),
    })
    // .then((resp) => resp.json())
    .then((data)=>{

      console.log(data);
      if (data.status === 200) {
        navigate("/Sign")
        alert("Welcome to Tumblr Blog" + getFullName);
      }else{
        navigate("/")
        alert("Sign-In Unsuccessful!")
      }

    }).catch((err)=>{
      throw new Error
    })

    setShowModal(0);
    setGetFullName("");
    setGetPhone("");
    setGetEmail("");
    setGetUserName("");
    setGetPassword("");
    setGetConfirmPassword("");
  };


  let show;

  if (showModal === 1) {
    show = (
      <>
        <div>
          <div className="loginForm">
            <button
              style={{
                paddingLeft: "20px",
                color: "grey",
                fontSize: "25px",
                backgroundColor: "rgb(94, 57, 243)",
                border: "none",
              }}
              onClick={closeloginHandler}
            >
              ⬅
            </button>

            <div className="modal1">
              <img src={gif} alt="" />
              <h1>tumblr</h1> <br />
              <h4>
                Welcome to your corner of the internet. You'll nevr be bored
                again
              </h4>
              <h5>Sign up or log in:</h5>
              <button className="modalBtn">Continue with Google</button> <br />
              <button className="modalBtn">Continue with Apple</button> <br />
              <button className="modalBtn" onClick={nextModalHandler}>
                Continue with email
              </button>
              <h4 style={{ color: "rgb(232, 205, 56)" }}>
                Coming from Twitter? Sign up
              </h4>
            </div>
          </div>
        </div>
      </>
    );
  } else if (showModal === 2) {
    show = (
      <>
        <div>
          <div className="loginForm">
            <button
              style={{
                paddingLeft: "20px",
                color: "grey",
                fontSize: "25px",
                backgroundColor: "rgb(94, 57, 243)",
                border: "none",
              }}
              onClick={closeloginHandler}
            >
              ⬅
            </button>
            <div className="modal1">
              <img src={gif} alt="" />
              <h1>tumblr</h1> <br />
              <h4>Enter your Email to log in or register:</h4>
              <input
                className="inp-email"
                type="text"
                placeholder=" Enter Email"
                value={getEmail}
                onChange={(e) => setGetEmail(e.target.value)}
              />{" "}
              <br />

              <button className="nxtBtn" onClick={nextModalHandler}>
                Next ➡
              </button>{" "}
              <br />
            </div>
          </div>
        </div>
      </>
    );
  } else if (showModal === 3) {
    show = (
      <>
        <div>
          <div className="loginForm">
            <button
              style={{
                paddingLeft: "20px",
                color: "grey",
                fontSize: "25px",
                backgroundColor: "rgb(94, 57, 243)",
                border: "none",
              }}
              onClick={closeloginHandler}
            >
              ⬅
            </button>
            <div className="modal1">
              <img src={gif} alt="" />
              <h1>tumblr</h1> <br />
              <h4>
                Welcome to your corner of the internet. <br /> Glad you're here.
              </h4>
              <input
                className=""
                type="text"
                placeholder=" Enter Full Name"
                value={getFullName}
                onChange={(e) => setGetFullName(e.target.value)}
              />{" "}
              <br />
              <input
                className=""
                type="text"
                placeholder=" Enter Phone Number"
                value={getPhone}
                onChange={(e) => setGetPhone(e.target.value)}
              />{" "}
              <br />
              <input
                className=""
                type="password"
                placeholder="  Set your password"
                value={getPassword}
                onChange={(e) => setGetPassword(e.target.value)}
              />{" "}
              <br />
              <input
                className=""
                type="password"
                placeholder="  Confirm password"
                value={getConfirmPassword}
                onChange={(e) => setGetConfirmPassword(e.target.value)}
              />{" "}
              <br />
           
              <button className="nxtBtn" onClick={nextModalHandler}>
                Next ➡
              </button>{" "}
              <br />
            </div>
          </div>
        </div>
      </>
    );
  } else if (showModal === 4) {
    show = (
      <>
        <div>
          <div className="loginForm">
            <button
              style={{
                paddingLeft: "20px",
                color: "grey",
                fontSize: "25px",
                backgroundColor: "rgb(94, 57, 243)",
                border: "none",
              }}
              onClick={closeloginHandler}
            >
              ⬅
            </button>
            <div className="modal1">
              <img src={gif} alt="" />
              <h1>tumblr</h1> <br />
              <h4>
                Welcome back to your corner of the <br /> internet.
              </h4>

              <input
                className="inp-email"
                type="text"
                placeholder=" Enter Prefered Username"
                value={getUserName}
                onChange={(e) => setGetUserName(e.target.value)}
              />{" "}
              <br />
            
              <button type="submit" className="nxtBtn" onClick={submitHandler}>
                Log in ➡
              </button>{" "}
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div style={{ backgroundColor: "rgb(0, 25, 53)" }}>
      <nav class="navbar">
        <div class="container-fluid">
         
          <Link to="/">
              <div style={{marginBottom:"30px"}} class="navbar-brand ms-5"><img width={50} src={logo} alt="" /></div>
            </Link>

          <input
            class="navbar-input form-control me-auto"
            type="search"
            placeholder="Search Tumblr"
            aria-label="Search"
          />

          <form class="d-flex ms-3">
            <div class="btn sign" onClick={showloginHandler}>
              Sign Up
            </div>

            <Link to="/Sign">
              <button class="btn log">Log in</button>
            </Link>

            <Link
            class="nav-link"
            style={{ color: "rgb(0, 184, 255)", fontWeight:"bold", textDecoration: "none", fontStyle:"italic", marginTop:"10px",}}
            to="/adminLogin"
          >
            Admin 
          </Link>
          </form>
        </div>
      </nav>

      <div style={{ borderBottom: "1px solid #333" }}></div>
      <div
        className={showModal > 0 ? `backDrop` : null}
        onClick={() => setShowModal(0)}
      ></div>

      {show}
    </div>
  );
}

export default Nav;
