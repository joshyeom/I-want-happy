import { useState } from "react"
import Skeleton from "./Skeleton";

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
                style={{
                    position: "absolute", // 부모 요소 안에서 절대 위치
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    display: isLoaded ? "block" : "none", // 로드되기 전까지 숨김
                    zIndex: 1, // 스켈레톤 뒤에 배치
                }}
                onLoad={() => setIsLoaded(true)} // 이미지 로드 후 isLoaded true로 변경
            />
    
            {/* 오버레이 효과 */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    opacity: isHover ? 0.8 : 0,
                    transition: "0.2s ease",
                    zIndex: 3, // 오버레이는 스켈레톤 및 이미지 위에 표시
                }}
            ></div>
        </button>
    );
    
}

export default MiniCard