import React, { useEffect, useState, useContext } from "react";
import { DataContext, } from "../context/DataContext";
import LandingNav from "../LandingNav";

function ProfileUpdate() {

// Create userProfile
  const [profiling,setProfiling] = useState({
    employmentStatus: "",
    location: "",
    skills: "",
    nationlity: "",
    bio: "",
    gender: "",
    image: "",
  });

  const [files, setFiles] = useState({
    image: "",
  });

  const handleInput = (e) => {
    let employmentStatus = e.target.name;
    let value = e.target.value;
    if (employmentStatus === "image") {
      let file = e.target.files[0];
      setFiles({ image: file });
    }
    setProfiling({ ...profiling, [employmentStatus]: value });
  };

  let file = files.image;
  let employmentStatus = profiling.employmentStatus;
  let location = profiling.location;
  let skills = profiling.skills;
  let nationlity = profiling.nationlity;
  let bio = profiling.bio;
  let birthDay = profiling.birthDay;
  let gender = profiling.gender;
  let formData = new FormData();

  formData.append("employmentStatus", employmentStatus);
  formData.append("location", location);
  formData.append("skills", skills);
  formData.append("nationlity", nationlity);
  formData.append("image", file);
  formData.append("bio", bio);
  formData.append("birthDay", birthDay);
  formData.append("gender", gender);

  const handleSubmit = (e) => {

    // const fullName = profile.fullName;
   
    e.preventDefault();
    fetch("http://localhost:4001/api/create-profile", {
      method: "POST",
      enctype: "multipart/form-data",
      body: formData,
      credentials:'include',
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Profile Created");
        console.log(data);
        // console.log(profile)
        // console.log(fullName)
      });
  };
  // end of post creation

  return (
    <div style={{ backgroundColor: "rgb(0, 25, 53)", height:"150vh" }}>
        <LandingNav/>
       <div class="container">
  <div class="content">
    <header class="header">
      <h1 id="title" class="h1">Profile Update</h1>
      <p id="description" class="description">Tell us a little more about you</p>
    </header>
    <main>
      <form action="" id="survey-form">
        <div>
          <ul class="ul">
            <li class="li">
              <label  class="label-main">Employment Status:</label>
              <input class="input-text" type="text"  name="employmentStatus" onChange={handleInput} placeholder="Your employment Status" />
            </li>
            <li class="li">
              <label class="label-main">Location:</label>
              <input class="input-text" type="text" name="location" onChange={handleInput} placeholder="Your location"/>
            </li>
            <li class="li">
              <label class="label-main">Skills:</label>
              <input class="input-text" type="text" name="skills" onChange={handleInput} placeholder="Your skills" />
            </li>
            <li class="li">
              <label class="label-main">Nationality:</label>
              <input class="input-text" type="text" name="nationality" onChange={handleInput} placeholder="Your Nationality" />
            </li>
            <li class="li">
              <label class="label-main">Gender:</label>
              <input class="input-text" type="text" name="gender" onChange={handleInput} placeholder="Your Gender" />
            </li>
            <li class="li">
            <label class="label-main">Bio:</label>
          <textarea  class="input-text" name="bio" onChange={handleInput} placeholder="A few words about you…" maxlength="200" cols="30" rows="3"></textarea>
            </li>
            <li class="li">
              <label class="label-main">Image:</label>
              <input class="input-text" type="file" name="image" onChange={handleInput} placeholder="Update photo" />
            </li>	
          </ul>
        </div>

        <button id="submit" class="button" onClick={handleSubmit} type="submit">Create Profile</button>
      </form>
    </main>
  </div>
</div> 
    </div>
  )
}

export default ProfileUpdate;