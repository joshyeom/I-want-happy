import { useParams } from "react-router-dom"
import Header from "../components/Header"
import MiniCard from "../components/MiniCard";

const Post = () => {
    const { url } = useParams();
    const virtualArr = new Array(10).fill(0)
    const imageUrl = "https://cdn.myportfolio.com/ee8d030c-c182-4be1-bb0a-af801c398dd7/f979998c-64c7-4e3d-be24-9ed79749c574_carw_3x4x640.gif?h=d1e2a697b2276b192cce740dcdc1a151"

    return(
        <div style={{overflow: "hidden", position: "relative"}}>
        <Header style={{paddingBottom: '115px'}}/>
        <main style={{width: '100%', display: "flex", flexDirection: "column", alignItems: "center"}}>
            <section style={{width: '1400px', display: "flex", justifyContent: "center", padding: '30px 0 20px 0'}}>
                <img src={url} />
            </section>
            <section style={{padding: '100px 0', width: '1400px', display: 'flex', justifyContent: 'space-between', gap: "100px"}}>
                {
                    virtualArr.map(() => (
                        <MiniCard url={imageUrl}/>
                    ))
                }
                
            </section>
        </main>
        </div>
    )
}

export default Post