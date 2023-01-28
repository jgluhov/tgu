import Link from '@components/link/Link';
import Tile from '@/components/tiles/components/tile/Tile';
import Tiles from '@components/tiles/Tiles';
import clsx from 'clsx';
import { IEnrollee } from '@/interfaces/enrollee.interface';
import styles from './enrollee-info.module.scss';

interface IEnrolleeInfoProps {
  enrollee: IEnrollee;
  className?: string;
}

const EnrolleeInfo = (props: IEnrolleeInfoProps) => {
  return (
    <Tiles className={clsx(styles.tiles, props.className)}>
      <Tile className={styles.tile} key={1} title={'ФИО абитуриента'}>
        {props.enrollee.fullName}
      </Tile>
      <Tile className={styles.tile} key={2} title={'Траектория поступления'}>
        {props.enrollee.trajectory}
      </Tile>
      <Tile className={styles.tile} key={3} title={'Направление'}>
        {props.enrollee.direction}
      </Tile>
      <Tile className={styles.tile} key={4} title={'Профиль (предпочтительный)'}>
        {props.enrollee.educationProfile}
      </Tile>
      <Tile className={styles.doubleTile} key={5} title={'Предыдущее образование'}>
        <Link to={props.enrollee.previousEducationDocumentsUrl} className={styles.link}>
          {props.enrollee.previousEducationDocumentsUrl}
        </Link>
        <Link to={props.enrollee.educationDocumentsUrl} className={styles.link}>
          {props.enrollee.educationDocumentsUrl}
        </Link>
      </Tile>
    </Tiles>
  )
}

export default EnrolleeInfo;
