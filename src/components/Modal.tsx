import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle } from '../styles/styles.css';

const Modal = ({ onClose, imgUrl }: {onClose: () => void, imgUrl: string}) => {
    const scrollY = window.scrollY;
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0)

        return () => {
            document.body.style.overflow = 'auto';
            window.scrollTo(0, scrollY);
        };
    }, [scrollY]);

    return createPortal(
        <div className={ModalStyle}>
            <img src={imgUrl} alt="Modal Content" style={{ height: '100vh' }} />
            <button onClick={onClose} style={{ position: 'absolute', top: 15, right: 15, width: '40px', height: '40px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" fill="#000" >
                <polygon points="64.5,39.8 60.2,35.5 50,45.7 39.8,35.5 35.5,39.8 45.7,50 35.5,60.2 39.8,64.5 50,54.3 60.2,64.5 64.5,60.2 54.3,50"></polygon>
            </svg>
            </button>
        </div>,
        document.body
    )
}

export default Modal