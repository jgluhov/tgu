import { IEnrolleeDirection } from '@/interfaces/enrollee-direction.interface';
import React from 'react';

import styles from './curriculums-table.module.scss';
import commonStyles from '../../curriculum-schedule.module.scss';
import { getCourses, getSemesters, getCurriculums } from '../../curriculum-table.utils';
import { useTable } from 'react-table';
import clsx from 'clsx';

interface ICurriculumsTableProps {
  directions: IEnrolleeDirection[];
}

const CurriculumsTable = (props: ICurriculumsTableProps) => {
  const columns = React.useMemo(
    () => {
      let courses = getCourses(props.directions);
      return courses.map(course => {
        let semesters = getSemesters(props.directions, course);
        return {
          id: `course-${course}`,
          Header: `Курс ${course}`,
          columns: semesters.map(semester => {
            let curriculums = getCurriculums(props.directions, course, semester);

            return curriculums.map(curriculum => {
              return {
                id: `curriculum-${course}-${semester}-${curriculum.from}`
                Header: ''
              }
            });
          })
        }
      })
    },
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
    <table className={commonStyles.curriculumSchedule} {...getTableProps()}>
      <thead>
        { headerGroups.map(headerGroup => (
          <tr className={commonStyles.curriculumScheduleHeaderRow}
            {...headerGroup.getHeaderGroupProps()}>
            { headerGroup.headers.map(column => (
                <th className={commonStyles.curriculumScheduleHeader}
                  { ...column.getHeaderProps() }>
                  { column.render('Header')}
                </th>
              )
            )}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        { rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              { row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
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

export default CurriculumsTable;
