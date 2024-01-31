import React, { useState, useEffect, useContext } from "react";
import AdminNav from "./subComponents/AdminNav";
import { DataContext } from "../../components/context/DataContext";


function AdminNewPost() {
  const {userProfile, profile} = useContext(DataContext);
  const [data, setData] = React.useState([]);
  const [post, setPost] = React.useState([]);

  const [showPost, setShowPost] = useState(false);

    // post fetch from context
  const fetchPosts = async () => {
    const resp = await fetch(`http://localhost:4001/api/posts`);
    const data = await resp.json();
    setData(data.data);
  };

  useEffect(() => {
    if (post) {
    }
    fetchPosts();
  }, []);


  // profile fetch from context
  useEffect(() =>{
    fetch('http://localhost:4001/api/profiles', {
      credentials: 'include'
    })
    // console.log(profile)
  }, [profile])

    // creating post
     const [posting, setPosting] = useState({
        category: "",
        title: "",
        text: "",
        hashtag: "",
        // image: "",
        // user_id: "",
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
      // let user_id = posting.user_id;
      let formData = new FormData();
    
      formData.append("category", category);
      formData.append("title", title);
      formData.append("text", text);
      formData.append("hashtag", hashtag);
      // formData.append("user_id", user_id);
      formData.append("image", file);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4001/api/create-post", {
          method: "POST",
          enctype: "multipart/form-data",
          body: formData,
          credentials:'include',
          // processData: false,
          // contentType: false,
        })
        .then((resp) => resp.json())
        .then((data) => {
          alert("Post Created");
          console.log(data);
          console.log(userProfile)
        });
      };

      const showPostHandler = () => {
        setShowPost(true);
      };
    
      const closePostHandler = () => {
        setShowPost(false);
      };

      
      const postModal = (
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
                <h4>
                <input style={{
                    border: "none",
                    backgroundColor: "#f5f5f5",
                    color: "grey",
                  }} type="text" placeholder="Category"   name="category" onChange={handleInput}/>
                </h4>
                <h4 style={{ width: "30px", height: "20px", cursor:"pointer", }} onClick={closePostHandler}>X</h4>
              </div>
        
              <h1 style={{ display: "flex", margin: "15px", color: "grey" }}>
                <input style={{
                    border: "none",
                    backgroundColor: "#f5f5f5",
                    color: "grey",
                  }} type="text" placeholder="Title"   name="title" onChange={handleInput}/>
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
                  name="text" onChange={handleInput}
                /> 
        
                    <input 
                    style={{
                      border: "none",
                      backgroundColor: "#f5f5f5",
                      color: "grey", width:"10%", marginRight:"20px"
                    }}
                    placeholder="Image"
                    type="file" name="image" onChange={handleInput} />
              </div>
        
            <div style={{display:"flex", justifyContent:"space-between", margin:"10px 10px 10px 10px", borderRadius:"20px"}}>
              <input 
               style={{
                width: "160px",
                height: "40px",
                textAlign: "center",
              }}
                   type="text" placeholder="Hashtags"  name="hashtag" onChange={handleInput}/>
            </div>
        
              <div style={{ borderBottom: "1px solid #333" }}></div>
        
              <div className="postBt">
        
                <button type="submit" onClick={handleSubmit} style={{
                      width: "150px",
                      height: "40px",
                      borderRadius: "20px",
                      textAlign: "center", float:"right",
                      backgroundColor: "rgb(220, 217, 217)",
                      border: "none",
                    }}> Post now! 
                </button>
              </div>
            </div>
        
          </div>
        </>
      )
    
      return (
        <div>
          <AdminNav />
          <div className="admin-container">
            <header className="admin-nav">
              <i> Post Creation</i>
            </header>
    <div>
      <h2 style={{cursor:"pointer",  display:"flex", justifyContent:"center", marginTop:"50px", fontSize:"50px", color:"navy"}} onClick={showPostHandler}>Click to Post</h2>
    </div>
        
          </div>
          {showPost && postModal}
        </div>
      );
}

export default AdminNewPost