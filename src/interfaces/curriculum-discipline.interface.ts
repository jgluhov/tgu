import { IEnrolleeDiscipline } from './enrollee-discipline';

export interface ICurriculumDiscipline {
  id: number;
  name: string;
  enrolleeDiscipline: IEnrolleeDiscipline;
  semester: number;
  enrolleeSemester: number;
  zet: number;
  hours: number;
  control: string;
  mark: string;
}
