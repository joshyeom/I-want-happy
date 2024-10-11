import Header from "../components/Header"
import Card from "../components/Card"
import ToTop from "../components/ToTop"
import { gridMainStyle } from "../styles/styles.css"
import { useFetchImages } from "../hooks/useFetchImages"

const WithLove = () => {
  const { isLoading, error, data } = useFetchImages('withlove')

  if (isLoading) return <div>is Loading...</div>;

  if (error) return <div>Error</div>

    return(
        <div style={{overflow: "hidden", position: "relative"}}>
            <Header/>
            <ToTop/>
            <main className={gridMainStyle}>
                {
                  data?.map((v, i) => <Card url={v} alt={`With Love Image ${i}`} idx={i} key={v}/>)
                }
            </main>
        </div>
    )
}

export default WithLove