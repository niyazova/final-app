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
            font-size: 25px;
            color: #F5443B;
        }
        .nav__list {
            display:flex;
            justify-content: space-between;

            .nav__item {
                font-size: 14px;
                margin-right: 60px;
                color: #FFFFFF;
                list-style: none; 
                cursor: pointer;

                #languages {
                    margin-left: 15rem;
                    border:none;
                    outline: none;
                    font-family: 'Roboto Mono', monospace;
                    background: #171836;
                    color: #fff;

                }
                .nav__btn {
                    border: none;
                    outline: none;
                    padding: 6px 26px;
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