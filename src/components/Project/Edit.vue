<script setup lang="ts" name="ProjectEdit">
import useResumeForm from '@/store/resumeForm';
import useUI from '@/store/ui';
import { Minus } from '@icon-park/vue-next';
import { ElButton, ElCollapse, ElCollapseItem, ElForm, ElFormItem, ElInput, ElOption, ElSelect } from 'element-plus';
import { computed } from 'vue';

const ui = useUI();
const resumeForm = useResumeForm();

function uniq<T>(arr: Array<T>) {
  const _map = new Map<T, void>();

  return arr.filter(item => {
    if (_map.has(item)) return false;

    return _map.set(item), true;
  });
}

const technologyOptions = computed(() =>
  uniq(resumeForm.modules.projectExperiences.map(({ technologies }) => technologies).flat())
);
</script>

<template>
  <div class="p-4">
    <ElCollapse v-if="resumeForm.modules.projectExperiences.length">
      <ElCollapseItem v-for="(item, index) of resumeForm.modules.projectExperiences">
        <template #title>
          <div class="flex gap-x-2 items-center">
            <span>{{ item.projectName || ui.moduleName.projectExperiences }} </span>
            <ElButton size="small" @click.stop="resumeForm.modules.projectExperiences.splice(index, 1)" :icon="Minus" />
          </div>
        </template>

        <ElForm inline label-width="auto" label-suffix=": ">
          <ElFormItem label="项目名称">
            <ElInput v-model.trim="item.projectName" />
          </ElFormItem>

          <ElFormItem label="项目链接">
            <ElInput v-model.trim="item.link" />
          </ElFormItem>

          <ElFormItem label="链接标签">
            <ElInput v-model.trim="item.linkLabel" />
          </ElFormItem>

          <ElFormItem label="描述">
            <ElInput v-model.trim="item.descriptions" autosize type="textarea" />
          </ElFormItem>

          <ElFormItem label="技术选型">
            <ElSelect v-model="item.technologies" allow-create multiple filterable>
              <ElOption v-for="it of technologyOptions" :value="it" :key="it" />
            </ElSelect>
          </ElFormItem>
        </ElForm>
      </ElCollapseItem>
    </ElCollapse>
    <span class="text-gray-600" v-else>还没有添加{{ ui.moduleName.projectExperiences }}</span>
  </div>
</template>
