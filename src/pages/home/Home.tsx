
import Page from '@components/page/Page';

import styles from './home.module.scss';


const Home = () => {
  return (
    <Page className={styles.homePage}>
      <div className={styles.home}>
        <h1 className={styles.homePageTile}>Для ТГУ</h1>
      </div>
    </Page>
  )
}

export default Home;
