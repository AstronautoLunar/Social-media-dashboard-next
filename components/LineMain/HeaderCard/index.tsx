import { 
    useEffect, 
    useState, 
    useRef, 
} from 'react';

import { useThemeDark } from '../../../contexts/useThemeDark';

import ButtonTheme from './ButtonTheme';

import styles from './styles.module.scss';

type HeaderData = {
    title: string;
    smallText?: string;
    valueButton: boolean;
    clickButton: () => void;
    textButton: string;
}

export default function HeaderCard({ 
    title,
    smallText, 
    valueButton,
    clickButton,
    textButton
}: HeaderData) {
    let [ bar, setBar ] = useState(false);
    let barRef = useRef(null);
    
    let { themeColor } = useThemeDark();
    let [ colorTitle ] = themeColor({
        colorLight: "var(--very-dark-blue-text)",
        colorDark: "var(--white-text)"
    })
    let [ colorSmallText ] = themeColor({
        colorLight: "var(--dark-grayish-blue-text)",
        colorDark: "var(--desaturated-blue-text)"
    })

    useEffect(() => {
        const mediaQuerieList = matchMedia("(max-width: 684px)");

        function showBar(mediaQuerieList) {
            if(mediaQuerieList.matches) {
                setBar(barRef.current = true);
            } else {
                setBar(barRef.current = false);
            }
        }

        showBar(mediaQuerieList);

        mediaQuerieList.addEventListener("change", showBar);
    }, [ 
        barRef, 
        setBar 
    ])

    return (
        <header className={styles.Header}>
            <div className={styles.lineText}>
                <h1 
                    className={styles.title}
                    style={{
                        color: colorTitle
                    }}    
                >{ 
                    title 
                }</h1>
                <h3 
                    className={styles.smallText}
                    style={{
                        color: colorSmallText
                    }}    
                >{ 
                    smallText 
                }</h3>
            </div>
            {
                bar
                &&
                <div className={styles.lineBar}/>
            }
            <ButtonTheme
                text={ textButton }
                value={ valueButton }
                click={ clickButton }
            />
        </header>
    )
}