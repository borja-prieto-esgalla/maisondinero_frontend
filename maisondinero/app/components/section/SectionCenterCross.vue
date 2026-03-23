<template>
  <section class="container flex flex-col items-center gap-6 px-4">
    <div
      class="flex flex-col lg:flex-row items-center justify-center w-full max-w-4xl mx-auto gap-0 md:gap-12"
    >
      <img
        :src="content.imagen_izquierda"
        class="h-auto w-[80%] lg:w-auto object-cover"
      />
      <div
        class="flex-shrink-0 flex items-center justify-center w-100 absolute"
      >
        <img :src="content.cruz_central" class="w-[134px] lg:w-full h-auto" />
      </div>
      <img
        :src="content.imagen_derecha"
        class="h-auto w-[80%] lg:w-auto object-cover"
      />
    </div>
    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="font-sans text-xs lg:text-base text-center text-white"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
