import sty from 'styled-components'
import back_img from '../../assets/girl-back.png'


const Container = sty.div`
.container {
    display: flex;
    flex-direction: column;
    font-family: 'Source Sans Pro', sans-serif;
    .header {
        display: flex;

        .header__left {
            width: 620px;
            height: 620px;
            margin-top: 130px;
            background: bottom no-repeat;
            background-image: url(${back_img});
            position: relative;
            background-size: contain;

            .img__box {
                height:80px;
                width: 80px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius:15px;
                margin-left: 500px;
                margin-top: -50px;
                background: linear-gradient(to bottom, rgba(63, 69, 141, 0.63), rgba(63, 69, 141, 0.14));
            }
            .img__box2 {
                height:80px;
                width: 80px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius:15px;
                margin-left: 80px;
                background: linear-gradient(to bottom, rgba(63, 69, 141, 0.63), rgba(63, 69, 141, 0.14));
            }

            .left__img {
                position: absolute;
                margin-top: -77px;
                margin-left: 80px;
                height: 100%;
                transform: rotate(-7deg);
                width: 100%;
            }
            .left__user {
                position:absolute;
                height:80px;
                width: 310px;
                border: none;
                margin-left: 380px;
                margin-top: 350px;
                border-radius: 16px;
                display: flex;
                background: linear-gradient(to bottom, rgba(63, 69, 141, 0.63), rgba(63, 69, 141, 0.14));

                .users__imgs {
                    display: flex;
                    margin-top:15px;

                    .user__img{
                        height:45px;
                        margin-left: 25px;
                    }
                    .user__img2{
                        height:45px;
                        margin-left: -17px;
                    }
                    .user__img3{
                        height:45px;
                        margin-left: -17px;
                    }
                    .user__img4{
                        height:45px;
                        margin-left: -17px;
                    }
                    .user__img5{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 26px;
                        color: #fff;
                        height:45px;
                        width:45px;
                        border-radius:50%;
                        margin-left: -17px;
                        background:rgba(63, 69, 141, 0.63);
                    }
                }
                .users__title p {
                    font-size: 14px;
                    margin-left:8px;
                    margin-bottom: 25px;
                    color: #fff;
                }

            }
        }
        .header__right {
            margin-left: 150px;
            margin-top: 140px;
            .right__title {
                font-size:50px;
                width:520px;
                color: #fff;
            }
            .right__subtitle {
                color:#fff;
            }
            .right__input {
                margin-top: 50px;
                height:63px;
                width:460px;
                border-radius: 12px;
                background: #29293b;
                border: none;
                outline: none;
                box-shadow: 0 0 35px 0px rgba(0, 0, 0, 0.6);
                padding-left:29px;
                font-size: 18px;
            }
        }
    };
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        .main__title {
            margin-top: 70px;
            color: #fff;
        }
        .main__subtitle {
            margin-top:-10px;
            color: #fff;
        }
        .main__boxs {
            height:520px;
            display: flex;
            margin: 80px 100px;
            .box__1 {
                margin: 20px;
                width:320px;
                height:410px;
                border: none;
                box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.8);
                border-radius: 20px;
                .box__img {
                  margin: 10px;
                };
                .box__text {
                    font-size:13px;
                    margin-top: -3px;
                    margin-left: -125px;
                    color:#3BF5BD;
                    font-weight: 400;
                };
                .box__title {
                    margin-top: -20px;
                    color:#fff;
                    font-weight: 400;
                };
                .box__subtitle {
                    color: grey;
                };
                .users__inf {
                    margin: 10px 30px;
                    border-top:1px solid grey;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    
                    img {
                        margin:15px;
                    }

                    .user__inf {
                        margin-left: 25px;
                        .user__name {
                            color: #fff;
                        }
                        .user__id {
                            color: #fff;
                            margin-top: -15px;
                        }
                    }
                }
                .box__btn {
                    display: none;
                    height: 45px;
                    width: 150px;
                    margin: 18px;
                    background:#F5443B;
                    color: #fff;
                    border-radius:10px;
                    border: none;
                    font-size:14px
                }
                
            }
            .box__1:hover .box__btn {
                margin-left:70px;
                display: block;
            }
            .box__1:hover {
                min-height:500px;
                transition: all 0.3s ;
                
            }
        }


    }
    .section {
        margin: 60px 150px;
    }
    .footer {
        margin: 60px 140px;
        display: flex;
        justify-content: space-around;
        .footer__logo {
            font-family: 'Cabin Sketch';
            font-size: 25px;
            color: #F5443B;
        }
        .footer__title {
            font-size: 18px;
            color: #fff;
            font-weight: 700px;
        }
        p {
            color: grey;
        }
    }
}
`

export default Container