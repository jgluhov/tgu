import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { IEnrolleeDirection } from '@interfaces/enrollee-direction.interface';
import Link from '@/components/link/Link';
import Button from '@/components/button/Button';
import { IEnrolleeCurriculum } from '@/interfaces/enrollee-basic-curriculum.interface';
import styles from './curriculum-cell.module.scss';
import CurriculumCellTooltip from '../curriculum-tooltip/CurriculumTooltip';


interface ICurriculumCellProps {
  value: {
    direction: IEnrolleeDirection,
    curriculum: IEnrolleeCurriculum
  }
}

const CurriculumCell = ({ value }: ICurriculumCellProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [tooltipId] = useState(String(Math.random()).slice(2))

  const handleMouseLeave = useCallback(() => setIsOpen(false), []);
  const handleMouseEnter = useCallback(() => setIsOpen(true), []);

  if (!value) {
    return null;
  }

  return (
    <>
      <section
        className={clsx(
        styles.curriculumCell,
        value?.direction?.isPreferred && styles.curriculumCellPreferred)}>
          <div className={styles.curriculumCellHeader}
            id={`tooltip-${tooltipId}`}>
            <span onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
              <Link className={styles.curriculumCellLink}>БУП { value?.curriculum?.id }</Link>
            </span>
          </div>
          <ul className={styles.curriculumCellList}>
            { value.curriculum.groups.map((group, indx) =>
              <li className={styles.curriculumCellListItem} key={indx}>
                { group.name } { group.studentCount }
              </li>
            )}
          </ul>
          <div className={styles.curriculumCellActions}>
            <Button color="primary" className={styles.curriculumCellButton}>Создать ИУП</Button>
          </div>
          <div className={styles.curriculumCellFooter}>Качество ИУП, %</div>
      </section>
      <CurriculumCellTooltip
        value={value}
        isOpen={isOpen}
        anchorId={`tooltip-${tooltipId}`}
        place={'right'}
      />
    </>
  );
}

export default CurriculumCell;
