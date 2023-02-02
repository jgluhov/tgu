import styles from './scrolling.module.scss';
import withScrolling, { BoxType, Point, createVerticalStrength } from 'react-dnd-scrolling';

const DnDScrolling = withScrolling('div');

function ease(val: number): number {
  const t = (val + 1) / 2;
  const easedT = t <.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  return easedT * 2 - 1;
}

const linearVerticalStrength = createVerticalStrength(150);

const vStrength = (box: BoxType, point: Point) =>
  ease(linearVerticalStrength(box, point));

interface IScrollingProps {
  children: React.ReactNode;
}
const Scrolling = (props: IScrollingProps) => {
  return (
    <DnDScrolling
      className={styles.scrolling}
      verticalStrength={vStrength}>
      <>{ props.children }</>
    </DnDScrolling>
  )
}

export default Scrolling;
