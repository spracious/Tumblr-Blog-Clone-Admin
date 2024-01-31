import React, { useCallback, useEffect, useState } from "react";
import LikeButton from "../LikeButton";
import repost from "../images/repeat.svg";
import rec from "../images/recomended.jpg";
import fwd from "../images/reply.svg";
import cht from "../images/chater.png";

const PostCard = ({
  index,
  posts,
  getCommentsHandler,
  showCommentHandler,
  profile,
}) => {
  // creating likes
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const [likeUpdate, setLikeUpdate] = useState(false);
  const [allLikes, setAllLikes] = useState([]);
  const [data, setData] = React.useState([]);

  // console.log(profile)

  const likeHandleSubmit = (post) => {
    const likeInput = {
      like: true,
    };

    fetch(`http://localhost:4001/api/post/${post._id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(likeInput),
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setLikeUpdate(prevState => !prevState);
        if (data.message === "Deleted") {
          alert("Post unLiked");
        } else {
          alert("Post liked");
        }
        // console.log(data.data);
      });
  };

  const getLikes = useCallback(
    (posts) => {
      fetch(`http://localhost:4001/api/post/${posts._id}/getlikes`)
        .then((resp) => resp.json())
        .then((data) => {
          //   console.log(data.data);
          setCount(data.data.length);
          setAllLikes(data.data);
        });
    },
    [posts]
  );
//   console.log(profile)
  let userLiked;
  const checkLike = (likes)=>{
        userLiked = likes.filter((like) => like.user_id === profile._id);
        if (userLiked.length >= 1) {
            console.log('userLiked')
            setLike(true)
        }

  }

useEffect(() => {
  getLikes(posts);
  checkLike(allLikes);
}, [likeUpdate]);


  return (
    <div className="section2" key={`${posts.user_id} + ${index}`}>
      <div className="section2-A">
        <img src={rec} alt="" />
      </div>

      <div style={{ marginRight: "80px" }} className="todayH">
        <div className="todayL">
          <p className="follow">
            {posts.category}
            <a
              style={{
                backgroundColor: "aliceblue",
                textDecoration: "none",
                color: "rgb(0, 184, 255)",
                marginLeft: "120px",
              }}
              href=""
            >
              Follow
            </a>
            <p style={{ marginLeft: "120px" }}>{posts.title}</p>
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
        <div className="repost">
          <div>
            <button
              className="followBtn"
              onClick={() => getCommentsHandler(posts)}
            >
              {
                posts._id.length
              }{" "}
              notes
            </button>
          </div>
          <div className="follower">
            <img src={fwd} alt="" />
            <div
              style={{ marginTop: "10px" }}
              onClick={() => showCommentHandler(posts)}
            >
              <img width={20} src={cht} alt="" />
            </div>
            <img src={repost} alt="" />

            <div>
              {/* <input type="text" /> */}
              <LikeButton
                className=""
                onClick={() => likeHandleSubmit(posts)}
                count={count}
                profile={profile}
                like={like}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
