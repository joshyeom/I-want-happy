import Header from "../components/Header"
import Card from "../components/Card"
import ToTop from "../components/ToTop"
import { gridMainStyle } from "../styles/styles.css"
import { useFetchImages } from "../hooks/useFetchImages"
import TwoModal from "../components/TwoModal"
import { useState } from "react"

const IWantHappy = () => {
  const { isLoading, error, data } = useFetchImages('happy')    

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


  if (isLoading) return <div>is Loading...</div>;

  if (error) return <div>Error</div>


    return(
        <div style={{overflow: "hidden", position: "relative"}}>
            <Header currentPage="i-want-happy"/>
            <ToTop/>
            <main className={gridMainStyle}>
                {
                  data?.map((v, i) => <Card url={v} alt={`Happy Image ${i}`} idx={i} key={v} openModal={openModal}/>)
                }
            </main>
            {isModalOpen && selectedImgUrl && (
              <TwoModal onClose={closeModal} imgUrl={selectedImgUrl} />
            )}
        </div>
    )
}

export default IWantHappy