import HeaderCard from './HeaderCard';

import styles from './styles.module.scss';

type LineCardData = {
    children: JSX.Element[] | JSX.Element;
    title: string;
    toggleText: boolean;
    smallText?: string;
    toggleButton: boolean;
    valueButton: boolean;
    clickButton: () => void;
}

export default function LineCard({ 
    children, 
    title,
    toggleText,
    smallText,
    toggleButton, 
    valueButton, 
    clickButton
}: LineCardData) {
    return (
        <div className={styles.LineCard}>
            <HeaderCard
                title={ title }
                toggleText={ toggleText }
                smallText={ smallText }
                toggleButton={ toggleButton }
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