import { useNavigate } from "react-router-dom"
import { headerButtonStyle, headerStyle } from "../styles/styles.css"
import { CSSProperties } from "react"

const Header = ({style}: {style?: CSSProperties}) => {
    const navigate = useNavigate()
    return(
        <header className={headerStyle} style={{...style}}>
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