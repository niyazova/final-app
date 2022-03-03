import React from 'react'
import Container from './styleStudents'

function Students() {
  return (
    <Container className="section">
         <p className='section__logo'>Best</p>
        <div className='section__left'>
          <ul className="left__list">
            <div className=" list__item--logo">Students</div>
            <div className="list__item">Design group</div>
            <div className="list__item">Coding group</div>
            <div className="list__item">Technology group</div>
          </ul>
          <button className="left__button">Add Course</button>
        </div>
        <div className='section__right'>
          
        </div>
    </Container>
  )
}

export default Students