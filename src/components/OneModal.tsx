import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContentsStyle, ModalImageStyle, ModalStyle } from '../styles/components/Modal.css';
import Skeleton from './Skeleton';

const OneModal = ({ onClose, imgUrl }: {onClose: () => void, imgUrl: string}) => {
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return createPortal(
        <div className={ModalStyle} onClick={onClose} style={{justifyContent: 'center', overflow: 'hidden'}}>
            <div className={ModalContentsStyle}>
                {!isLoaded && (
                    <Skeleton/>
                )}
                <img src={imgUrl} alt="Modal Content" onLoad={() => setIsLoaded(true)} className={ModalImageStyle}/>
            </div>
        </div>,
        document.body
    )
}

export default OneModal