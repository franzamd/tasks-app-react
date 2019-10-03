import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

function Footer() {
  return (
    <div className='fixed-bottom'>
      <Navbar color='dark'>
        <Container>
          <NavbarBrand>
            <p className='text-center text-light'>2019</p>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
