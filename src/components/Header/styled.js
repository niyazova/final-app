import sty from 'styled-components'
import back_img from '../../assets/girl-back.png'


const Container = sty.div`
.header {
    display: flex;

    .header__left {
        width: 580px;
        height: 580px;
        margin-top: 180px;
        background: bottom no-repeat;
        background-image: url(${back_img});
        position: relative;
        background-size: contain;

        .left__img {
            position: absolute;
            margin-top: -81px;
            margin-left: 100px;
            height: 100%;
            transform: rotate(-8deg);
            width: 100%;
        }
    }
}
`

export default Container