import { useStore } from '@/store';
import styles from './curriculum-drafting.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CurriculumAPI } from '@/apis/CurriculumAPI';
import EnrolleeInfo from '../enrollee-info/EnrolleeInfo';

const CurriculumDrafting = () => {
  const { state, dispatch } = useStore();
  const { curriculumId } = useParams<string>();

  useEffect(() => {
    CurriculumAPI.get(curriculumId).then(curriculum => {
      dispatch({ type: 'set-curriculum', payload: curriculum });
    })
  }, [curriculumId, dispatch]);

  return (
    <>
      { state.enrollee && (
        <EnrolleeInfo
          className={styles.curriculumDraftingEnrolleeInfo}
          enrollee={state.enrollee}
          curriculum={state.curriculum} />
      )}
    </>
  );
}

export default CurriculumDrafting;
