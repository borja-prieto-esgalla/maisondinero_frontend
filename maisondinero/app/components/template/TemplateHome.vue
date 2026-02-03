<template>
  <header class="fixed top-0 left-0 w-full z-50 pointer-events-none">
    <div class="absolute lg:top-0 lg:left-0 top-1 left-1">
      <img
        v-if="data.acf?.campos_globales?.ornamento_izq_blanco"
        :src="data.acf?.campos_globales?.ornamento_izq_blanco"
        alt=""
        class="w-20 md:w-56 lg:w-50 h-auto"
      />
    </div>

    <div class="flex justify-center pt-2 md:pt-10 pointer-events-auto">
      <NuxtLink to="/">
        <img
          v-if="data.acf?.campos_globales?.logo_blanco"
          :src="data.acf?.campos_globales?.logo_blanco"
          alt="Maison Dinero"
          class="h-12 md:h-20 lg:h-20 w-auto object-contain"
        />
      </NuxtLink>
    </div>

    <div class="absolute lg:top-0 lg:right-0 top-1 right-1">
      <img
        v-if="data.acf?.campos_globales?.ornamento_der_blanco"
        :src="data.acf?.campos_globales?.ornamento_der_blanco"
        alt=""
        class="w-20 md:w-56 lg:w-50 h-auto"
      />
    </div>
  </header>

  <div class="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 pb-2 lg:pb-0"
    >
      <img
        v-if="data.acf?.campos_globales?.escudo_izq_blanco"
        :src="data.acf?.campos_globales?.escudo_izq_blanco"
        alt=""
        class="w-20 md:w-40 lg:w-36 h-auto"
      />
    </div>
    <div class="absolute bottom-0 right-0 hidden lg:block">
      <img
        v-if="data.acf?.campos_globales?.escudo_der_blanco"
        :src="data.acf?.campos_globales?.escudo_der_blanco"
        alt=""
        class="w-24 md:w-40 lg:w-36 h-auto"
      />
    </div>
  </div>

  <template v-for="(item, index) in data.acf?.secciones" :key="'hero-' + index">
    <template v-if="item.acf_fc_layout === 'cabecera'">
      <SectionHero :content="item" />
    </template>
  </template>

  <div class="relative min-h-screen bg-black">
    <div
      class="absolute inset-0 z-0 bg-repeat pointer-events-none opacity-20"
      :style="{
        backgroundImage: `url(${data.acf?.campos_globales?.patron_cuerpo_negro})`,
        backgroundSize: '800px',
      }"
    ></div>

    <div class="relative z-10">
      <template
        v-for="(item, index) in data.acf?.secciones"
        :key="'content-' + index"
      >
        <template v-if="item.acf_fc_layout === 'cuerpo'">
          <SectionBody :content="item" />
        </template>
        <template v-if="item.acf_fc_layout === 'footer'">
          <SectionFooter :content="item" />
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
