import clsx from 'clsx';
import React from 'react';
import styles from './curriculum-statuses.module.scss';

import { CurriculumStatus } from '../../constants/curriculum-status';

export interface ICurriculumStatus {
  status: CurriculumStatus;
  label: string;
}

export interface ITableInfoProps {
  className?: string;
}

const CurriculumStatuses = (props: ITableInfoProps) => {
  const curriculumStatuses: ICurriculumStatus[] = React.useMemo(() => {
    return [
      { status: CurriculumStatus.Preferred, label: 'Предпочитаемый профиль' },
      { status: CurriculumStatus.Issued, label: 'ИУП оформляемый' },
      { status: CurriculumStatus.Created, label: 'ИУП создан' },
      { status: CurriculumStatus.Confirmed, label: 'ИУП утвержден' }
    ]
  }, []);

  return (
    <div className={clsx(styles.curriculumStatuses, props.className)}>
      {curriculumStatuses.map((curriculumStatus: ICurriculumStatus, key) =>
        <div className={styles.curriculumStatus} key={key}>
          <span className={clsx(styles.curriculumStatusBadge, styles[curriculumStatus.status])}>
          </span>
          {curriculumStatus.label}
        </div>
      )}
    </div>
  )
}

export default CurriculumStatuses;
