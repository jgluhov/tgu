import { useStore } from '@/store';
import styles from './curriculum-drafting.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurriculumAPI } from '@/apis/CurriculumAPI';
import EnrolleeInfo from '../enrollee-info/EnrolleeInfo';
import SummaryTable from './components/summary-table/SummaryTable';
import Button from '@/components/button/Button';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import EnrolleeDisciplineTable from './components/enrollee-discipline-table/EnrolleeDisciplineTable';
import CurriculumDisciplineTable from './components/curriculum-discipline-table/CurriculumDisciplineTable';

const CurriculumDrafting = () => {
  const { state, dispatch } = useStore();
  const [ curriculum, setCurriculum ] = useState(null);
  const { curriculumId } = useParams<string>();

  useEffect(() => {
    CurriculumAPI.get(curriculumId).then(curriculum => {
      dispatch({ type: 'set-curriculum', payload: curriculum });
    })
  }, [curriculumId, dispatch]);

  useEffect(() => {
    setCurriculum(state.curriculum);
  }, [state.curriculum])



  return (
    <>
      { state.enrollee && (
        <div className={styles.header}>
          <div className={styles.summary}>
            <SummaryTable className={styles.summaryTable} />
            <div className={styles.actions}>
              <Button color="primary" className={styles.actionButton}>Сохранить ИУП</Button>
              <Button color="primary" className={styles.actionButton}>Утвердить ИУП</Button>
            </div>
          </div>
          <EnrolleeInfo
            className={styles.enrolleeInfo}
            tileClassName={styles.enrolleeInfoTile}
            enrollee={state.enrollee}
            curriculum={curriculum} />
        </div>
      )}
      { curriculum && (
        <div className={styles.contentWrapper}>
          <ScrollContainer mouseScroll={{ ignoreElements: 'section' }}>
            <div className={styles.content}>
              <div className={styles.tableWrapper}>
                <h6 className={styles.tableTitle}>Дисциплины пройденный абитуриентом</h6>
                <EnrolleeDisciplineTable disciplines={curriculum.enrolleeDisciplines} />
              </div>
              <div className={styles.tableWrapper}>
                <h6 className={styles.tableTitle}>Дисциплины БУПа № ${curriculum?.id}</h6>
                <CurriculumDisciplineTable disciplines={curriculum.curriculumDisciplines} />
              </div>
            </div>
          </ScrollContainer>
        </div>
      )}
    </>
  );
}

export default CurriculumDrafting;
