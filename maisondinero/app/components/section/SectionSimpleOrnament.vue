<template>
  <section class="container flex flex-col items-center gap-4 px-4">
    <div
      class="relative w-full max-w-md md:max-w-lg mx-auto flex flex-col items-center"
    >
      <img :src="content.imagen_artista" class="w-[80%] lg:w-auto h-auto" />
      <div class="mt-4 md:mt-6">
        <img :src="content.imagen_ornamento" class="w-20 md:w-40 h-auto" />
      </div>
    </div>
    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="font-sans text-xs lg:text-base text-center text-white mt-0"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
