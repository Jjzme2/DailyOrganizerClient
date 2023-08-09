<template>
  <div>
    <div v-if="isAdmin || false" class="resource-list">
      <div
        v-for="resource in adminResources"
        :key="resource"
        class="resource-item"
      >
        <a :href="resource.link">
          {{ resource.name }}
        </a>
      </div>
    </div>
    <div v-else class="resource-list">
      <div
        v-for="resource in personalResources"
        :key="resource"
        class="resource-item"
      >
        <a :href="resource.link">
          {{ resource.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "dashboardApp",
  components: {},
  setup() {
    // const store = useStore();

    // const getData = async () => {
    //   await store.dispatch("enemies/fetchData");
    //   enemies.value = store.getters["enemies/getList"];
    // };

    const personalResources = ref([
      {
        name: "Quotes",
        link: "quotes",
      },
      {
        name: "Journals",
        link: "/journals",
      },
    ]);

    const adminResources = ref([
      {
        name: "Bookmarks",
        link: "admin/bookmarks",
      },
      {
        name: "Checklists",
        link: "admin/checklists",
      },
      {
        name: "Events",
        link: "admin/events",
      },

      {
        name: "Goals",
        link: "admin/goals",
      },
      {
        name: "Notes",
        link: "admin/notes",
      },

      {
        name: "Todos",
        link: "admin/todos",
      },
    ]);

    return { personalResources, adminResources };
  },
};
</script>

<style scoped>
.resource-item {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  max-width: 50%;
  padding: 0.5rem;
}

.resource-item:hover {
  background-color: #606060;
  cursor: pointer;
  text-shadow: 0 0 5px #fff;
}

.resource-list {
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
