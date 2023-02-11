/**
 * @Author likan
 * @Date 2023-02-11 11:06:05
 * @Filepath resume-template\src\types\resume.d.ts
 */

type SchoolRecord = '';
type Modules =
  | 'information'
  | 'educationExperiences'
  | 'workExperiences'
  | 'professionalSkills'
  | 'projectExperiences'
  | 'selfEvaluation'
  | 'professionalCertificate';
type DisplaySize = 'medium' | 'large' | 'small' | 'largest';
type DisplayMode = 'horizontal' | 'vertical';

declare interface EducationType {
  address: string;
  dateRange: [string, string];
  schoolRecord: SchoolRecord;
  specialized: number;
  college: string;
  courtsbranch: string;
}

declare interface WorkType {
  address: string;
  dateRange: [string, string];
  link?: string;
  linkLabel?: string;
  descriptions: string;
  company: string;
}

declare interface ProjectType {
  link?: string;
  linkLabel?: string;
  descriptions: string;
  technologies: Array<string>;
  projectName: string;
}
