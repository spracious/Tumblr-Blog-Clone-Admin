import AdminNav from "./subComponents/AdminNav";
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../components/context/DataContext";
import PostCard from "../../components/pages/PostCard";

function AdminPosts() {
  const [data, setData] = React.useState([]);
  const [post, setPost] = React.useState([]);
  const [commData, setCommData] = useState([]);
  const [getPostId, setGetPostId] = useState(null);
  const [showComment, setShowComment] = useState(false);
  const [showAllComment, setShowAllCommentModal] = useState(false);
  const [commenting, setCommenting] = useState({
    comment: "",
  });

   // fetching user
   const { profile, setProfile} = useContext(DataContext);
   useEffect(() =>{
     fetch('http://localhost:4001/api/profile', {
       credentials: 'include'
     }).then(res => res.json())
     .then(data => {setProfile(data)
      //  console.log(data)
     })
     
   }, [])

  //  fetching Post
  const fetchPosts = async () => {
    const resp = await fetch(`http://localhost:4001/api/posts`);
    const data = await resp.json();
    setData(data.data);
    // console.log(data);
  };

  // Comments
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
        // console.log(data);
      });
  };

  const getCommentsHandler = (post) => {
    fetch(`http://localhost:4001/api/comment/${post._id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCommData(data.data)
        console.log(data.data);
      });

    setShowAllCommentModal(true);
  };

  const showCommentHandler = (post) => {
    setGetPostId(post._id);
    setShowComment(true);
  };

  const closeGetCommentHandler = () => {
    setShowAllCommentModal(false);
  };

  const closeCommentHandler = () => {
    setShowComment(false);
  };  
   
   const postModal = (
    <>
      <div className="postDrop">
        <div className="postForm">
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

  // allComment Modal
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


 // Delete post
  const deletePost = (id) => {
      fetch(`http://localhost:4001/api/delete-post/${id}`, {
        method: "DELETE",
      })
        .then((resp) => {
          resp.json();
        })
        .then((data) => {
          alert("Post Deleted");
          setUpdated(true);
        })
        .catch((error) => {
          console.error(error);
        });
  };

  // Post Update
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetchPosts();
    if (updated) {
      fetchPosts();
    }
    setUpdated(false);
  }, [updated]);

  const [edit, setEdit] = useState({
    category: "",
    title: "",
    text: "",
    hashtag: "",
  });

  const [files, setFiles] = useState({
    image: "",
  });


  const handleUpdate = (e) => {
    let category = e.target.name;
    let value = e.target.value;
    if (category === "image") {
      let file = e.target.files[0];
      setFiles({ image: file });
    }
    setEdit({ ...edit, [category]: value });
  };

      let file = files.image;
      let category = edit.category;
      let title = edit.title;
      let text = edit.text;
      let hashtag = edit.hashtag;
      let formData = new FormData();

      formData.append("category", category);
      formData.append("title", title);
      formData.append("text", text);
      formData.append("hashtag", hashtag);
      formData.append("image", file);


  const updatePost = (e) => {
    e.preventDefault()
    fetch(
      "http://localhost:4001/api/update-post/" + id,
     {
      method: "POST",
      enctype: "multipart/form-data",
      body: formData,
      credentials:'include',
    })
      .then((resp) => resp.json())
      .then((data) => {
        setModal(false);
        setId(null);
        alert("Post Seccessfully Updated");
        setUpdated(true);
        // setUpdated(false);
        console.log(data);
      });
  };

 const handleUpdateBtn = (selectedPost) => {
  setId(selectedPost._id);
  setModal(true);
  setEdit({
    category: selectedPost.category,
    title: selectedPost.title,
    text: selectedPost.text,
    hashtag: selectedPost.hashtag,
  });
  setFiles({ image: selectedPost.image });
};

  // Ennd of Post Update


  return (
    <div style={{ width: "100%" }}>
      <AdminNav />

      <div className="admin-container">
        <header className="admin-nav">
          <i>POSTINGS</i>
        </header>

        <div>
          <h2 className="head">Total Number of Postings: {data.length}</h2>

              <div  className="admin-posts">

{data.length < 1
  ? []
  : data.map((posts, index) => {
    
    return(
      
     <div className="post-cards">
       <PostCard key={index} posts={posts} getCommentsHandler={getCommentsHandler} showCommentHandler={showCommentHandler} profile={profile}/>

       <div
style={{
  display: "flex",
  marginTop: "40px",
  justifyContent: "center",
}}
>
<button onClick={() => handleUpdateBtn(posts)} className="api-edit">
  Update
</button>

<button
  onClick={() => deletePost(posts._id)}
  className="api-del"
>
  Delete
</button>
      </div>
     </div> 
    )
  })}
  
</div>

           {/* {showPost && postModal} */}
      {showComment && commentModal}
      {showAllComment && allCommentModal}   
        </div>
        {modal ? (
        <div className="admin-container">
        <div>
            <h3>Edit Post</h3>
          </div>
        <div className="wrapper">
          <form action="" className="form">
            <div className="input-group">
              <label htmlFor="">Category</label>
              <input type="text" value={edit.category}  name="category" onChange={handleUpdate} />
            </div>
            <div className="input-group">
              <label htmlFor="">Title</label>
              <input type="text" value={edit.title}   name="title" onChange={handleUpdate} />
            </div>
            <div className="input-group">
              <label htmlFor="">Text</label>
              <input type="text" value={edit.text} 
                  name="text" onChange={handleUpdate} />
            </div>
            <div className="input-group">
              <label htmlFor="">Image</label>
              <input value={edit.image} 
                    type="file" name="image" onChange={handleUpdate} />
            </div>
            <div className="input-group">
              <label htmlFor="">Hashtag</label>
              <input type="text" value={edit.hashtag} name="hashtag" onChange={handleUpdate} />
            </div>
           
              <button className="bts" type="submit" onClick={updatePost}>
                Update
              </button>
           
          </form>
        </div>
      </div>
      ) : null}
      </div>

    </div>
  );
}

export default AdminPosts;
