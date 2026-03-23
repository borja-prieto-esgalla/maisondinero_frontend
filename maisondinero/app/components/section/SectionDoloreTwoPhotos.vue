<template>
  <!-- SECCIÓN 10: logo Dolore script + 2 fotos lado a lado -->
  <section class="container">
    <!-- Logo script "Dolore" centrado -->
    <div class="w-full flex justify-center">
      <img :src="content.imagen_dolore" class="w-full" />
    </div>
    <!-- 2 fotos lado a lado sin margen -->
    <div
      class="w-full relative lg:-mt-24 lg:grid grid-cols-2 gap-1 md:gap-14 max-w-4xl mx-auto items-center flex flex-col"
    >
      <img
        :src="content.imagen_izq"
        class="w-[80%] lg:w-full h-auto object-cover lg:aspect-[3/4]"
      />
      <img
        :src="content.imagen_der"
        class="w-[80%] lg:w-full h-auto object-cover lg:aspect-[3/4] mt-4 lg:mt-0"
      />
    </div>
    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="font-sans text-xs lg:text-base text-center text-white mt-6"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
