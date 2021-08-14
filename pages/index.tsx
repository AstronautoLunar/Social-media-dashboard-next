import IndexPages from './IndexPages';
import { App } from '../components';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <IndexPages/>
      <App/>
    </div>
  )
}
