/**
 * @Author likan
 * @Date 2023-02-11 14:44:45
 * @Filepath resume-template\src\store\ui.ts
 */

import { Theme } from '@icon-park/vue-next/lib/runtime';
import { defineStore } from 'pinia';

const useUI = defineStore('ui', {
  state: () => ({
    parseAsMD: false,
    previewMode: false,
    showIcons: true,
    showTopBg: true,
    titleStyle: 0,
    theme: {
      padding: 0,
      primaryColor: '#2B9F19',
    },
    displayMode: <DisplayMode>'horizontal',
    displaySize: <DisplaySize>'medium',
    iconType: <Theme>'outline',
    resumeAlign: <ResumeAlign>'left',
    displayModules: <Record<Modules, boolean>>{
      information: true,
      educationExperiences: false,
      workExperiences: false,
      professionalSkills: false,
      projectExperiences: false,
      selfEvaluation: false,
      professionalCertificate: false,
    },
    moduleName: <Record<Modules, string>>{
      information: '个人信息',
      educationExperiences: '教育经历',
      workExperiences: '工作经验',
      professionalSkills: '专业技能',
      projectExperiences: '项目经验',
      selfEvaluation: '自我评价',
      professionalCertificate: '专业证书',
    },
  }),

  persist: true,
});

export default useUI;
