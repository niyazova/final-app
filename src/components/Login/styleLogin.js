import sty from 'styled-components'


const Container = sty.div`
    .login {
        position: relative;
        display: flex;
        justify-content:center;
        align-items: center;
        min-height:100vh;
        font-family: 'Roboto Mono', monospace;
        .login__logo {
            position: absolute;
            font-family: 'Cabin Sketch';
            top: 5px;
            left:80px;
            font-size: 35px;
            color: #F5443B;
        }
        .login__box {
            height:500px;
            width: 450px;
            border: none;
            border-radius:25px;
            box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.8);
            .login__title {
                margin:40px 60px;
                font-size:25px;
                color: #F5443B;
            }
            .login__row {
                display:flex;
                flex-direction: column;
                margin-left:60px;
                label {
                    font-size:13px;
                    margin: 10px;
                    color:#F5443B;
                }
                .login__input {
                    padding-left:25px;
                    height: 44px;
                    width: 300px;
                    background:none;
                    border: 1px solid #F5443B;
                    outline:none;
                    border-radius:10px;
                    color: grey;
                }
                .login__btn {
                    height: 45px;
                    width: 330px;
                    margin: 45px 0px;
                    background:#F5443B;
                    color: #fff;
                    border-radius:10px;
                    border: none;
                    font-size:14px
                }
                .login__btn:hover {
                    cursor: pointer;
                    background:none;
                    border: 1px solid #F5443B;
                    color: #F5443B;
                }
            }
            .login__link {
               font-size: 12px;
               margin-left:65px;
               color:grey;
               margin-bottom:55px;
            }
        }
    }

`

export default Container