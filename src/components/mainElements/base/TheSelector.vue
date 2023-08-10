<template>
  <div class="select-form" :class="themes">
    <label v-if="label" for="customSelectMenu">{{ label }}</label>

    <select id="customSelectMenu" v-model="selected" @change="emitSelection">
      <option :value="0" disabled>
        {{ selectionOptions.defaultMessage }}
      </option>

      <option
        v-for="option in selectionOptions.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.message }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TheSelector",
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
    label: String,
    themes: String,
  },
  setup(props, { emit }) {
    const selected = ref("0");

    const emitSelection = () => {
      console.log("Emitting selection:", selected.value);
      emit("selectionMade", selected.value);
    };

    return {
      selected,
      emitSelection,
    };
  },
};
</script>

<style scoped>
.select-form {
  display: flex;
  align-items: center;
  padding: 0.5em;
  width: 100%;
}

.select-form label {
  font-size: 1.5em;
  font-weight: bold;
}

.select-form select {
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
