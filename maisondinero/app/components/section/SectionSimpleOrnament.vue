<template>
  <!-- SECCIÓN 11: foto simple + escudo/ornamento superpuesto abajo -->
  <section class="w-full flex flex-col items-center gap-4 px-4">
    <div class="relative w-full max-w-md md:max-w-lg mx-auto flex flex-col items-center">
      <img
        :src="content.imagen_artista"
        class="w-full h-auto object-cover"
      />
      <!-- Ornamento centrado debajo de la foto -->
      <div class="mt-4 md:mt-6">
        <img
          :src="content.imagen_ornamento"
          class="w-12 md:w-16 h-auto opacity-80"
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
