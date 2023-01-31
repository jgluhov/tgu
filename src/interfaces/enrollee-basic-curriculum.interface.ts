import { IEnrolleeGroup } from './enrollee-group.interface';
import { IEnrolleeCurriculumInfo } from './enrollee-personal-curriculum.interface';

export interface IEnrolleeCurriculum {
  id: string;
  name: string;
  from: string;
  to: string;
  degree: string;
  institute: string;
  price: number;
  course: number;
  semester: number;
  groups: IEnrolleeGroup[];
  curriculum: IEnrolleeCurriculumInfo;
}
