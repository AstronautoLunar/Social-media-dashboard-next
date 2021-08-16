import styles from './styles.module.scss';

type ButtonThemeData = {
    click?: () => void;
    value?: boolean;
    text?: string;
}

export default function ButtonTheme({
    click,
    value,
    text
}: ButtonThemeData) {
    return (

        <div className={
                value
                ?
                styles.ButtonThemeOn
                :
                styles.ButtonThemeOff
            }
        >
            <span className={styles.text}>
                { text }
            </span>
            <div 
                className={styles.button}
                onClick={click}
            >
                <div className={styles.circle}/>
            </div>
        </div>
    );
}