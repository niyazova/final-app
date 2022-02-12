import React from 'react';
import Container from './style'

function Navbar() {
  return <Container>
      <div className="navbar">
          <p className="nav__logo">Best</p>
          <ul className='nav__list'>
                <li className="nav__item">Home</li>
                <li className="nav__item">Courses</li>
                <li className="nav__item"> Webinar</li>
                <li className="nav__item">Pricing</li>
                <li className="nav__item"> 
                    <select id="languages">
                        <option value="Eng">Eng</option>
                        <option value="Rus">Rus</option>
                        <option value="Uzb">Uzb </option>
                    </select>
                </li>
                <li className="nav__item">
                    <button className='nav__btn'>Login</button>
                </li>
                
          </ul>
      </div>
  </Container>;
}




export default Navbar;
