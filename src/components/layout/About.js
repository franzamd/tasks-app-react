import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

function About(props) {
  return (
    <div>
      <Navbar color='dark' dark>
        <NavbarBrand href='/' className='mr-auto'>
          {props.title}
        </NavbarBrand>
      </Navbar>
      <Container>
        <div className='m-2'>
          <p className='text-center'>
            Esto es una aplicación desarollada en el taller de CTICs 2019
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
