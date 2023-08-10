<template>
  <BaseView>
    <template #default>
      <div class="dashboard-view">
        <dashboard></dashboard>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import dashboard from "@/components/adminElements/testing/testEnvironment.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    dashboard,
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
