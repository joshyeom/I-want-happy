import { detailsStyles, paragraphStyles, titleStyle } from "../styles/components/Details.css";

export const Details = ({details}: {details: string[]}) => {
    return(
        <section className={detailsStyles}>
            <h1 className={titleStyle}>{ details ? details[0] : null }</h1>
            {details ? details.slice(1, details.length).map((detail) => (
                <p className={paragraphStyles} style={{paddingBottom: '10px'}}>{ detail }</p>
            )): null}
        </section>
    )
}