<template>
  <section class="container relative">
    <div class="lg:grid grid-cols-12 justify-center">
      <div class="col-span-5 flex items-center justify-center lg:justify-end">
        <img
          :src="content.imagen_izquierda"
          alt="Imagen izquierda"
          class="lg:w-auto w-[80%]"
        />
      </div>
      <div class="col-span-2 flex flex-col items-center justify-center">
        <img
          :src="content.ornamento_central"
          alt="Imagen central"
          class="w-[100px] lg:w-full h-auto object-cover lg:relative absolute"
        />
      </div>
      <div class="col-span-5 flex items-center justify-center lg:justify-start">
        <img
          :src="content.imagen_derecha"
          alt="Imagen izquierda"
          class="lg:w-auto w-[80%]"
        />
      </div>
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
