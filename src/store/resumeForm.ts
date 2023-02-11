/**
 * @Author likan
 * @Date 2023-02-11 00:18:20
 * @Filepath resume-template\src\store\resumeForm.ts
 */

import { defineStore } from 'pinia';

export const GENDER = ['未知', '男', '女'];
export const EDUCATION_EXPERIENCE: EducationType = {
  address: '',
  college: '',
  courtsbranch: '',
  dateRange: ['', ''],
  schoolRecord: '',
  specialized: 0,
};
export const WORK_EXPERIENCES: WorkType = {
  address: '',
  dateRange: ['', ''],
  descriptions: '',
  link: '',
  linkLabel: '',
  company: '',
};
export const PROJECT_EXPERIENCES: ProjectType = {
  descriptions: '',
  technologies: [],
  link: '',
  linkLabel: '',
  projectName: '',
};
export const SPECIALIZED_LIST = ['小学', '初中', '高中', '大专', '本科', '硕士'];

const useResumeForm = defineStore('resume-form', {
  state: () => ({
    modules: {
      information: {
        age: 0,
        gender: 0,
        name: '',
        phone: '',
        email: '',
        address: '',
        job: '',
      },
      educationExperiences: <Array<EducationType>>[],
      workExperiences: <Array<WorkType>>[],
      professionalSkills: <Array<string>>[],
      projectExperiences: <Array<ProjectType>>[],
      selfEvaluation: <Array<string>>[],
      professionalCertificate: <Array<string>>[],
    },
  }),

  getters: {
    gender: state => GENDER[state.modules.information.gender],
    age: state => `${state.modules.information.age}岁`,
  },

  persist: true,
});

export default useResumeForm;
