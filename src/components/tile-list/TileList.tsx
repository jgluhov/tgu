import React from 'react';
import clsx from 'clsx';

import styles from './tile-list.module.scss'

interface TileListProps {
  className: string;
  children: React.ReactNode | React.ReactNode[];
}

const TileList = (props: TileListProps) => {
  return (
    <div className={clsx(styles.tileList, props.className)}>
      { props.children }
    </div>
  )
}

export default TileList;
