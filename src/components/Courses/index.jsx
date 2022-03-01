import React from 'react'
import Container from './styleCourse'
import user1 from '../../assets/user.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'

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
          <div className="right__top">
          <div className=" right__logo">Design</div>
          <div className='box'>
            <div className="right__title">Araya Sheila</div>
            <img src={user1} alt="#" />
          </div>

          </div>
          <p className="right__subtitle">
            Join thousands of learners in taking a graphic design course on Udemy. You’ll learn through simple, easy-to-learn video tutorials and hands-on exercises that fit into your schedule. Our courses are constantly updated, so you’ll learn about current design trends and the latest features of design programs.
          </p>
          <button className="right__button"> Join Course</button>
        </div>
    </Container>
  )
}

export default Courses