<script setup lang="ts" name="ProjectPreview">
import Plate from '@/components/Plate.vue';
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Link, TagOne } from '@icon-park/vue-next';
import { marked } from 'marked';

const resumeForm = useResumeForm();
const ui = useUI();
</script>

<template>
  <Plate v-model:title.trim="ui.moduleName.projectExperiences">
    <template #icon>
      <TagOne :theme="ui.titleStyle === 1 ? 'filled' : 'outline'" />
    </template>

    <div class="flex flex-col gap-y-2 mb-2">
      <div class="flex flex-col gap-y-2" v-for="item of resumeForm.modules.projectExperiences" :key="item.projectName">
        <span class="font-semibold text-gray-700">{{ item.projectName }}</span>
        <span v-if="item.technologies.length">技术选型: {{ item.technologies.join(' + ') }}</span>
        <span class="leading-8" v-html="marked(item.descriptions)"></span>
        <span v-if="item.link" class="text-base font-normal italic">
          <a :href="item.link" target="_blank" class="text-blue-600 flex items-center">
            <Link v-if="ui.showIcons" />
            <span>{{ item.linkLabel || '项目地址' }} </span>
          </a>
        </span>
      </div>
    </div>
  </Plate>
</template>
