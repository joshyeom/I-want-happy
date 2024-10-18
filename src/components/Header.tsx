import { useNavigate } from "react-router-dom"
import { headerButtonStyle, headerStyle } from "../styles/styles.css"
import { CSSProperties, useState } from "react"

const Header = ({style, currentPage}: {style?: CSSProperties, currentPage: string}) => {
    const navigate = useNavigate()
    const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)

    const handleButtonColor = (path: string) => {
        return currentPage === path
            ? { color: 'blue' }
            : { color: 'black'}
    }



    return(
        <header className={headerStyle} style={{...style}}>
            <section style={{position: 'relative'}}>
                <button className={headerButtonStyle} onClick={() => navigate('/')}>YAP! YAP! YAP!</button>
                <button className={headerButtonStyle} style={handleButtonColor('i-want-happy')} onClick={() => navigate('/i-want-happy')}>I WANT HAPPY</button>
                <button className={headerButtonStyle} style={handleButtonColor('work')} onClick={() => navigate('/work')}>WITH LOVE</button>
                <button className={headerButtonStyle} onMouseEnter={() => setIsMouseEnter(true)} onMouseLeave={() => setIsMouseEnter(false)} style={{position: 'relative'}}>ALL</button>
                <div style={{
                    display: isMouseEnter ? 'block' : 'none',
                    position: "absolute",   
                    top: '100%', 
                    right: '-25%',
                    zIndex: 10,
                    }}
                    onMouseEnter={() => setIsMouseEnter(true)}
                    onMouseLeave={() => setIsMouseEnter(false)}
                    >
                    <button className={headerButtonStyle} style={handleButtonColor('1-100')} onClick={() => navigate('/all/1-100')}>1 - 100</button>
                    <button className={headerButtonStyle} style={handleButtonColor('100-200')} onClick={() => navigate('/all/100-200')}>100 - 200</button>
                </div>
            </section>
        </header>
    )
}

export default Header