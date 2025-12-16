<script setup lang="ts">
const props = defineProps<{
  title: string;
  icon: string;
  colour: string;
  link: string;
  tooltip: string;
}>();
</script>

<template>
  <a
    target="_blank"
    rel="noreferrer noopener"
    :style="{ backgroundColor: `${colour}` }"
    :href="link"
    :title="tooltip"
    class="px-6 py-4 xl:px-4 xl:py-2 rounded-2xl drop-shadow-sm text-ctp-crust fira-sans-condensed-semibold flex flex-row justify-center xl:justify-between gap-x-2 items-center text-2xl xl:text-xl z-10 transition-all ease-in-out duration-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl active:brightness-75 active:translate-y-1 active:scale-95 active:drop-shadow-none"
  >
    <font-awesome-icon
      :icon="icon"
      widthAuto
    />
    {{ title }}
  </a>
</template>

<!-- <style scoped>
a {
  background-color: v-bind(colour);
}
</style> -->
