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
import testComponent from "@/components/adminElements/testing/testComponent.vue";
import bookmarkForm from "@/components/mainElements/app/componentsBookmark/BookmarkForm.vue";

export default {
  name: "TestEnvironment",
  components: {
    theSelector,
    // Tests
    testComponent,
  },
  data() {
    return {
      // Break this into different stages: Broken,In Progress,Testing,etc.
      testOptions: [
        {
          value: testComponent,
          message: "Test Component",
        },
        {
          value: bookmarkForm,
          message: "Bookmark Form",
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
