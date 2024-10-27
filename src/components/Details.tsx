import { detailsStyles, paragraphStyles, titleStyle } from "../styles/components/Details.css";

export const Details = ({details}: {details: string[]}) => {
    return(
        <section className={detailsStyles}>
            <div style={{height: '133px', paddingBottom: '28px'}}>
                <h1 className={titleStyle}>{ details ? details[0] : null }</h1>
            </div>
            {details ? details.slice(1, details.length).map((detail) => (
                <p className={paragraphStyles} style={{paddingBottom: '10px'}}>{ detail }</p>
            )): null}
        </section>
    )
}