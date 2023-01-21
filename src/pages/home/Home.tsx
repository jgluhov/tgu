import Link from '@/components/link/Link';
import Page from '@components/page/Page';

import styles from './home.module.scss';

const Home = () => {
  return (
    <Page>
      <div className={styles.home}>
        <Link to={'/student/1'}>Иванов Иван Иванович</Link>
      </div>
    </Page>
  )
}

export default Home;
