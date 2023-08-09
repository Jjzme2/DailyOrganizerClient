<template>
  <div>
    <h1>Quotes</h1>
    <!-- Add button as link -- Haven't implemented this, auto generated, might be good. -->

    <!-- <router-link :to="{ name: 'QuoteAdd', params: { id: journalId } }">
      Add Quote
    </router-link> -->

    <div class="quote-list">
      <div v-for="quote in quotes" :key="quote.id">
        <quoteItem
          :id="quote.quote_id"
          :quote="quote.quote_text"
          :author="quote.quote_author"
          :source="quote.quote_source"
        ></quoteItem>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import quoteItem from "./TheItem.vue";

export default {
  name: "TheList",
  components: {
    quoteItem,
  },

  setup() {
    const store = useStore();
    const quotes = computed(() => store.getters["quotes/getList"]);

    onMounted(() => {
      store.dispatch("quotes/fetchData");
    });

    return { quotes };
  },
};
</script>

<style scoped>
.quote-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
  background-color: lightgray;
  padding: 20px;
}
</style>
