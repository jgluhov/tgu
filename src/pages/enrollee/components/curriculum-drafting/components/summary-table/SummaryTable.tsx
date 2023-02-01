import React from 'react';
import styles from './summary-table.module.scss';
import { Column, useTable } from 'react-table';
import clsx from 'clsx';

interface ISummaryTableProps {
  className?: string;
}

interface ISummaryTableData {
  text: string;
  value: number;
  total?: boolean;
}

const SummaryTable = (props: ISummaryTableProps) => {
  const courseTotals = React.useMemo(() => {
    return [0, 0, 42, 75, 71, 0]
  }, []);

  const data: ISummaryTableData[] = React.useMemo(() => {
    return [
      ...courseTotals.map((total, indx) => ({
        text: `Итого ЗЕТ на ${indx + 1} курсе:`, value: total
      })),
      { text: 'Переаттестовано (перезачтено)', value: 0 },
      { text: 'Целевой показатель ЗЕТ на курс', value: 0, total: true },
      { text: 'Качество ИУП, %', value: 0, total: true }
    ]
  }, [courseTotals]);

  const columns = React.useMemo(
    () => [
      { accessor: 'text' },
      { accessor: 'value' }
    ] as Column[],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: data
  })

  return (
    <table className={clsx(styles.table, props.className)} {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        { rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps() }>
              { row.cells.map(cell => (
                  <td className={clsx(
                    styles.tableData,
                    (row.original as ISummaryTableData).total && styles.tableDataTotal)
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
}

export default SummaryTable;
