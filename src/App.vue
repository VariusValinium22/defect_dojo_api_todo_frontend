<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <!-- Displays the current route's component -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Global styles */
nav {
  margin-bottom: 20px;
}
nav a {
  text-decoration: none;
  color: #42b983;
  margin-right: 10px;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
