import { useEffect, useState } from 'react';
import Page from '@components/page/Page';
import { useParams } from 'react-router-dom';
import { StudentAPI } from '../../apis/StudentAPI';
import StudentTileList from './components/student-tile-list/StudentTileList';


export interface StudentProps {
}

const Student = (props: StudentProps) => {
  const { studentId } = useParams<string>();
  const [ student, setStudent ] = useState(null);

  useEffect(() => {
    StudentAPI.get(studentId).then(student => {
      debugger
      setStudent(student);
    })
  }, [studentId]);

  return (
    <Page>
      <StudentTileList student={student}></StudentTileList>
    </Page>
  )
}

export default Student;
