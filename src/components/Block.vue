<script setup lang="ts">
const props = defineProps<{
  title?: string;
  buttonGroup?: boolean;
  badgeGroup?: boolean;
}>();
</script>

<template>
  <div
    class="flex flex-col justify-between p-6 bg-ctp-base rounded-2xl xl:col-start-4 xl:col-span-6 2xl:col-start-5 2xl:col-span-4 shadow-md gap-y-4"
  >
    <span class="justify-start fira-sans-semibold text-xl">{{ title }}</span>
    <div
      v-if="buttonGroup"
      class="flex max-lg:flex-col max-lg:justify-center flex-wrap gap-x-2 gap-y-4 xl:gap-4"
    >
      <slot />
    </div>
    <div
      v-else-if="badgeGroup"
      class="flex flex-wrap justify-center gap-2"
    >
      <slot />
    </div>
    <slot v-else />
  </div>
</template>
