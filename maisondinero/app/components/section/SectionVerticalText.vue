<template>
  <!-- SECCIÓN 4: texto vertical SVG a la izquierda + foto artista -->
  <section class="w-full flex flex-col items-center gap-6 px-4">
    <div class="flex items-center justify-center w-full max-w-3xl mx-auto gap-4 md:gap-8">
      <!-- Texto vertical (SVG rotado) -->
      <div class="flex-shrink-0 flex items-center justify-center">
        <img
          :src="content.texto_vertical"
          class="h-40 md:h-64 lg:h-80 w-auto object-contain"
          style="transform: rotate(0deg);"
        />
      </div>
      <!-- Foto artista -->
      <img
        :src="content.imagen_artista"
        class="flex-1 max-w-xs md:max-w-sm h-auto object-cover"
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
