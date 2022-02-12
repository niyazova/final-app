import React from 'react'
import Header from './styled.js'
import home_img from '../../assets/home-bg.png'

function Index() {
  return <Header>
      <div className="header">
            <div className="header__left">
                <img src={home_img} alt="#" />
            </div>

            <div className="header__right">

            </div>
      </div>

  </Header>  
}

export default Index