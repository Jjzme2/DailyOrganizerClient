import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Daily Organizer"; // Set the title from the route meta or use a default title
  next();
});

createApp(App).use(store).use(router).mount("#app");
