<template>
  <!-- SECCIÓN 9: dos fotos con ornamento/insignia entre ellas -->
  <section class="w-full flex flex-col items-center gap-6 px-4">
    <div class="flex items-center justify-center w-full max-w-4xl mx-auto gap-2 md:gap-6">
      <img
        :src="content.imagen_izquierda"
        class="w-5/12 h-auto object-cover"
      />
      <div class="flex-shrink-0 w-10 md:w-16 lg:w-20">
        <img
          :src="content.ornamento_central"
          class="w-full h-auto"
        />
      </div>
      <img
        :src="content.imagen_derecha"
        class="w-5/12 h-auto object-cover"
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
