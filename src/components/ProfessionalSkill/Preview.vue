<script setup lang="ts" name="ProfessionalSkillPreview">
import Plate from '@/components/Plate.vue';
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Down, Flashlamp, Up } from '@icon-park/vue-next';
import { ElButton, ElButtonGroup } from 'element-plus';
import { marked } from 'marked';

const ui = useUI();
const resumeForm = useResumeForm();

function toUp(index: number) {
  [resumeForm.modules.professionalSkills[index], resumeForm.modules.professionalSkills[index - 1]] = [
    resumeForm.modules.professionalSkills[index - 1],
    resumeForm.modules.professionalSkills[index],
  ];
}

function toDown(index: number) {
  [resumeForm.modules.professionalSkills[index], resumeForm.modules.professionalSkills[index + 1]] = [
    resumeForm.modules.professionalSkills[index + 1],
    resumeForm.modules.professionalSkills[index],
  ];
}
</script>

<template>
  <Plate v-model:title.trim="ui.moduleName.professionalSkills">
    <template #icon>
      <Flashlamp :theme="ui.titleStyle === 1 ? 'filled' : 'outline'" />
    </template>

    <div
      class="leading-8 flex items-center gap-x-2"
      v-for="(item, index) of resumeForm.modules.professionalSkills"
      :key="item"
    >
      <span v-if="ui.parseAsMD" v-html="marked(item)" />
      <span v-else> {{ item }} </span>
      <template v-if="!ui.previewMode">
        <ElButtonGroup>
          <ElButton @click="toUp(index)" :disabled="index === 0" size="small" :icon="Up" />
          <ElButton
            @click="toDown(index)"
            :disabled="index >= resumeForm.modules.professionalSkills.length - 1"
            size="small"
            :icon="Down"
          />
        </ElButtonGroup>
      </template>
    </div>
  </Plate>
</template>
