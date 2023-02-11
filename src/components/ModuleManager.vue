<script setup lang="ts" name="ModuleManager">
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import {
ElCheckTag,
ElColorPicker,
ElForm,
ElFormItem,
ElRadioButton,
ElRadioGroup,
ElSlider,
ElSwitch
} from 'element-plus';

const resumeForm = useResumeForm();
const ui = useUI();
</script>

<template>
  <div class="p-2">
    <ElForm label-width="auto" label-suffix=": ">
      <ElFormItem label="布局方式">
        <ElRadioGroup v-model="ui.displayMode" size="small">
          <ElRadioButton label="horizontal">左右布局</ElRadioButton>
          <ElRadioButton label="vertical">上下布局</ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>

      <ElFormItem label="标题样式">
        <ElRadioGroup v-model="ui.titleStyle" size="small">
          <ElRadioButton v-for="item of 2" :label="item - 1">样式{{ item }}</ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>

      <ElFormItem label="对齐方式">
        <ElRadioGroup v-model="ui.resumeAlign" size="small">
          <ElRadioButton label="left">左对齐</ElRadioButton>
          <ElRadioButton label="center">居中</ElRadioButton>
          <ElRadioButton label="right">右对齐</ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>

      <ElFormItem label="是否解析Markdown">
        <ElSwitch v-model="ui.parseAsMD" />
      </ElFormItem>

      <ElFormItem label="强调色">
        <ElColorPicker v-model="ui.theme.primaryColor" />
      </ElFormItem>

      <ElFormItem label="是否显示图标">
        <ElSwitch v-model="ui.showIcons" />
      </ElFormItem>

      <ElFormItem label="显示顶部背景色">
        <ElSwitch v-model="ui.showTopBg" />
      </ElFormItem>

      <ElFormItem label="边距大小">
        <ElSlider :max="100" :min="0" :step="2" v-model="ui.theme.padding" />
      </ElFormItem>

      <ElFormItem label="模块显示">
        <div class="flex gap-2 flex-wrap">
          <ElCheckTag v-for="(item, name) of ui.displayModules" :key="name" v-model:checked="ui.displayModules[name]">
            <span> {{ ui.moduleName[name] }} </span>
          </ElCheckTag>
        </div>
      </ElFormItem>
    </ElForm>
  </div>
</template>
