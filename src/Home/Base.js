import React from "react"
import { FaInstagram, FaFacebook,  FaGoogle,  FaTwitter, FaLinkedin} from 'react-icons/fa';
import { IconContext } from "react-icons";

import "./Home.css"
import {Nav, Navbar,Button} from "react-bootstrap"
const Base=()=>{
    return(
        <div className="bg">
        

         
        <Navbar expand="lg">
         <Navbar.Brand href="#home">
      <img
        alt=""
        src="/assets/logo.png"
        width="210"
        height="100"
        className="d-inline-block align-top"
      />{' '}
    
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"  />
  <Navbar.Collapse id="basic-navbar-nav " >
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    
    <Nav.Link  href="https://www.linkedin.com/company/docseekers"> <IconContext.Provider value={{ color: "#FFFFFF", className: "global-class-name" }}>
  <div>
    <FaLinkedin/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "#FFFFFF", className: "global-class-name" }}>
  <div>
    <FaGoogle/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "#FFFFFF", className: "global-class-name" }}>
  <div>
    <FaTwitter/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "#FFFFFF", className: "global-class-name" }}>
  <div>
    <FaInstagram className="mr-sm-4"/>
  </div>
</IconContext.Provider> </Nav.Link>
  
  
    <div className="mr-sm-4">

   
     <Button variant="outline-light" href={"/Collaborate"} >Wanna Collaborate</Button>
     {"  "}
     <Button variant="outline-light"  href={"/verify"}>Verify Ceritificate</Button>
     </div>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
   

            
        </div>  )
}


export default Base;