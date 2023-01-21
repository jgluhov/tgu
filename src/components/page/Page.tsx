import clsx from 'clsx';
import React from 'react';
import styles from './page.module.scss'

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page = (props: PageProps) => {
  return (
    <div className={clsx(styles.page, props.className)}>
      <div className={styles.pageContent}>
        { props.children }
      </div>
    </div>
  )
}

export default Page;
