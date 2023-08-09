<template>
  <div class="journal-toc">
    <h2 class="toc-title">Table of Contents</h2>
    <div id="toc-search" class="toc-option">
      <input
        type="text"
        v-model="search"
        placeholder="Search"
        ref="searchInput"
      />
      <input
        type="button"
        class="cstm-btn-primary"
        value="Search"
        @click="searchTableOfContents"
      />
      <input
        type="button"
        class="cstm-btn-secondary"
        value="Clear"
        @click="clearSearch"
      />
    </div>
    <div div id="toc-add" class="toc-option">
      <select v-model="sectionToAdd" ref="sectionSelect">
        <option value="" disabled selected hidden>
          --- Select Section ---
        </option>
        <option
          v-for="section in availableSections"
          :key="section"
          :value="section"
        >
          {{ section }}
        </option>
      </select>

      <input
        type="button"
        value="Add Section"
        class="cstm-btn-primary"
        @click="addSection"
      />
    </div>
    <div class="toc-divider"></div>
    <ul>
      <li v-for="section in tableOfContents" :key="section.title">
        <a :href="section.path">{{ section.convertedTitle }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";

import stringHelper from "@/assets/util/stringManipulation.js";

export default {
  name: "JournalTOC",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const search = ref("");
    const sectionToAdd = ref("");
    const availableSections = [
      "Bookmarks",
      "Checklists",
      "Events",
      "Goals",
      "Notes",
      "Quotes",
      "ToDos",
      "Vocabulary",
    ];

    onMounted(() => {
      const id = props.id;
      store.dispatch("journals/fetchTableOfContents", id).catch((error) => {
        console.error("Error fetching table of contents:", error);
      });
    });

    const searchTableOfContents = () => {
      store.dispatch("journals/search", {
        id: props.id,
        search: search.value,
      });
    };

    const clearSearch = () => {
      search.value = "";
      store.dispatch("journals/fetchTableOfContents", props.id);
    };

    const addSection = () => {
      if (sectionToAdd.value) {
        store.dispatch("journals/addSection", {
          id: props.id,
          section: sectionToAdd.value,
        });
      }
    };

    const tableOfContents = computed(() => {
      var titles = store.getters["journals/getTableOfContents"] || [];

      // Add a unique id and path to each section using the map method
      return titles.map((section) => {
        return {
          title: section,
          path: `/journal/${props.id}/${section}`,
          convertedTitle: stringHelper.convertStringToCase(section, "sentence"),
        };
      });
    });

    return {
      availableSections,
      search,
      sectionToAdd,
      tableOfContents,
      searchTableOfContents,
      clearSearch,
      addSection,
    };
  },
};
</script>

<style scoped>
/* Add your custom styles for the JournalTOC component here */
.journal-toc {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  margin: 0 auto;
}

.toc-title {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px;
}

.toc-option {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
}

.toc-divider {
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #42b983;
}
</style>
