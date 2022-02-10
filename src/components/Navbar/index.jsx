import React from 'react';
import Container from './style'

function Navbar() {
  return <Container>
      <div className="navbar">
          <p className="nav__logo">Genius</p>
          <ul className='nav__list'>
                <li className="nav__item">Home</li>
                <li className="nav__item">Courses</li>
                <li className="nav__item"> Webinar</li>
                <li className="nav__item">Pricing</li>
                <li className="nav__item">
                    
                </li>
                <li className="nav__item">
                    <button className='nav__btn'>Login</button>
                </li>
          </ul>
      </div>
  </Container>;
}




export default Navbar;
