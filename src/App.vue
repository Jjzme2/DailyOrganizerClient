<template>
  <router-view />
</template>

<style>
/* Global Styles here */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.cstm-btn-primary {
  background-color: #42b983;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.2s ease-in-out;
}

.cstm-btn-primary:hover {
  background-color: #0c3122;
}

.cstm-btn-secondary {
  background-color: #fff;
  border: 1px solid #42b983;
  border-radius: 4px;
  color: #42b983;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
  transition: color 0.2s ease-in-out;
}

.cstm-btn-secondary:hover {
  color: #000000;
}
</style>
