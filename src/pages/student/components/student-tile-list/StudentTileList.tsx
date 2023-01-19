import Link from '@components/link/Link';
import TileList from '@components/tile-list/TileList';
import Tile from '@components/tile/Tile';
import { IStudent } from '../../interfaces/student.interface';
import styles from './student-tile-list.module.scss';

interface IStudentTileListProps {
  student: IStudent;
}

const StudentTileList = (props: IStudentTileListProps) => {
  return (
    <TileList className={styles.studentTileList}>
      <Tile title={'ФИО абитуриента'}>
        <div className={styles.studentTileText}>{props.student.name}</div>
      </Tile>
      <Tile title={'Траектория поступления'}>
        <div className={styles.studentTileText}>{props.student.trajectory}</div>
      </Tile>
      <Tile title={'Направление'}>
        <div className={styles.studentTileText}>{props.student.direction}</div>
      </Tile>
      <Tile title={'Профиль (предпочтительный)'}>
        <div className={styles.studentTileText}>{props.student.profile}</div>
      </Tile>
      <Tile title={'Предыдущее образование'}>
        { props.student.educations.map((education) => (
          <Link to={education.link}  className={styles.studentLink}>{education.name}</Link>
        )) }
      </Tile>
    </TileList>
  )
}

export default StudentTileList;
