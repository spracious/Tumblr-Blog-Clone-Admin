import React, { useCallback, useEffect, useState, useContext } from "react";
import AdminNav from './subComponents/AdminNav';
import { DataContext } from "../../components/context/DataContext";
import LikeButton from "../../components/LikeButton";

function AdminLikes() {

     // post fetch from context
     const [data, setData] = React.useState([]);
     const [post, setPost] = React.useState([]);
    //  const [likes, setLikes] = React.useState([]);

const fetchPosts = async () => {

  const resp = await fetch(`http://localhost:4001/api/posts`);
  const data = await resp.json();
  setData(data.data);
  console.log(data);
};

useEffect(() => {
  if (post) {
  }
  fetchPosts();
}, []);

const [likes, setLikes] = useState([]);

useEffect(() => {
  fetchLikes();
}, []);

const fetchLikes = async () => {
   
  try {
    const response = await fetch('http://localhost:4001/api/likes');
    const data = await response.json();
    setLikes(data.data);
    console.log(data.data)
  } catch (error) {
    console.error('Error fetching likes:', error);
  }
};
    
    
  return (
    <div>
        <AdminNav/>
        <div className='admin-container'>
        <header className="admin-nav">
        <i>LIKES</i>
      </header>

      <div>
      <h2 className="head">Total Number of Likes: {likes.length}</h2> 

      {likes.length ? (
      <div className="admin-posts">
            {likes.map((like) => (            
                    <div
                      className="post-cards"
                      key={like.user_id}>
                   <div>
                   <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
                  <p style={{color:"navy"}}>User Id: {like.user_id}</p>
                    <p style={{color:"blue"}}>Post Id: {like.post_id}</p>
                  </div>
                    <p style={{color:"red"}}> {like.like}Liked ♥</p> 
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
            </div>
            </div>
  )
}

export default AdminLikes