<template>
  <!-- SECCIÓN 10: logo Dolore script + 2 fotos lado a lado -->
  <section class="w-full flex flex-col items-center gap-6 md:gap-8 px-4">
    <!-- Logo script "Dolore" centrado -->
    <div class="w-full flex justify-center">
      <img
        :src="content.imagen_dolore"
        class="w-full max-w-xs md:max-w-sm h-auto object-contain opacity-90"
      />
    </div>
    <!-- 2 fotos lado a lado sin margen -->
    <div class="w-full grid grid-cols-2 gap-1 md:gap-2 max-w-4xl mx-auto">
      <img
        :src="content.imagen_izq"
        class="w-full h-auto object-cover aspect-[3/4]"
      />
      <img
        :src="content.imagen_der"
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
