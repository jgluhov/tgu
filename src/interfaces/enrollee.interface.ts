import { IEnrolleeDirection } from './enrollee-direction.interface';

export interface IEnrollee {
  id: string;
  fullName: string,
  trajectory: string,
  shipDate: string,
  direction: string,
  educationProfile: string,
  previousEducationDocumentsUrl: string,
  educationDocumentsUrl: string,
  directions: IEnrolleeDirection[];
}
