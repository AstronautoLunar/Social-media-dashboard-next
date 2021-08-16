import { useThemeDark } from '../../contexts/useThemeDark';

import styles from './styles.module.scss';

type LineSecundaryData = {
    children: JSX.Element[] | JSX.Element;
    title: string;
}

export default function LineSecundary({ 
    children, 
    title 
}: LineSecundaryData) {
    let { themeColor } = useThemeDark();
    let [ colorTitle ] = themeColor({
        colorLight: "var(--very-dark-blue-text)",
        colorDark: "var(--white-text)"
    });

    return (
        <div id={styles.LineSecundary}>
            <h1 
                id={styles.title}
                style={{
                    color: colorTitle
                }}
            >{ title }</h1>
            <div id={styles.layout}>
                { children }
            </div>
        </div>
    )
}