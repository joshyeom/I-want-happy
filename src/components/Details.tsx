import { detailsStyles, paragraphStyles, titleStyle } from "../styles/components/Details.css";

export const Details = ({details}: {details: string[]}) => {
    return(
        <section className={detailsStyles}>
            <div style={{height: '133px', display: 'flex', alignItems: 'center', paddingBottom: '41px'}}>
                <h1 className={titleStyle}>{ details ? details[0] : null }</h1>
            </div>
            <div style={{
                display: 'flex',
                width: '972px',
                height: '170px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {details ? details.slice(1, details.length).map((detail) => (
                    <p className={paragraphStyles}>{ detail }</p>
                )): null}
            </div>
        </section>
    )
}