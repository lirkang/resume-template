<script setup lang="ts" name="EducationPreview">
import Plate from '@/components/Plate.vue';
import useResumeForm, { SPECIALIZED_LIST } from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Local, Preschool, Time } from '@icon-park/vue-next';
import { dayjs, ElIcon } from 'element-plus';

const resumeForm = useResumeForm();
const ui = useUI();
</script>

<template>
  <Plate v-model:title.trim="ui.moduleName.educationExperiences">
    <template #icon>
      <Preschool :theme="ui.titleStyle === 1 ? 'filled' : 'outline'" />
    </template>

    <div class="flex flex-col mb-4 gap-y-2" v-for="item of resumeForm.modules.educationExperiences">
      <div class="flex justify-between">
        <span class="text-gray-700 font-semibold text-base">{{ item.college }}</span>
        <span class="flex items-center gap-x-2">
          <ElIcon v-if="ui.showIcons"><Local /> </ElIcon>
          <span>{{ item.address }}</span>
        </span>
      </div>

      <div class="flex justify-between">
        <span>{{ item.schoolRecord }} {{ SPECIALIZED_LIST[item.specialized] }} {{ item.courtsbranch }} </span>
        <span class="flex items-center gap-x-2">
          <ElIcon v-if="ui.showIcons"><Time /> </ElIcon>
          <span>{{ item.dateRange.map(v => dayjs(v).format('YYYY.MM')).join(' - ') }} </span>
        </span>
      </div>
    </div>
  </Plate>
</template>
