import { useEffect, useState } from 'react';
import Page from '@components/page/Page';
import { useParams } from 'react-router-dom';
import { StudentAPI } from '../../apis/StudentAPI';
import StudentTiles from './components/student-tiles/StudentTiles';
import styles from './student.module.scss';
import TableResources from './components/table-resources/TableResources';
import StudentTable from './components/student-table/StudentTable';


const Student = () => {
  const { studentId } = useParams<string>();
  const [ student, setStudent ] = useState(null);

  useEffect(() => {
    StudentAPI.get(studentId).then(student => {
      setStudent(student);
    })
  }, [studentId]);

  return (
    <Page className={styles.page}>
      { student && <StudentTiles className={styles.studentTiles} student={student} /> }
      <TableResources className={styles.tableResources} />
      <StudentTable />
    </Page>
  )
}

export default Student;
