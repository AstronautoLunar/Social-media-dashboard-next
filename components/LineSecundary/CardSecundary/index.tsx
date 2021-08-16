import { useThemeDark } from '../../../contexts/useThemeDark';

import Image from 'next/image';

import styles from './styles.module.scss';

type CardSecundaryData = {
    text: string;
    number: number;
    iconSrc: string;
    altIcon: string;
    growth: number;
}

export default function CardSecundary({ 
    text, 
    number, 
    iconSrc, 
    altIcon, 
    growth 
}: CardSecundaryData) {
    let { themeColor } = useThemeDark();
    let [ colorCardSecundary ] = themeColor({
        colorLight: "var(--light-grayish-blue-card-bg)",
        colorDark: "var(--dark-desaturated-blue-card-bg)"
    })
    let [ colorText ] = themeColor({
        colorLight: "var(--dark-grayish-blue-text)",
        colorDark: "var(--desaturated-blue-text)"
    })
    let [ colorNumberText ] = themeColor({
        colorLight: "var(--very-dark-blue-text)",
        colorDark: "var(--white-text)"
    })

    return (
        <div 
            className={styles.CardSecundary}
            style={{
                backgroundColor: colorCardSecundary,
            }}
        >
            <div className={styles.lineOne}>
                <span 
                    className={styles.text}
                    style={{
                        color: colorText,
                    }}
                >{ text }</span>
                <Image
                    width={25}
                    height={25}
                    src={iconSrc}
                    alt={altIcon}
                />
            </div>
            <div className={styles.lineTwo}>
                <span 
                    className={styles.number}
                    style={{
                        color: colorNumberText,
                    }}
                >{ 
                    number > 10000
                    ?
                        `${number / 1000}k`
                    :
                        number
                }</span>
                <div className={styles.growth}
                    style={
                        growth > 0
                        ?
                        {
                            color: "var(--green-icon-up)"
                        }
                        :
                        {
                            color: "var(--red-icon-down)"
                        }
                    }
                >
                    <div className={styles.growthImage}>
                        {
                            growth > 0
                            ?
                            <Image
                                width={10}
                                height={5}
                                src="/icon-up.svg"
                                alt="icon up"
                            />
                            :
                            <Image
                                width={10}
                                height={5}
                                src="/icon-down.svg"
                                alt="icon down"
                            />
                        }
                    </div>
                    <span className={styles.growthNumber}>{
                        growth > 0
                        ?
                        growth
                        :
                        growth*-1
                    }</span>
                    %
                </div>
            </div>
        </div>
    )
}