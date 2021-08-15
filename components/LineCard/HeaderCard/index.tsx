import { 
    useEffect, 
    useState, 
    useRef, 
} from 'react';

import ButtonTheme from './ButtonTheme';

import styles from './styles.module.scss';

type HeaderData = {
    title: string;
    toggleText: boolean;
    smallText?: string;
    toggleButton: boolean;
    valueButton: boolean;
    clickButton: () => void;
    textButton: string;
}

export default function HeaderCard({ 
    title,
    toggleText,
    smallText, 
    toggleButton, 
    valueButton,
    clickButton,
    textButton
}: HeaderData) {
    let [ bar, setBar ] = useState(false);
    let barRef = useRef(null);
    
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
                <h1 className={styles.title}>{ 
                    title 
                }</h1>
                {
                    toggleText
                    &&
                    <h3 className={styles.smallText}>{ 
                        smallText 
                    }</h3>
                }
            </div>
            {
                bar
                &&
                <div className={styles.lineBar}/>
            }
            {
                toggleButton
                &&
                <ButtonTheme
                    text={ textButton }
                    value={ valueButton }
                    click={ clickButton }
                />
            }
        </header>
    )
}