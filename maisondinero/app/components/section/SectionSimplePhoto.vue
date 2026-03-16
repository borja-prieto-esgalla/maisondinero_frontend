<template>
  <!-- SECCIÓN 7: foto simple centrada, ancha -->
  <section class="w-full flex flex-col items-center gap-5 px-4">
    <div class="w-full max-w-2xl md:max-w-3xl mx-auto">
      <img
        :src="content.imagen_artista"
        class="w-full h-auto object-cover"
      />
    </div>
    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="credits-content"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
