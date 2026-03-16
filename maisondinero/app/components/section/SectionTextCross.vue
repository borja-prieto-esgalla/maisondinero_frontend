<template>
  <!-- SECCIÓN 6: texto izquierda + foto central + rosario derecha -->
  <section class="w-full flex flex-col items-center gap-6 px-4">
    <div class="flex items-center justify-center w-full max-w-4xl mx-auto gap-4 md:gap-8 lg:gap-16">
      <!-- Texto/logo izquierda -->
      <div class="flex-shrink-0">
        <img
          :src="content.imagen_izquierda_texto"
          class="w-16 md:w-28 lg:w-36 h-auto object-contain"
        />
      </div>
      <!-- Foto central artista -->
      <img
        :src="content.imagen_artista"
        class="flex-1 max-w-[200px] md:max-w-sm h-auto object-cover"
      />
      <!-- Cruz / rosario derecha -->
      <div class="flex-shrink-0">
        <img
          :src="content.recurso_cruz"
          class="w-10 md:w-16 lg:w-20 h-auto object-contain"
        />
      </div>
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
