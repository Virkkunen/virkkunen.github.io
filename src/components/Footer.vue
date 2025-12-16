<template>
  <Transition
    appear
    enter-active-class="transition-all duration-700 ease-out"
    enter-from-class="translate-y-48 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
  >
    <footer
      class="flex flex-row justify-around p-6 bg-ctp-base rounded-2xl xl:col-start-4 xl:col-span-6 2xl:col-start-5 2xl:col-span-4 shadow-md"
    >
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Virkkunen"
        class="flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-ctp-blue active:text-ctp-lavender"
      >
        <font-awesome-icon
          icon="fa-brands fa-github"
          widthAuto
        />
        Virkkunen
      </a>
      <span>•</span>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Virkkunen/virkkunen.github.io"
        class="flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-ctp-blue active:text-ctp-lavender"
      >
        <font-awesome-icon
          icon="fa-solid fa-code"
          widthAuto
        />
        Source
      </a>
    </footer>
  </Transition>
</template>
