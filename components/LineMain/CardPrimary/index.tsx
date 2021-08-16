import useActiveTheme from '../../../hooks/useActiveTheme';

import Image from 'next/image';

import { useThemeDark } from '../../../contexts/useThemeDark';

import styles from "./styles.module.scss";

type CardPrimaryData = {
    userNickName?: string;
    numberFollower?: number;
    nameForNumber?: string;
    growth?: number;
    typeColorSocial: string;
    iconSocialNetwork?: string;
    altSocialNetwork?: string;
}

export default function CardPrimary({
    userNickName,
    numberFollower,
    nameForNumber,
    growth,
    typeColorSocial,
    iconSocialNetwork, 
    altSocialNetwork
}: CardPrimaryData) {
    let { themeColor } = useThemeDark();

    let [ contentRef ] = useActiveTheme({
        colorDarkMouseMove: "var(--active-dark-theme-card)",
        colorDarkMouseOut: "var(--dark-desaturated-blue-card-bg)",
        colorLightMouseMove: "var(--active-light-Theme-card)",
        colorLightMouseOut: "var(--light-grayish-blue-card-bg)"
    })

    let [ colorCardPrimaryContent ] = themeColor({
        colorLight: "var(--light-grayish-blue-card-bg)",
        colorDark: "var(--dark-desaturated-blue-card-bg)"
    })
    let [ colorTextNormal ] = themeColor({
        colorLight: "var(--dark-grayish-blue-text)",
        colorDark: "var(--desaturated-blue-text)"
    })
    let [ colortextBold ] = themeColor({
        colorLight: "var(--very-dark-blue-text)",
        colorDark: "var(--white-text)"
    })

    function changeTypeColorSocialNetwork(typeColorSocial: string) {
        if(typeColorSocial === "instagram") {
            return {
                backgroundImage: "linear-gradient(to right, var(--instagram-linear-gradient-from), var(--instagram-linear-gradient-to))",
            }
        } else if(typeColorSocial === "facebook") {
            return {
                backgroundColor: "var(--facebook)",
            }
        } else if(typeColorSocial === "twitter") {
            return {
                backgroundColor: "var(--twitter)",
            }
        } else if(typeColorSocial === "youtube") {
            return {
                backgroundColor: "var(--youtube)",
            }
        }
    }

    return (
        <div className={styles.CardPrimary}>
            <div 
                className={styles.border}
                style={changeTypeColorSocialNetwork(typeColorSocial)}
            />
            <div 
                className={styles.content}
                style={{
                    backgroundColor: colorCardPrimaryContent
                }}
                ref={ contentRef }
            >
                <div className={styles.socialNetwork}>
                    <Image
                        width={25}
                        height={25}
                        src={ iconSocialNetwork }
                        alt={ altSocialNetwork }
                    />

                    <span 
                        className={styles.textUserNickName}
                        style={{
                            color: colorTextNormal
                        }}
                    >{ userNickName }</span>
                </div>
                <div className={styles.followers}>
                    <span 
                        className={styles.followersNumber}
                        style={{
                            color: colortextBold,
                        }}
                    >{ 
                        numberFollower > 10000
                        ?
                        `${numberFollower / 1000}k`
                        :
                        numberFollower
                    }</span>
                    <span 
                        className={styles.followersType}
                        style={{
                            color: colorTextNormal,
                        }}
                    >{ nameForNumber }</span>
                </div>
                <div
                    className={styles.growth}
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
                    <div className={styles.image}>
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
                    {
                        growth > 0
                        ?
                        growth
                        :
                        growth*-1
                    } Today
                </div>
            </div>
        </div>
    )
}