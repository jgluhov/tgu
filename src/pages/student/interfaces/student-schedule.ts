export interface IStudentSchedule {
  name: string;
  code: string;
  courses: IStudentScheduleCourse[];
}

export interface IStudentScheduleCourse {
  semesters: IStudentScheduleSemester[];
}

export interface IStudentScheduleSemester {
  days: IStudentScheduleDay[];
}

export interface IStudentScheduleDay {
  date?: Date;
  value: number;
}
