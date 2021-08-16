import styles from './styles.module.scss';

type LineSecundaryData = {
    children: JSX.Element[] | JSX.Element;
    title: string;
}

export default function LineSecundary({ 
    children, 
    title 
}: LineSecundaryData) {
    return (
        <div id={styles.LineSecundary}>
            <h1 id={styles.title}>{ title }</h1>
            <div id={styles.layout}>
                { children }
            </div>
        </div>
    )
}