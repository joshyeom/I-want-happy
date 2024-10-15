import { useState } from "react"
import { cardHoverStyle, cardHoverVisibleStyle, cardStyle } from "../styles/styles.css"
import { useNavigateToEncodedUrl } from "../hooks/useNavigateToEncodedUrl"

const Card = ({ url, idx, alt, openModal}: { url: string , idx: number, alt: string, openModal: (url: string) => void}) => {
    const [isHovered, setIsHovered] = useState(false)
    const navigateToEncodedUrl = useNavigateToEncodedUrl();

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
            <img src={url} alt={alt} style={{height: "200px"}}/>
        </section>
    )
}

export default Card