<template>
  <section class="container flex flex-col items-center gap-6 px-4">
    <div
      class="lg:flex items-center justify-center w-full max-w-3xl mx-auto gap-2 hidden"
    >
      <!-- Texto vertical (SVG rotado) -->
      <div class="flex-shrink-0 flex items-center justify-center">
        <img :src="content.texto_vertical" class="" />
      </div>
      <!-- Foto artista -->
      <div>
        <img
          :src="content.imagen_artista"
          class="flex-1 max-w-xs md:max-w-sm h-auto object-cover"
        />
        <div
          v-if="content.texto_creditos"
          v-html="content.texto_creditos"
          class="font-sans text-xs lg:text-base text-start text-white mt-8"
        />
      </div>
    </div>
    <div class="block lg:hidden">
      <img :src="content.imagen_mobile" class="w-full h-auto object-cover" />
      <div
        v-if="content.texto_creditos"
        v-html="content.texto_creditos"
        class="font-sans text-xs lg:text-base text-center text-white mt-8"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
