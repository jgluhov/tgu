import { ICurriculumDiscipline } from '@/interfaces/curriculum-discipline.interface';
import styles from './curriculum-discipline-table.module.scss';
import React from 'react';
import { Column, useTable } from 'react-table';

interface ICurriculumDisciplineTableProps {
  disciplines: ICurriculumDiscipline[];
}

const CurriculumDisciplineTable = (props: ICurriculumDisciplineTableProps) => {
  const columns = React.useMemo(() => {
    return [
      {
        id: 'reset-discipline-id',
        Header: 'Чем пере-зачтено',
        accessor: (d: ICurriculumDiscipline) => d?.enrolleeDiscipline?.id
      },
      {
        Header: 'Дисциплина по плану',
        accessor: 'name'
      },
      {
        Header: 'Перезачитываемая дисциплина',
        accessor: (d: ICurriculumDiscipline) => d?.enrolleeDiscipline?.name
      },
      {
        Header: 'Семестр',
        accessor: 'semester'
      },
      {
        Header: 'Семестр ИУП',
        accessor: 'enrolleeSemester'
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
        Header: 'Контроль',
        accessor: 'control'
      },
      {
        Header: 'Оценка',
        accessor: 'mark'
      },
      {
        Header: 'ЗЕТ в нагрузку',
        accessor: 'type'
      },
      {
        Header: 'Год нагрузки',
        accessor: 'year'
      }
    ] as Column[];
  }, []);

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

export default CurriculumDisciplineTable;
