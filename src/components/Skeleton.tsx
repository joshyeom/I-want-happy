const Skeleton = () => {
    return(
        <div
            style={{
                position: "absolute", // 부모 요소(button) 안에서 절대 위치
                top: 0,
                left: 0,
                width: "100%", // 부모의 너비에 맞춤
                height: "100%", // 부모의 높이에 맞춤
                backgroundColor: "#e0e0e0", // 스켈레톤의 배경 색상
                transition: "0.2s ease",
                zIndex: 2, // 스켈레톤이 이미지 위에 위치하도록
            }}
        ></div>
    )
}

export default Skeleton