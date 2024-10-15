import { useNavigate } from "react-router-dom"
import { headerButtonStyle, headerStyle } from "../styles/styles.css"
import { CSSProperties } from "react"

const Header = ({style, currentPage}: {style?: CSSProperties, currentPage: string}) => {
    const navigate = useNavigate()

    const handleButtonColor = (path: string) => {
        return currentPage === path
            ? { color: 'blue' }
            : { color: 'black'}
    }

    return(
        <header className={headerStyle} style={{...style}}>
            <section style={{width: "100%"}}>
                <button className={headerButtonStyle} onClick={() => navigate('/')}>YAP! YAP! YAP!</button>
                <button className={headerButtonStyle} style={handleButtonColor('i-want-happy')} onClick={() => navigate('/i-want-happy')}>I WANT HAPPY</button>
                <button className={headerButtonStyle} style={handleButtonColor('work')} onClick={() => navigate('/work')}>WITH LOVE</button>
                <button className={headerButtonStyle} style={handleButtonColor('all')} onClick={() => navigate('/all')}>ALL</button>
            </section>
        </header>
    )
}

export default Header