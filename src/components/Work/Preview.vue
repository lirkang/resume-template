<script setup lang="ts" name="WorkPreview">
import Plate from '@/components/Plate.vue';
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Link, Local, Preschool, Time } from '@icon-park/vue-next';
import { dayjs, ElIcon } from 'element-plus';
import { marked } from 'marked';

const ui = useUI();
const resumeForm = useResumeForm();
</script>

<template>
  <Plate v-model:title.trim="ui.moduleName.workExperiences">
    <template #icon>
      <Preschool :theme="ui.titleStyle === 1 ? 'filled' : 'outline'" />
    </template>

    <div class="flex flex-col mb-4 gap-y-2" v-for="item of resumeForm.modules.workExperiences" :key="item.company">
      <div class="flex justify-between">
        <span class="text-gray-700 font-semibold text-base">{{ item.company }}</span>
        <span class="flex items-center gap-x-2">
          <ElIcon v-if="ui.showIcons"><Local /> </ElIcon>
          <span>{{ item.address }}</span>
        </span>
      </div>

      <div class="flex justify-between items-start">
        <span class="w-3/5 leading-8 text-justify break-all" v-html="marked(item.descriptions)" />
        <span class="flex items-center gap-x-2">
          <ElIcon v-if="ui.showIcons"><Time /> </ElIcon>
          <span>{{ item.dateRange.map(v => dayjs(v).format('YYYY.MM')).join(' - ') }} </span>
        </span>
      </div>

      <span v-if="item.link" class="text-base font-normal italic">
        <a :href="item.link" target="_blank" class="text-blue-600 flex items-center">
          <Link v-if="ui.showIcons" />
          <span>{{ item.linkLabel || '项目地址' }} </span>
        </a>
      </span>
    </div>
  </Plate>
</template>
