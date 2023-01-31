import React from 'react';
import { useNavigate } from 'react-router-dom';

import DirectionsTable from './components/directions-table/DirectionsTable'
import styles from './curriculum-selection.module.scss'
import CurriculumsTable from './components/curriculums-table/CurriculumsTable';
import CurriculumStatuses from './components/curriculum-statuses/CurriculumStatuses';
import { useStore } from '@/store';
import EnrolleeInfo from '../enrollee-info/EnrolleeInfo';

const CurriculumSelection = () => {
  const { state } = useStore();
  const navigate = useNavigate();

  const handleOpen = React.useCallback((curriculumId: string) => {
    navigate(`curriculum/${curriculumId}`);
  }, [navigate]);

  const handleCreate = React.useCallback(() => {
    console.log('create');
    debugger
  }, []);

  return (
    <>
    { state.enrollee && (
      <>
        <EnrolleeInfo
          className={styles.curriculumSelectionEnrolleeInfo}
          tileClassName={styles.curriculumSelectionEnrolleeInfoTile}
          enrollee={state.enrollee} />

        <CurriculumStatuses className={styles.curriculumSelectionStatuses} />
        <div className={styles.curriculumSelectionWrapper}>
          <div className={styles.curriculumSelectionContent}>
            <DirectionsTable directions={state.enrollee?.directions} />
            <CurriculumsTable directions={state.enrollee?.directions} onOpen={handleOpen} onCreate={handleCreate} />
          </div>
        </div>
      </>
    )}
    </>
  )
}

export default CurriculumSelection;
