<script setup lang="ts" name="WorkEdit">
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Minus } from '@icon-park/vue-next';
import { ElButton, ElCollapse, ElCollapseItem, ElDatePicker, ElForm, ElFormItem, ElInput } from 'element-plus';

const ui = useUI();
const resumeForm = useResumeForm();
</script>

<template>
  <div class="p-4">
    <ElCollapse v-if="resumeForm.modules.workExperiences.length">
      <ElCollapseItem v-for="(item, index) of resumeForm.modules.workExperiences" :key="item.company" inline>
        <template #title>
          <div class="flex gap-x-2 items-center">
            <span>{{ item.company || ui.moduleName.workExperiences }} </span>
            <ElButton size="small" @click.stop="resumeForm.modules.workExperiences.splice(index, 1)" :icon="Minus" />
          </div>
        </template>

        <ElForm inline label-suffix=": " label-width="auto">
          <ElFormItem label="公司名称">
            <ElInput v-model.trim="item.company" />
          </ElFormItem>

          <ElFormItem label="地点">
            <ElInput v-model.trim="item.address" />
          </ElFormItem>

          <ElFormItem label="链接标签">
            <ElInput v-model.trim="item.linkLabel" />
          </ElFormItem>

          <ElFormItem label="链接">
            <ElInput v-model.trim="item.link" />
          </ElFormItem>

          <ElFormItem label="时间范围">
            <ElDatePicker type="datetimerange" v-model="item.dateRange" format="YYYY-MM" />
          </ElFormItem>

          <ElFormItem label="工作描述">
            <ElInput type="textarea" v-model.trim="item.descriptions" autosize />
          </ElFormItem>
        </ElForm>
      </ElCollapseItem>
    </ElCollapse>
    <span class="text-gray-600" v-else>还没有添加{{ ui.moduleName.workExperiences }}</span>
  </div>
</template>
