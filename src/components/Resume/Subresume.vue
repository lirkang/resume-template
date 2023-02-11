<script setup lang="ts" name="Subresume">
defineProps<{ title: string }>();
</script>

<template>
  <div :class="['text-gray-700 flex items-center', { 'justify-center': 'center' }]">
    <span class="text-base"> {{ title }} </span>
  </div>
</template>
