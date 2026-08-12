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
  <Transition
    appear
    enter-active-class="transition-all duration-1000 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="link"
      :title="tooltip"
      class="drop-shadow-sm transition-all ease-in-out duration-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl [image-rendering:crisp-edges]"
    >
      <img
        :src="image"
        :alt="alt || title"
        class="w-22 h-7.75"
      />
    </a>
  </Transition>
</template>
