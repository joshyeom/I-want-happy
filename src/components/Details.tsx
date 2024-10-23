import { detailsStyles } from "../styles/styles.css";

interface DetailsProps {
    details: {
        title: string;
        first: string;
        second: string;
    };
}
export const Details = ({details}: DetailsProps) => {
    return(
        <section className={detailsStyles}>
            <h1 style={{paddingBottom: '6px', fontSize: '66px', fontWeight: 'bold'}}>{ details?.title }</h1>
            <p style={{whiteSpace: 'pre-line'}}>{ details?.first }</p>
            <p style={{whiteSpace: 'pre-line'}}>{ details?.second }</p>
        </section>
    )
}