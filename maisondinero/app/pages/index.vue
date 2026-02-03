<template>
  <div id="page-transition">
    <template v-if="data">
      <TemplateHome :data="data" />
    </template>
  </div>
</template>
<script setup>
const data = ref(null);

const {
  public: { backendUrl },
} = useRuntimeConfig();

const { data: apiData } = await useFetch(
  `${backendUrl}/wp-json/landing-data/v1/get-home-data`,
);
data.value = apiData.value;
</script>
