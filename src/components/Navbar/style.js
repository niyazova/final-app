import sty from 'styled-components'


const Container = sty.div`
    .navbar{
        width: 90%;
        height:60px;
        padding: 0;
        margin: 10px 80px;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Roboto Mono', monospace;

        .nav__logo {
            font-family: 'Cabin Sketch';
            font-size: 30px;
            color: #F5443B;
        }
        .nav__list {
            margin-top: 25px;
            display:flex;
            justify-content: space-between;

            .nav__item {
                font-size: 16px;
                margin-right: 60px;
                color: #FFFFFF;
                list-style: none; 
                cursor: pointer;

                #languages {
                    font-size: 16px;
                    border:none;
                    outline: none;
                    font-family: 'Roboto Mono', monospace;
                    background: #171836;
                    color: #fff;

                }
                .nav__btn {
                    border: none;
                    outline: none;
                    padding: 8px 30px;
                    border-radius: 5px;
                    background: #F5443B;
                    color: #fff;        
                }
            }
            .nav__item:hover {
                color: #fff;
            }
        }
    }

`

export default Container