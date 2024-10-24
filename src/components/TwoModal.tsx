import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContentsStyle, ModalStyle } from '../styles/components/Modal.css';
import Skeleton from './Skeleton';

const TwoModal = ({ onClose, imgUrl, kakaoUrl }: {onClose: () => void, imgUrl: string, kakaoUrl: string}) => {
    const [imgLoaded, setImgLoaded] = useState(false)
    const [kakaoLoaded, setKakaoLoaded] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return createPortal(
        <div className={ModalStyle} onClick={onClose} style={{justifyContent: 'center'}}>
            <div className={ModalContentsStyle}>
                {!imgLoaded && (
                    <Skeleton/>
                )}
                    <img src={imgUrl} alt="Modal Content" onLoad={() => setImgLoaded(true)} style={{width: '591.3px', height: '837px'}}/>
            </div>
            <div className={ModalContentsStyle}>
                {!kakaoLoaded && (
                    <Skeleton/>
                )}
                    <img src={kakaoUrl} alt="Kakao Content" onLoad={() => setKakaoLoaded(true)} style={{width: '615.16px', height: '837px'}}/>
            </div>
        </div>,
        document.body
    )
}

export default TwoModal