import clsx from 'clsx';
import React from 'react';
import styles from './table-resources.module.scss';

export interface ITableResource {
  bgColor: string;
  label: string;
}

export interface ITableResourcesProps {
  className?: string;
}

const TableResources = (props: ITableResourcesProps) => {
  const tableResources: ITableResource[] = React.useMemo(() => {
    return [
      { bgColor: '#D0DBFF', label: 'Предпочитаемый профиль' },
      { bgColor: '#FCF3A6', label: 'ИУП оформляемый' },
      { bgColor: '#FDDDBF', label: 'ИУП создан' },
      { bgColor: '#BFEA94', label: 'ИУП утвержден' }
    ]
  }, []);

  return (
    <div className={clsx(styles.tableResources, props.className)}>
      {tableResources.map((tableResource: ITableResource, key) => {
        return (
          <div className={styles.tableResource} key={key}>
            <span className={styles.tableResourceBadge} style={{backgroundColor: tableResource.bgColor}}>
            </span>
            {tableResource.label}
          </div>
        )
      })}
    </div>
  )
}

export default TableResources;
