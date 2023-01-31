import clsx from 'clsx';

import Link from '@components/link/Link';
import Tile from '@/components/tiles/components/tile/Tile';
import Tiles from '@components/tiles/Tiles';
import { IEnrollee } from '@/interfaces/enrollee.interface';
import styles from './enrollee-info.module.scss';
import { IPersonalCurriculum } from '@/interfaces/personal-curriculum.interface';
import { CurriculumStatus } from '@/constants/curriculum-status';

interface IEnrolleeInfoProps {
  enrollee: IEnrollee;
  curriculum?: IPersonalCurriculum;
  className?: string;
  tileClassName?: string;
}

const statuses = [
  { status: CurriculumStatus.Preparing, label: 'Оформляемый' },
  { status: CurriculumStatus.Created, label: 'Создан' },
  { status: CurriculumStatus.Approved, label: 'Утвержден' }
]

const getStatus = (status: CurriculumStatus) => {
  return statuses.find(s => s.status === status)
}


const EnrolleeInfo = (props: IEnrolleeInfoProps) => {
  return (
    <Tiles className={clsx(styles.tiles, props.className)}>
      <Tile className={clsx(styles.tile, props.tileClassName)} key={1} title={'ФИО абитуриента'}>
        {props.enrollee.fullName}
      </Tile>
      <Tile className={clsx(styles.tile, props.tileClassName)} key={2} title={'Траектория поступления'}>
        {props.enrollee.trajectory}
      </Tile>
      <Tile className={clsx(styles.tile, props.tileClassName)} key={3} title={'Направление'}>
        {props.enrollee.direction}
      </Tile>
      <Tile className={clsx(styles.tile, props.tileClassName)} key={4} title={'Профиль (предпочтительный)'}>
        {props.enrollee.educationProfile}
      </Tile>
      { props.curriculum && (
        <Tile className={clsx(clsx(styles.tile, props.tileClassName), styles[getStatus(props.curriculum.status).status])} key={5} title={'Статус (ИУП)'}>
          {getStatus(props.curriculum.status).label}
        </Tile>
      )}
      <Tile className={styles.documentsTile} key={6} title={'Предыдущее образование'}>
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
