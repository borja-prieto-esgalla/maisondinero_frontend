<template>
  <section class="w-full">
    <img
      :src="content.imagen_principal"
      class="w-full h-auto object-cover lg:block hidden"
    />
    <img
      :src="content.imagen_mobile"
      class="w-full h-auto object-cover lg:hidden"
    />
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
