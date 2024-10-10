import Header from "../components/Header"
import { mainStyle } from "../styles/styles.css"

const IWantHappy = () => {
    return(
        <div style={{overflow: "hidden"}}>
            <Header/>
            <main className={mainStyle}>
            </main>
        </div>
    )
}

export default IWantHappy