import { IEnrolleeDirection } from '@/interfaces/enrollee-direction.interface';
import React from 'react';
import { useTable } from 'react-table';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-tooltip/dist/react-tooltip.css'
import 'react-indiana-drag-scroll/dist/style.css';

import styles from './curriculums-table.module.scss';
import commonStyles from '../../curriculum-schedule.module.scss';
import { getCourses, getSemesters, getCurriculums } from '../../curriculum-table.utils';
import CurriculumCell from '../curriculum-cell/CurriculumCell';

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
            return {
              id: `course-${course}-semester-${semester}`,
              Header: `Семестр ${semester}`,
              columns: curriculums.map(curriculum => ({
                id: `course-${course}-${semester}-curriculum-${curriculum.id}`,
                Header: format(parseISO(curriculum.from), 'dd MMM', { locale: ru }),
                Cell: CurriculumCell,
                accessor: (d: IEnrolleeDirection) => d.curriculums
                  .find(
                    c => c.course === course &&
                    c.semester === semester &&
                    c.from === curriculum.from
                  ) ? { curriculum, direction: d } : null
              }))
            }
          })
        }
      })
    },
    [props.directions]
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
    <ScrollContainer mouseScroll={{ ignoreElements: 'section' }}>
      <table className={commonStyles.curriculumSchedule} {...getTableProps()}>
        <thead>
          { headerGroups.map((headerGroup) => {
            return (
              <tr className={commonStyles.curriculumScheduleHeaderRow}
                {...headerGroup.getHeaderGroupProps()}>
                { headerGroup.headers.map(column => (
                    <th className={clsx(commonStyles.curriculumScheduleHeader, styles.curriculumsTableHeader, !column.headers && styles.curriculumsTableHeaderLast)}
                      { ...column.getHeaderProps() }>
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
          { rows.map((row, rowIndx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                { row.cells.map((cell) => (
                    <td className={clsx(
                      styles.curriculumsTableData,
                      rowIndx === 0 && styles.curriculumsTableDataFirst)
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
    </ScrollContainer>
  )
}

export default CurriculumsTable;
