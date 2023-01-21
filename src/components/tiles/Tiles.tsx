import React from 'react';
import clsx from 'clsx';

import styles from './tiles.module.scss'

interface ITilesProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Tiles = (props: ITilesProps) => {
  return (
    <div className={clsx(styles.tiles, props.className)}>
      { props.children }
    </div>
  )
}

export default Tiles;
