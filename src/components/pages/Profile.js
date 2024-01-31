import React, { useEffect, useState, useContext } from "react";
import LandingNav from '../LandingNav';
import tcnT from "../images/big 3rd.png";
import { DataContext } from "../context/DataContext";

function Profile() {
    const [data, setData] = React.useState([]);
    // const [profiling,setProfiling] = React.useState({})
    const [showProfile, setShowProfile] = useState(false);
    const { profile, setProfile} = useContext(DataContext);

    // fetch profile
    // const [profiling,setProfiling] = useContext(DataContext);
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
      birthDay: "",
    });

    React.useEffect(() => {
      fetch("http://localhost:4001/api/profiles")
        .then((res) => res.json())
        .then((data) => setData(data.data));
        
    }, []);
  
    const id = profile._id;
    const name = profile.fullName
    console.log(id)
    console.log(data)


  return (
    <div style={{  height:"100vh" }}>
    <LandingNav />
    <div className="p-carrier">
   <div className="p-card" >
   {data.length ? (
   <div>
    
    {data.filter((result) => result.user_id === id).map((profiles) => (
             <div className="texts"  key={profiles.user_id}>
      <img className="text-img"
                        src={`http://localhost:4001/uploads/${profiles.image}`}
                        alt=""
                      />

                   <h3 class="text-h3" >{name}</h3>

                   <p className="p-card-skills">{profiles.skills}</p>
         
         
             <h5 style={{color:"red"}}>{profiles.nationality}</h5>
           
                   <h5 >{profiles.employmentStatus}</h5>
              
                   <h5>{profiles.location}</h5>
               
             <h5>{profiles.gender}</h5> 
      
               <p className="p-card-bio">{profiles.bio}</p> 
             </div>
             
           ))}
    </div>
    ) : (
        <p style={{color:"purple"}}>This user has'nt been profiled yet...... Proceed to Update Profile!!!</p>
      )}
   </div>
    </div>
    </div>
  )

   
  //   <>
  //     <div className="commentForm">
      
  //       <div >
  //       <div
  //           style={{
  //             paddingLeft: "20px",
  //             fontSize: "25px",
  //             backgroundColor: "#f1f1f1f1",
  //             display: "flex",
  //             justifyContent: "space-between",
              
  //           }}
  //         >
  //           <h4>Comments</h4>
  //           <h4  style={{ width: "30px", height: "40px", cursor:"pointer", }}
  //             onClick={closeGetCommentHandler}>X</h4>
  //         </div>
  //         <div style={{ borderBottom: "1px solid #333" }}></div>
  
  //         {data.length ? (
  //     <div className="">
  //           {data.map((comments) => (            
  //                   <div
  //                   className="post-cards"
  //                   key={comments.user_id}>
  //                <div>
  //               <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
  //               <p>User Id: {comments.user_id}</p>
  //                 <p>Post Id: {comments.post_id}</p>
  //               </div>
  //                 <p style={{display:"flex", justifyContent:"center", color:"navy"}}> {comments.comment}</p>
     
     
  
  //       {/* <div style={{ borderBottom: "1px solid #333" }}></div> */}
  
  //     </div>
  //                 </div>
  //                 ))}
  //                 </div>
  
  //                 ) : (
  //                   <p style={{ fontSize: "30px", fontWeight: "bold", color: "navy" }}>
  //               Loading......
  //             </p>
  //                 )} 
  
  
  
  //       </div>
    
  //     </div>
  //   </>
  //     );

}

export default Profile