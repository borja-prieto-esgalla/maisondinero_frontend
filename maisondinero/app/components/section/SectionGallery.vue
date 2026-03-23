<template>
  <!-- SECCIÓN 12: Logo S25 centrado + galería de 4 fotos en fila -->
  <section class="w-full flex flex-col items-center gap-6 md:gap-8 px-4">
    <!-- Logo S25 -->
    <div class="flex justify-center relative z-10">
      <img :src="content.imagen_central" class="h-auto object-contain" />
    </div>
    <div class="-mt-48 w-full grid grid-cols-2 md:grid-cols-4 gap-0.5">
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
      class="font-sans text-xs lg:text-base text-center text-white mt-0"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
