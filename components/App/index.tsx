import { useState } from 'react';

import LineCard from '../LineCard';
import CardPrimary from '../LineCard/CardPrimary';

import styles from './styles.module.scss';

export default function App() {
    let [ button, setButton ] = useState(false);

    // userNickName?: string;
    // numberFollower?: number;
    // nameForNumber?: string;
    // growth?: number;
    // typeColorSocial: string;
    // iconColorSocial?: string;

    const cardsPrimary = [
        {
            id: 1,
            userNickName: "@nathanf",
            numberFollower: 1987,
            nameForNumber: "FOLLOWERS",
            growth: 12,
            typeColorSocial: "facebook",
            iconSocialNetwork: "/icon-facebook.svg",
            altSocialNetwork: "facebook icon"
        },
        {
            id: 2,
            userNickName: "@nathanf",
            numberFollower: 1044,
            nameForNumber: "FOLLOWERS",
            growth: 99,
            typeColorSocial: "twitter",
            iconSocialNetwork: "/icon-twitter.svg",
            altSocialNetwork: "twitter icon"
        },
        {
            id: 3,
            userNickName: "@realnathanf",
            numberFollower: 11000,
            nameForNumber: "FOLLOWERS",
            growth: 1099,
            typeColorSocial: "instagram",
            iconSocialNetwork: "/icon-instagram.svg",
            altSocialNetwork: "instagram icon"
        },
        {
            id: 4,
            userNickName: "Nathan F.",
            numberFollower: 8239,
            nameForNumber: "SUBSCRIBERS",
            growth: -144,
            typeColorSocial: "youtube",
            iconSocialNetwork: "/icon-youtube.svg",
            altSocialNetwork: "youtube icon"
        }
    ]

    return (
        <div id={styles.App}>
            <div id={styles.container}>
                <LineCard
                    title="Social Media Dashboard"
                    toggleText={true}
                    smallText="Total Followers: 23,004"
                    toggleButton={true}
                    valueButton={ button }
                    clickButton={() => setButton(!button)}
                >
                    {
                        cardsPrimary.map(item => (
                            <CardPrimary
                                key={item.id}
                                userNickName={item.userNickName}
                                numberFollower={item.numberFollower}
                                nameForNumber={item.nameForNumber}
                                growth={item.growth}
                                typeColorSocial={item.typeColorSocial}
                                iconSocialNetwork={item.iconSocialNetwork}
                                altSocialNetwork={item.altSocialNetwork}
                            />
                        ))
                    }
                </LineCard>
            </div>
        </div>
    )
}