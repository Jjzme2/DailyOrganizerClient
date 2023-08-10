<template>
  <div>
    <h1>Testing Bookmark DTO</h1>
    {{ bookmarks }}
    <p>ID: {{ bookmarks.bookmark_id }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "testComponent",
  setup() {
    const store = useStore();
    // const id = 0;
    const id = "179c9e06-3152-11ee-9bc4-c01850600ffa"; // Luke Combs Song

    const fetchBookmarks = () => {
      store.dispatch("bookmarks/fetchItem", id).catch((error) => {
        console.error("Error fetching bookmarks:", error);
      });
    };

    onMounted(() => {
      fetchBookmarks();
    });

    const bookmarks = computed(() => {
      return store.getters["bookmarks/getItem"];
    });

    return {
      bookmarks,
    };
  },
};
</script>
