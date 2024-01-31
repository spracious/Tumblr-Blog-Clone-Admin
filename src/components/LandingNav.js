import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import search from "./images/search.svg";
import logo from "./images/Screenshot (88).png";
import home from "./images/house-door-fill.svg";
import mail from "./images/envelope-fill.svg";
import msg from "./images/chat-quote-fill.svg";
import lit from "./images/lightning-charge-fill.svg";
import pson from "./images/person-fill.svg";
import pen from "./images/pencil-fill.svg";
import aud from "./images/audio.png";
import vid from "./images/video.jpg";
import set from "./images/gear.svg";
import phto from "./images/image.webp";
import gif from "./images/yelGif.webp";
import lnks from "./images/lnks.png";
import list from "./images/list.svg";
import sld from "./images/sliders2.svg";
import { DataContext } from "../components/context/DataContext";
import React, { useEffect, useState, useParams, useContext } from "react";

function LandingNav() {
  // post modal
  const navigate = useNavigate();
  const [showPost, setShowPost] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const {userProfile, setUserProfile} = useContext(DataContext);
 
// console.log(userProfile)

  const getUsers = () => {
    fetch(`http://localhost:4001/api/users`)
      .then((resp) => resp.json())
      .then((data) => {
        setUserProfile(data.data);
        // setPostings(data);
      });
  };

  useEffect(() => {
    getUsers();
    // getPostings();
  }, []);

  const { profile, setProfile} = useContext(DataContext);
  useEffect(() =>{
    fetch('http://localhost:4001/api/profile', {
      credentials: 'include'
    }).then(res => res.json())
    .then(data => {setProfile(data)
      console.log(data)
    })
    
  }, [])
  


  function getPost() {

    let userName = userProfile;

     fetch("http://localhost:4001/api/post/"+userName,{
      credentials: 'include'
     })
    .then((resp) => resp.json())
    .then((data)=>{
  
      console.log(data)
    }) .catch(error => {
      console.error(error);
      alert('Failed to retrieve post.');
    });
  
  }


  const LogOut = () => {
    fetch("http://localhost:4001/api/logOut", {
      method: "POST",
      credentials:'include',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {navigate("/Homepage");
          
        } else {
          navigate("/Sign");
        }
      }).catch(err => {
        console.error(err);
      })
  };

  // Handlers
  const showPostHandler = () => {
    setShowPost(true);
  };

  const closePostHandler = () => {
    setShowPost(false);
  };


  const showProfileHandler = () => {
    setShowProfile(true);
  };

  const closeProfileHandler = () => {
    setShowProfile(false);
  };


// creating post
const [posting, setPosting] = useState({
  // user_id: {userProfile},
  category: "",
  title: "",
  text: "",
  hashtag: "",
});

  const [files, setFiles] = useState({
    image: "",
  });

  const handleInput = (e) => {
    let category = e.target.name;
    let value = e.target.value;
    if (category === "image") {
      let file = e.target.files[0];
      setFiles({ image: file });
    }
    setPosting({ ...posting, [category]: value });
  };

   let file = files.image;
   let category = posting.category;
   let title = posting.title;
   let text = posting.text;
   let hashtag = posting.hashtag;
  //  let user = posting.user
   let formData = new FormData();

   formData.append("category", category);
   formData.append("title", title);
   formData.append("text", text);
   formData.append("hashtag", hashtag);
   formData.append("image", file);
  //  formData.append("user", user);


   const handleSubmit = (e) => {

    const fullName = profile.fullName;
   
    e.preventDefault();
    fetch("http://localhost:4001/api/create-post", {
      method: "POST",
      enctype: "multipart/form-data",
      body: formData,
      credentials:'include',
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Post Created");
        console.log(data);
        console.log(profile)
        console.log(fullName)
      });
  };
  // end of post creation

// post modal
const postModal = (
  <>
    <div className="postDrop">
    
      <div className="postForm" >
        <div
          style={{
            paddingLeft: "20px",
            fontSize: "25px",
            backgroundColor: "#f1f1f1f1",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>
          <input style={{
              border: "none",
              backgroundColor: "#f5f5f5",
              color: "grey",
            }} type="text" placeholder="Category"   name="category" onChange={handleInput}/>
          </h4>
          <img src={set} alt="" />
        </div>
  
        <h1 style={{ display: "flex", margin: "15px", color: "grey" }}>
          <input style={{
              border: "none",
              backgroundColor: "#f5f5f5",
              color: "grey",
            }} type="text" placeholder="Title"   name="title" onChange={handleInput}/>
        </h1>
  
        <div className="textarea">
          <textarea
            style={{
              border: "none",
              backgroundColor: "#f5f5f5",
              color: "grey",
            }}
            id=""
            cols="30"
            rows="10"
            placeholder="Go ahead, put anything."
            name="text" onChange={handleInput}
          /> 
  
          <div>
            <p className="followP">
              <input 
              style={{
                border: "none",
                backgroundColor: "#f5f5f5",
                color: "grey", width:"10%", marginRight:"20px"
              }}
              placeholder="Image"
              type="file" name="image" onChange={handleInput} />
              <img
                width={20}
                style={{ height: "30px", borderRadius: "100px" }}
                src={gif}
                alt=""
              />
              <img
                width={20}
                style={{ height: "30px", borderRadius: "100px" }}
                src={lnks}
                alt=""
              />
              <img
                width={20}
                style={{ height: "30px", borderRadius: "100px" }}
                src={aud}
                alt=""
              />
              <img
                width={30}
                style={{ height: "30px", borderRadius: "100px" }}
                src={vid}
                alt=""
              />
              <img
                width={20}
                style={{ height: "30px", borderRadius: "100px" }}
                src={list}
                alt=""
              />
              <img
                width={20}
                style={{ height: "30px", borderRadius: "100px" }}
                src={sld}
                alt=""
              />
            </p>
          </div>
        </div>
  
        <button className="postBtn">
        <input style={{
              border: "none",
              backgroundColor: "rgb(220, 217, 217)",
              color: "grey",
            }} type="text" placeholder="Hashtags"  name="hashtag" onChange={handleInput}/>
        </button>
  
        <div style={{ borderBottom: "1px solid #333" }}></div>
  
        <div className="postBt">
          <button
            style={{ width: "75px", height: "40px" }}
            onClick={closePostHandler}
          >
            Close
          </button>
  
          <select
            style={{
              width: "160px",
              height: "40px",
              borderRadius: "20px",
              textAlign: "center",
              marginLeft: "100px",
            }}
            name=""
            id=""
          >
            <option value="">For Everyone</option>
          </select>
  
          <button type="submit" onClick={handleSubmit} style={{
                width: "150px",
                height: "40px",
                borderRadius: "20px",
                textAlign: "center",
                backgroundColor: "rgb(220, 217, 217)",
                border: "none",
              }}> Post now! 
          </button>
        </div>
      </div>
  
    </div>
  </>
  
    );


  return (
    <div style={{ backgroundColor: "rgb(0, 25, 53)" }}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
         
          <Link to="/Homepage">
              <div style={{marginBottom:"30px"}} class="navbar-brand "><img width={45} src={logo} alt="" /></div>
            </Link>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <form class="d-flex" role="search">
              <input
                class="nav-input form-control me-2"
                type="search"
                placeholder="Search Tumblr"
                aria-label="Search"
              />
            </form>
          </div>

          <ul class="left-nav navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <img
                  style={{ backgroundColor: "white", width: "30px" }}
                  src={home}
                  alt=""
                />
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <img
                  style={{ backgroundColor: "white", width: "30px" }}
                  src={mail}
                  alt=""
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <img
                  style={{ backgroundColor: "white", width: "30px" }}
                  src={msg}
                  alt=""
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <img
                  style={{ backgroundColor: "white", width: "30px" }}
                  src={lit}
                  alt=""
                />
              </a>
            </li>

            <Navbar style={{height:"1vh", backgroundColor:"white",}}>
            <NavDropdown title={profile.userName} id="basic-nav-dropdown">
            
              <NavDropdown.Item href="/profileUpdate" >Create Profile</NavDropdown.Item>

               <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>

              <NavDropdown.Item href="/userPost">
                My Posts
              </NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={LogOut}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
    </Navbar>

            <li class="nav-item">
              <a
                onClick={showPostHandler}
                class="pen nav-link active"
                aria-current="page"
                href="#"
              >
                <img
                  style={{ backgroundColor: "rgb(0, 184, 255)", width: "30px" }}
                  src={pen}
                  alt=""
                />
              </a>
            </li>
              <li class="nav-item">
          
          {/* <Link
            class="nav-link"
            style={{ color: "rgb(0, 184, 255)", fontWeight:"bold", textDecoration: "none", fontStyle:"italic", marginTop:"10px",}}
            to="/adminLogin"
          >
            Admin 
          </Link> */}
        </li>
          </ul>
        </div>
      </nav>
      <div style={{ borderBottom: "1px solid #333" }}></div>
      {showPost && postModal}
      {/* {showProfile && profileModal} */}
    </div>
  );
}

export default LandingNav;
