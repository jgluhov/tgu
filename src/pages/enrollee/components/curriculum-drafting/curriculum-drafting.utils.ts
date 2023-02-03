import { DisciplineControlType } from '@/constants/discipline-control-type';
import { DisciplineMarkType } from '@/constants/discipline-mark-type';
import { ICurriculumDiscipline } from '@/interfaces/curriculum-discipline.interface';
import { IEnrolleeDiscipline } from '@/interfaces/enrollee-discipline.interface';
import { IPersonalCurriculum } from '@/interfaces/personal-curriculum.interface';

const findSuitableMark = (
  enrolleeDiscipline: IEnrolleeDiscipline,
  curriculumDiscipline: ICurriculumDiscipline
): DisciplineMarkType => {
  switch(curriculumDiscipline.control) {
    case DisciplineControlType.CourseWork:
    case DisciplineControlType.Test:
    case DisciplineControlType.DifferentiatedTest: {
      return DisciplineMarkType.Passed;
    }
    case DisciplineControlType.Exam: {
      return enrolleeDiscipline.mark === DisciplineMarkType.Passed
        ? DisciplineMarkType.Good
        : enrolleeDiscipline.mark;
    }
    case DisciplineControlType.GIA: {
      return null;
    }
    default: {
      return null;
    }
  }
}

export const dropEnrolleeDiscipline = (
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
        enrolleeDiscipline,
        mark: findSuitableMark(enrolleeDiscipline, curriculumDiscipline)
      },
      ...curriculum.curriculumDisciplines.slice(foundIndex + 1)
    ]
  }

  return changedCurriculum;
}
