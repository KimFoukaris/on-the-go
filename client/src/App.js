import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ReactComponent as Logo } from './logo.svg';

class App extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Header>
          <Link to="/" className='navbar-brand'> 
            <Logo />
          </Link>
          <Link to="/" className='navbar-brand'>On The Go</Link>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="Beneficiaries">
            <NavItem>Beneficiaries</NavItem>
          </LinkContainer>
          <LinkContainer to="Notes">
            <NavItem>Notes</NavItem>
          </LinkContainer>
          <LinkContainer to="Login">
            <NavItem>Login</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default App;
