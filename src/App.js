import{BrowserRouter, Routes, Route} from "react-router-dom";
import DataProvider from "./components/context/DataContext";
import Home from "./components/Home";
import Sign from "./components/pages/Sign";
import LandingPage from "./components/pages/LandingPage";
import AdminNav from "./adminComponents/pages/subComponents/AdminNav";
import Admin from "./adminComponents/pages/Admin";
import AdminNewUsers from "./adminComponents/pages/AdminNewUsers";
import AdminUsers from "./adminComponents/pages/AdminUsers";
import AdminPosts from "./adminComponents/pages/AdminPosts";
import AdminNewPost from "./adminComponents/pages/AdminNewPost";
import AdminLogin from "./components/pages/AdminLogin";
import Welcome from "./components/pages/Welcome";
import AdminNewComment from "./adminComponents/pages/AdminNewComment";
import AdminComments from "./adminComponents/pages/AdminComments";
import Post from "./components/pages/Post";
import Profile from "./components/pages/Profile";
import UserPost from "./components/pages/UserPost";
import ProfileUpdate from "./components/pages/ProfileUpdate";
import AdminNewLike from "./adminComponents/pages/AdminNewLike";
import AdminLikes from "./adminComponents/pages/AdminLikes";
 


function App() {
  return (
    <div className="App">
  <DataProvider>
  <BrowserRouter>
   {/* <Nav/> */}
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/Sign" element={<Sign/>}/>
    <Route path="/Homepage" element={<LandingPage/>}/>
     <Route path="/myPosts" element={<Post/>} />
     <Route path="/userPost" element={<UserPost/>} />
      <Route path="/profile" element={<Profile/>}/>
       <Route path="/profileUpdate" element={<ProfileUpdate/>}/>
    <Route path="/adminNav" element={<AdminNav/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/adminUsers" element={<AdminUsers/>}/>
    <Route path="/adminNewUser" element={<AdminNewUsers/>}/>
    <Route path="/adminPosts" element={<AdminPosts/>}/>
    <Route path="/adminNewPost" element={<AdminNewPost/>}/>
    <Route path="/adminComments" element={<AdminComments/>}/>
    <Route path="/adminNewComment" element={<AdminNewComment/>}/>
    <Route path="/adminNewLike" element={<AdminNewLike/>}/>
    <Route path="/adminLikes" element={<AdminLikes/>}/>
    <Route path="/Admin" element={<Admin />} />
    <Route path="/adminLogin" element={<AdminLogin/>} />
    <Route path="/Welcome" element={<Welcome/>} />
   
   
   
   
    {/* <Route path="/products/:id" element={<SingleProduct/>}/> */}
    

   </Routes>
   {/* <Footer/> */}
   </BrowserRouter>
  </DataProvider>
    </div>
  );
}

export default App;
