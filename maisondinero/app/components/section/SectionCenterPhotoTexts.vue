<template>
  <!-- SECCIÓN 8: foto central con textos/imágenes a izquierda y derecha -->
  <!-- Los campos texto_izquierda, imagen_central, texto_derecha son IDs de attachments de WP -->
  <!-- Se construyen las URLs directamente desde la API de WP media si están disponibles como URLs -->
  <section class="w-full flex flex-col items-center gap-6 px-4">
    <div class="flex items-center justify-center w-full max-w-4xl mx-auto gap-4 md:gap-8 lg:gap-12">

      <!-- Texto/imagen izquierda -->
      <div class="flex-shrink-0 w-1/4 md:w-1/5 flex items-center justify-center">
        <template v-if="isUrl(content.texto_izquierda)">
          <img :src="content.texto_izquierda" class="w-full h-auto object-contain opacity-80" />
        </template>
        <template v-else>
          <!-- Es un ID de WP: se renderiza vacío (requiere resolución server-side) -->
          <div class="text-white/20 text-xs text-center">{{ content.texto_izquierda }}</div>
        </template>
      </div>

      <!-- Imagen central -->
      <div class="flex-1 max-w-xs md:max-w-sm">
        <template v-if="isUrl(content.imagen_central)">
          <img :src="content.imagen_central" class="w-full h-auto object-cover" />
        </template>
        <template v-else>
          <div class="w-full aspect-[3/4] bg-white/5 flex items-center justify-center text-white/20 text-xs">
            ID: {{ content.imagen_central }}
          </div>
        </template>
      </div>

      <!-- Texto/imagen derecha -->
      <div class="flex-shrink-0 w-1/4 md:w-1/5 flex items-center justify-center">
        <template v-if="isUrl(content.texto_derecha)">
          <img :src="content.texto_derecha" class="w-full h-auto object-contain opacity-80" />
        </template>
        <template v-else>
          <div class="text-white/20 text-xs text-center">{{ content.texto_derecha }}</div>
        </template>
      </div>

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

function isUrl(val) {
  return typeof val === 'string' && (val.startsWith('http') || val.startsWith('/'));
}
</script>
