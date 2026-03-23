<template>
  <section class="w-full py-10 px-4">
    <div class="max-w-5xl mx-auto flex flex-col items-center gap-8">
      <!-- Layout principal: grid 3 columnas iguales -->
      <div class="w-full lg:grid grid-cols-3 items-center">
        <!-- Columna izquierda: cita bíblica -->
        <div class="flex justify-center lg:justify-start">
          <img
            :src="content.imagen_izquierda_texto"
            class="w-[70%] lg:w-60 h-auto object-contain"
            alt="Cita bíblica"
          />
        </div>

        <!-- Columna central: foto + rosario superpuesto -->
        <div
          class="relative flex flex-col justify-center items-center lg:mt-0 mt-10"
        >
          <img
            :src="content.imagen_artista"
            class="w-[80%] lg:max-w-[320px] h-auto object-cover"
            alt="Artista"
          />
          <img
            :src="content.recurso_cruz"
            class="absolute -top-10 -right-4 md:-top-16 md:-right-6 lg:-top-18 lg:-right-20 w-44 md:w-44 lg:w-56 h-auto object-contain pointer-events-none"
            alt="Rosario"
          />
          <div
            v-if="content.texto_creditos"
            v-html="content.texto_creditos"
            class="font-sans text-xs lg:text-base text-center text-white mt-10"
          />
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>

<style scoped>
.credits-content :deep(p) {
  @apply text-white text-center text-sm md:text-base leading-relaxed;
}
</style>
