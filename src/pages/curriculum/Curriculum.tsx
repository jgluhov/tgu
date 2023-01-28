import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Page from '@components/page/Page';
import { EnrolleeAPI } from '@/apis/EnrolleeAPI';

import EnrolleeInfo from './components/enrollee-info/EnrolleeInfo';
import styles from './curriculum.module.scss';
import CurriculumStatuses from './components/curriculum-statuses/CurriculumStatuses';
import CurriculumSchedule from './components/curriculum-schedule/CurriculumSchedule';


const Curriculum = () => {
  const { enrolleeId } = useParams<string>();
  const [ enrollee, setEnrollee ] = useState(null);

  useEffect(() => {
    EnrolleeAPI.get(enrolleeId).then(enrollee => {
      setEnrollee(enrollee);
    })
  }, [enrolleeId]);

  return (
    <Page className={styles.page}>
      { enrollee && (
        <>
          <EnrolleeInfo className={styles.enrolleeInfo} enrollee={enrollee} />
          <CurriculumStatuses className={styles.curriculumStatuses} />
          <CurriculumSchedule enrollee={enrollee} />
        </>
      ) }
    </Page>
  )
}

export default Curriculum;
