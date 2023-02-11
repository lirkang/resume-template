<script setup lang="ts" name="PreviewPanel">
import EducationPreview from '@/components/Education/Preview.vue';
import ProfessionalCertificatePreview from '@/components/ProfessionalCertificate/Preview.vue';
import ProfessionalSkillPreview from '@/components/ProfessionalSkill/Preview.vue';
import ProjectPreview from '@/components/Project/Preview.vue';
import ResumePreview from '@/components/Resume/Preview.vue';
import SelfEvaluationPreview from '@/components/SelfEvaluation/Preview.vue';
import WorkPreview from '@/components/Work/Preview.vue';
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { ElButton } from 'element-plus';

const resumeForm = useResumeForm();
const ui = useUI();
</script>

<template>
  <div
    class="transition-all text-base flex flex-col gap-y-2 relative"
    :style="{ padding: `${ui.theme.padding * (ui.previewMode ? 4 : 1)}px`, paddingTop: `${ui.theme.padding * 5}px` }"
  >
    <div
      class="absolute top-0 left-0 right-0 transition-all"
      :class="[ui.showTopBg ? 'h-4' : 'h-0']"
      :style="{ backgroundColor: ui.theme.primaryColor }"
    ></div>

    <ResumePreview v-if="ui.displayModules.information" />
    <EducationPreview v-if="ui.displayModules.educationExperiences" />
    <ProfessionalSkillPreview v-if="ui.displayModules.professionalSkills" />
    <WorkPreview v-if="ui.displayModules.workExperiences" />
    <ProjectPreview v-if="ui.displayModules.projectExperiences" />
    <SelfEvaluationPreview v-if="ui.displayModules.selfEvaluation" />
    <ProfessionalCertificatePreview v-if="ui.displayModules.professionalCertificate" />

    <div class="fixed bottom-2 right-2" v-if="!ui.previewMode">
      <ElButton @click="resumeForm.$reset()">清除历史记录</ElButton>
      <ElButton type="primary" @click="ui.previewMode = true">导出简历</ElButton>
    </div>
  </div>
</template>
