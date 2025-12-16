<script setup lang="ts">
const props = defineProps<{
  title: string;
  image: string;
  link?: string;
  alt?: string;
  tooltip?: string;
}>();
</script>

<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    :href="link"
    :title="tooltip"
    class="drop-shadow-sm transition-all ease-in-out duration-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl"
  >
    <img
      :src="image"
      :alt="alt || title"
      class="w-22 h-7.75"
    />
  </a>
</template>
