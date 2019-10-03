import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler
} from 'reactstrap';
import '../layout/Header.css';

import logo from '../../logo.svg';

function Header(props) {
  return (
    <Navbar color='dark' dark className='fixed-top'>
      <NavbarBrand href='/' className='mr-auto'>
        <div>
          <img
            src={logo}
            className='Header-logo'
            style={{ height: '70px', width: '70px' }}
            alt='react'></img>
          {props.title}
        </div>
      </NavbarBrand>
      <NavbarToggler onClick={props.toggleCollapse} />
      <Collapse isOpen={!props.isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink href='/#' onClick={props.newTask}>
              Nueva Tarea
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/about'>Acerca</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
