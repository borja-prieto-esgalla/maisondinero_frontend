<template>
  <section class="container">
    <div class="w-full flex justify-center">
      <img
        :src="content.imagen_principal"
        class="w-full h-auto object-contain lg:mb-0 mb-6"
      />
    </div>
    <div
      class="w-full lg:grid grid-cols-3 gap-0.5 md:gap-10 flex flex-col items-center"
    >
      <img
        :src="content.imagen_book_uno"
        class="lg:w-full w-[80%] h-auto object-cover lg:aspect-[3/4] lg:mb-0 mb-4"
      />
      <img
        :src="content.imagen_book_dos"
        class="lg:w-full w-[80%] h-auto object-cover lg:aspect-[3/4] lg:mb-0 mb-4"
      />
      <img
        :src="content.imagen_book_tres"
        class="lg:w-full w-[80%] h-auto object-cover lg:aspect-[3/4] lg:mb-0 mb-4"
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
