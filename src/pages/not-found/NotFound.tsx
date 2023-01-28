import Page from '@/components/page/Page';
import styles from './not-found.module.scss';

const NotFound = () => {
  return (
    <Page className={styles.notFoundPage}>
      <div className={styles.notFound}>
        <h1 className={styles.notFoundText}>404</h1>
      </div>
    </Page>
  )
}

export default NotFound;
