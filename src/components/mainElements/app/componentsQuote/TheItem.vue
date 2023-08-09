<template>
  <div class="quote-item">
    <div class="quote-inner">
      <h3 class="quote-text">{{ quote }}</h3>
      <div class="quote-footer">
        <span class="quote-author">{{ author }}</span> |
        <a
          v-if="source"
          class="quote-source"
          :href="source"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.quote-item {
  box-shadow: 11px 10px 21px -7px rgba(6, 93, 0, 0.6) inset;
  width: 300px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.quote-inner {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.quote-text {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.quote-author {
  font-size: 1rem;
  color: #555;
}

.quote-source {
  font-size: 0.875rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.quote-source:hover {
  color: #0056b3;
}
</style>
