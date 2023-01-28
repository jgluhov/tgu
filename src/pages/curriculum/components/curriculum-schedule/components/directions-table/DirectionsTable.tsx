import clsx from 'clsx';
import React from 'react';
import { useTable } from 'react-table';

import styles from './directions-table.module.scss';
import commonStyles from '../../curriculum-schedule.module.scss';
import { IEnrolleeDirection } from '@/interfaces/enrollee-direction.interface';

interface IEnrolleeScheduleProps {
  directions: IEnrolleeDirection[];
}

const DirectionsTable = (props: IEnrolleeScheduleProps) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Точки приёма',
        columns: [{
          Header: 'Код профиля',
          accessor: 'educationProfile'
        }, {
          Header: 'Наименование',
          accessor: 'direction'
        }]
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columns,
    data: props.directions,
  })

  return (
    <table className={clsx(commonStyles.curriculumSchedule, styles.directionsTable)} {...getTableProps()}>
      <thead>
        { headerGroups.map((headerGroup, rowIndx) => (
          <tr className={commonStyles.curriculumScheduleHeaderRow} {...headerGroup.getHeaderGroupProps()}>
            { headerGroup.headers.map(column => (
                <th className={clsx(
                  commonStyles.curriculumScheduleHeader,
                  rowIndx === 0 && styles.directionsTableHeaderFirst,
                  !column.headers && styles.directionsTableHeaderLast)
                } { ...column.getHeaderProps() }>
                  { column.render('Header')}
                </th>
              )
            )}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        { rows.map((row, rowIndx) => {
          prepareRow(row);
          return (
            <tr className={clsx(rowIndx === 0 && styles.directionsTableHeaderFirst)} {...row.getRowProps()}>
              { row.cells.map(cell => (
                  <td className={clsx(
                    styles.directionsTableData, rowIndx === 0 &&
                    styles.directionsTableDataFirst)
                  } {...cell.getCellProps()}>
                    { cell.render('Cell')}
                  </td>
                )
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

export default DirectionsTable;
