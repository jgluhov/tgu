import clsx from 'clsx';
import React from 'react';
import { useTable, Column } from 'react-table';
import { IStudentSchedule } from '../../interfaces/student-schedule';
import StudentCell from '../student-cell/StudentCell';
import styles from './student-table.module.scss';

const StudentTable = () => {
  const data = React.useMemo(
    () => [
      {
        code: '270100.62',
        name: 'Промышленное и гражданское строительство',
        courses: [
          { semesters: [
            { days: [ { value: 1 } ] },
            { days: [ { value: 2 } ] }
          ] },
          { semesters: [
            { days: [ { value: 3 } ] },
            { days: [ { value: 4 } ] }
          ] },
          { semesters: [
            { days: [ { value: 4 } ] },
            { days: [ { value: 5 } ] }
          ] },
          { semesters: [
            { days: [ { value: 6 } ] },
            { days: [ { value: 7 } ] }
          ] },
          { semesters: [
            { days: [ { value: 8 } ] },
            { days: [ { value: 9 } ] }
          ] },
        ]
      },
      {
        code: '270100.62',
        name: 'Строительные конструкции, здания и сооружения',
        courses: [
          { semesters: [
            { days: [ { value: 1 } ] },
            { days: [ { value: 2 } ] }
          ] },
          { semesters: [
            { days: [ { value: 3 } ] },
            { days: [ { value: 4 } ] }
          ] },
          { semesters: [
            { days: [ { value: 4 } ] },
            { days: [ { value: 5 } ] }
          ] },
          { semesters: [
            { days: [ { value: 6 } ] },
            { days: [ { value: 7 } ] }
          ] },
          { semesters: [
            { days: [ { value: 8 } ] },
            { days: [ { value: 9 } ] }
          ] },
        ]
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Курс',
        accessor: 'course',
        columns: [{
            Header: 'Семестр',
            accessor: 'semester',
            columns: [{
              Header: 'Код профиля',
              accessor: 'code'
            }, {
              Header: 'Наименование',
              accessor: 'name'
            }]
        }] as Column[]
      },
      ...new Array(5).fill(0).map(
        (_, cIndx) => ({
          Header: `Курс ${cIndx + 1}`,
          id: `course-${cIndx}`,
          accessor: (d) => {
            console.log('d', d)
            debugger
            return d;
          },
          columns: [
            ...new Array(2).fill(0).map((_, sIndx: number) => {
              return {
                Header: `${sIndx + 1} семестр`,
                id: `semester-${cIndx}-${sIndx}`,
                accessor: (d: any) => {
                  console.log('d', d);
                  return d;
                },
                columns: [
                  ...new Array(3).fill(0).map((_, dayIndx) => ({
                    Header: '1 сен',
                    Cell: StudentCell,
                    id: `day-${cIndx}-${sIndx}-${dayIndx}`,
                    accessor: (d: IStudentSchedule) => {
                      let course = d.courses[cIndx];
                      let semester = course.semesters[sIndx];
                      let day = semester.days[dayIndx];
                      return day?.value;
                    }
                  }))
                ]
              }
            })
          ] as Column[],
        })) as Column[],
      ],
    []
  );

  const tableInstance = useTable({ columns: columns as any, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    // apply the table props
    <div className={styles.studentTableWrapper}>
      <div className={styles.studentTableContent}>
        <table className={styles.studentTable} {...getTableProps()}>
          <thead>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr className={styles.studentTableHeaderRow} {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => {
                  return (
                    // Apply the header cell props
                    <th className={clsx(
                      styles.studentTableHeader,
                      !column.headers && styles.studentTableHeaderLast)
                    } {...column.getHeaderProps()}>
                      {// Render the header
                      column.render('Header')}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
            rows.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <td className={styles.studentTableData} {...cell.getCellProps()}>
                        {// Render the cell contents
                        cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default StudentTable;
