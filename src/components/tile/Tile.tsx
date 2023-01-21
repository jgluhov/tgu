import clsx from 'clsx';
import styles from './tile.module.scss'

interface TileProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Tile = (props: TileProps) => {
  return (
    <div className={clsx(styles.tile, props.className)}>
      <div className={styles.tileTitle}>{ props.title }</div>
      <div className={styles.tileContent}>
          { props.children }
      </div>
    </div>
  );
}

export default Tile;
