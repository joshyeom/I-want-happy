import Header from "../components/Header"
import Image from "../components/Image"
import ToTop from "../components/ToTop"
import { gridMainStyle } from "../styles/styles.css"
const IWantHappy = () => {
    const imageUrl = "https://cdn.myportfolio.com/ee8d030c-c182-4be1-bb0a-af801c398dd7/f979998c-64c7-4e3d-be24-9ed79749c574_carw_3x4x640.gif?h=d1e2a697b2276b192cce740dcdc1a151"
    const virtualArray = new Array(20).fill(0)
    return(
        <div style={{overflow: "hidden", position: "relative"}}>
            <Header/>
            <ToTop/>
            <main className={gridMainStyle}>
                {
                    virtualArray.map((v, i) => <Image url={imageUrl} idx={i} key={v}/>)
                }
            </main>
        </div>
    )
}

export default IWantHappy