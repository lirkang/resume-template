<script setup lang="ts" name="Plate">
import useUI from '@/store/ui';
import { Edit } from '@icon-park/vue-next';
import { ElButton, ElIcon, ElInput } from 'element-plus';
import { nextTick, ref, watch } from 'vue';

const ui = useUI();

const showInput = ref(false);
const ElInputRef = ref<InstanceType<typeof ElInput>>();
const value = ref('');

const { title } = defineProps<{ title: string }>();
const emits = defineEmits<{ (event: 'update:title', val: string): void }>();

watch([showInput], () => {
  if (showInput.value) {
    value.value = title;

    nextTick().then(() => {
      ElInputRef.value?.focus();
    });
  } else {
    emits('update:title', value.value);
  }
});
</script>

<template>
  <div class="plate">
    <div
      class="text-slate-800 w-full mb-4 flex items-center gap-x-2"
      :class="[{ 'border-b-slate-700 border-b-2 border-solid': ui.titleStyle !== 1, 'py-1': ui.titleStyle !== 1 }]"
    >
      <ElIcon v-if="ui.showIcons" :size="22" :color="ui.theme.primaryColor">
        <slot name="icon"></slot>
      </ElIcon>
      <ElInput v-model.trim="value" style="width: 160px" @blur="showInput = false" ref="ElInputRef" v-if="showInput" />
      <span v-else class="font-semibold text-xl" :style="{ color: ui.theme.primaryColor }">{{ title }}</span>
      <ElButton size="small" v-if="!ui.previewMode" :icon="Edit" circle @click="showInput = true" />
      <div
        v-if="ui.titleStyle === 1"
        class="h-px flex-1 bg-slate-200 rounded-md"
        :style="{ backgroundColor: `${ui.theme.primaryColor}66` }"
      ></div>
    </div>

    <div class="text-gray-500">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
