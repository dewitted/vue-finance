<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainPage from "./components/MainPage.vue";
import Footer from "./components/Footer.vue";
import NumberPad from "./components/NumberPad.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
  $redBack: #fe212e;

  body {
    margin: 0;
    #app {
      max-width: 375px;
      display: flex;
      flex-direction: column;
    }
  }
</style>
