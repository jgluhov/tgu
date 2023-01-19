import styles from './tile.module.scss'

interface TileProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const Tile = (props: TileProps) => {
  return (
    <div className={styles.tile}>
      <div className={styles.tileTitle}>{ props.title }</div>
      <div className={styles.tileContent}>
          { props.children }
      </div>
    </div>
  );
}

export default Tile;
