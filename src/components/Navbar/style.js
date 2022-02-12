import sty from 'styled-components'


const Container = sty.div`
    .navbar{
        width: 80%;
        height:60px;
        padding: 0;
        margin: 10px 100px;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Roboto Mono', monospace;

        .nav__logo {
            font-family: 'Cabin Sketch';
            font-size: 25px;
            color: rgb(8, 253, 216);
        }
        .nav__list {
            display:flex;
            justify-content: space-between;

            .nav__item {
                font-size: 14px;
                margin-right: 40px;
                list-style: none; 

                #languages {
                    border:none;
                    outline: none;
                    font-family: 'Roboto Mono', monospace;
                }
                .nav__btn {
                    border: none;
                    outline: none;
                    padding: 5px 20px;
                    border-radius: 5px;
                    background: rgb(8, 253, 216);
                    color: #fff;        
                }
            }
        }
    }

`

export default Container