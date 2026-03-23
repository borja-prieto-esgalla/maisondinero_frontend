<template>
  <section class="container relative">
    <div class="hidden lg:grid grid-cols-12">
      <div class="col-span-6 flex justify-end items-center">
        <img
          :src="content.imagen_izquierda"
          alt="Imagen izquierda"
          class="items-end"
        />
      </div>
      <div class="col-span-6 flex items-center">
        <img :src="content.imagen_derecha" alt="Imagen derecha" />
      </div>
    </div>
    <div class="flex items-center justify-center lg:hidden">
      <img
        :src="content.imagen_mobile"
        alt="Imagen móvil"
        class="w-[80%] h-auto object-cover lg:hidden"
      />
    </div>

    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="font-sans text-xs lg:text-base text-center text-white mt-4"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
