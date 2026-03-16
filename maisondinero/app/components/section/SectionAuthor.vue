<template>
  <!-- SECCIÓN AUTOR: foto final a ancho completo, sin margen -->
  <section class="w-full">
    <img
      :src="content.imagen_principal"
      class="w-full h-auto object-cover"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
