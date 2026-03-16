<template>
  <!-- SECCIÓN 12: Logo S25 centrado + galería de 4 fotos en fila -->
  <section class="w-full flex flex-col items-center gap-6 md:gap-8 px-4">
    <!-- Logo S25 -->
    <div class="flex justify-center">
      <img
        :src="content.imagen_central"
        class="w-28 md:w-44 lg:w-56 h-auto object-contain opacity-80"
      />
    </div>
    <!-- Galería: 2 cols en mobile, 4 en desktop, sin gap -->
    <div class="w-full grid grid-cols-2 md:grid-cols-4 gap-0.5">
      <img
        v-for="(img, i) in content.galeria_imagenes"
        :key="i"
        :src="img"
        class="w-full h-auto object-cover aspect-[3/4]"
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
