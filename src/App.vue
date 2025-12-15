<script setup lang="ts">
import Block from './components/Block.vue';
</script>

<template>
  <main
    class="bg-ctp-crust fira-sans-semibold min-h-screen w-full text-ctp-text flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-8 xl:place-content-center-safe xl:my-auto gap-y-8 xl:py-48"
  >
    <Block>
      <div class="grid grid-cols-3 grid-rows-2 items-center mb-4 xl:mb-2">
        <h1 class="text-4xl xl:text-5xl fira-sans-bold">Virkkunen</h1>
        <font-awesome-icon
          icon="fa-solid fa-cat"
          widthAuto
          class="text-4xl xl:text-6xl text-ctp-red col-start-3 justify-self-end xl:row-span-2"
        />
        <span class="fira-sans-condensed-semibold text-ctp-subtext0 text-sm col-span-3 xl:col-span-2">
          "They said I could become anything, so I became a disappointment."
        </span>
      </div>
      <div class="flex flex-col gap-y-2">
        <span>
          Hej, I'm Virkkunen! You can call me Vikki or V.
          <small class="fira-sans-condensed-semibold text-ctp-subtext0">vrkknn is Virkkunen without the vowels.</small>
        </span>
        <span>
          I'm a web developer and film major currently based in Hungary. Also a tech enthusiast, FOSS supporter, hobbyist artist
          <small class="fira-sans-condensed-semibold text-ctp-subtext0">and I use arch btw</small>
        </span>
      </div>
    </Block>
  </main>
</template>

<style scoped>
body {
  background-color: var(--color-ctp-crust);
}
</style>
