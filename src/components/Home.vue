<template>
  <div class="Home-Container">
    <Header />
    <MainPage />
    <FooterApp />
  </div>
</template>

<script>
import Header from "./Header.vue";
import MainPage from "./MainPage.vue";
import FooterApp from "./Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    MainPage,
    FooterApp
  }
};
</script>

<style>
  .Home-Container {
    max-width: 375px;
    display: flex;
    flex-direction: column;
  }
</style>