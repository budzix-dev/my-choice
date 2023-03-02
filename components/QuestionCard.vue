<script setup lang="ts">
interface Props {
  imgSrc: string;
  title: string;
  imgBgColor?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="w-full h-full mx-auto">
    <div
      class="grid flex-grow h-full w-full px-10 card rounded-box place-items-center"
    >
      <img :src="imgSrc" :class="`${imgBgColor} px-5 w-full`" />
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl">{{ title }}</h2>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
