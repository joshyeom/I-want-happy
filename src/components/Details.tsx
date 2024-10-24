import { detailsStyles, paragraphStyles, titleStyle } from "../styles/components/Details.css";

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
            <h1 className={titleStyle}>{ details?.title }</h1>
            <p className={paragraphStyles} style={{paddingBottom: '10px'}}>{ details?.first }</p>
            <p className={paragraphStyles}>{ details?.second }</p>
        </section>
    )
}