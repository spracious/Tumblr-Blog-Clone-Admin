import React, {useState, useContext, useEffect} from "react"
import AdminNav from './subComponents/AdminNav';
import { DataContext } from "../../components/context/DataContext";

function AdminNewComment() {
  const [showComment, setShowComment] = useState(false);
  const [getPostId, setGetPostId] = useState("");
  const [getUserId, setGetUserId] = useState("");
  const [getComment, setGetComment] = useState("");

  const showCommentHandler = () => {
    setShowComment(true);
  };

  const closeCommentHandler = () => {
    setShowComment(false);
  };

  const [commenting, setCommenting] = useState({
    comment: "",
  });

  const commentInput = (e) => {
    let comment = e.target.name;
    let value = e.target.value;
    setCommenting({ ...commenting, [comment]: value });
  };

  const commentHandleSubmit = () => {

    let requests = {
      post_id: getPostId,
      user_id: getUserId,
      comment: getComment
    }

    console.log(requests)

    fetch("http://localhost:4001/api/create-comment",{
      method: "POST",
      headers: {"Content-Type":"application/json",
    },
      body: JSON.stringify(requests),
    })
    .then((resp) => resp.json())
    .then((data)=>{
      alert("Comment Posted");
      console.log(data);

    }).catch((err)=>{
      throw new Error
    })

    setGetPostId("");
    setGetUserId("");
    setGetComment("");

  };

  const commentModal = (
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
            <h4>Comment</h4>
            <h4  style={{ width: "30px", height: "40px", cursor:"pointer", }}
              onClick={closeCommentHandler}>X</h4>
          </div>

          <div   style={{
              paddingLeft: "20px",
              backgroundColor: "#f1f1f1f1",
              display: "flex",
              justifyContent: "space-between",
              fontFamily:"15px"
            }}>
          <input style={{
            border: "none",
            backgroundColor: "#f5f5f5",
            color: "grey",
          }} type="text" placeholder="Insert UserId......"    value={getUserId}
          onChange={(e) => setGetUserId(e.target.value)}
          required
        />{" "}

       <input style={{
            border: "none",
            backgroundColor: "#f5f5f5",
            color: "grey",
          }} type="text" placeholder="Insert PostId......"    value={getPostId}
          onChange={(e) => setGetPostId(e.target.value)}
          required
        />{" "}
                </div>

          <input style={{
            border: "none",
            backgroundColor: "#f5f5f5",
            color: "grey", margin:"105px",
          }} type="text" placeholder="Write Comment......"   onChange={commentInput}
          required
        />{" "}
    
          <div style={{ borderBottom: "1px solid #333" }}></div>
    
          <div className="commentBt">

            <button type="submit" onClick={commentHandleSubmit} style={{
                  width: "70px",
                  height: "25px",
                  borderRadius: "20px",
                  textAlign: "center",
                  backgroundColor: "rgb(220, 217, 217)",
                  border: "none",
                }}> Send 
            </button>
          </div>
        </div>
    
      </div>
    </>
    
      );

  return (
    <div>
    <AdminNav />
    <div className="admin-container">
      <header className="admin-nav">
        <i> Comment Creation</i>
      </header>
<div>
<h2 style={{cursor:"pointer", margin:"20px, 10px, 20px, 20px"}} onClick={showCommentHandler}>Click to Comment</h2>
</div>
     
    </div>
    {showComment && commentModal}
  </div>
  )
}

export default AdminNewComment