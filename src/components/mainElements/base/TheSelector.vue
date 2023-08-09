<template>
  <div class="select-form" :class="themes">
    <label v-if="label" for="customSelectMenu">{{ label }}</label>

    <select
      id="customSelectMenu"
      v-model="selected"
      @change="
        $emit('selectionMade', selected)
        // message();
      "
    >
      <option :value="0" disabled>
        {{ selectionOptions.defaultMessage }}
      </option>

      <option v-for="o in selectionOptions.options" :key="o" :value="o.value">
        {{ o.message }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TheSelector",
  data() {
    return {
      selected: "0",
    };
  },
  props: {
    selectionOptions: {
      type: Object,
      default: () => ({
        defaultMessage: "---Select an option---",
        options: [
          { value: "1", message: "One" },
          { value: "2", message: "Two" },
        ],
      }),
    },
    label: {
      type: String,
      default: null,
    },
    themes: {
      type: String,
      default: "",
    },
  },
  mounted() {
    console.log(`Selected options: ${JSON.stringify(this.selectionOptions)}`);
  },
  methods: {
    message() {
      const message = {
        messageTitle: "TheSelector.vue.",
        messageDetail:
          "You're emitting a message. You can call it with `@selectionMade='showSelected'`.",
        messageContent:
          "@selectionMade='(e) => setComponent(e)' label='someLabel' themes='comfy column' :options='options'",
        messageLevel: "info",
        messageData: JSON.stringify(this.selectionOptions),
      };
      console.table(message);
    },
  },
};
</script>

<style scoped>
.comfy {
  display: flex;
  align-items: center;
  padding: 0.5em;
  width: 100%;
}

.comfy label {
  font-size: 1.5em;
  font-weight: bold;
}

.comfy select {
  font-size: 1.25em;
  font-weight: bold;
  padding: 0.25em;
  border-radius: 0.5em;
  border: 1px solid black;
  background-color: white;
  color: black;
}

.row {
  display: flex;
  flex-direction: row;
  min-width: 200px;
  justify-content: space-evenly;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100px;
}
</style>
