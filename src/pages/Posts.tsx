import Header from "../components/Header"
import Card from "../components/Card"
import ToTop from "../components/ToTop"
import { gridSectionStyle, mainStyle } from "../styles/pages/Posts.css"
import TwoModal from "../components/TwoModal"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchDetails } from "../utils/fetchDetails"
import { Details } from "../components/Details"
import { useFetchMultipleImages } from "../hooks/useFetchMultipleImages"

const Posts = () => {
  const { theme } = useParams()
  const queries = useFetchMultipleImages(theme === 'happy' ? ['happy','happy-kakao'] : ['love','love-kakao'])
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImgUrl, setSelectedImgUrl] = useState<string | null>(null);
  const [selectedKakaoUrl, setSelectedKakaoUrl] = useState<string | null>(null);


  const openModal = (imageUrl: string, kakaoUrl: string) => {
    setSelectedImgUrl(imageUrl); 
    setSelectedKakaoUrl(kakaoUrl)
    setModalOpen(true); 
  };

  const closeModal = () => {
    setSelectedImgUrl(null);
    setSelectedKakaoUrl(null)
    setModalOpen(false);
  }

  if (!theme) return

  const isLoading = queries.some(query => query.isLoading);
  const hasError = queries.some(query => query.error);

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error loading images</div>;

  const images = queries[0]?. data || [];
  const kakaoImages = queries[1]?.data || [];

  const details = fetchDetails(theme)

    return(
        <main className={mainStyle}>
            <Header currentPage={theme!}/>
            <ToTop/>
            <Details details={details}/>
            <section className={gridSectionStyle}>
                {
                  images?.map((v, i) => <Card url={v} alt={`Happy Image ${i}`} idx={i} key={v} openModal={() => openModal(v, kakaoImages[i])}/>)
                }
            </section>
            {isModalOpen && selectedImgUrl && selectedKakaoUrl && (
              <TwoModal onClose={closeModal} imgUrl={selectedImgUrl} kakaoUrl={selectedKakaoUrl}/>
            )}
        </main>
    )
}

export default Posts