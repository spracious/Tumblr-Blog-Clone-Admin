import React, { useEffect, useState } from "react";
import cht from "../images/chater.png";
import fwd from "../images/reply.svg";
import repost from "../images/repeat.svg";
import rec from "../images/recomended.jpg";
import tcnT from "../images/big 3rd.png";
import LikeButton from "../../components/LikeButton";
import LandingNav from '../LandingNav'

function Post() {
  const [data, setData] = React.useState([]);
  const [post, setPost] = React.useState([]);
  const [edit, setEdit] = useState({});
  const [modal, setModal] = useState(false);
  // const [id, setId] = useState(null);
  const [updated, setUpdated] = useState(false);

  const fetchPosts = async () => {
    const resp = await fetch(`http://localhost:4001/api/post`);
    const data = await resp.json();
    setData(data.userProfile._id);
  };

  useEffect(() => {
    if (post) {
    }
    fetchPosts();
    // getUsers();
  }, []);

 
  return (
    <div style={{ backgroundColor: "rgb(0, 25, 53)", height:"10000vh" }}>
        <LandingNav/>
 <div className="home">
        <div class="container d-flex justify-content-center">
         
            <div className="row">

             <div className="col">
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

             {data.map((posts) => (
                <div className="cards" key={posts.user_id}>
                  <div className="section2">
                    <div className="section2-A">
                      <img src={rec} alt="" />
                    </div>

                    <div style={{ marginRight: "80px", }} className="todayH">
                      <div className="todayL">
                        <p className="follow">
                          {posts.title}
                          <a
                            style={{
                              backgroundColor: "aliceblue",
                              textDecoration: "none",
                              color: "rgb(0, 184, 255)",
                              marginLeft: "20px",
                            }}
                            href=""
                          >
                            Follow
                          </a>
                          <p style={{ marginLeft: "20px" }}>
                            User ID: {posts.user_id}
                          </p>
                        </p>
                      </div>

                      <div className="followH">
                        <p style={{ fontSize: "17px" }}>{posts.text}</p>
                      </div>

                      <img
                        className="img1"
                        src={`http://localhost:4001/uploads/${posts.image}`}
                        alt=""
                      />
                      <p className="follow">{posts.category}</p>
                      <p className="follow">{posts.hashtag}</p>
                      <p className="follow">{posts.hashtag}</p>
                      <div className="repost">
                        <button className="followBtn">940 notes</button>

                        <div className="follower">
                          <img src={fwd} alt="" />
                          <img width={20} src={cht} alt="" />
                          <img src={repost} alt="" />

                          <LikeButton />
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              ))}
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

      {/* {showPost && postModal} */}
    </div>
  )
}

export default Post