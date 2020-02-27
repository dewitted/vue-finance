<template>
  <div id="app">
    <!-- <Header />
    <MainPage />
    <Footer />-->
    <NumberPad />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainPage from "./components/MainPage.vue";
import Footer from "./components/Footer.vue";
import NumberPad from "./components/NumberPad.vue";

export default {
  name: "App",
  components: {
    // Header,
    // MainPage,
    // Footer,
    NumberPad
  }
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
