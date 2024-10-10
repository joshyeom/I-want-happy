import { useParams } from "react-router-dom"
import Header from "../components/Header"

const Post = () => {
    const { url } = useParams();
    console.log(url)
    return(
        <div style={{overflow: "hidden", position: "relative"}}>
        <Header/>
        <main>
            <img src={url} />
        </main>
        </div>
    )
}

export default Post