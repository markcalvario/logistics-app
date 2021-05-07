import React from 'react';
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="px-5 py-2">
            <Navbar.Brand href="#home">
                Marky's Party Rentals
            </Navbar.Brand>
        </Navbar>
    );
  }
  
export default NavBar;