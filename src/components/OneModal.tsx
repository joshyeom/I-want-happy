import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle } from '../styles/styles.css';
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
        <div className={ModalStyle} onClick={onClose}>
            <div style={{position: 'absolute', width: '447px', height: '90vh'}}>
                {!isLoaded && (
                    <Skeleton/>
                )}
                <img src={imgUrl} alt="Modal Content" onLoad={() => setIsLoaded(true)} style={{height: '100%'}}/>
            </div>
        </div>,
        document.body
    )
}

export default OneModal