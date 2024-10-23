import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle } from '../styles/styles.css';
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
        <div className={ModalStyle} onClick={onClose} style={{justifyContent: 'space-around'}}>
            <div style={{width: '447px', height: '90vh', position: 'relative'}}>
                {!imgLoaded && (
                    <Skeleton/>
                )}
                    <img src={imgUrl} alt="Modal Content" onLoad={() => setImgLoaded(true)} style={{height: '100%'}}/>
            </div>
            <div style={{width: '447px', height: '90vh', position: 'relative'}}>
                {!kakaoLoaded && (
                    <Skeleton/>
                )}
                    <img src={kakaoUrl} alt="Kakao Content" onLoad={() => setKakaoLoaded(true)} style={{height: '100%'}}/>
            </div>
        </div>,
        document.body
    )
}

export default TwoModal