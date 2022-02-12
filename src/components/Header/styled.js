import sty from 'styled-components'
import back_img from '../../assets/girl-back.png'


const Container = sty.div`
.header {
    display: flex;
    font-family: 'Roboto Mono', monospace;

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
    }
    
`

export default Container