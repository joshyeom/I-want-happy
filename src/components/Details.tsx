import { detailsStyles, paragraphBoxStyle, titleBoxStyle } from "../styles/components/Details.css";

export const Details = ({details}: {details: string[]}) => {
    return(
        <section className={detailsStyles}>
            <div className={titleBoxStyle}>
                <span>{ details ? details[0] : null }</span>
            </div>
            <div className={paragraphBoxStyle}>
                {details ? details.slice(1, details.length).map((detail) => (
                    <p style={{whiteSpace: 'pre-line',}}>{ detail }</p>
                )): null}
            </div>
        </section>
    )
}