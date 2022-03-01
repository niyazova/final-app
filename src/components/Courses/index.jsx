import React from 'react'
import Container from './styleCourse'

function Courses() {
  return (
    <Container className="section">
      <p className='section__logo'>Best</p>
        <div className='section__left'>
          <ul className="left__list">
            <div className=" list__item--logo">Courses</div>
            <div className="list__item">Design</div>
            <div className="list__item">Coding</div>
            <div className="list__item">Technology</div>
          </ul>
          <button className="left__button">Add Course</button>
        </div>
        <div className='section__right'>
          
        <button className="right__button"> Join Course</button>
        </div>
    </Container>
  )
}

export default Courses