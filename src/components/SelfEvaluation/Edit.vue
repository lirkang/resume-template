<script setup lang="ts" name="SelfEvaluationEdit">
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Minus } from '@icon-park/vue-next';
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';

const ui = useUI();
const resumeForm = useResumeForm();
</script>

<template>
  <div class="p-4">
    <ElForm v-if="resumeForm.modules.selfEvaluation.length" label-width="auto" label-suffix=": ">
      <ElFormItem
        v-for="(item, index) of resumeForm.modules.selfEvaluation"
        :key="index"
        :label="`${ui.moduleName.selfEvaluation} ${index + 1}`"
      >
        <ElInput v-model.trim="resumeForm.modules.selfEvaluation[index]">
          <template #append>
            <ElButton @click="resumeForm.modules.selfEvaluation.splice(index, 1)" :icon="Minus" />
          </template>
        </ElInput>
      </ElFormItem>
    </ElForm>

    <span class="text-gray-600" v-else>还没有添加{{ ui.moduleName.selfEvaluation }}</span>
  </div>
</template>
