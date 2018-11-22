import React, {Component} from 'react';
import {Navbar,NavItem,Nav,Image } from 'react-bootstrap';
import logo from '../images/logo.jpg';

class Navigation extends Component{
  render(){
    return (
      <Navbar className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><Image className="logo" src={logo} alt="ttt" responsive /></a>
          </Navbar.Brand>
           <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
          <NavItem className="navlinks" eventKey={1} href="https://terriblytinytales.com/app">
            app
          </NavItem>
          <NavItem className="navlinks" eventKey={2} href="https://terriblytinytales.com/collaborate">
            brand collaboration
          </NavItem>
          <NavItem className="navlinks" eventKey={1} href="https://terriblytinytales.com/talkies">
            talkies
          </NavItem>
          <NavItem className="navlinks" eventKey={1} href="https://terriblytinytales.com/events">
            events
          </NavItem>
          <NavItem className="navlinks" eventKey={1} href="https://terriblytinytales.com/stttore">
            stttore
          </NavItem>
          <NavItem className="navlinks" eventKey={1} href="https://terriblytinytales.com/us">
            us
          </NavItem>
          <NavItem className="navlinks" eventKey={1} href="https://terriblytinytales.com/submit">
            submit
          </NavItem>
          <NavItem className="navlinks" eventKey={1} href="https://terriblytinytales.com/careers">
            careers
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
