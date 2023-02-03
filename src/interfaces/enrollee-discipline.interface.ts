import { DisciplineMarkType } from '@/constants/discipline-mark-type';

export interface IEnrolleeDiscipline {
  id: number;
  name: string;
  type: string;
  zet: number;
  hours: number;
  mark: DisciplineMarkType;
}
