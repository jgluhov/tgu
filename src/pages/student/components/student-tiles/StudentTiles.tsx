import Link from '@components/link/Link';
import Tile from '@/components/tiles/components/tile/Tile';
import Tiles from '@components/tiles/Tiles';
import clsx from 'clsx';
import { IStudent } from '../../interfaces/student.interface';
import styles from './student-tiles.module.scss';

interface IStudentTileListProps {
  student: IStudent;
  className?: string;
}

const StudentTileList = (props: IStudentTileListProps) => {
  return (
    <Tiles className={clsx(styles.tiles, props.className)}>
      <Tile className={styles.tile} key={1} title={'ФИО абитуриента'}>
        {props.student.name}
      </Tile>
      <Tile className={styles.tile} key={2} title={'Траектория поступления'}>
        {props.student.trajectory}
      </Tile>
      <Tile className={styles.tile} key={3} title={'Направление'}>
        {props.student.direction}
      </Tile>
      <Tile className={styles.tile} key={4} title={'Профиль (предпочтительный)'}>
        {props.student.profile}
      </Tile>
      <Tile className={styles.doubleTile} key={5} title={'Предыдущее образование'}>
        { props.student.educations.map((education, indx) => (
          <Link to={education.link} key={indx} className={styles.link}>{education.name}</Link>
        )) }
      </Tile>
    </Tiles>
  )
}

export default StudentTileList;
