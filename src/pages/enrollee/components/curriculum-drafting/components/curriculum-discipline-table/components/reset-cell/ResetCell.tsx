import { DropTargetMonitor, useDrop } from 'react-dnd';
import styles from './reset-cell.module.scss';
import { ItemTypes } from '../../../../constants/item-types.enum';
import { IEnrolleeDiscipline } from '@/interfaces/enrollee-discipline';
import { ICurriculumDiscipline } from '@/interfaces/curriculum-discipline.interface';
import clsx from 'clsx';

interface IResetCellProps {
  value: {
    onDrop(enrolleeDiscipline: IEnrolleeDiscipline, curriculumDiscipline: ICurriculumDiscipline): void;
    discipline: ICurriculumDiscipline
  },
}

const moreThen = (percent: number) =>
  (enrolleeHours: number, curriculumHours: number) => (enrolleeHours / (curriculumHours / 100)) > percent;

const moreThen80 = moreThen(80);

const ResetCell = (props: IResetCellProps) => {
  const [{ forbidden, allowed }, dropRef] = useDrop({
    accept: ItemTypes.EnrolleeDiscipline,
    canDrop: (item: IEnrolleeDiscipline) => moreThen80(item.hours, props.value.discipline.hours),
    drop: (item: IEnrolleeDiscipline) => props.value.onDrop(item, props.value.discipline),
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver({shallow: true}),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
      forbidden: !monitor.canDrop() && monitor.isOver(),
      allowed: monitor.canDrop() && monitor.isOver()
    })
  });

  return (
    <div ref={dropRef} className={clsx(
        styles.resetCell,
        forbidden && styles.resetCellForbidden,
        allowed && styles.resetCellAllowed
    )}>
      { props.value?.discipline?.enrolleeDiscipline?.id }
    </div>
  )
}

export default ResetCell;
