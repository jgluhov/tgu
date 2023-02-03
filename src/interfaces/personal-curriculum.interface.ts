import { IEnrolleeDiscipline } from './enrollee-discipline.interface';
import { ICurriculumDiscipline } from './curriculum-discipline.interface';
import { CurriculumStatus } from '@/constants/curriculum-status';


export interface IPersonalCurriculum {
  id: number;
  enrolleeId: string;
  basicCurriculumId: string;
  basicCurriculumName: string;
  fullName: string;
  trajectory: string;
  direction: string;
  educationProfile: string;
  groupName: string;
  status: CurriculumStatus;
  enrolleeDisciplines: IEnrolleeDiscipline[];
  curriculumDisciplines: ICurriculumDiscipline[];
}
