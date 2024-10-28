import { useState } from "react"
import Skeleton from "./Skeleton";
import { miniCardStyle, miniHoverStyle } from "../styles/components/MiniCard.css";

interface MiniCardProps{
    resizedImage: string; 
    originImage: string;
    index: number; 
    openModal: (url: string) => void
}

const MiniCard = ({resizedImage, originImage, index, openModal}: MiniCardProps) => {
    const [isHover, setIsHover] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <button
            style={{
                position: 'relative', // 부모 요소에 relative를 줘야 자식의 absolute가 작동함
                width: "100%",
                height: "100%",
                padding: 0, // 패딩이 있으면 스켈레톤이 밀려날 수 있으므로 0으로 설정
                border: 'none', // 버튼 테두리로 인한 밀림 방지
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => openModal(originImage)}
        >
            {/* 스켈레톤 */}
            {!isLoaded && (
                <Skeleton/>
            )}
    
            {/* 이미지 - 항상 렌더링하지만 로드되기 전까지는 숨김 */}
            <img
                src={resizedImage}
                alt={`Image ${index + 1}`}
                key={resizedImage}
                className={miniCardStyle}
                style={{ display: isLoaded ? "block" : "none" }}
                onLoad={() => setIsLoaded(true)} // 이미지 로드 후 isLoaded true로 변경
            />
    
            {/* 오버레이 효과 */}
            <div className={miniHoverStyle} key={resizedImage} style={{opacity: isHover ? 0.8 : 0,}}></div>
        </button>
    );
    
}

export default MiniCard