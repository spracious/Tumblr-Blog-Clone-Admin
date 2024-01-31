import React from "react";
import logo from "../../images/Screenshot (88).png";
import man from "../../images/recomended.jpg";
import { Link , useNavigate} from "react-router-dom";

function AdminNav() {

  const navigate = useNavigate();

  const LogOut = () => {
    fetch("http://localhost:4001/api/logOut", {
      method: "POST",
      credentials:'include',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {navigate("/adminLogin");
          
        } else {
          navigate("/Welcome");
        }
      }).catch(err => {
        console.error(err);
      })
  };

  return (
    <div>
      <div className="side-menu">
        <hr />
        <Link to="/Homepage">
              <div style={{marginBottom:"10px"}} class="navbar-brand "><img width={75} src={logo} alt="" /></div>
            </Link>
        

        <div className="admin-profile-img">
          <img src={man} alt="" />
          <hr />
          <h2>
            <a style={{color:"rgb(111, 182, 244)", fontStyle:"italic", fontSize:"25px"}} href="#">ADMIN</a>
          </h2>
          <i
            style={{
              color: "white",
              // fontWeight: "bolder",
              fontSize: "larger",
            }}
          >
            Active
          </i>
        </div>

        <div className="admin-side-links">
          <Link to="/admin">
            {" "}
            <button  className="ad-btn">DASH-BOARD</button>
          </Link>

          <Link to="/adminUsers">
            <button  className="ad-btn">USERS</button>
          </Link>

          <Link to="/adminNewUser">
            <button className="ad-btn">NEW USER</button>
          </Link>

          
          <Link to="/adminPosts">
            <button  className="ad-btn">POSTS</button>
          </Link>

          <Link to="/adminNewPost">
            <button  className="ad-btn">NEW POST</button>
          </Link>

          
          <Link to="/adminComments">
            <button  className="ad-btn">COMMENTS</button>
          </Link>

          {/* <Link to="/adminNewComment">
            <button  className="ad-btn">NEW COMMENT</button>
          </Link> */}

          
          <Link to="/adminLikes">
            <button  className="ad-btn">LIKES</button>
          </Link>

          {/* <Link to="adminNewLike">
            <button  className="ad-btn">NEW LIKE</button>
          </Link> */}

          <Link to="/">
            <button className="ad-log" onClick={LogOut}>EXIT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
