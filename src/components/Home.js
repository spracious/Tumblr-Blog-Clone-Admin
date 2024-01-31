import React from "react";
import Nav from "./Nav";
import micro from "./images/microsoft.svg";
import app from "./images/border-width.svg";
import repost from "./images/repeat.svg";
import fwd from "./images/reply.svg";
import today from "./images/today.jpg";
import { Link } from "react-router-dom";
import one from "./images/img1.jpg";
import two from "./images/img2.jpg";
import three from "./images/img3.jpg";
import blue from "./images/blue.png";
import green from "./images/green.png";
import lemon from "./images/lemon.png";
import yellow from "./images/yelow.png";
import cht from "./images/chater.png";
import LikeButton from "./LikeButton";

function Home() {
  return (
    <div style={{ backgroundColor: "rgb(0, 25, 53)", height: "320vh" }}>
      <Nav />
      <div className="home">
        <div class="container d-flex justify-content-center">
          <div class="row">
            <div class="col">
              <div className="cards">
                <nav
                  style={{ borderBottom: "1px solid #333" }}
                  class="today-nav navbar navbar-expand-lg"
                >
                  <div class="container-fluid">
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{ color: "rgb(0, 184, 255)" }}
                    >
                      Today ⏰
                    </a>
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{ color: "aliceblue" }}
                    >
                      Trending 🚀
                    </a>
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{ color: "aliceblue" }}
                    >
                      Staff Picks 🌟
                    </a>

                    <div class="dropdown NavDropdown">
                      <a
                        style={{ color: "aliceblue", marginRight: "18px" }}
                        href="index.html"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        More{" "}
                      </a>
                      <ul class="dropdown-menu bg-white">
                        <li>
                          <a href="contactus.html#">Photos</a>
                        </li>
                        <li>
                          <a href="contactus.html#">Gifs</a>
                        </li>
                        <li>
                          <a href="contactus.html#">Quotes</a>
                        </li>
                        <li>
                          <a href="contactus.html#">Chats</a>
                        </li>
                        <li class="dropdown-header">Audio</li>
                        <li>
                          <a href="contactus.html#">Video</a>
                        </li>
                        <li>
                          <a href="contactus.html#">Ask</a>
                        </li>
                      </ul>
                    </div>
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{ color: "rgb(0, 184, 255)" }}
                    >
                      <img width={15} src={micro} alt="" />
                    </a>
                    <a
                      class="navbar-brand me-5"
                      href="#"
                      style={{ color: "rgb(0, 184, 255)" }}
                    >
                      <img width={15} src={app} alt="" />
                    </a>
                  </div>
                </nav>

                <div className="section2">
                  <div className="section2-A">
                    <img src={today} alt="" />
                  </div>

                  <Link className="section2-B">
                    <div className="section2-Bb">
                      <div className="todayL">
                        <p className="today">todayontumblr </p>
                        <p className="today">supermariomovie</p>
                        <img src={repost} alt="" />

                        <button className="todayA">
                          <p className="today">---</p>

                          <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Modal title
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">...</div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button type="button" class="btn btn-primary">
                                    Save changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>

                      <div className="follow">
                        <img
                          width={25}
                          style={{ borderRadius: "5px" }}
                          src={one}
                          alt=""
                        />
                        <p className="follow">
                          theredbros{" "}
                          <a
                            style={{
                              backgroundColor: "aliceblue",
                              textDecoration: "none",
                              color: "rgb(0, 184, 255)",
                              marginLeft: "10px",
                            }}
                            href=""
                          >
                            Follow
                          </a>
                        </p>
                      </div>
                      <img className="img1" src={one} alt="" />
                      <p style={{ marginTop: "50px" }} className="follow">
                        The silly ~ 💕💕💕
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="section2">
                  <div className="section2-A">
                    <img src={today} alt="" />
                  </div>

                  <Link className="section2-B">
                    <div className="section2-Bb">
                      <div className="todayL">
                        <p className="today">todayontumblr </p>
                        <p className="today">opt1gan</p>
                        <img src={repost} alt="" />

                        <div className="todayA">
                          <p className="today">---</p>
                        </div>
                      </div>
                      <hr
                        style={{
                          color: "rgb(255, 255, 255)",
                          marginTop: "10px",
                        }}
                      />

                      <div className="follow">
                        <img
                          width={25}
                          style={{ borderRadius: "5px" }}
                          src={two}
                          alt=""
                        />
                        <p className="follow">
                          opt1gan{" "}
                          <a
                            style={{
                              backgroundColor: "aliceblue",
                              textDecoration: "none",
                              color: "rgb(0, 184, 255)",
                              marginLeft: "10px",
                            }}
                            href=""
                          >
                            Follow
                          </a>
                        </p>
                      </div>
                      <img className="img1" src={two} alt="" />
                      <p className="follow">Smbp !!!</p>
                      <p className="follow">#today on tumblr</p>
                      <div className="repost">
                        <div className="follow">5,324 notes</div>

                        <div className="follower">
                          <img src={fwd} alt="" />
                          <img width={20} src={cht} alt="" />
                          <img src={repost} alt="" />

                          <LikeButton />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="section2">
                  <div className="section2-A">
                    <img src={today} alt="" />
                  </div>

                  <Link className="section2-B">
                    <div className="section2-Bb">
                      <div className="todayL">
                        <p className="today">todayontumblr </p>
                        <p className="today">supermariomovie</p>
                        <img src={repost} alt="" />

                        <div className="todayA">
                          <p className="today">---</p>
                        </div>
                      </div>
                      <hr
                        style={{
                          color: "rgb(255, 255, 255)",
                          marginTop: "10px",
                        }}
                      />

                      <div className="follow">
                        <img
                          width={25}
                          style={{ borderRadius: "5px" }}
                          src={three}
                          alt=""
                        />
                        <p className="follow">
                          everydaylouie
                          <img
                            width={13}
                            style={{ height: "16px" }}
                            src={blue}
                            alt=""
                          />
                          <img
                            width={13}
                            style={{ height: "16px" }}
                            src={green}
                            alt=""
                          />
                          <img
                            width={13}
                            style={{ height: "16px" }}
                            src={lemon}
                            alt=""
                          />
                          <img
                            width={13}
                            style={{ height: "16px" }}
                            src={yellow}
                            alt=""
                          />
                          <a
                            style={{
                              backgroundColor: "aliceblue",
                              textDecoration: "none",
                              color: "rgb(0, 184, 255)",
                              marginLeft: "10px",
                            }}
                            href=""
                          >
                            Follow
                          </a>
                        </p>
                      </div>
                      <img className="img1" src={three} alt="" />
                      <p className="follow">#marios</p>
                      <p className="follow">#today on tumblr</p>
                      <div className="repost">
                        <div className="follow">324 notes</div>

                        <div className="follower">
                          <img src={fwd} alt="" />
                          <img width={20} src={cht} alt="" />
                          <img src={repost} alt="" />

                          <LikeButton />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col">
              <div className="vertical"></div>
            </div>

            <div class="col">
              <div className="trending">
                <div className="section1-A">
                  <div className="section1-Aa">
                    <div className="blog">
                      <h4 className="blog">Trending Blogs</h4>
                      <hr />
                      <div className="list">
                        <img width={25} src={today} alt="" />
                        <div>
                          <h5 className="list">Kiruaolarts </h5>
                          <p
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                            className="list"
                          >
                            kiruaolarts{" "}
                          </p>
                        </div>
                        <h5
                          style={{
                            color: "rgb(0, 184, 255)",
                            marginLeft: "10px",
                            backgroundColor: "rgb(9, 41, 78)",
                            padding: "15px",
                          }}
                        >
                          Follow
                        </h5>
                        <p className="list">x</p>
                      </div>

                      <div className="list">
                        <img width={25} src={today} alt="" />
                        <div>
                          <h5 className="list">Kiruaolarts </h5>
                          <p
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                            className="list"
                          >
                            kiruaolarts{" "}
                          </p>
                        </div>
                        <h5
                          style={{
                            color: "rgb(0, 184, 255)",
                            marginLeft: "10px",
                            backgroundColor: "rgb(9, 41, 78)",
                            padding: "15px",
                          }}
                        >
                          Follow
                        </h5>
                        <p className="list">x</p>
                      </div>

                      <div className="list">
                        <img width={25} src={today} alt="" />
                        <div>
                          <h5 className="list">Kiruaolarts </h5>
                          <p
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                            className="list"
                          >
                            kiruaolarts{" "}
                          </p>
                        </div>
                        <h5
                          style={{
                            color: "rgb(0, 184, 255)",
                            marginLeft: "10px",
                            backgroundColor: "rgb(9, 41, 78)",
                            padding: "15px",
                          }}
                        >
                          Follow
                        </h5>
                        <p className="list">x</p>
                      </div>

                      <div className="list">
                        <img width={25} src={today} alt="" />
                        <div>
                          <h5 className="list">Kiruaolarts </h5>
                          <p
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                            className="list"
                          >
                            kiruaolarts{" "}
                          </p>
                        </div>
                        <h5
                          style={{
                            color: "rgb(0, 184, 255)",
                            marginLeft: "10px",
                            backgroundColor: "rgb(9, 41, 78)",
                            padding: "15px",
                          }}
                        >
                          Follow
                        </h5>
                        <p className="list">x</p>
                      </div>
                      <hr style={{ marginTop: "10px" }} />
                      <h5
                        style={{
                          textAlign: "center",
                          backgroundColor: "rgb(9, 41, 78)",
                          marginTop: "20px",
                          fontSize: "15px",
                          height: "40px",
                          color: "rgb(0, 184, 255)",
                        }}
                      >
                        Show more blogs
                      </h5>
                    </div>
                  </div>

                  <div className="palette">🎨 Change palette</div>

                  <div
                    style={{
                      color: "aliceblue",
                      marginTop: "15px",
                      marginBottom: "10px",
                      fontSize: "18px",
                      borderBottom: "1px solid #333",
                    }}
                  >
                    Sponsored
                  </div>

                  <div
                    style={{
                      color: "aliceblue",
                      marginTop: "7px",
                      fontSize: "14px",
                    }}
                  >
                    Wanna go ad-free?
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
    </div>
  );
}

export default Home;
