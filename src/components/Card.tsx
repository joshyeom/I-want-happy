import { useState } from "react"
import { cardHoverStyle, cardHoverVisibleStyle, cardStyle } from "../styles/components/Card.css"

const Card = ({ url, idx, alt, openModal}: { url: string , idx: number, alt: string, openModal: (url: string) => void}) => {
    const [isHovered, setIsHovered] = useState(false)

    return(
        <section className={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => openModal(url)}
        >
              <div className={`${cardHoverStyle} ${isHovered ? cardHoverVisibleStyle : ''}`}>
                <span style={{fontSize: "17px", lineHeight: "22px", fontWeight: "400", color: "white"}}>{idx + 1}</span>
                <span style={{fontSize: "14px", lineHeight: "18px", fontWeight: "400", paddingTop: "12px", color: "white"}}>2024</span>
            </div>
            <img src={url} alt={alt} style={{width: "219px", height: "310px"}}/>
        </section>
    )
}

export default Card