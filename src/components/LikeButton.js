import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function LikeButton({ postId, onClick, count, profile, like }) {
  const [liked, setLiked] = useState(() => {
  
    const storedLikedState = localStorage.getItem(`liked_${postId}`);
    return storedLikedState ? JSON.parse(storedLikedState) : false;
  });

  const handleLikes = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(`liked_${postId}`, JSON.stringify(newLiked));
  };

  useEffect(() => {
  }, [liked]);

  return (
    <>
      <div className="">
        <div onClick={onClick}>
          <div style={{ marginTop: "7px" }}>
            <div>
              {count ? (
                <div style={{ display: "flex" }}>
                  <AiFillHeart
                    size={30}
                    onClick={handleLikes}
                    style={{
                      color: liked ? "#F00" : "#ccc",
                      cursor: "pointer"
                    }}
                  />
                  <h4 style={{ marginTop: "7px" }}>{count}</h4>
                </div>
              ) : (
                <AiOutlineHeart
                  size={30}
                  onClick={handleLikes}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LikeButton;


