import { IEnrolleeCurriculum } from "@/interfaces/enrollee-basic-curriculum.interface";
import { IEnrolleeDirection } from "@/interfaces/enrollee-direction.interface";
import { sortBy } from 'lodash';

export const getCourses = (
  directions: IEnrolleeDirection[] = []
): number[] => {
  let courses = new Set<number>();

  directions.forEach(
    d => d.curriculums.forEach(
      (c: IEnrolleeCurriculum) => courses.add(c.course)
    )
  );

  return [...courses].sort();
}

export const getSemesters = (
  directions: IEnrolleeDirection[] = [],
  course: number
): number[] => {
  let semesters = new Set<number>();

  directions
    .forEach(d => d.curriculums
      .filter(c => c.course === course)
      .forEach((c: IEnrolleeCurriculum) => semesters.add(c.semester))
    );

  return [...semesters].sort();
}

export const getCurriculums = (
  directions: IEnrolleeDirection[] = [],
  course: number,
  semester: number
): IEnrolleeCurriculum[] => {
  let curriculums = directions
    .reduce((dates, d) => {
      let found = d.curriculums
        .find(c => c.course === course && c.semester === semester);
      return found ? dates.add(found) : dates;
    },
    new Set<IEnrolleeCurriculum>()
  );

  return sortBy([...curriculums], 'from');
}
