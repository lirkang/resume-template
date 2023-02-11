<script setup lang="ts" name="ProfessionalSkillEdit">
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Minus } from '@icon-park/vue-next';
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';

const ui = useUI();
const resumeForm = useResumeForm();
</script>

<template>
  <div class="p-4">
    <ElForm v-if="resumeForm.modules.professionalSkills.length" label-width="auto" label-suffix=": ">
      <ElFormItem
        v-for="(item, index) of resumeForm.modules.professionalSkills"
        :key="index"
        :label="`${ui.moduleName.professionalSkills} ${index + 1}`"
      >
        <ElInput v-model.trim="resumeForm.modules.professionalSkills[index]">
          <template #append>
            <ElButton @click="resumeForm.modules.professionalSkills.splice(index, 1)" :icon="Minus" />
          </template>
        </ElInput>
      </ElFormItem>
    </ElForm>

    <span class="text-gray-600" v-else>还没有添加{{ ui.moduleName.professionalSkills }}</span>
  </div>
</template>
