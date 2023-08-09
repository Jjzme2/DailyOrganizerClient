<template>
  <div class="dashboard-view">
    <dashboardApp></dashboardApp>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

import dashboardApp from "@/components/mainElements/app/dashboards/dashboardApp.vue";

// Test new Table
export default {
  name: "DashBoard",
  components: {
    dashboardApp,
  },
  setup() {
    const store = useStore();

    return {
      errors: computed(() => store.getters["appState/getErrors"]),
    };
  },
};
</script>

<style scoped>
.dashboard-view {
  background-color: rgba(169, 169, 169, 0.412);
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 0.85rem;
  width: 85%;
}

.panel {
  background-color: rgba(169, 169, 169, 0.212);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 1rem;
  width: 30%;
}
</style>
