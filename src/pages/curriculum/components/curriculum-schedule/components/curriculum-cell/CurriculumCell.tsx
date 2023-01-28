import { IEnrolleeCurriculum } from '@/interfaces/enrollee-basic-curriculum.interface';
import clsx from 'clsx';
import styles from './curriculum-cell.module.scss';
import { IEnrolleeDirection } from '@interfaces/enrollee-direction.interface';
import Link from '@/components/link/Link';

interface ICurriculumCellProps {
  value: {
    direction: IEnrolleeDirection,
    curriculum: IEnrolleeCurriculum
  }
}

const CurriculumCell = ({ value }: ICurriculumCellProps) => {

  if (!value) {
    return null;
  }

  return (
    <section className={clsx(
      value && styles.curriculumCell,
      value?.direction?.isPreferred && styles.curriculumCellPreferred)}>
        <Link className={styles.curriculumCellLink}>БУП { value?.curriculum?.id }</Link>
    </section>
  );
}

export default CurriculumCell;
