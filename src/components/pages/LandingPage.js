import LandingNav from "../LandingNav";
import pry from "../images/pyramid_closed_64.png";
import june from "../images/june.gif";
// import repost from "../images/repeat.svg";
// import rec from "../images/recomended.jpg";
// import hi from "../images/hi.jpg";
// import fwd from "../images/reply.svg";
import tcnT from "../images/big 3rd.png";
// import LikeButton from "../LikeButton";
import texting from "../images/text.png";
import cam from "../images/camera.jpg";
import quote from "../images/quotes.jpg";
import lnk from "../images/links.jpg";
import elo from "../images/hi logo.jpg";
import aud from "../images/audio.png";
import vid from "../images/video.jpg";
import set from "../images/gear.svg";
import gif from "../images/yelGif.webp";
import lnks from "../images/lnks.png";
import list from "../images/list.svg";
import sld from "../images/sliders2.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext, useCallback } from "react";
import { DataContext } from "../context/DataContext";
import PostCard from "./PostCard";

function LandingPage() {
  const [data, setData] = React.useState([]);
  const [comment, setComment] = useState([]);
  const [post, setPost] = React.useState([]);

  // fetching user
  const { profile, setProfile } = useContext(DataContext);
  useEffect(() => {
    fetch("http://localhost:4001/api/profile", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        // console.log(data);
      });
  }, []);

  // post fetch from context
  const fetchPosts = async () => {
    const resp = await fetch(`http://localhost:4001/api/posts`);
    const data = await resp.json();
    setData(data.data);
    // console.log(data);
  };

  useEffect(() => {
    if (post) {
    }
    fetchPosts();
  }, []);

  // profile fetch from context
  useEffect(() => {
    fetch("http://localhost:4001/api/profile", {
      credentials: "include",
    }); console.log(profile)
  }, []);


  // modals
  const [showPost, setShowPost] = useState(false);

  const [showComment, setShowComment] = useState(false);

  const [showAllComment, setShowAllCommentModal] = useState(false);

  const [getPostId, setGetPostId] = useState(null);

  const showPostHandler = () => {
    setShowPost(true);
  };

  const closePostHandler = () => {
    setShowPost(false);
  };

  const closeCommentHandler = () => {
    setShowComment(false);
  };

  const showCommentHandler = (post) => {
    setGetPostId(post._id);
    setShowComment(true);
  };

  // creating post
  const [posting, setPosting] = useState({
 
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
  let formData = new FormData();

  formData.append("category", category);
  formData.append("title", title);
  formData.append("text", text);
  formData.append("hashtag", hashtag);
  formData.append("image", file);

  const handleSubmit = (e) => {
    const fullName = profile.fullName;

    e.preventDefault();
    fetch("http://localhost:4001/api/create-post", {
      method: "POST",
      enctype: "multipart/form-data",
      body: formData,
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Post Created");
        console.log(data);
        console.log(profile);
        console.log(fullName);
      });
  };
  // end of post creation


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

  const [commData, setCommData] = useState([]);

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

  // End of Comment Creation

  // console.log(post._id)

 //Fetch Comment 
  React.useEffect(() => {
    fetch("http://localhost:4001/api/comments")
      .then((res) => res.json())
      .then((data) => setComment(data.data));
  }, []);

  // post modal
  const postModal = (
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
            <h4>
              <input
                style={{
                  border: "none",
                  backgroundColor: "#f5f5f5",
                  color: "grey",
                }}
                type="text"
                placeholder="Category"
                name="category"
                onChange={handleInput}
              />
            </h4>
            <img src={set} alt="" />
          </div>

          <h1 style={{ display: "flex", margin: "15px", color: "grey" }}>
            <input
              style={{
                border: "none",
                backgroundColor: "#f5f5f5",
                color: "grey",
              }}
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleInput}
            />
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
              name="text"
              onChange={handleInput}
            />

            <div>
              <p className="followP">
                <input
                  style={{
                    border: "none",
                    backgroundColor: "#f5f5f5",
                    color: "grey",
                    width: "10%",
                    marginRight: "20px",
                  }}
                  placeholder="Image"
                  type="file"
                  name="image"
                  onChange={handleInput}
                />
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
            <input
              style={{
                border: "none",
                backgroundColor: "rgb(220, 217, 217)",
                color: "grey",
              }}
              type="text"
              placeholder="Hashtags"
              name="hashtag"
              onChange={handleInput}
            />
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

            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                width: "150px",
                height: "40px",
                borderRadius: "20px",
                textAlign: "center",
                backgroundColor: "rgb(220, 217, 217)",
                border: "none",
              }}
            >
              {" "}
              Post now!
            </button>
          </div>
        </div>
      </div>
    </>
  );

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
    <div style={{ backgroundColor: "rgb(0, 25, 53)", height: "1000vh" }}>
      <LandingNav />
      <div className="home">
        <div class="container d-flex justify-content-center">
          <div class="row">
            <div class="col">
              <div className="cards">
                <div className="section2">
                  <div className="section2-A">
                    <img src={pry} alt="" />
                  </div>

                  <div style={{ marginRight: "80px" }} className="top">
                    <div className="follow-i">
                      <Link onClick={showPostHandler}>
                        <img
                          width={50}
                          style={{ height: "30px", textDecoration: "none" }}
                          src={texting}
                          alt=""
                        />
                        <p>Text</p>
                      </Link>
                      <Link>
                        <img
                          width={50}
                          style={{ height: "30px" }}
                          src={cam}
                          alt=""
                        />
                        <p>Photos</p>
                      </Link>
                      <Link>
                        <img
                          width={50}
                          style={{ height: "30px" }}
                          src={quote}
                          alt=""
                        />
                        <p>Qoutes</p>
                      </Link>
                      <Link>
                        <img
                          width={50}
                          style={{ height: "30px" }}
                          src={lnk}
                          alt=""
                        />
                        <p>Link</p>
                      </Link>
                      <Link>
                        <img
                          width={50}
                          style={{ height: "30px" }}
                          src={elo}
                          alt=""
                        />
                        <p>Chat</p>
                      </Link>
                      <Link>
                        <img
                          width={50}
                          style={{ height: "30px" }}
                          src={aud}
                          alt=""
                        />
                        <p>Audio</p>
                      </Link>
                      <Link>
                        <img
                          width={50}
                          style={{ height: "30px" }}
                          src={vid}
                          alt=""
                        />
                        <p>Video</p>
                      </Link>
                    </div>
                  </div>
                </div>

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

                <div className="section2">
                  <div className="todayL">
                    <img src={june} alt="" />
                  </div>
                </div>

                {data.length < 1
                  ? []
                  : data.map((posts, index) => {
                    
                    return(
                      
                      <PostCard key={index} posts={posts} getCommentsHandler={getCommentsHandler} showCommentHandler={showCommentHandler} profile={profile}/>
                    )
                  })}
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

      {showPost && postModal}
      {showComment && commentModal}
      {showAllComment && allCommentModal}
    </div>
  );
}

export default LandingPage;



