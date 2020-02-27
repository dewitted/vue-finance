<template>
  <div id="app">
    <Header />
    <MainPage />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    Header,
    MainPage
  }
};
</script>

<style lang="scss">
  body {
    margin: 0;
    #app {
      max-width: 375px;
      display: flex;
      flex-direction: column;
    }
  }
</style>
