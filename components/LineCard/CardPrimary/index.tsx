import Image from 'next/image';

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
            <div className={styles.content}>
                <div className={styles.socialNetwork}>
                    <Image
                        width={25}
                        height={25}
                        src={ iconSocialNetwork }
                        alt={ altSocialNetwork }
                    />

                    <span 
                        className={styles.textUserNickName}
                    >{ userNickName }</span>
                </div>
                <div className={styles.followers}>
                    <span className={styles.followersNumber}>{ numberFollower }</span>
                    <span className={styles.followersType}>{ nameForNumber }</span>
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
                        growth
                    } 
                    
                    Today
                </div>
            </div>
        </div>
    )
}