<script setup lang="ts" name="ResumeEdit">
import useResumeForm, { GENDER } from '@/store/resumeForm';
import useUI from '@/store/ui';
import { ElForm, ElFormItem, ElInput, ElInputNumber, ElOption, ElSelect } from 'element-plus';

const resumeForm = useResumeForm();
const ui = useUI();
</script>

<template>
  <ElForm inline label-suffix=": " label-width="auto">
    <ElFormItem label="姓名">
      <ElInput v-model.trim="resumeForm.modules.information.name" />
    </ElFormItem>

    <ElFormItem label="地址">
      <ElInput v-model.trim="resumeForm.modules.information.address" />
    </ElFormItem>

    <ElFormItem label="手机号">
      <ElInput v-model.trim="resumeForm.modules.information.phone" />
    </ElFormItem>

    <ElFormItem label="邮箱">
      <ElInput v-model.trim="resumeForm.modules.information.email" />
    </ElFormItem>

    <ElFormItem label="工作">
      <ElInput v-model.trim="resumeForm.modules.information.job" />
    </ElFormItem>

    <ElFormItem label="年龄">
      <ElInputNumber :max="100" :min="1" controls v-model="resumeForm.modules.information.age" />
    </ElFormItem>

    <ElFormItem label="性别">
      <ElSelect v-model="resumeForm.modules.information.gender">
        <ElOption v-for="(item, index) of GENDER" :value="index" :label="item" :key="item" />
      </ElSelect>
    </ElFormItem>
  </ElForm>
</template>
