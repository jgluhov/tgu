import { IEnrolleeCurriculum } from './enrollee-basic-curriculum.interface';

export interface IEnrolleeDirection {
  direction: string;
  educationProfile: string;
  isPreferred: boolean;
  curriculums: IEnrolleeCurriculum[];
}
