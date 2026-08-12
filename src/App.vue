<script setup lang="ts">
import Block from './components/Block.vue';
import LinkButton from './components/LinkButton.vue';
import Footer from './components/Footer.vue';
import { siteData } from './data/content';
import Badge from './components/Badge.vue';
</script>

<template>
  <main
    class="bg-ctp-crust fira-sans-semibold min-h-screen w-full text-ctp-text flex flex-col xl:grid xl:grid-cols-12 xl:row-auto p-8 lg:p-24 xl:p-0 xl:place-content-center-safe xl:my-auto gap-y-8 xl:py-48"
  >
    <Block>
      <div class="grid grid-cols-3 grid-rows-2 items-center mb-4 xl:mb-2">
        <h1 class="text-4xl xl:text-5xl fira-sans-bold">Virkkunen</h1>
        <img src="/assets/vrkknn_banner.webp" class="col-start-3 justify-self-end xl:row-span-2 animate-[pulse_5s_ease-in-out_infinite] active:animate-spin"/>
        <span
          class="fira-sans-condensed-semibold text-ctp-subtext0 text-sm col-span-3 xl:col-span-2"
        >
          "They said I could become anything, so I became a disappointment."
        </span>
      </div>
      <div class="flex flex-col gap-y-2 max-md:text-[1.1rem]">
        <span>
          Hej, I'm Virkkunen! You can call me Vikki or V.
          <small class="fira-sans-condensed-semibold text-ctp-subtext0"
            >vrkknn is Virkkunen without the vowels.</small
          >
        </span>
        <span>
          I'm a web developer and film major currently based in Hungary. Also a tech enthusiast,
          FOSS supporter, hobbyist artist
          <small class="fira-sans-condensed-semibold text-ctp-subtext0">and I use arch btw</small>
        </span>
      </div>
    </Block>
    <Block
      title="Some projects"
      buttonGroup
    >
      <LinkButton
        v-for="project in siteData.projects"
        :title="project.title"
        :icon="project.icon"
        :colour="project.colour"
        :link="project.link"
        :tooltip="project.tooltip"
      />
    </Block>
    <Block
      title="Services"
      buttonGroup
    >
      <LinkButton
        v-for="service in siteData.services"
        :title="service.title"
        :icon="service.icon"
        :colour="service.colour"
        :link="service.link"
        :tooltip="service.tooltip"
      />
    </Block>
    <Block
      title="Contact me"
      buttonGroup
    >
      <LinkButton
        v-for="contact in siteData.contact"
        :title="contact.title"
        :icon="contact.icon"
        :colour="contact.colour"
        :link="contact.link"
        :tooltip="contact.tooltip"
      />
    </Block>
    <Block
      title="88x31"
      badgeGroup
      id="88x31"
    >
      <Badge
        v-for="badge in siteData.badges"
        :title="badge.title"
        :image="badge.image"
        :link="badge.link"
        :alt="badge.alt"
        :tooltip="badge.title"
      />
    </Block>
    <Footer />
  </main>
</template>

<style scoped>
body {
  background-color: var(--color-ctp-crust);
}
</style>
