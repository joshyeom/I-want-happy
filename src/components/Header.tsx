import { useNavigate } from "react-router-dom"
import { CSSProperties, useState } from "react"
import { allButtons, headerStyle } from "../styles/components/Header.css"

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
            <section style={{position: 'relative', display: 'flex', gap: '33px'}}>
                <button onClick={() => navigate('/')}>YAP! YAP! YAP!</button>
                <button style={handleButtonColor('happy')} onClick={() => navigate('/happy')}>I WANT HAPPY</button>
                <button style={handleButtonColor('love')} onClick={() => navigate('/love')}>WITH LOVE</button>
                <button onMouseEnter={() => setIsMouseEnter(true)} onMouseLeave={() => setIsMouseEnter(false)} style={{position: 'relative'}}>ALL</button>
                <div
                    className={allButtons} 
                    style={{display: isMouseEnter ? 'flex' : 'none'}}
                    onMouseEnter={() => setIsMouseEnter(true)}
                    onMouseLeave={() => setIsMouseEnter(false)}
                >
                    <button style={handleButtonColor('1-100')} onClick={() => navigate('/all/1-100')}>1-100</button>
                    <button style={handleButtonColor('100-200')} onClick={() => navigate('/all/100-200')}>100-200</button>
                    <button style={handleButtonColor('300-400')} onClick={() => navigate('/all/200-300')}>200-300</button>
                </div>
            </section>
        </header>
    )
}

export default Header