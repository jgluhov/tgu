import { IEnrolleeDiscipline } from '@/interfaces/enrollee-discipline';
import styles from './enrollee-discipline-table.module.scss';
import React from 'react';
import { Column, useTable } from 'react-table';

interface IEnrolleeDisciplineTableProps {
  disciplines: IEnrolleeDiscipline[];
}

const EnrolleeDisciplineTable = (props: IEnrolleeDisciplineTableProps) => {
  const columns = React.useMemo(() => {
    return [
      {
        id: 'enrollee-index',
        Header: '',
        accessor: (d: IEnrolleeDiscipline) => props.disciplines.indexOf(d) + 1
      },
      {
        Header: 'Дисциплина',
        accessor: 'name'
      },
      {
        Header: 'ЗЕТ',
        accessor: 'zet'
      },
      {
        Header: 'Часы',
        accessor: 'hours'
      },
      {
        Header: 'Тип',
        accessor: 'type'
      },
      {
        Header: 'Оценка',
        accessor: 'mark'
      }
    ] as Column[];
  }, [props.disciplines]);

  const data = React.useMemo(() => {
    return props.disciplines;
  }, [props.disciplines]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
  })

  return (
    <div className={styles.wrapper}>
      <table {...getTableProps()}>
        <thead>
          { headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                { headerGroup.headers.map(column => (
                    <th className={styles.tableHeader} { ...column.getHeaderProps() }>
                      { column.render('Header')}
                    </th>
                  )
                )}
              </tr>
            )
          })
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          { rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                { row.cells.map((cell) => (
                    <td className={styles.tableData} {...cell.getCellProps()}>
                      { cell.render('Cell')}
                    </td>
                  )
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EnrolleeDisciplineTable;
