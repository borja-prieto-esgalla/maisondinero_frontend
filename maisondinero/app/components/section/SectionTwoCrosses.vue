<template>
  <!-- SECCIÓN 2: imagen central con cruces a los lados -->
  <section class="w-full flex flex-col items-center gap-6 md:gap-8 px-4">
    <div class="flex items-center justify-center gap-4 md:gap-12 w-full max-w-3xl mx-auto">
      <img
        :src="content.cruz_izquierda"
        class="w-12 md:w-20 lg:w-24 h-auto flex-shrink-0 opacity-85"
      />
      <img
        :src="content.imagen_central"
        class="flex-1 max-w-xs md:max-w-md h-auto object-cover"
      />
      <img
        :src="content.cruz_derecha"
        class="w-12 md:w-20 lg:w-24 h-auto flex-shrink-0 opacity-85"
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
