<template>
  <section class="container py-8">
    <div class="swiper" ref="swiperEl">
      <div class="swiper-wrapper">
        <div
          v-for="(img, index) in content.imagenes_slider"
          :key="index"
          class="swiper-slide"
        >
          <img
            :src="img"
            :alt="`Slide ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <div class="swiper-pagination" ref="paginationEl"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const swiperEl = ref(null);
const paginationEl = ref(null);
let swiperInstance = null;

onMounted(async () => {
  const { default: Swiper } = await import("swiper");
  const { Pagination, Autoplay } = await import("swiper/modules");

  swiperInstance = new Swiper(swiperEl.value, {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: paginationEl.value,
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});

onBeforeUnmount(() => {
  if (swiperInstance) swiperInstance.destroy(true, true);
});
</script>

<style>
@import "swiper/css";
@import "swiper/css/pagination";

.swiper {
  width: 100%;
  overflow: hidden;
}

.swiper-pagination {
  position: static;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.swiper-slide {
  aspect-ratio: 3 / 4;
}

.swiper-pagination-bullet {
  background: transparent;
  border: 1.5px solid #fff;
  opacity: 1;
  width: 10px;
  height: 10px;
}

.swiper-pagination-bullet-active {
  background: #fff;
  border-color: #fff;
}
</style>
