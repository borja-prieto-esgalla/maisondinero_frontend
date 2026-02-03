<template>
  {{ content }}
  <section
    id="footer"
    class="pt-0 pb-24 lg:py-24 px-4 flex flex-col items-center space-y-20"
  >
    <div v-if="content.imagen_footer_1" class="w-full flex justify-center">
      <img
        :src="content.imagen_footer_1"
        alt="Maison Dinero Footer 1"
        class="w-full max-w-[350px] h-auto object-contain"
      />
    </div>

    <div v-if="content.imagen_footer_2" class="w-full flex justify-center">
      <img
        :src="content.imagen_footer_2"
        alt="Maison Dinero Footer 2"
        class="w-full max-w-[68px] h-auto object-contain"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
img {
  transition: opacity 0.3s ease;
}
</style>
