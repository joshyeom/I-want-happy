import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle } from '../styles/styles.css';

const Modal = ({ onClose, imgUrl }: {onClose: () => void, imgUrl: string}) => {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return createPortal(
        <div className={ModalStyle}>
            <img src={imgUrl} alt="Modal Content" style={{ height: '90vh' }} />
            <img src="https://firebasestorage.googleapis.com/v0/b/imhappy-715f1.appspot.com/o/kakao%2F1.(TEXT).png?alt=media&token=b2cf4432-b37c-421c-88f8-e9b9c77d33bb" alt="Kakao Content" style={{ height: '90vh' }} />
            <button onClick={onClose} style={{ position: 'absolute', top: 15, right: 15, width: '40px', height: '40px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" fill="#FFF" >
                <polygon points="64.5,39.8 60.2,35.5 50,45.7 39.8,35.5 35.5,39.8 45.7,50 35.5,60.2 39.8,64.5 50,54.3 60.2,64.5 64.5,60.2 54.3,50"></polygon>
            </svg>
            </button>
        </div>,
        document.body
    )
}

export default Modal