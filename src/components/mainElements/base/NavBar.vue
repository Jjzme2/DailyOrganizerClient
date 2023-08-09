<template>
  <div>
    <nav>
      <router-link
        v-for="route in visibleRoutes"
        :key="route.name"
        :to="route.path"
      >
        <span :style="{ color: route.meta.color }">{{
          computedRouteName(route.name)
        }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import stringHelper from "@/assets/util/stringManipulation";

export default {
  name: "TheNavbar",
  computed: {
    visibleRoutes() {
      return this.$router.options.routes.filter(
        (route) => !route.meta?.hideInNav
      );
    },
  },
  methods: {
    computedRouteName(route) {
      return stringHelper.convertStringToCase(route, "sentence");
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #333;
  color: #fff;
  display: grid;
  margin: auto;
  place-items: center;
  width: 60%;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  flex: 1;
  text-align: center;
}

nav ul li a {
  color: #fff;
  display: block;
  padding: 1rem;
  text-decoration: none;
}

nav ul li a:hover {
  background-color: #444;
}
</style>
