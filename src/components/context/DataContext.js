import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  // fetching users
  const [userProfile, setUserProfile] = useState({
    _id: "",
    fullName: "",
    image: "",
    phone:"",
    userName: "",
    email:"", 
  })

  const getUsers = () => {
    fetch(`http://localhost:4001/api/users`,{
      credentials:"include",
    }).then((res) => {
      res.json().then((userProfile)=>{
        setUserProfile(userProfile);
      });
    });
  };

  // comment
  const [commentDetails, setCommentDetails] = useState({
    user_id: "",
    post_id: "",
    comment: "",
  })

  const getComments = () => {
    fetch(`http://localhost:4001/api/comments`,{
      // credentials:"include",
    }).then((res) => {
      res.json().then((commentDetails)=>{
        setCommentDetails(commentDetails);
      });
    });
  };
  

  // Auth User
  const [profile, setProfile] = useState({
    userName: "",
    _id: "",
    fullName: "",
    // post_id: "", 
  })

  // AdminProfile
  const [adminData, setAdminData] = useState({
    username: "admin101",
    password: "password",
  })

    // fetch profiles
    const [profiles, setProfiles] = useState([]);
 const getProfiles =()=>{
  fetch(`http://localhost:4001/api/profiles`,{
    credentials:"include",
  }).then((res) => {
    res.json().then((profiles)=>{
      setProfiles(profiles);
    });
  });

 }


   
 useEffect(() => {
  getUsers();
  getProfiles();
}, []);


  // userProfile
  const [profiling,setProfiling] = useState({
    user: "",
    employmentStatus: "",
    location: "",
    skills: "",
    nationlity: "",
    bio: "",
    gender: "",
    image: "",
    user_id: "",
  });



  // posts
   const [posting, setPosting] = useState({
    category: "",
    title: "",
    text: "",
    hashtag: "",
    image: "",
    user_id: "",
  });



  return (
    <DataContext.Provider
      value={{
        posting,
        setPosting,
        getUsers,
        userProfile,
        setUserProfile,
        profile,
        setProfile,
        profiling,
        setProfiling,
        profiles, 
        setProfiles,
        adminData, 
        setAdminData,
        commentDetails,
        setCommentDetails,
        getComments
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
