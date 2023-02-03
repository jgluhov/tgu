import { useDrag } from 'react-dnd';
import clsx from 'clsx';
import { IEnrolleeDiscipline } from '@/interfaces/enrollee-discipline.interface';
import styles from './index-cell.module.scss';
import { ItemTypes } from '../../../../constants/item-types.enum';

interface IEnrolleeDisciplineIndexCellProps {
  value: IEnrolleeDiscipline;
}

const EnrolleeDisciplineIndexCell = ({ value }: IEnrolleeDisciplineIndexCellProps) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.EnrolleeDiscipline,
      item: value,
      collect: monitor => ({
        isDragging: monitor.isDragging()
      })
    }),
    []
  )

  return (
    <section ref={dragRef}
      className={clsx(styles.indexCell, isDragging && styles.indexCellDragging)}>
        { value?.id }
    </section>
    );
}

export default EnrolleeDisciplineIndexCell
