import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useFetchImages } from "../hooks/useFetchImages";
import { useState } from "react";
import Modal from "../components/Modal";
// import Card from "../components/Card";

const All = () => {
    const { url } = useParams<{ url: string}>();
    const { isLoading, error, data } = useFetchImages(url === '1-100' ? 'resized-happy' : 'resized-withlove')

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImgUrl, setSelectedImgUrl] = useState<string | null>(null);

    // const openModal = (url: string) => {
    //     setSelectedImgUrl(url); 
    //     setModalOpen(true);
    // };

    const closeModal = () => {
        setSelectedImgUrl(null);
        setModalOpen(false);
    }

    Worker

    if (isLoading) return <div>is Loading...</div>;

    if (error) return <div>Error</div>
    
    return(
        <>
            <Header currentPage={url!}/>
            <main style={{display: 'flex', height: '100vh', justifyContent: 'space-around'}}>
                <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', width: '600px'}}>
                    <span style={{fontSize: '200px'}}>{url}</span>
                </section>
                <section style={{display: 'flex', alignItems: 'center'}}>
                    <section style={{
                        width: '810px',
                        height: '90vh',
                        display: 'flex', 
                        flexWrap: 'wrap',
                        gap: '10px',
                    }}>
                {
                // data가 100개가 되도록 하기 위해 필요한 대체 이미지의 수를 계산
                Array.from({ length: 100 }).map((_, i) => {
                    const imageUrl = data && i < data.length ? data[i] : ''; // 대체 이미지 URL
                    return (
                            <img 
                                src={imageUrl} 
                                alt={`Image ${i + 1}`} 
                                key={i} 
                                style={{
                                    width: '8.8%',
                                    height: '8.8%',
                                    objectFit: 'fill', 
                                    flex: '0 0 auto'
                            }}/>
                            );
                        })
                }
                    </section>
                </section>
            </main>
            {isModalOpen && selectedImgUrl && (
              <Modal onClose={closeModal} imgUrl={selectedImgUrl} />
            )}
        </>
    )
}
export default All