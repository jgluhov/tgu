import { useEffect, useState } from 'react';
import Page from '@components/page/Page';
import { useParams } from 'react-router-dom';
import { StudentAPI } from '../../apis/StudentAPI';
import StudentTiles from './components/student-tiles/StudentTiles';
import styles from './student.module.scss';


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
      { student && <StudentTiles student={student}></StudentTiles> }
    </Page>
  )
}

export default Student;
