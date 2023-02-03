import { ICurriculumDiscipline } from '@/interfaces/curriculum-discipline.interface';
import { IEnrolleeDiscipline } from '@/interfaces/enrollee-discipline';
import { IPersonalCurriculum } from '@/interfaces/personal-curriculum.interface';

export const setEnrolleeDiscipline = (
  curriculum: IPersonalCurriculum,
  enrolleeDiscipline: IEnrolleeDiscipline,
  curriculumDiscipline: ICurriculumDiscipline
) => {
  const foundIndex = curriculum.curriculumDisciplines
  .findIndex(discipline => discipline.id === curriculumDiscipline.id);

  const changedCurriculum: IPersonalCurriculum = {
    ...curriculum,
    curriculumDisciplines: [
      ...curriculum.curriculumDisciplines.slice(0, foundIndex),
      {
        ...curriculumDiscipline,
        enrolleeDiscipline
      },
      ...curriculum.curriculumDisciplines.slice(foundIndex + 1)
    ]
  }

  return changedCurriculum;
}
