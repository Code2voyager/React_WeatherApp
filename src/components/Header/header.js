import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

function Header() {
  return (
 
    <Navbar expand="lg">
    
      <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#today_forecast" >Today</Nav.Link>
          <Nav.Link href="#link">Hourly</Nav.Link>
          <Nav.Link href="#link">10Day</Nav.Link>
          <Nav.Link href="#link">Weekend</Nav.Link>
          <Nav.Link href="#link">Monthly</Nav.Link>
          <Nav.Link href="#link">Radar</Nav.Link>
          
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
         
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

  </Navbar>
  );
}

export default Header;