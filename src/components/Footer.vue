<template>
  <div class="main-footer-container">
    <div class="footer-buttons" id="time-stats"></div>
    <router-link to="/numberpad">
      <div class="footer-buttons" id="addNew"></div>
    </router-link>
    <div class="footer-buttons" id="periods"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .main-footer-container {
    height: 106px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 15%;
    padding-right: 15%;
    a {
      width: 25%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .footer-buttons {
        width: 100%;
        height: 40px;
      }
      #addNew {
        background-image: url("../assets/more.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 60px;
      }
    }
    .footer-buttons {
      width: 25%;
      height: 40px;
    }
    #time-stats {
      background-image: url("../assets/clock.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    #periods {
      background-image: url("../assets/wind.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
</style>