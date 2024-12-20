import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContentsStyle, ModalImageStyle, ModalStyle } from '../styles/components/Modal.css';
import Skeleton from './Skeleton';

const TwoModal = ({ onClose, imgUrl, kakaoUrl }: {onClose: () => void, imgUrl: string, kakaoUrl: string}) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [kakaoLoaded, setKakaoLoaded] = useState(false);
    const [bothImagesLoaded, setBothImagesLoaded] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        if (imgLoaded && kakaoLoaded) {
            setBothImagesLoaded(true);
        }
    }, [imgLoaded, kakaoLoaded]);

    return createPortal(
        <div className={ModalStyle} onClick={onClose} style={{justifyContent: 'center'}}>
            <div className={ModalContentsStyle}>
                {!bothImagesLoaded && (
                    <Skeleton/>
                )}
                    <img src={imgUrl} alt="Modal Content" onLoad={() => setImgLoaded(true)} className={ModalImageStyle}/>
            </div>
            <div className={ModalContentsStyle}>
                {!bothImagesLoaded && (
                    <Skeleton/>
                )}
                    <img src={kakaoUrl} alt="Kakao Content" onLoad={() => setKakaoLoaded(true)} className={ModalImageStyle}/>
            </div>
        </div>,
        document.body
    )
}

export default TwoModal