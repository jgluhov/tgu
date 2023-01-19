interface IEducation {
  name: string;
  link: string;
}

export interface IStudent {
  name: string;
  trajectory: string;
  direction: string;
  profile: string;
  educations: IEducation[]
}
