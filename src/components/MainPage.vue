<template>
  <div class="main-container">
    <div class="stats-chart"></div>
    <div class="current-spenditure">
      <h3>Spent today</h3>
      <div id="todayTotal" @click="consolell()">{{ currentTotal }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainPage",
  data() {
    return {
      currentTotal: 0
    };
  },
  methods: {
    consolell() {
      console.log(this.allFinances[1].amount[0]);
    }
  },
  watch: {
    allFinances: () => {
      this.currentTotal =
        this.currentTotal +
        function() {
          let total = 0;
          for (let i = 0; i < this.allFinances.length; i++) {
            let total =
              total +
              function() {
                let amountTotal = 0;
                for (let j = 0; j < this.allFinances[j].amount.length; j++) {
                  amountTotal = amountTotal + this.allFinances[i].amount[j];
                }
                return amountTotal;
              };
          }
          return total;
        };
      console.log(this.currentTotal);
    }
  },
  computed: mapGetters(["allFinances"])
};
</script>

<style lang="scss">
  .main-container {
    width: 100%;
    height: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .stats-chart {
      width: 100%;
      height: 300px;
    }
    .current-spenditure {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      #todayTotal {
        width: 80%;
        height: 200px;
      }
    }
  }
</style>