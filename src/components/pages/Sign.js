import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Tumblr logo.jpg";
import gif from "../images/gif.webm";
import "../../App.css";

function Sign() {
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

    fetch("http://localhost:4001/api/create-user", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Welcome to Tumblr Blog" + getFullName);
        console.log(data);
          navigate("/Sign");
      })
      .catch((err) => {
        alert("User Creation Unsuccessfully");
      });

    setShowModal(0);
    setGetFullName("");
    setGetPhone("");
    setGetEmail("");
    setGetUserName("");
    setGetPassword("");
    setGetConfirmPassword("");
  };

  function submitUserName() {
    let data = {
      userName: getUserName,
      password: getPassword,
    };

    // console.log(data)

    fetch("http://localhost:4001/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.status);
        if (data.status === 200) {
          navigate("/Homepage");
          console.log('user found')
          // getProfile();
        } else {
          navigate("/");
          console.log("User Not Found")
          // alert("User Not Found");
        }
      });
     
  }

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
              {/* <input
                className=""
                type="password"
                placeholder="  Confirm password"
                value={getConfirmPassword}
                onChange={(e) => setGetConfirmPassword(e.target.value)}
              />{" "}
              <br /> */}
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
                className=""
                type="text"
                placeholder=" Enter Full Name"
                value={getFullName}
                onChange={(e) => setGetFullName(e.target.value)}
              />{" "}
              <br />
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
    <div className="signPage">
      <nav class="navbar">
        <div class="container-fluid">
          <a></a>
          <Link to="/">
            <div style={{ marginBottom: "30px" }} class="navbar-brand ms-5">
              <img width={50} src={logo} alt="" />
            </div>
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
          </form>
        </div>
      </nav>

      <div className="signForm">
        <div>
          <h1>Welcome home.</h1>
          <h3>
            First things first, lets see if your UserName <br /> handle is
            registered.
          </h3>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <input
                style={{
                  height: "50px",
                  borderRadius: "3px",
                  color: "grey",
                  marginBottom: "10px",
                }}
                type="text"
                placeholder=" Enter UserName"
                value={getUserName}
                onChange={(e) => setGetUserName(e.target.value)}
              />{" "}
            </div>

            <div class="input-group-prepend">
              <input
                style={{ height: "50px", borderRadius: "3px", color: "grey" }}
                type="password"
                placeholder=" Enter Password"
                value={getPassword}
                onChange={(e) => setGetPassword(e.target.value)}
              />{" "}
            </div>
          </div>
          <button type="submit" class="check" onClick={submitUserName}>
            Check
          </button>{" "}
          <br />
          <small>
            Twitter® is a registered trademark of Twitter, Inc.
            Automattic/Tumblr <br /> declares no affiliation, sponsorship, nor
            any partnerships with any registered <br /> trademarks unless
            otherwise stated.
          </small>
        </div>
      </div>

      <div
        className={showModal > 0 ? `backDrop` : null}
        onClick={() => setShowModal(0)}
      ></div>

      {show}
    </div>
  );
}

export default Sign;
