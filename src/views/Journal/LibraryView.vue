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
import BaseView from "../BaseView.vue";
import dashboard from "@/components/mainElements/app/dashboards/dashboardJournal.vue";

export default {
  name: "JournalView",
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
