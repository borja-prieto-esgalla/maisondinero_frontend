<template>
  <div
    class="bg-black text-white min-h-screen selection:bg-white selection:text-black"
  >
    <!-- HEADER FIJO -->
    <header
      class="fixed top-0 left-0 w-full z-50 pointer-events-none px-4 py-4 md:px-8 md:py-6"
    >
      <div class="flex justify-between items-start w-full relative">
        <img
          v-if="data.acf?.campos_globales?.ornamento_izq_blanco"
          :src="data.acf?.campos_globales?.ornamento_izq_blanco"
          class="w-20 sm:w-24 md:w-32 lg:w-44 h-auto pointer-events-auto opacity-90"
        />
        <NuxtLink
          to="/"
          class="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-0"
        >
          <img
            v-if="data.acf?.campos_globales?.logo_blanco"
            :src="data.acf?.campos_globales?.logo_blanco"
            alt="Maison Dinero"
            class="h-10 md:h-24 w-auto object-contain"
          />
        </NuxtLink>
        <img
          v-if="data.acf?.campos_globales?.ornamento_der_blanco"
          :src="data.acf?.campos_globales?.ornamento_der_blanco"
          class="w-20 sm:w-24 md:w-32 lg:w-44 h-auto pointer-events-auto opacity-90"
        />
      </div>
    </header>

    <!-- ESCUDOS FIJOS INFERIORES -->
    <div
      class="fixed bottom-0 left-0 w-full z-50 pointer-events-none px-4 py-4 md:px-8 md:py-6 lg:flex justify-between items-end hidden"
    >
      <img
        v-if="data.acf?.campos_globales?.escudo_izq_blanco"
        :src="data.acf?.campos_globales?.escudo_izq_blanco"
        class="w-10 md:w-32 h-auto pointer-events-auto opacity-70"
      />
      <img
        v-if="data.acf?.campos_globales?.escudo_der_blanco"
        :src="data.acf?.campos_globales?.escudo_der_blanco"
        class="w-10 md:w-32 h-auto pointer-events-auto opacity-70"
      />
    </div>

    <!-- FONDO PATRÓN -->
    <div
      class="fixed inset-0 z-0 pointer-events-none lg:block hidden"
      :style="{
        backgroundImage: `url(${data.acf?.campos_globales?.patron_cuerpo_negro})`,
        backgroundSize: '1436px',
        backgroundRepeat: 'repeat',
        opacity: 0.7,
      }"
    />
    <div
      class="fixed inset-0 z-0 pointer-events-none lg:hidden"
      :style="{
        backgroundImage: `url(${data.acf?.campos_globales?.patron_cuerpo_negro})`,
        backgroundSize: '950px',
        backgroundRepeat: 'repeat',
        opacity: 0.7,
      }"
    />

    <!-- HERO VIDEO -->
    <section class="relative z-10 w-full h-screen overflow-hidden">
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="~/assets/video/videoinicio.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- CONTENIDO PRINCIPAL -->
    <main class="relative z-10">
      <div class="flex flex-col gap-16 md:gap-20 lg:gap-24 pt-24 md:pt-32 pb-0">
        <div v-for="(section, index) in data.acf?.secciones" :key="index">
          <SectionHero
            v-if="section.acf_fc_layout === 'cabecera'"
            :content="section"
          />

          <SectionTwoCrosses
            v-if="section.acf_fc_layout === 'seccion_dos_cruces'"
            :content="section"
          />

          <SectionCenterCross
            v-if="section.acf_fc_layout === 'seccion_cruz_central'"
            :content="section"
          />

          <SectionVerticalText
            v-if="section.acf_fc_layout === 'seccion_texto_vertical'"
            :content="section"
          />

          <SectionThreeImages
            v-if="section.acf_fc_layout === 'seccion_tres_imagenes'"
            :content="section"
          />

          <SectionTextCross
            v-if="section.acf_fc_layout === 'seccion_texto_cruz'"
            :content="section"
          />

          <SectionSimplePhoto
            v-if="section.acf_fc_layout === 'seccion_foto_simple'"
            :content="section"
          />

          <SectionCenterPhotoTexts
            v-if="section.acf_fc_layout === 'seccion_foto_central_textos'"
            :content="section"
          />

          <SectionInsignia
            v-if="section.acf_fc_layout === 'seccion_ornamento_central'"
            :content="section"
          />

          <SectionDoloreTwoPhotos
            v-if="section.acf_fc_layout === 'seccion_dolore_dos_fotos'"
            :content="section"
          />

          <SectionSimpleOrnament
            v-if="section.acf_fc_layout === 'foto_simple_con_ornamento'"
            :content="section"
          />

          <SectionGallery
            v-if="section.acf_fc_layout === 'seccion_galeria'"
            :content="section"
          />

          <SectionAuthor
            v-if="section.acf_fc_layout === 'seccion_autor'"
            :content="section"
          />
        </div>

        <SectionFooter />
      </div>
    </main>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true },
});
</script>

<style>
.credits-text p,
.credits-content p {
  @apply text-[9px] md:text-[10px] uppercase tracking-[0.22em] opacity-50 leading-relaxed text-center;
  margin: 0;
}
</style>
