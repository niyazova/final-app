import React from 'react'
import Header from './styled.js'
import home_img from '../../assets/home-bg.png'
import user1 from '../../assets/user.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import book from '../../assets/book.png'
import light from '../../assets/light.png'
import technology from '../../assets/technology.png'
import figma from '../../assets/figma.png'
import html from '../../assets/html.png'
import android from '../../assets/android.png'
import section from '../../assets/section.png'


function Index() {
  return <Header>
      <div className='container'>
            <div className="header">
                    <div className="header__left">
                        <img className='left__img' src={home_img} alt="#" />
                        <div className='img__box'>
                            <img src={book}  />
                        </div>
                        <div className='img__box2'>
                            <img src={light}  />
                        </div>


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
                        <h1 className='right__title'>Grow Your Skills To Advance Your Career Path.</h1>
                        <p className='right__subtitle'>We have something big for you who want to level up!</p>
                        <input type="text" className="right__input" placeholder='What do you want to learn...'/>
                    </div>
            </div>
            <div className="main">
                <h2 className="main__title">What do you want to learn</h2>
                <p className='main__subtitle'>Choose the right class as you need. Then enjoy studying.</p>
                <div className="main__boxs">
                    <div className="box__1">
                        <img className='box__img' src={technology} alt="#" />
                        <h6 className='box__text'>Technology</h6>
                        <h3 className='box__title'>Digital Marketing Strategy</h3>
                        <p className="box__subtitle">This course aims to give you deeper understanding of core processes ...</p>
                        <div className="users__inf">
                            <div>
                            <img className='box__user' src={user1} alt="#" />
                            </div>
                            <div className='user__inf'>
                                <h3 className='user__name'>Anna</h3>
                                <p className='user__id'>Mentor</p>
                            </div>
                        </div>
                        <div>
                            <button className='box__btn'>Access class</button>
                        </div>
                    </div>
                    <div className="box__1">
                        <img className='box__img' src={figma} alt="#" />
                        <h6 className='box__text'>Technology</h6>
                        <h3 className='box__title'>Digital Marketing Strategy</h3>
                        <p className="box__subtitle">This course aims to give you deeper understanding of core processes ...</p>
                        <div className="users__inf">
                            <div>
                                <img className='box__user' src={user2} alt="#" />   
                            </div>
                            <div className='user__inf'>
                                <h3 className='user__name'>Anna</h3>
                                <p className='user__id'>Mentor</p>
                            </div>
                        </div>
                        <div>
                            <button className='box__btn'>Access class</button>
                        </div>
                    </div>
                    <div className="box__1">
                        <img className='box__img' src={html} alt="#" />
                        <h6 className='box__text'>Technology</h6>
                        <h3 className='box__title'>Digital Marketing Strategy</h3>
                        <p className="box__subtitle">This course aims to give you deeper understanding of core processes ...</p>
                        <div className="users__inf">
                            <div>
                                <img className='box__user' src={user3} alt="#" />
                            </div>
                            <div className='user__inf'>
                                <h3 className='user__name'>Anna</h3>
                                <p className='user__id'>Mentor</p>
                            </div>
                        </div>
                        <div>
                            <button className='box__btn'>Access class</button>
                        </div>
                    </div>
                    
                    <div className="box__1">
                        <img className='box__img' src={android} alt="#" />
                        <h6 className='box__text'>Technology</h6>
                        <h3 className='box__title'>Digital Marketing Strategy</h3>
                        <p className="box__subtitle">This course aims to give you deeper understanding of core processes ...</p>
                        <div className="users__inf">
                            <div>
                                <img className='box__user' src={user4} alt="#" />
                            </div>
                            <div className='user__inf'>
                                <h3 className='user__name'>Anna</h3>
                                <p className='user__id'>Mentor</p>
                            </div>
                        </div>
                        <div>
                            <button className='box__btn'>Access class</button>
                        </div>
                        
                    </div>



                </div>
            </div>
            <section>
                <img src={section} alt="#" />
            </section>
      </div>

  </Header>  
}

export default Index