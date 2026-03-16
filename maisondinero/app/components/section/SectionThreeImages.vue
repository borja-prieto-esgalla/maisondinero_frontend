<template>
  <!-- SECCIÓN 5: logo grande + 3 fotos en fila -->
  <section class="w-full flex flex-col items-center gap-6 md:gap-10 px-0">
    <!-- Logo/título MAISON DOLORE centrado, ancho completo -->
    <div class="w-full flex justify-center px-4">
      <img
        :src="content.imagen_principal"
        class="w-full max-w-xl md:max-w-2xl h-auto object-contain"
      />
    </div>
    <!-- Tres fotos: en mobile apiladas, desktop en fila sin separación -->
    <div class="w-full grid grid-cols-3 gap-0.5 md:gap-1">
      <img
        :src="content.imagen_book_uno"
        class="w-full h-auto object-cover aspect-[3/4]"
      />
      <img
        :src="content.imagen_book_dos"
        class="w-full h-auto object-cover aspect-[3/4]"
      />
      <img
        :src="content.imagen_book_tres"
        class="w-full h-auto object-cover aspect-[3/4]"
      />
    </div>
    <div
      v-if="content.texto_creditos"
      v-html="content.texto_creditos"
      class="credits-content px-4"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
