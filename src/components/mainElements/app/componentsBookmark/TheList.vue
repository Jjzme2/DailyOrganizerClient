<template>
  <div class="bookmark-list">
    <bookmarkItem
      v-for="bookmark in bookmarkList"
      :key="bookmark.name"
      :name="bookmark.name"
      :URL="bookmark.URL"
      :description="bookmark.description"
      :isYoutubeVideo="bookmark.isYoutubeVideo"
    ></bookmarkItem>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import bookmarkItem from "./TheItem.vue";

import stringHelper from "@/assets/util/stringManipulation.js"; // Import the stringHelper here

export default {
  name: "TheList",
  components: {
    bookmarkItem,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    onMounted(() => {
      store.dispatch("bookmarks/fetchFromJournal", props.id);
    });

    const bookmarkList = computed(() => {
      var bookmarks = store.getters["bookmarks/getListFromJournal"];

      if (bookmarks) {
        return bookmarks.map((bookmark) => ({
          name: stringHelper.convertStringToCase(
            bookmark.bookmark_title,
            "camel"
          ),
          URL: bookmark.url,
          description: bookmark.short_description,
          isYoutubeVideo: bookmark.is_youtube_url ? true : false,
        }));
      } else {
        return [];
      }
    });

    return { bookmarkList };
  },
};
</script>

<style scoped>
/* Add your custom styles for the bookmark-list component here */
.bookmark-list {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
