import sty from 'styled-components'


const Container = sty.div`
    display: flex;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    .section__logo {
    position: absolute;
    font-family: 'Cabin Sketch';
    top: -15px;
    left:40px;
    font-size: 30px;
    color: #F5443B;
    }
    .section__left {
        position: relative;
        padding:0px;
        margin-top: 40px;
        margin-left: 140px;
        height: 620px;
        width: 350px;
        border: 1px solid #F5443B;
        border-radius: 18px;
        box-shadow: 0 0 35px 0px rgba(0, 0, 0, 0.6);
        .left__list {
            .list__item--logo {
                font-size:24px;
                color:#F5443B;
                margin-bottom: 10px;
                font-weight: 500;
            }
            .list__item {
                margin-left: -35px;
                padding:23px 35px;
                font-size:18px;
                font-weight: 400;
                color: grey;
            }
            .list__item:hover{
                box-shadow: 0 0 35px 0px rgba(0, 0, 0, 0.2);
                color:#F5443B;
            }
        }
        .left__button {
            position: absolute;
            right:30px;
            bottom: 30px;
            color: #fff;
            border: none;
            outline: none;
            padding: 10px 30px;
            border-radius: 5px;
            background: #F5443B;
            color: #fff;    
            cursor: pointer;
        }
        .left__button:hover {
            background:none;
            border: 1px solid #F5443B;
            color: #F5443B;
        }

    }
    .section__right {
        position: relative;
        padding:0px;
        margin-top: 40px;
        margin-left: 30px;
        height: 620px;
        width: 870px;
        border: 1px solid #F5443B;
        border-radius: 18px;
        box-shadow: 0 0 35px 0px rgba(0, 0, 0, 0.6);
        .right__button {
            position: absolute;
            right:30px;
            bottom: 30px;
            color: #fff;
            border: none;
            outline: none;
            padding: 10px 30px;
            border-radius: 5px;
            background: #F5443B;
            color: #fff;    
            cursor: pointer;
        }
        .right__button:hover {
            background:none;
            border: 1px solid #F5443B;
            color: #F5443B;
        }
    }
    

`

export default Container