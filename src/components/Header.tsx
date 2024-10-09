import { useNavigate } from "react-router-dom"
import { headerButtonStyle, headerStyle } from "../styles/styles.css"

const Header = () => {
    const navigate = useNavigate()
    return(
        <header className={headerStyle}>
            <section style={{width: "100%"}}>
                <button className={headerButtonStyle} onClick={() => navigate('/')}>YAP! YAP! YAP!</button>
                <button className={headerButtonStyle} onClick={() => navigate('/i-want-happy')}>I WANT HAPPY</button>
                <button className={headerButtonStyle} onClick={() => navigate('/work')}>WITH LOVE</button>
                <button className={headerButtonStyle} onClick={() => navigate('/all')}>ALL</button>
            </section>
        </header>
    )
}

export default Header