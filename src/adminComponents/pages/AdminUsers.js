import React, { useEffect, useState } from "react";
import AdminNav from "./subComponents/AdminNav";

function AdminUsers() {
  const [data, setData] = React.useState([]);

   const fetchUsers = async () => {
    const resp = await fetch(`http://localhost:4001/api/users`);
    const data = await resp.json();
    setData(data.data);
    console.log(data)
  };

  const [edit, setEdit] = useState({});
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [updated, setUpdated] = useState(false);
  

  // get users
  useEffect(() => {
    fetchUsers();
    if (updated) {
      fetchUsers();
    }
    setUpdated(false);
  }, [updated]);

  // Update User
  const handleUpdate = (e) => {
    let { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  console.log(id)
  const updateUser = (e) => {
    e.preventDefault()
    fetch(
      "http://localhost:4001/api/update-user/" + id,
     {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edit),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setModal(false);
        setId(null);
        alert("User Seccessfully Updated");
        setUpdated(true);
        console.log(data);
        console.log(id)
      });


  };

  const handleUpdateBtn = (user) => {
    // fetchUsers()
    setId(user._id);
    setModal(true);
    setEdit(user);

  };


 // Delete User

  const deleteUser = (id) => {
    fetch(`http://localhost:4001/api/delete-user/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("User Deleted");
        setUpdated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <header className="admin-nav">
          <i>List of Users </i>
        </header>
        <h2 className="head">Total Number of Users: {data.length}</h2>
        
        
        <div className="App">
        {data.length ? (
          <table>
            
            <tr>
              <th>Ids</th>
              <th>Names</th>
              <th>User Names</th>
              <th>Emails</th>
              <th>Phone No's</th> 
              <th>Action</th>
              <th>Action</th>
            </tr>

             {data.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.fullName}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button
                     onClick={() => handleUpdateBtn(user)}
                      style={{
                        color: "white",
                        background: "green",
                        width: "70px",
                        fontSize: "20px",
                        border: "none",
                      }}
                      >Update
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => deleteUser(user._id)}
                      style={{
                        color: "white",
                        background: "red",
                        width: "70px",
                        fontSize: "20px",
                        border: "none",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}      

          </table>
           ) : (
            <p style={{ fontSize: "30px", fontWeight: "bold", color: "navy" }}>
        Loading......
      </p>
          )}
        </div>
        {modal ? (
        <div className="admin-container">
          <h3>User Update</h3>
          <div className="wrapper">
            
            <form action="" className="form">
              <div className="input-group">
                <label htmlFor="">Full Name</label>
                <input type="text" value={edit.fullName} name="fullName" onChange={handleUpdate} />
              </div>
              <div className="input-group">
                <label htmlFor="">Phone</label>
                <input type="text" value={edit.phone} name="phone" onChange={handleUpdate} />
              </div>
              <div className="input-group">
                <label htmlFor="">Email</label>
                <input type="text" value={edit.email} name="email" onChange={handleUpdate} />
              </div>
              <div className="input-group">
                <label htmlFor="">User Name</label>
                <input type="text" value={edit.userName} name="userName" onChange={handleUpdate} />
              </div>
             
                <button className="bts" type="submit" onClick={updateUser}>
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

export default AdminUsers;
