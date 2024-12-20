import { useNavigate } from "react-router-dom"
import { buttonStyle, mainStyle, sectionStyle } from "../styles/pages/Home.css"
const Home = () => {
    const navigate = useNavigate()

    return(
        <main className={mainStyle}>
            <section className={sectionStyle}>
                <button className={buttonStyle} onClick={() => navigate('/happy')}>I WANT HAPPY</button>
                <button className={buttonStyle} onClick={() => navigate('/love')}>WITH LOVE</button>
                <button className={buttonStyle} onClick={() => navigate('/all/1-100')}>ALL</button>
            </section>
        </main>
    )
}

export default Home