<script setup lang="ts">
  const props = defineProps<{
    title?: String
    buttonGroup?: boolean
  }>()
</script>

<template>
  <div class="flex flex-col justify-between p-6 bg-ctp-base rounded-2xl xl:col-start-4 xl:col-span-6  2xl:col-start-5 2xl:col-span-4 shadow-md">
    <span class="justify-start fira-sans-semibold text-2xl">{{  title  }}</span>
    <slot />
  </div>
</template>