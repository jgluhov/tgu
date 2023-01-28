import DirectionsTable from './components/directions-table/DirectionsTable'
import styles from './curriculum-schedule.module.scss'
import { IEnrollee } from '@interfaces/enrollee.interface';
import CurriculumsTable from './components/curriculums-table/CurriculumsTable';

export interface ICurriculumScheduleProps {
  enrollee: IEnrollee;
}

const CurriculumSchedule = (props: ICurriculumScheduleProps) => {
  return (
    <div className={styles.curriculumScheduleWrapper}>
      <div className={styles.curriculumScheduleContent}>
        <DirectionsTable directions={props.enrollee.directions} />
        <CurriculumsTable directions={props.enrollee.directions} />
      </div>
    </div>
  )
}

export default CurriculumSchedule;
