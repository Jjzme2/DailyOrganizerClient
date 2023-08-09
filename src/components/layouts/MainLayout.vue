<template>
  <div class="main-layout">
    <header class="header" v-if="$slots.header">
      <slot name="header"><TheNavbar></TheNavbar></slot>
    </header>
    <main class="body">
      <slot></slot>
      <!-- default slot call this with #default not #body-->
    </main>
    <footer class="footer" v-if="$slots.footer">
      <footer>
        &copy; <span v-if="2023 != new Date().getFullYear()">2023 - </span
        >{{ new Date().getFullYear() }}
      </footer>
    </footer>
  </div>
</template>

<script>
import TheNavbar from "@/components/mainElements/base/NavBar.vue";
export default {
  components: { TheNavbar },
};
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: lightgray;
  padding: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.body {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
}

.footer {
  background-color: lightgray;
  padding: 1rem;
  box-shadow: 0 -10px 20px 0 rgba(0, 0, 0, 0.781),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
