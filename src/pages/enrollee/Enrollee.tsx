import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Page from '@components/page/Page';
import { EnrolleeAPI } from '@/apis/EnrolleeAPI';

import styles from './enrollee.module.scss';
import { useStore } from '@/store';


const Enrollee = () => {
  const { dispatch } = useStore();
  const { enrolleeId } = useParams<string>();

  useEffect(() => {
    EnrolleeAPI.get(enrolleeId).then(enrollee => {
      dispatch({ type: 'set-enrollee', payload: enrollee });
    })
  }, [enrolleeId, dispatch]);

  return (
    <Page className={styles.page}>
      <Outlet />
    </Page>
  )
}

export default Enrollee;
