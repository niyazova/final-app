import React from 'react'
import Header from './styled.js'
import home_img from '../../assets/home-bg.png'
import user1 from '../../assets/user.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'

function Index() {
  return <Header>
      <div className="header">
            <div className="header__left">
                <img className='left__img' src={home_img} alt="#" />

                <div className="left__user">
                  <div className="users__imgs">
                      <img className='user__img'  src={user1}  alt="#" />
                      <img className='user__img2'  src={user2}  alt="#" />
                      <img className='user__img3'  src={user3}  alt="#" />
                      <img className='user__img4'  src={user4}  alt="#" />
                      <span className='user__img5'>+</span>
                  </div>
                  <div className="users__title">
                      <p>More than 80k+ Students joined!</p>
                  </div>
                </div>
            </div>

            <div className="header__right">

            </div>
      </div>

  </Header>  
}

export default Index