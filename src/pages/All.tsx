import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useState } from "react";
import OneModal from "../components/OneModal";
import { useFetchMultipleImages } from "../hooks/useFetchMultipleImages";
import MiniCard from "../components/MiniCard";

const All = () => {
    const { url } = useParams<{ url: string}>();
    const queries = useFetchMultipleImages(url === '1-100' ? ['happy','resized-happy'] : ['withlove','resized-withlove'])


    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImgUrl, setSelectedImgUrl] = useState<string | null>(null);

    const openModal = (url: string) => {
        setSelectedImgUrl(url); 
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImgUrl(null);
        setModalOpen(false);
    }

    const isLoading = queries.some(query => query.isLoading);
    const hasError = queries.some(query => query.error);

    if (isLoading) return <div>Loading...</div>;
    if (hasError) return <div>Error loading images</div>;

    const originImages = queries[0]?. data || [];
    const resizedImages = queries[1]?.data || [];

    return(
        <>
            <Header currentPage={url!}/>
            <main style={{display: 'flex', height: '100vh', justifyContent: 'space-around'}}>
                <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', width: '600px'}}>
                    <span style={{fontSize: '200px'}}>{url}</span>
                </section>
                <section style={{display: 'flex', alignItems: 'center'}}>
                    <section style={{
                        width: '600px',
                        height: '95vh',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(10, 1fr)',
                        gridAutoRows: '2fr',
                        gap: '10px'     
                    }}>
                {
                // data가 100개가 되도록 하기 위해 필요한 대체 이미지의 수를 계산
                    Array.from({ length: 100 }).map((_, i) => {
                        const resizedImage = resizedImages && i < resizedImages.length ? resizedImages[i] : ''; // 대체 이미지 URL
                        const originImage = originImages && i < originImages.length ? originImages[i] : ''; // 대체 이미지 URL
                        return <MiniCard resizedImage={resizedImage} originImage={originImage} index={i} openModal={openModal}/>
                    })
                }
                    </section>
                </section>
            </main>
            {isModalOpen && selectedImgUrl && (
              <OneModal onClose={closeModal} imgUrl={selectedImgUrl} />
            )}
        </>
    )
}
export default All