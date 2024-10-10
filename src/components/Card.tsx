import { useState } from "react"
import { cardHoverStyle, cardHoverVisibleStyle, cardStyle } from "../styles/styles.css"
import { useNavigate } from "react-router-dom"
import { useNavigateToEncodedUrl } from "../hooks/useNavigateToEncodedUrl"

const Card = ({ url, idx }: { url: string , idx: number}) => {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()

    return(
        <section className={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => useNavigateToEncodedUrl(url)}
        >
              <div className={`${cardHoverStyle} ${isHovered ? cardHoverVisibleStyle : ''}`}>
                <span style={{fontSize: "17px", lineHeight: "22px", fontWeight: "400", color: "white"}}>{idx}</span>
                <span style={{fontSize: "14px", lineHeight: "18px", fontWeight: "400", paddingTop: "12px", color: "white"}}>2024</span>
            </div>
            <img src={url} style={{height: "200px"}}/>
        </section>
    )
}

export default Card