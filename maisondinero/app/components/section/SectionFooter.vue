<template>
  <section
    id="footer"
    class="container pt-0 pb-24 lg:py-24 lg:px-4 flex flex-col items-center space-y-20"
  >
    <div class="w-full flex justify-center">
      <img
        src="~/assets/img/texto.svg"
        alt="Maison Dinero Footer 1"
        class="w-full max-w-[350px] h-auto object-contain"
      />
    </div>

    <div class="w-full flex justify-center">
      <img
        src="~/assets/img/logo.svg"
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
