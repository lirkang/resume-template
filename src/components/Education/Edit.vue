<script setup lang="ts" name="EducationEdit">
import useResumeForm, { SPECIALIZED_LIST } from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Minus } from '@icon-park/vue-next';
import {
ElButton,
ElCollapse,
ElCollapseItem,
ElDatePicker,
ElForm,
ElFormItem,
ElInput,
ElOption,
ElSelect
} from 'element-plus';

const ui = useUI();
const resumeForm = useResumeForm();
</script>

<template>
  <div class="p-4">
    <ElCollapse v-if="resumeForm.modules.educationExperiences.length">
      <ElCollapseItem v-for="(item, index) of resumeForm.modules.educationExperiences">
        <template #title>
          <div class="flex gap-x-2 items-center">
            <span>{{ item.college || ui.moduleName.educationExperiences }} </span>
            <ElButton
              size="small"
              @click.stop="resumeForm.modules.educationExperiences.splice(index, 1)"
              :icon="Minus"
            />
          </div>
        </template>

        <ElForm inline label-width="auto" label-suffix=": ">
          <ElFormItem label="地点">
            <ElInput v-model.trim="item.address" />
          </ElFormItem>

          <ElFormItem label="学校/学院名称">
            <ElInput v-model.trim="item.college" />
          </ElFormItem>

          <ElFormItem label="所属院校">
            <ElInput v-model.trim="item.courtsbranch" />
          </ElFormItem>

          <ElFormItem label="时间范围">
            <ElDatePicker type="datetimerange" v-model="item.dateRange" format="YYYY-MM" />
          </ElFormItem>

          <ElFormItem label="专业名称">
            <ElInput v-model.trim="item.schoolRecord" />
          </ElFormItem>

          <ElFormItem label="学历">
            <ElSelect v-model="item.specialized">
              <ElOption v-for="(item, index) of SPECIALIZED_LIST" :key="item" :label="item" :value="index" />
            </ElSelect>
          </ElFormItem>
        </ElForm>
      </ElCollapseItem>
    </ElCollapse>

    <span class="text-gray-600" v-else>还没有添加{{ ui.moduleName.educationExperiences }}</span>
  </div>
</template>
