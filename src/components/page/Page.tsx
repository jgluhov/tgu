import React from 'react';
import styles from './page.module.scss'

interface PageProps {
    children: React.ReactNode;
}

const Page = (props: PageProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.pageContent}>
        { props.children }
      </div>
    </div>
  )
}

export default Page;
