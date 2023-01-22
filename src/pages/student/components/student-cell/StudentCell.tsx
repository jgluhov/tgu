import clsx from 'clsx';
import styles from './student-cell.module.scss';

interface IStudentCellProps {
  value: string;
}

const StudentCell = ({ value }: IStudentCellProps) => {
  return (
    <span className={clsx(value && styles.studentCell)}>
      { value }
    </span>
  );
}

export default StudentCell;
