import React, { useEffect, useState } from "react";
import AdminNav from "./subComponents/AdminNav";
import users from "../../adminComponents/images/users.webp";
import post from "../../adminComponents/images/posting.jpg";
import com from "../../adminComponents/images/comment.avif";
import liked from "../images/lyks.png";

function Admin() {

  const [data, setData] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);

  //  fetching posts
  const fetchPosts = async () => {
    const resp = await fetch(`http://localhost:4001/api/posts`);
    const posts = await resp.json();
    setPosts(posts.data);
    // console.log(posts)
  }; 

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetchPosts();
    if (update) {
      fetchPosts();
    }
    setUpdate(false);
  }, [update]);

  // fetching users
  const fetchUsers = async () => {
    const resp = await fetch(`http://localhost:4001/api/users`);
    const data = await resp.json();
    setData(data.data);
    // console.log(data)
  };

  const [updated, setUpdated] = useState(false);

    useEffect(() => {
      fetchUsers();
      if (updated) {
        fetchUsers();
      }
      setUpdated(false);
    }, [updated]);


    // fetching comments
    const [commUpdate, setCommUpdate] = useState(false);

    const fetchComments = async () => {
      const resp = await fetch(`http://localhost:4001/api/comments`);
      const comments = await resp.json();
      setComments(comments.data);
      // console.log(comments)
    };
  
    useEffect(() => {
      fetchComments();
      if (commUpdate) {
        fetchComments();
      }
      setCommUpdate(false);
    }, [commUpdate]);

    
    // fetching likes
    const [likes, setLikes] = useState([]);

useEffect(() => {
  fetchLikes();
}, []);

const fetchLikes = async () => {
   
  try {
    const response = await fetch('http://localhost:4001/api/likes');
    const likes = await response.json();
    setLikes(likes.data);
    // console.log(likes)
  } catch (error) {
    console.error('Error fetching likes:', error);
  }
};

  var tenPosts = posts.slice(0, 10);

  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <header className="admin-nav">
          <i>Admin DashBoard</i>
        </header>

        <div className="admin-card">
        <div className="admin-users">
            <img src={users} alt="" /> <br />
            <span
              style={{
                paddingBottom: "200px",
                fontSize: "32px",
                color: "navy",
                fontWeight: "bolder",
              }}
            >
              {data.length}
            </span>
            <br />
            <i>Users</i>
          </div>

          <div className="admin-users">
            <img src={post} alt="" /> <br />
            <span
              style={{
                paddingBottom: "200px",
                fontSize: "32px",
                color: "navy",
                fontWeight: "bolder",
              }}
            >
               {posts.length}{" "}
            </span>{" "}
            <br />
            <i> Posts</i>
          </div>
          

          <div className="admin-users">
            <img src={com} alt="" /> <br />
            <span
              style={{
                paddingBottom: "200px",
                fontSize: "32px",
                color: "navy",
                fontWeight: "bolder",
              }}
            >
              {comments.length}{" "}
            </span>{" "}
            <br />
            <i>Comments</i>
          </div>

          <div className="admin-users">
            <img src={liked} alt="" /> <br />
            <span
              style={{
                paddingBottom: "200px",
                fontSize: "32px",
                color: "navy",
                fontWeight: "bolder",
              }}
            >
              {likes.length}{" "}
            </span>{" "}
            <br />
            <i>Likes</i>
          </div>
        </div>

        <header className="admin-head">
          <i> Post Table</i>
        </header>

        <div className="admin_my_table">
          <table className="admin-table" id="data_table">
            <tr>
              <th>Post Ids</th>
              <th>Categories</th>
              <th>Titles</th>
              <th>Texts</th>
            </tr>

            {tenPosts.map((posts, key) => {
              return (
                <tr key={key}>
                  <td>{posts._id}</td>
                  <td>{posts.category}</td>
                  <td>{posts.title}</td>
                  <td>{posts.text}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
