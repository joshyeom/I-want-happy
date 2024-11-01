import { CSSProperties, useEffect } from "react";
import { toDownStyle } from "../styles/components/ToDown.css";

const ToDown =({style, setIsDown}: {style?: CSSProperties, setIsDown: (state: boolean) => void}) => {
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY === 0) {
                setIsDown(false);
            } else {
                setIsDown(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsDown]); 

    const handleClick = () => {
        setIsDown(true);
    
        let scrollToPosition;


        if (window.innerWidth <= 376) {
            scrollToPosition = 1078; 
        } else if (window.innerWidth < 1023) {
            scrollToPosition = 979; 
        } else if (window.innerWidth <= 2048) {
          scrollToPosition = 1075; 
        }

        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth',
          });
      };

    return(
        <button className={toDownStyle}
            style={{...style}}
            onClick={handleClick}
            >
             <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 26 26"
                    xmlSpace="preserve"
                    style={{
                        fill: '#000000',
                        height: '24px',
                        // opacity: isHovered ? '0.5' : '0.5',
                        width: '24px',
                    }}
                >
                <g>
                    <path
                        d="M13.8,1.3L21.6,9c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.1,0.4s0,0.3-0.1,0.4c-0.1,0.1-0.1,0.3-0.3,0.4
                        c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.1-0.3-0.2-0.4-0.3L14.2,5l0,19.1
                        c0,0.2-0.1,0.3-0.1,0.5c0,0.1-0.1,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.3,0-0.4-0.1
                        c-0.1-0.1-0.3-0.1-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.1-0.1-0.3-0.1-0.5l0-19.1l-5.7,5.7C6,10.8,5.8,10.9,5.7,11
                        c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.2-0.2-0.4C4.1,10.2,4,10.1,4.1,9.9
                        c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.3,0.3-0.4l7.7-7.8c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2-0.1
                        c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1C13.7,1.2,13.8,1.2,13.8,1.3z"
                    />
                </g>
            </svg>
        </button>
    )
}

export default ToDown