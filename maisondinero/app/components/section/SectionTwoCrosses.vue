<template>
  <section class="container">
    <div
      class="flex items-center justify-center gap-4 md:gap-12 w-full max-w-3xl mx-auto"
    >
      <img
        :src="content.cruz_izquierda"
        class="w-12 md:w-20 lg:w-48 h-auto flex-shrink-0 opacity-85 hidden lg:block"
      />
      <img
        :src="content.imagen_central"
        class="flex-1 max-w-xs md:max-w-md h-auto object-cover hidden lg:block"
      />
      <img
        :src="content.cruz_derecha"
        class="w-12 md:w-20 lg:w-48 h-auto flex-shrink-0 opacity-85 hidden lg:block"
      />
    </div>
    <div
      class="flex items-center justify-center gap-4 md:gap-12 w-full max-w-3xl mx-auto lg:hidden"
    >
      <img :src="content.imagen_mobile" class="h-auto object-cover w-[80%]" />
    </div>

    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="font-display text-xs lg:text-base text-center text-white mt-4"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
