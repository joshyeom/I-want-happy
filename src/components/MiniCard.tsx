import { useState } from "react"
import { useNavigateToEncodedUrl } from "../hooks/useNavigateToEncodedUrl"

const MiniCard = ({url}: {url: string}) => {
    const [isHover, setIsHover] = useState(false)
    const navigateToEncodedUrl = useNavigateToEncodedUrl();

    return(
        <button 
            style={{position: 'relative'}}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => navigateToEncodedUrl(url)}
        >
            <div style={{width: "50px", height: "67px", position: 'absolute', backgroundColor: "black", opacity: isHover ? 0.8 : 0, transition: '0.2s ease'}}></div>
            <img src={url} width="50px" height="67px"/>
        </button>
    )
}

export default MiniCard