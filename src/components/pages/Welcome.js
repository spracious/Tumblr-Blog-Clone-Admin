import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "../Nav";

function Welcome({Login, error}) {
  const [details, setDetails] = useState({email:"", password:""});
  const submitHandler = e =>{
      e.preventDefault();
      Login(details);
  }
  return(
   <div style={{ backgroundColor: "rgb(0, 25, 53)", height:"100vh" }}>
    <Nav/>
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="login">
              <h2 style={{textAlign:'center', color:"white"}}>Admin Login</h2>
              <Form onSubmit={submitHandler}>
              <Form.Group style={{color:"aliceblue", fontSize:"22px", marginBottom:"15px"}} size="lg" controlId="email">
                <Form.Label>Email:</Form.Label>
                <input
                  className="form-control"
                  autoFocus
                  type="email"
                  name="email"
                  id="email"
                  onChange={e => setDetails({...details, email: e.target.value})}
                  value={details.email}
                />
              </Form.Group>
              <Form.Group style={{color:"aliceblue", fontSize:"22px", marginBottom:"15px"}} size="lg" controlId="password">
                <Form.Label>Password:</Form.Label>
                <input
                  className="form-control" 
                  type="password"
                  name="password"
                  id="password"
                  onChange={e => setDetails({...details, password: e.target.value})}
                  value={details.password}
                />
              </Form.Group>
              <Button block size="lg" type="submit">
                Login
              </Button>
            </Form>
          </div>
      </div>
   </div>   
  )
}

export default Welcome;
