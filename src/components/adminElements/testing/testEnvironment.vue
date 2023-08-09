<template>
  <div>
    <h1>Let's play!</h1>
    <theSelector
      @selectionMade="(e) => setComponent(e)"
      label="Select a tool to play with"
      themes="comfy column"
      :selectionOptions="{
        defaultMessage: '---Select a component to test---',
        options: testOptions,
        // options: testOptions.issueIdentified,
        // options: testOptions.additions,
      }"
    />
    <div v-if="selected" class="component-area">
      <component :is="selected" />
    </div>
  </div>
</template>

<script>
import theSelector from "@/components/mainElements/base/TheSelector.vue";

// Import Test components here:
import financeListTableVue from "../tables/financeListTable.vue";
import resizablePanel from "@/components/mainElements/panels/ThePanel.vue";

export default {
  name: "TestEnvironment",
  components: {
    theSelector,
    // Tests
    financeListTableVue,
    resizablePanel,
  },
  data() {
    return {
      // Break this into different stages: Broken,In Progress,Testing,etc.
      testOptions: [
        {
          value: financeListTableVue,
          message: "Financial Table(Income)",
        },
        {
          value: resizablePanel,
          message: "Resizable Panel",
        },
      ],
      selected: "",
    };
  },
  methods: {
    setComponent(component) {
      this.selected = component;
    },
  },
};
</script>
