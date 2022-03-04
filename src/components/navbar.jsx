import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Image, Row, Col,Button } from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/img/AictiveLogo.png'

import homeIcon from '../assets/img/home-icon.svg'
import profileIcon from '../assets/img/profile-icon.svg'
import settingsIcon from '../assets/img/settings-icon.svg'
import appsIcon from '../assets/img/apps-icon.svg'
import supportIcon from '../assets/img/support-icon.svg'
const NavBar = () => {
  const [show, setShow] = useState('');
  useEffect(() => {

  }, [])

  const handleClick = () => {
    if (show==='') {
      setShow('active');  
    }else{
      setShow('');
    }

    console.log("diste click al boton")
    
  }
  return (
    <>
      <Navbar className="vh-100 float-start p-0 me-3">
        <Row xs="auto" className="h-100 g-0">
          <Col className={`h-100 big-column ${show}`}>
            <Container style={{marginTop:39+'px'}}>
              <Nav className="me-auto flex-column">
                <Nav.Link>
                  <Link to="/">
                    Inicio
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/profile">
                    Mi cuenta
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/settings">
                    Ajustes
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/apps">
                    Aplicaciones
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/support">
                    Soporte
                  </Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Col>
          <Col className="h-100 small-column">
            <Container className="d-flex flex-column align-items-center">
              
              <Navbar.Brand className="m-0 w-100">
                <Button variant="link" onClick={handleClick} className="p-0 logo-btn">
                  <Image
                    alt=""
                    src={logo}
                    className="d-inline-block align-top" />
                </Button>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto flex-column">
                  <Nav.Link>
                    <Link to="/">
                      <Image src={homeIcon} />
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/profile">
                      <Image src={profileIcon} />
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/settings">
                      <Image src={settingsIcon} />
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/apps">
                      <Image src={appsIcon} />
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/support">
                      <Image src={supportIcon} />
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Col>
        </Row>
      </Navbar>
      <Outlet />
    </>
  )
}

export default NavBar