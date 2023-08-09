<template>
  <div v-if="visible" class="cstm-modal-overlay">
    <div class="cstm-modal-dialog" :class="modalSize">
      <div class="cstm-modal-content">
        <div class="cstm-modal-header">
          <h5 class="cstm-modal-title">{{ modalTitle + " " + contentType }}</h5>
          <button type="button" class="cstm-close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="cstm-modal-body">
          <div v-for="displayKey in displayKeys" :key="displayKey.key">
            <p>
              <strong>{{ displayKey.name }}:</strong>
              <template v-if="displayKey.isEditable">
                <input
                  v-model="editedData[displayKey.key]"
                  :placeholder="displayKey.placeholder || data[displayKey.key]"
                />
              </template>
              <template v-else>
                {{ data[displayKey.key] }}
              </template>
            </p>
          </div>
        </div>
        <div class="cstm-modal-footer">
          <button type="button" class="cstm-btn-primary" @click="openData">
            Open
          </button>
          <button type="button" class="cstm-btn-secondary" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    modalTitle: {
      type: String,
      default: "Reader Modal",
    },
    modalSize: {
      type: String,
      default: "modal-md",
    },
    displayKeys: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      editedData: { ...this.data },
    };
  },
  methods: {
    openData() {
      this.$emit("open", this.data);
    },
    closeModal() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style>
/* Add custom styling for the modal */
.cstm-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.cstm-modal-dialog {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 400px;
  max-width: 90%;
  margin: 0;
}

.cstm-modal-content {
  padding: 20px;
}

.cstm-modal-header {
  background-color: #f9f9f9;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.cstm-modal-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.cstm-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #666;
  padding: 0;
}

.cstm-close:focus {
  outline: none;
}

.cstm-close:hover {
  color: #222;
}

.cstm-modal-body {
  padding: 15px;
}

.cstm-modal-body p {
  margin: 0;
  padding: 5px 0;
}

.cstm-modal-footer {
  background-color: #f9f9f9;
  padding: 15px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
}

.cstm-modal-body input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.cstm-modal-body input[type="text"]::placeholder {
  color: #999;
}

.cstm-modal-body input[type="text"]:focus {
  outline: none;
  border-color: #42b983;
}
</style>
