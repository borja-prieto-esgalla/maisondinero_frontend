<template>
  <section class="container flex flex-col items-center gap-5 px-4">
    <img
      :src="content.imagen_artista"
      class="w-[80%] lg:w-auto h-auto object-cover max-h-[590px]"
    />
    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="font-sans text-xs lg:text-base text-center text-white"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
