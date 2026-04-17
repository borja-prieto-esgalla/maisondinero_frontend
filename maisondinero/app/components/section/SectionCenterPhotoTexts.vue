<template>
  <section class="lg:container relative">
    <!-- MOBILE -->
    <div class="block md:hidden">
      <div class="relative mx-auto flex items-center justify-center">
        <!-- Foto central -->
        <img
          :src="content.imagen_central"
          alt="Imagen central"
          class="h-auto object-cover w-[70%]"
        />

        <!-- Cita izquierda: centrada verticalmente, imagen limitada al 40% del contenedor -->
        <div
          class="absolute inset-y-0 left-0 w-1/2 flex justify-start items-center"
        >
          <img
            :src="content.texto_izquierda"
            alt="Imagen izquierda"
            class="w-[100%] h-auto object-contain"
          />
        </div>

        <!-- Rosario derecha: centrada verticalmente, imagen limitada al 40% del contenedor -->
        <div
          class="absolute inset-y-0 right-0 w-1/2 flex justify-end items-center"
        >
          <img
            :src="content.texto_derecha"
            alt="Imagen derecha"
            class="w-[100%] h-auto object-contain"
          />
        </div>
      </div>

      <!-- Créditos mobile -->
      <div
        v-if="content.texto_creditos"
        v-html="content.texto_creditos"
        class="font-sans text-xs lg:text-base text-center text-white"
      />
    </div>

    <!-- DESKTOP -->
    <div class="hidden md:grid grid-cols-3 items-center">
      <div class="flex justify-start items-center">
        <img
          :src="content.texto_izquierda"
          alt="Imagen izquierda"
          class="w-full h-auto object-contain"
        />
      </div>

      <div class="flex flex-col items-center">
        <img
          :src="content.imagen_central"
          alt="Imagen central"
          class="w-full h-auto object-cover"
        />
        <div
          v-if="content.texto_creditos"
          v-html="content.texto_creditos"
          class="font-sans text-xs lg:text-base text-center text-white mt-6"
        />
      </div>

      <div class="flex justify-end items-center">
        <img
          :src="content.texto_derecha"
          alt="Imagen derecha"
          class="w-full h-auto object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ content: { type: Object, required: true } });
</script>
