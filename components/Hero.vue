<script setup lang="ts">
interface Props {
  opacity?: number;
  imgSrc?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    id="top"
    class="hero min-h-screen"
    :style="imgSrc ? `background-image: url(${imgSrc})` : ``"
  >
    <div :class="`hero-overlay bg-opacity-${opacity || 100}`"></div>
    <div class="hero-content text-center">
      <slot />
    </div>
  </div>
</template>
