import sty from 'styled-components'
import back_img from '../../assets/girl-back.png'


const Container = sty.div`
.header {
    display: flex;

    .header__left {
        width: 500px;
        height: 500px;
        margin-top: 150px;
        background: center no-repeat;
        background-image: url(${back_img});
        background-size: cover;
    }
}
`

export default Container