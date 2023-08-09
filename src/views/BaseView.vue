<template>
  <mainLayout>
    <template #header></template>
    <template #default>
      <slot></slot>
    </template>
    <template #footer></template>
  </mainLayout>
</template>

<script>
import mainLayout from "@/components/layouts/MainLayout.vue";

export default {
  name: "BaseView",
  components: {
    mainLayout,
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
