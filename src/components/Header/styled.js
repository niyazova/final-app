import sty from 'styled-components'
import back_img from '../../assets/girl-back.png'


const Container = sty.div`
.header {
    display: flex;

    .header__left {
        width: 630px;
        height: 630px;
        margin-top: 180px;
        background:bottom no-repeat;
        background-image: url(${back_img});
        position: relative;
        background-size: cover;

        .left__img {
            position:absolute;
            margin-top: -98px;
            height: 685px;
        }
    }
}
`

export default Container