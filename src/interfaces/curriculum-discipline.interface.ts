import { DisciplineControlType } from '@/constants/discipline-control-type';
import { DisciplineMarkType } from '@/constants/discipline-mark-type';
import { IEnrolleeDiscipline } from './enrollee-discipline.interface';

export interface ICurriculumDiscipline {
  id: number;
  name: string;
  enrolleeDiscipline: IEnrolleeDiscipline;
  semester: number;
  enrolleeSemester: number;
  zet: number;
  hours: number;
  control: DisciplineControlType;
  mark: DisciplineMarkType;
}
