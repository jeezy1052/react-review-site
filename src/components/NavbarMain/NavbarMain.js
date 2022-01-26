import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const NavbarMain = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/form">Review</Nav.Link>
        <Nav.Link as={Link} to="/database">Database</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarMain
