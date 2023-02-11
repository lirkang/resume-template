<script setup lang="tsx" name="App">
import EditPanel from '@/components/EditPanel.vue';
import PreviewPanel from '@/components/PreviewPanel.vue';
import useUI from '@/store/ui';
import { ElConfigProvider, ElMessage } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { onMounted } from 'vue';

const ui = useUI();

ui.displayMode = 'horizontal';

onMounted(() => {
  ui.previewMode = false;

  ondblclick = function () {
    ui.previewMode = false;
  };
});

ui.$subscribe((mutation, state) => {
  if (state.previewMode) {
    ElMessage.warning('双击任意处退出预览');
  }
});
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <Suspense>
      <div :class="['h-full flex gap-2 justify-end relative', { 'flex-col': ui.displayMode === 'vertical' }]">
        <div
          class="fixed left-0 top-0 overflow-x-auto z-10 shadow-sm"
          :class="[ui.displayMode === 'vertical' ? 'right-0 bottom-1/2' : 'right-1/2 bottom-auto h-full']"
          v-if="!ui.previewMode"
        >
          <div class="p-4 bg-white"><EditPanel /></div>
        </div>

        <div
          v-if="ui.displayMode === 'vertical' && !ui.previewMode"
          class="w-full transition-all"
          :style="{ height: ui.displayMode === 'vertical' && !ui.previewMode ? '50vh' : 0 }"
        ></div>

        <div
          class="transition-all"
          :class="[
            ui.previewMode || ui.displayMode === 'vertical' ? 'w-full' : 'w-1/2',
            { 'h-1/2': ui.displayMode === 'vertical' },
          ]"
        >
          <PreviewPanel />
        </div>
      </div>
    </Suspense>
  </ElConfigProvider>
</template>
