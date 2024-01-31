import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from '../context/DataContext';
import LandingNav from '../LandingNav';
import LikeButton from "../LikeButton";
import pry from "../images/pyramid_closed_64.png";
import june from "../images/june.gif";
import repost from "../images/repeat.svg";
import rec from "../images/recomended.jpg";
import hi from "../images/hi.jpg";
import fwd from "../images/reply.svg";
import tcnT from "../images/big 3rd.png";
import cht from "../images/chater.png";
import PostCard from "./PostCard";

function UserPost() {
    const [data, setData] = React.useState([]);
    const [posting, setPosting]  = React.useState([]);
  const [post, setPost] = React.useState([]);
  const [getPostId, setGetPostId] = useState(null);

//     // fetching user
  const { profile, setProfile} = useContext(DataContext);

  const { userProfile, setUserProfile} = useContext(DataContext);

  const getUsers = () => {
    fetch("http://localhost:4001/api/users",{
      credentials:"include",
    }).then((res) => {
      res.json().then((userProfile)=>{
        setUserProfile(userProfile);
      });
    });
  };

  
// post fetch from context
React.useEffect(() => {
    fetch("http://localhost:4001/api/posts")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const id = profile._id;
  console.log(id)

  // creating comment
  const [commenting, setCommenting] = useState({
    comment: "",
  });

  const commentInput = (e) => {
    let comment = e.target.name;
    let value = e.target.value;
    setCommenting({ ...commenting, [comment]: value });
  };

  const commentHandleSubmit = () => {
    console.log(getPostId);
    const commentInput = {
      comment: commenting.comment,
      post_id: getPostId,
    };

    fetch("http://localhost:4001/api/create-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentInput),
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Comment Posted");
        console.log(data);
      });
  };

  const closeCommentHandler = () => {
    setShowComment(false);
  };

  const showCommentHandler = (post) => {
    setGetPostId(post._id);
    setShowComment(true);
  };

  const [showComment, setShowComment] = useState(false);


  // End of Comment Creation

     // comment modal
     const commentModal = (
      <>
        <div className="postDrop">
          <div className="postForm">
            <div
              style={{
                paddingLeft: "20px",
                fontSize: "25px",
                backgroundColor: "#f1f1f1f1",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>Comment</h4>
              <h4
                style={{ width: "30px", height: "40px", cursor: "pointer" }}
                onClick={closeCommentHandler}
              >
                X
              </h4>
            </div>
  
            <input
              style={{
                border: "none",
                backgroundColor: "#f5f5f5",
                color: "grey",
                margin: "105px",
              }}
              type="text"
              placeholder="Write Comment......"
              name="comment"
              onChange={commentInput}
            />
  
            <div style={{ borderBottom: "1px solid #333" }}></div>
  
            <div className="commentBt">
              <button
                type="submit"
                onClick={commentHandleSubmit}
                style={{
                  width: "70px",
                  height: "25px",
                  borderRadius: "20px",
                  textAlign: "center",
                  backgroundColor: "rgb(220, 217, 217)",
                  border: "none",
                }}
              >
                {" "}
                Send
              </button>
            </div>
          </div>
        </div>
      </>
    );

      const [commData, setCommData] = useState([]);

      const [showAllComment, setShowAllCommentModal] = useState(false);

      const getCommentsHandler = (post) => {
        fetch(`http://localhost:4001/api/comment/${post._id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setCommData(data.data)
            console.log(data.data);
          });
    
        setShowAllCommentModal(true);
      };
    
      const closeGetCommentHandler = () => {
        setShowAllCommentModal(false);
      };

       //view all comments modal
  const allCommentModal = (
    <>
      <div>
        <div className="postForm">
          <div
            style={{
              paddingLeft: "20px",
              fontSize: "25px",
              backgroundColor: "#f1f1f1f1",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{color:"navy"}}>Comments</h4>
            <h4
              style={{ width: "30px", height: "20px", cursor: "pointer", color:"red" }}
              onClick={closeGetCommentHandler}
            >
              X
            </h4>
          </div>
          <div style={{ borderBottom: "1px solid #333" }}></div>


          {commData.length < 1 ? (
            <p style={{ fontSize: "16px", marginLeft:"20px", marginTop:"10px", fontWeight: "bold", color: "blue" }}>
              No comment yet!!! Be the first to comment...........</p>
          ) : (           
             <div className="">
              {commData.map((comments) => (
                  <div className="">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "5px",
                          marginTop:"5px",
                          padding:"5px"
                        }}
                      >
                        {/* <p style={{padding:"5px", color:"brown",}}>User Id: {comments.user_id}</p> */}
                        <p style={{color:"purple",}}> Post Id: {comments.post_id}</p>
                      </div>
                      <p style={{padding:"5px", textAlign:"center", color:"blue", fontSize:"15px"}}> {comments.comment}</p>

                      <div style={{ borderBottom: "1px solid #ccc" }}></div>
                  
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );


  return (
    <div style={{ backgroundColor: "rgb(0, 25, 53)", height:"10000vh" }}>
      <LandingNav />
      <div className="home">
        <div class="container d-flex justify-content-center">
          <div class="row">
            
            <div class="col">       
              <div className="cards">
                <nav
                  style={{ borderBottom: "1px solid #333", width: "90%" }}
                  class="today-nav navbar navbar-expand-lg"
                >
                  <div class="container-fluid">
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{ color: "rgb(0, 184, 255)" }}
                    >
                      Following
                    </a>
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{ color: "aliceblue" }}
                    >
                      For you
                    </a>
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{ color: "aliceblue" }}
                    >
                      Your tags
                    </a>
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{ color: "aliceblue" }}
                    >
                      Manage....
                    </a>
                  </div>
                </nav>

                {data.filter((result) => result.user_id === id).map((posts, index) => (
                      
                    <PostCard key={index} posts={posts} getCommentsHandler={getCommentsHandler} showCommentHandler={showCommentHandler} profile={profile}/>
                  
                        ))}
              </div>
            </div>

            <div class="col">
              <div className="check-out">
                <div className="section1-A">
                  <div className="check">
                    <div className="blogl">
                      <h3 className="blogl">Check out these blogs</h3>
                      <hr />
                      <div className="listC">
                        <img width={25} src={tcnT} alt="" />
                        <div>
                          <h4 className="listC">infected </h4>
                          <h5
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                            className="list-c"
                          >
                            infected{" "}
                          </h5>
                        </div>
                        <h5
                          style={{
                            color: "rgb(0, 184, 255)",
                            marginLeft: "150px",
                            padding: "15px",
                          }}
                        >
                          Follow
                        </h5>
                        <p className="listC">x</p>
                      </div>

                      <div className="listC">
                        <img width={25} src={tcnT} alt="" />
                        <div>
                          <h4 className="listC">infected </h4>
                          <h5
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                            className="list-c"
                          >
                            infected{" "}
                          </h5>
                        </div>
                        <h5
                          style={{
                            color: "rgb(0, 184, 255)",
                            marginLeft: "150px",
                            padding: "15px",
                          }}
                        >
                          Follow
                        </h5>
                        <p className="listC">x</p>
                      </div>

                      <div className="listC">
                        <img width={25} src={tcnT} alt="" />
                        <div>
                          <h4 className="listC">infected </h4>
                          <h5
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                            className="list-c"
                          >
                            infected{" "}
                          </h5>
                        </div>
                        <h5
                          style={{
                            color: "rgb(0, 184, 255)",
                            marginLeft: "150px",
                            padding: "15px",
                          }}
                        >
                          Follow
                        </h5>
                        <p className="listC">x</p>
                      </div>

                      <div className="listC">
                        <img width={25} src={tcnT} alt="" />
                        <div>
                          <h4 className="listC">infected </h4>
                          <h5
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                            className="list-c"
                          >
                            infected{" "}
                          </h5>
                        </div>
                        <h5
                          style={{
                            color: "rgb(0, 184, 255)",
                            marginLeft: "150px",
                            padding: "15px",
                          }}
                        >
                          Follow
                        </h5>
                        <p className="listC">x</p>
                      </div>

                      <h4
                        style={{
                          marginTop: "20px",
                          fontSize: "15px",
                          height: "40px",
                          color: "rgb(0, 184, 255)",
                        }}
                      >
                        Explore all of Tumblr
                      </h4>

                      <h3 style={{ marginTop: "20px", height: "40px" }}>
                        Radar
                      </h3>

                      <hr style={{ marginTop: "10px" }} />

                      <h3 style={{ marginTop: "20px", height: "40px" }}>
                        Sponsored
                      </h3>

                      <hr style={{ marginTop: "10px" }} />

                      <div
                        style={{
                          color: "aliceblue",
                          marginTop: "7px",
                          fontSize: "14px",
                        }}
                      >
                        Wanna go ad-free?
                      </div>
                    </div>
                  </div>

                  <footer className="footer">
                    <p>About</p>
                    <p>App</p>
                    <p>Legal</p>
                    <p>Privacy</p>
                  </footer>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {showComment && commentModal}
      {showAllComment && allCommentModal}
    </div>
  )
}

export default UserPost