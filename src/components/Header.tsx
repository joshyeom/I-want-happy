import { useNavigate } from "react-router-dom"
import { CSSProperties, useState } from "react"
import { allButtons, headerStyle, allHeaderStyle } from "../styles/components/Header.css"

const Header = ({style, currentPage}: {style?: CSSProperties, currentPage: string}) => {
    const navigate = useNavigate()
    const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)

    const handleButtonColor = (path: string) => {
        return currentPage === path
            ? { color: 'blue' }
            : { color: 'black'}
    }

    const handleClick = (path: string): void => {
        navigate(path);
        (document.activeElement as HTMLElement)?.blur() 
    }



    return(
        <header className={currentPage === '1-100' || currentPage === '100-200' ? allHeaderStyle : headerStyle} style={{...style}}>
            <section style={{position: 'relative', display: 'flex', gap: '33px'}}>
                <button onClick={() => handleClick('/')}>YAP! YAP! YAP!</button>
                <button style={handleButtonColor('happy')} onClick={() => handleClick('/happy')}>I WANT HAPPY</button>
                <button style={handleButtonColor('love')} onClick={() => handleClick('/love')}>WITH LOVE</button>
                <button onMouseEnter={() => setIsMouseEnter(true)} onMouseLeave={() => setIsMouseEnter(false)} style={{position: 'relative'}}>ALL</button>
                <div
                    className={allButtons} 
                    style={{display: isMouseEnter ? 'flex' : 'none'}}
                    onMouseEnter={() => setIsMouseEnter(true)}
                    onMouseLeave={() => setIsMouseEnter(false)}
                >
                    <button style={handleButtonColor('1-100')} onClick={() => handleClick('/all/1-100')}>1-100</button>
                    <button style={handleButtonColor('100-200')} onClick={() => handleClick('/all/100-200')}>100-200</button>
                </div>
            </section>
        </header>
    )
}

export default Header