import { IEnrolleeCurriculum } from '@/interfaces/enrollee-basic-curriculum.interface';
import clsx from 'clsx';
import styles from './curriculum-cell.module.scss';

interface ICurriculumCellProps {
  value: IEnrolleeCurriculum;
}

const CurriculumCell = ({ value }: ICurriculumCellProps) => {
  return (
    <span className={clsx(value && styles.curriculumCell)}>
      { value.name }
    </span>
  );
}

export default CurriculumCell;
