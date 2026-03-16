<template>
  <!-- SECCIÓN 1: Hero - dos imágenes a pantalla completa, sin márgenes laterales -->
  <section class="w-full relative">
    <!-- En mobile: imagen_mobile si existe, si no imagen_izquierda sola -->
    <div class="block md:hidden w-full">
      <img
        :src="content.imagen_mobile || content.imagen_izquierda"
        class="w-full h-auto object-cover"
        loading="eager"
      />
    </div>
    <!-- Desktop: dos imágenes lado a lado ocupando todo el ancho -->
    <div class="hidden md:flex w-full items-end">
      <img
        :src="content.imagen_izquierda"
        class="w-1/2 h-auto object-cover object-top"
        loading="eager"
      />
      <img
        :src="content.imagen_derecha"
        class="w-1/2 h-auto object-cover object-top"
        loading="eager"
      />
    </div>
    <!-- Créditos superpuestos abajo -->
    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="credits-content absolute bottom-3 left-0 right-0 text-center px-4"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
