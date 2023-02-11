<script setup lang="tsx" name="EditPanel">
import EducationEdit from '@/components/Education/Edit.vue';
import ModuleManager from '@/components/ModuleManager.vue';
import ProfessionalCertificateEdit from '@/components/ProfessionalCertificate/Edit.vue';
import ProfessionalSkillEdit from '@/components/ProfessionalSkill/Edit.vue';
import ProjectEdit from '@/components/Project/Edit.vue';
import ResumeEdit from '@/components/Resume/Edit.vue';
import SelfEvaluationEdit from '@/components/SelfEvaluation/Edit.vue';
import WorkEdit from '@/components/Work/Edit.vue';
import useResumeForm, { EDUCATION_EXPERIENCE, PROJECT_EXPERIENCES, WORK_EXPERIENCES } from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Plus } from '@icon-park/vue-next';
import { ElButton, ElCollapse, ElCollapseItem } from 'element-plus';
import { defineComponent, ref } from 'vue';

const resumeForm = useResumeForm();
const ui = useUI();

const ElCollapseRef = ref<InstanceType<typeof ElCollapse>>();

const CollapseTitle = defineComponent({
  props: { title: String },
  emits: ['add'],
  setup(props, ctx) {
    return () => (
      <>
        <span class='font-bold text-base text-gray-600'>{props.title}</span>
        <ElButton onClick={evt => (evt.stopPropagation(), ctx.emit('add'))} class='ml-2' icon={Plus} size='small' />
      </>
    );
  },
});
</script>

<template>
  <ElCollapse :model-value="Object.keys(ui.displayModules).concat('moduleManager', 'description')" ref="ElCollapseRef">
    <div class="flex flex-col gap-2 bg-gray-100">
      <ElCollapseItem name="description" title="说明">
        <span>
          完成编辑后点击右下角导出简历, 之后按住ctrl + p打开浏览器打印, 调整参数导出pdf文件, 双击任意处退出导出模式
        </span>
      </ElCollapseItem>

      <ElCollapseItem name="moduleManager" title="界面显示">
        <ModuleManager />
      </ElCollapseItem>

      <ElCollapseItem :name="'information'" v-if="ui.displayModules.information" :title="ui.moduleName.information">
        <ResumeEdit />
      </ElCollapseItem>

      <ElCollapseItem :name="'educationExperiences'" v-if="ui.displayModules.educationExperiences">
        <EducationEdit />

        <template #title>
          <CollapseTitle
            :title="ui.moduleName.educationExperiences"
            @add="resumeForm.modules.educationExperiences.push({ ...EDUCATION_EXPERIENCE })"
          />
        </template>
      </ElCollapseItem>

      <ElCollapseItem :name="'workExperiences'" v-if="ui.displayModules.workExperiences">
        <WorkEdit />

        <template #title>
          <CollapseTitle
            :title="ui.moduleName.workExperiences"
            @add="resumeForm.modules.workExperiences.push({ ...WORK_EXPERIENCES })"
          />
        </template>
      </ElCollapseItem>

      <ElCollapseItem :name="'professionalSkills'" v-if="ui.displayModules.professionalSkills">
        <ProfessionalSkillEdit />

        <template #title>
          <CollapseTitle
            :title="ui.moduleName.professionalSkills"
            @add="resumeForm.modules.professionalSkills.push('')"
          />
        </template>
      </ElCollapseItem>

      <ElCollapseItem :name="'projectExperiences'" v-if="ui.displayModules.projectExperiences">
        <ProjectEdit />

        <template #title>
          <CollapseTitle
            :title="ui.moduleName.projectExperiences"
            @add="resumeForm.modules.projectExperiences.push({ ...PROJECT_EXPERIENCES })"
          />
        </template>
      </ElCollapseItem>

      <ElCollapseItem :name="'selfEvaluation'" v-if="ui.displayModules.selfEvaluation">
        <SelfEvaluationEdit />

        <template #title>
          <CollapseTitle :title="ui.moduleName.selfEvaluation" @add="resumeForm.modules.selfEvaluation.push('')" />
        </template>
      </ElCollapseItem>

      <ElCollapseItem :name="'professionalCertificate'" v-if="ui.displayModules.professionalCertificate">
        <ProfessionalCertificateEdit />

        <template #title>
          <CollapseTitle
            :title="ui.moduleName.professionalCertificate"
            @add="resumeForm.modules.professionalCertificate.push('')"
          />
        </template>
      </ElCollapseItem>
    </div>
  </ElCollapse>
</template>
