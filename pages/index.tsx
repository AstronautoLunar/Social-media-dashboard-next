import { useThemeDark } from '../contexts/useThemeDark';

import IndexPages from './IndexPages';
import { 
  Header,
  LineMain,
  LineSecundary,
  CardPrimary,
  CardSecundary
} from '../components';

import styles from '../styles/Home.module.scss';

export default function Home() {
  let { 
    changeTheme, 
    toggleTheme,
    themeColor 
  } = useThemeDark();

  let [ colorBGTheme ] = themeColor({
    colorLight: "var(--white-bg-light-theme)",
    colorDark: "var(--very-dark-blue-bg)"
  })

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

  const cardsSecundary = [
    {
      id: 1,
      text: "Page Views",
      number: 87,
      iconSrc: "/icon-facebook.svg",
      altSrc: "icon facebook",
      growth: 3
    },
    {
      id: 2,
      text: "Likes",
      number: 52,
      iconSrc: "/icon-facebook.svg",
      altSrc: "icon facebook",
      growth: -2
    },
    {
      id: 3,
      text: "Likes",
      number: 5462,
      iconSrc: "/icon-instagram.svg",
      altSrc: "icon instagram",
      growth: 2257
    },
    {
      id: 4,
      text: "Profile Views",
      number: 52000,
      iconSrc: "/icon-instagram.svg",
      altSrc: "icon instagram",
      growth: 1375
    },
    {
      id: 5,
      text: "Retweets",
      number: 117,
      iconSrc: "/icon-twitter.svg",
      altSrc: "icon twitter",
      growth: 303
    },
    {
      id: 6,
      text: "Likes",
      number: 507,
      iconSrc: "/icon-twitter.svg",
      altSrc: "icon twitter",
      growth: 553
    },
    {
      id: 7,
      text: "Likes",
      number: 107,
      iconSrc: "/icon-youtube.svg",
      altSrc: "icon youtube",
      growth: -19
    },
    {
      id: 8,
      text: "Total Views",
      number: 1407,
      iconSrc: "/icon-youtube.svg",
      altSrc: "icon youtube",
      growth: -12
    },
  ]

  
  return (
    <div 
      className={styles.Home}
      style={{
        backgroundColor: colorBGTheme
      }}
    >
      <IndexPages/>
      <Header/>
      <div id={styles.container}>
        <LineMain
          title="Social Media Dashboard"
          smallText="Total Followers: 23,004"
          valueButton={ toggleTheme }
          clickButton={ changeTheme }
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
        </LineMain>
        <LineSecundary
          title="Overviem - Today"
        >
          {
            cardsSecundary.map(item => (
              <CardSecundary
                key={item.id}
                text={item.text}
                number={item.number}
                iconSrc={item.iconSrc}
                altIcon={item.altSrc}
                growth={item.growth}
              />
            ))
          }
        </LineSecundary>
      </div>
    </div>
  )
}
