<template>
  <section id="body" class="py-24 px-4 md:px-8 lg:px-16 text-white">
    <div class="container mx-auto flex flex-col space-y-[180px]">
      <div
        v-for="(seccion, sIdx) in content.seccion_fotos"
        :key="sIdx"
        class="w-full flex flex-col items-center space-y-[110px]"
      >
        <div
          v-for="(col, cIdx) in seccion.coleccion"
          :key="cIdx"
          class="w-full flex flex-col items-center"
        >
          <div
            class="flex flex-wrap justify-center gap-[60px] w-full max-w-[1300px]"
          >
            <div
              v-for="(foto, fIdx) in col.fotos_coleccion"
              :key="fIdx"
              class="basis-full md:basis-[calc(33.333%-40px)] flex justify-center"
            >
              <img :src="foto" alt="Foto" class="w-full h-auto object-cover" />
            </div>
          </div>

          <div
            v-if="col.texto_coleccion"
            class="mt-16 w-full max-w-4xl flex flex-col items-center"
          >
            <div
              class="text-white text-[14px] font-semibold leading-tight font-sans text-center"
              v-html="col.texto_coleccion"
            ></div>
          </div>
        </div>
      </div>
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
:deep(p) {
  margin-bottom: 0.5rem;
}
:deep(p:last-child) {
  margin-bottom: 0;
}
</style>
