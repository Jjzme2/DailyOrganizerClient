<template>
  <BaseView>
    <template #default>
      <div class="componentView-view">
        <componentView :id="journalId"></componentView>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "../BaseView.vue";
import componentView from "@/components/mainElements/app/componentsQuote/TheList.vue";

export default {
  name: "QuoteList",
  components: {
    BaseView,
    componentView,
  },
  computed: {
    journalId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
