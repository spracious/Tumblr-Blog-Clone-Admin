import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AdminNav from './subComponents/AdminNav'

function AdminComments() {
  const [data, setData] = React.useState([]);
  const [comment, setComment] = React.useState([]);
  const [getUserId, setGetUserId] = useState("");
  const [getPostId, setGetPostId] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [getComment, setGetComment] = useState("");


  const fetchComments = async () => {
    const resp = await fetch(`http://localhost:4001/api/comments`);
    const data = await resp.json();
    setData(data.data);
    console.log(data)
  };

  const [edit, setEdit] = useState({});
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetchComments();
    if (updated) {
      fetchComments();
    }
    setUpdated(false);
  }, [updated]);

  // const showCommentHandler = () => {
  //   setShowComment(true);
  // };

  // const closeCommentHandler = () => {
  //   setShowComment(false);
  // };

  // const commentHandleSubmit = (comment) => {
  //   setId(comment.id)
  //   setShowComment(true)
  //   setEdit(comment)
  //   console.log(edit)

  //   fetch("http://localhost:4001/api/update-comment",{
  //     method: "PUT",
  //     headers: {"Content-Type":"application/json",
  //   },
  //     body: JSON.stringify(edit),
  //   })
  //   .then((resp) => resp.json())
  //   .then((data)=>{
  //     setComment(false);
  //     setId(null)
  //     alert("Comment Updated");
  //     console.log(data);

  //   }).catch((err)=>{
  //     throw new Error
  //   })

  //   setGetPostId("");
  //   setGetUserId("");
  //   setGetComment("");

  // };


  // const commentModal = (
  //   <>
  //     <div className="postDrop">
      
  //       <div className="postForm" >
  //         <div
  //           style={{
  //             paddingLeft: "20px",
  //             fontSize: "25px",
  //             backgroundColor: "#f1f1f1f1",
  //             display: "flex",
  //             justifyContent: "space-between",
  //           }}
  //         >
  //           <h4>Comment</h4>
  //           <h4  style={{ width: "30px", height: "40px", cursor:"pointer", }}
  //             onClick={closeCommentHandler}>X</h4>
  //         </div>

  //         <input style={{
  //           border: "none",
  //           backgroundColor: "#f5f5f5",
  //           color: "grey", margin:"105px",
  //         }} type="text" placeholder="Write Comment......"    value={getComment}
  //         onChange={(e) => setGetComment(e.target.value)}
  //         required
  //       />{" "}
    
  //         <div style={{ borderBottom: "1px solid #333" }}></div>
    
  //         <div className="commentBt">

  //           <button type="submit" onClick={commentHandleSubmit} style={{
  //                 width: "70px",
  //                 height: "25px",
  //                 borderRadius: "20px",
  //                 textAlign: "center",
  //                 backgroundColor: "rgb(220, 217, 217)",
  //                 border: "none",
  //               }}> Update 
  //           </button>
  //         </div>
  //       </div>
    
  //     </div>
  //   </>
    
  //     );

  // Update Comment
 

  const handleUpdate = (e) => {
    let { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };  

  const updateComment = (e) => {
    e.preventDefault();
    fetch("http://localhost:4001/api/update-comment/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edit),
    })
    .then((resp) => resp.json())
    .then((data) => {
      setModal(false);
      setId(null);
      alert("Comment Successfully Updated");
      setUpdated(true);
      console.log(data);
      console.log(id);
    });
  };
  

  const handleUpdateBtn = (comments) => {
    setId(comments._id);
    setModal(true); 
    setEdit(comments);
  };
  
      
// Delete comment

  const deleteComment = (id) => {
    fetch(`http://localhost:4001/api/delete-comment/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Comment Deleted");
        setUpdated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  return (
    <div style={{ width: "100%" }}>
    <AdminNav />
    <div className="admin-container">
      <header className="admin-nav">
        <i>COMMENTS</i>
      </header>
      <div>
      <h2 className="head">Total Number of Comments: {data.length}</h2> 
      {data.length ? (
      <div className="admin-posts">
            {data.map((comments) => (            
                    <div
                      className="post-cards"
                      key={comments.user_id}>
                   <div>
                  <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
                  <p>User Id: {comments.user_id}</p>
                    <p>Post Id: {comments.post_id}</p>
                  </div>
                    <p>Comment: {comments.comment}</p>       
    
          {/* <div style={{ borderBottom: "1px solid #333" }}></div> */}
    
        </div>
                    <div style={{ display: "flex", marginTop: "50px",justifyContent:"center" }}>
                        <button onClick={() => handleUpdateBtn(comments)} className="api-edit">Update</button>
                        <button
                          onClick={() => deleteComment(comments._id)}
                          className="api-del"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  </div>
  
                  ) : (
                    <p style={{ fontSize: "30px", fontWeight: "bold", color: "navy" }}>
                Loading......
              </p>
                  )} 

      </div>
      {modal ? (
        <div className="admin-container">
          <h3>Comment Update</h3>
          <div className="wrapper">
            
            <form action="" className="form">
              <div className="input-group">
                <label htmlFor="">Comment</label>
                <input type="text" value={edit.comment} name="comment" onChange={handleUpdate} />
              </div>           
             
                <button className="bts" type="submit" onClick={updateComment}>
                  Update
                </button>
             
            </form>
          </div>
        </div>
      ) : null}
      </div>
      {showComment }
    </div>
  )
}

export default AdminComments