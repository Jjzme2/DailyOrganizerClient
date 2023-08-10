<template>
  <div class="bookmark-form">
    <!-- Title -->
    <div class="input-field">
      <label for="bookmark-title" class="input-label">Title</label>
      <input
        id="bookmark-title"
        type="text"
        v-model="bookmark.bookmark_title"
        placeholder="Enter title"
        class="input-element"
      />
    </div>

    <!-- Description -->
    <div class="input-field">
      <label for="bookmark-description" class="input-label">Description</label>
      <input
        id="bookmark-description"
        type="text"
        v-model="bookmark.short_description"
        placeholder="Enter description"
        class="input-element"
      />
    </div>

    <!-- URL -->
    <div class="input-field">
      <label for="bookmark-url" class="input-label">URL</label>
      <input
        id="bookmark-url"
        type="text"
        v-model="bookmark.URL"
        placeholder="Enter URL"
        class="input-element"
      />
    </div>

    <!-- Is Youtube -->
    <div class="input-field">
      <label for="bookmark-youtube" class="input-label">Is Youtube URL</label>
      <input
        id="bookmark-youtube"
        type="checkbox"
        v-model="bookmark.is_youtube_url"
      />
    </div>

    <button class="cstm-btn-primary" @click="saveItem">Save</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "BookmarkForm",
  props: {
    id: {
      type: String,
      //   default: "179c9e06-3152-11ee-9bc4-c01850600ffa",
      default: "0",
    },
  },
  setup(props) {
    const store = useStore();

    const fetchBookmark = () => {
      store.dispatch("bookmarks/fetchItem", props.id).catch((error) => {
        console.error("Error fetching bookmarks:", error);
      });
    };

    onMounted(() => {
      fetchBookmark();
    });

    const bookmark = computed(() => {
      var fetched = store.getters["bookmarks/getItem"];
      if (fetched.bookmark_id == null) {
        return {
          bookmark_title: "",
          short_description: "",
          journal_id: "ad4c640c-37d7-11ee-89ce-c01850600ffa", //Currently set to Test, change to the specific journal
          URL: "",
          is_youtube_url: false,
        };
      }
      return fetched;
    });

    const saveItem = async () => {
      console.log("Saving bookmark:", bookmark.value);

      await store
        .dispatch("bookmarks/saveItem", bookmark.value)
        .catch((error) => {
          console.error("Error saving bookmark:", error);
        });
    };

    return {
      bookmark,
      saveItem,
    };
  },
};
</script>

<style scoped>
.input-field {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
}

.input-label {
  flex: 1 0 100%;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.input-element {
  flex: 3 0 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}
</style>
