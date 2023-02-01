import React from 'react';
import { useTable } from 'react-table';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ScrollContainer } from 'react-indiana-drag-scroll';

import { IEnrolleeDirection } from '@/interfaces/enrollee-direction.interface';
import styles from './curriculums-table.module.scss';
import commonStyles from '../../curriculum-selection.module.scss';
import { getCourses, getSemesters, getCurriculums } from '../../curriculum-table.utils';
import CurriculumCell from '../curriculum-cell/CurriculumCell';
import { IEnrolleeCurriculum } from '@/interfaces/enrollee-basic-curriculum.interface';

interface ICurriculumsTableProps {
  directions?: IEnrolleeDirection[];
  onOpen?: (curriculumId: string) => void;
  onCreate?: (curriculum: IEnrolleeCurriculum) => void;
}

const CurriculumsTable = ({ directions, onOpen, onCreate }: ICurriculumsTableProps) => {
  const columns = React.useMemo(
    () => {
      let courses = getCourses(directions);
      return courses.map(course => {
        let semesters = getSemesters(directions, course);
        return {
          id: `course-${course}`,
          Header: `Курс ${course}`,
          columns: semesters.map(semester => {
            let curriculums = getCurriculums(directions, course, semester);
            return {
              id: `course-${course}-semester-${semester}`,
              Header: `Семестр ${semester}`,
              columns: curriculums.map(curriculum => ({
                id: `course-${course}-${semester}-curriculum-${curriculum.id}`,
                Header: format(parseISO(curriculum.from), 'dd MMM', { locale: ru }),
                Cell: CurriculumCell,
                accessor: (direction: IEnrolleeDirection) => direction.curriculums
                  .find(
                    c => c.course === course &&
                    c.semester === semester &&
                    c.from === curriculum.from
                  ) ? { curriculum, direction, onOpen, onCreate  } : null
              }))
            }
          })
        }
      })
    },
    [directions, onCreate, onOpen]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columns,
    data: directions || [],
  })

  return (
    <ScrollContainer mouseScroll={{ ignoreElements: 'section' }}>
      <table className={commonStyles.curriculumSelection} {...getTableProps()}>
        <thead>
          { headerGroups.map((headerGroup) => {
            return (
              <tr className={commonStyles.curriculumSelectionHeaderRow}
                {...headerGroup.getHeaderGroupProps()}>
                { headerGroup.headers.map(column => (
                    <th className={clsx(commonStyles.curriculumSelectionHeader, styles.curriculumsTableHeader, !column.headers && styles.curriculumsTableHeaderLast)}
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
