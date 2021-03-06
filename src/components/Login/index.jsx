import React from 'react';
import Container from './styleLogin'
import {Link} from 'react-router-dom'

function Login() {
  return <Container>
      <div className="login">
        <p className='login__logo'>Best</p>
          <div className="login__box">
          <h3 className='login__title'>Sign In</h3>
          <div className="login__row">
              <label htmlFor="#">Enter your email:</label>
              <input type="email" className='login__input' placeholder='email...' />
          </div>
          <div className="login__row">
              <label htmlFor="#">Enter your password:</label>
              <input type="password" className='login__input' placeholder='password...' />
              <button className="login__btn">sign in</button>
          </div>
        <Link className='login__link' to='/sign-up'>Don't have an account?</Link>
          </div>
      </div>
  </Container>;
}




export default Login;