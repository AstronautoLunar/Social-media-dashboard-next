import HeaderCard from './HeaderCard';

import styles from './styles.module.scss';

type LineCardData = {
    children: JSX.Element[] | JSX.Element;
    title: string;
    smallText?: string;
    valueButton: boolean;
    clickButton: () => void;
}

export default function LineMain({ 
    children, 
    title,
    smallText, 
    valueButton, 
    clickButton
}: LineCardData) {
    return (
        <div className={styles.LineMain}>
            <HeaderCard
                title={ title }
                smallText={ smallText }
                valueButton={ valueButton }
                clickButton={ clickButton }
                textButton="Dark Mode"
            />
            <div className={styles.cards}>
                { children }
            </div>
        </div>
    )
}