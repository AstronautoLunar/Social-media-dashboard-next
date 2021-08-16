import { ThemeDarkProvider } from '../contexts/useThemeDark'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeDarkProvider>
      <Component {...pageProps} />
    </ThemeDarkProvider>
  )
}

export default MyApp
