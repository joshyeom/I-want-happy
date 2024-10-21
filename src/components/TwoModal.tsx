import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle } from '../styles/styles.css';
import Skeleton from './Skeleton';

const TwoModal = ({ onClose, imgUrl }: {onClose: () => void, imgUrl: string}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return createPortal(
        <div className={ModalStyle} onClick={onClose} style={{justifyContent: 'space-around'}}>
            <div style={{width: '447px', height: '90vh'}}>
                {!isLoaded && (
                    <Skeleton/>
                )}
                <img src={imgUrl} alt="Modal Content" onLoad={() => setIsLoaded(true)} style={{height: '100%'}}/>
            </div>
            <div style={{width: '447px', height: '90vh'}}>
                {!isLoaded && (
                    <Skeleton/>
                )}
                    <img src="https://firebasestorage.googleapis.com/v0/b/imhappy-715f1.appspot.com/o/kakao%2F1.(TEXT).png?alt=media&token=b2cf4432-b37c-421c-88f8-e9b9c77d33bb" alt="Kakao Content" style={{height: '100%'}}/>
            </div>
        </div>,
        document.body
    )
}

export default TwoModal