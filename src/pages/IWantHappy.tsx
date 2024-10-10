import Header from "../components/Header"
import Card from "../components/Card"
import ToTop from "../components/ToTop"
import { gridMainStyle } from "../styles/styles.css"
import { useEffect, useState } from "react"
import { fetchImage } from "../utils/fetchImage"
const IWantHappy = () => {
  const [imgUrl, setImgUrl] = useState<string[]>([])

    useEffect(() => {
      const fetch = async () => {
        const images = await fetchImage('happy')
        setImgUrl(images)

      }
      fetch()
      }, []);

    return(
        <div style={{overflow: "hidden", position: "relative"}}>
            <Header/>
            <ToTop/>
            <main className={gridMainStyle}>
                {
                  imgUrl.map((v, i) => <Card url={v} alt={`Happy Image ${i}`} idx={i} key={v}/>)
                }
            </main>
        </div>
    )
}

export default IWantHappy