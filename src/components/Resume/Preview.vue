<script setup lang="ts" name="ResumePreview">
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { BirthdayCake, EmailPush, Local, Phone, Woman, Workbench } from '@icon-park/vue-next';
import { ElDivider, ElIcon } from 'element-plus';
import { computed } from 'vue';

const resumeForm = useResumeForm();
const ui = useUI();

const align: Record<ResumeAlign, string> = {
  center: 'justify-center',
  left: 'justify-start',
  right: 'justify-end',
};

const resumeInformation = computed(() =>
  [
    [resumeForm.gender, Woman],
    [resumeForm.age, BirthdayCake],
    [resumeForm.modules.information.address, Local],
    [resumeForm.modules.information.job, Workbench],
    [resumeForm.modules.information.email, EmailPush],
    [resumeForm.modules.information.phone, Phone],
  ].filter(([val]) => val)
);

const alignClass = computed(() => align[ui.resumeAlign]);
</script>

<template>
  <div :class="['flex mb-8 flex-col gap-y-4', alignClass]">
    <div class="flex font-bold text-4xl" :class="alignClass">{{ resumeForm.modules.information.name }}</div>

    <div class="flex flex-col text-gray-600 gap-1 tracking-wider">
      <div
        class="flex items-center"
        :class="alignClass"
        v-for="(item, index) of Math.round(resumeInformation.length / 2)"
        :key="index"
      >
        <span class="flex items-center gap-x-2">
          <ElIcon v-if="ui.showIcons"> <component :is="resumeInformation[index * 2][1]" /> </ElIcon>
          <span class="text-sm">{{ resumeInformation[index * 2][0] }}</span>
        </span>

        <template v-if="resumeInformation[index * 2 + 1]">
          <ElDivider direction="vertical" />

          <span class="flex items-center gap-x-2">
            <ElIcon v-if="ui.showIcons"> <component :is="resumeInformation[index * 2 + 1][1]" /> </ElIcon>
            <span class="text-sm">{{ resumeInformation[index * 2 + 1][0] }}</span>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
