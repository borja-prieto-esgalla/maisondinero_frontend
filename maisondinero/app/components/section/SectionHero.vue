<template>
  <section id="hero" class="w-full h-screen overflow-hidden">
    <div
      class="w-full h-full bg-cover bg-center bg-no-repeat lg:block hidden"
      :style="{ backgroundImage: `url(${content.imagen_cabecera})` }"
    ></div>
    <div
      class="w-full h-full bg-cover bg-center lg:hidden block"
      :style="{ backgroundImage: `url(${content.imagen_cabecera_mobile})` }"
    ></div>
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>
