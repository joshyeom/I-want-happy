import { useNavigate } from "react-router-dom"
import { buttonStyle, mainStyle, sectionStyle } from "../styles/styles.css"
const Home = () => {
    const navigate = useNavigate()

    return(
        <main className={mainStyle}>
            <section className={sectionStyle}>
                <button className={buttonStyle} onClick={() => navigate('/i-want-happy')}>I WANT HAPPY</button>
                <button className={buttonStyle} onClick={() => navigate('/work')} style={{paddingTop: "5px"}}>WITH LOVE</button>
                <button className={buttonStyle} onClick={() => navigate('/all/1-100')}>ALL</button>
            </section>
        </main>
    )
}

export default Home