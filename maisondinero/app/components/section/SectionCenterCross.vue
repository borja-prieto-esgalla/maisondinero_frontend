<template>
  <!-- SECCIÓN 3: dos imágenes con cruz central entre ellas -->
  <section class="w-full flex flex-col items-center gap-6 px-4">
    <div class="flex items-center justify-center w-full max-w-4xl mx-auto gap-0 md:gap-2">
      <img
        :src="content.imagen_izquierda"
        class="w-5/12 md:w-5/12 h-auto object-cover"
      />
      <div class="flex-shrink-0 flex items-center justify-center w-8 md:w-16 lg:w-20 z-10 -mx-1 md:-mx-2">
        <img
          :src="content.cruz_central"
          class="w-full h-auto"
        />
      </div>
      <img
        :src="content.imagen_derecha"
        class="w-5/12 md:w-5/12 h-auto object-cover"
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
