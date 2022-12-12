<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      document.title = `Mile app | ${to.meta.title}` || "Mile App";
    },
  },
};
</script>
