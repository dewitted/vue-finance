<template>
  <div class="main-numberpad-container">
    <div class="headerButtons">
      <div class="headButtonsStyle" id="goBack"></div>
      <div class="headButtonsStyle" id="addSum"></div>
    </div>
    <input placeholder="$0.00" v-model="amount" value />
    <h3>PlaceHolder</h3>
    <div class="numPad">
      <div class="categoryButtons">
        <div
          class="catButtons"
          :id="section.name"
          v-for="section in allFinances"
          :key="section.name"
          @click="sectionClick(section.name); addAmount(); activation()"
        >{{section.name}}</div>
      </div>
      <div class="divider"></div>
      <div class="numbers">
        <div class="number no-margin">1</div>
        <div class="number">2</div>
        <div class="number">3</div>
        <div class="number no-margin">4</div>
        <div class="number">5</div>
        <div class="number">6</div>
        <div class="number no-margin">7</div>
        <div class="number">8</div>
        <div class="number">9</div>
        <div class="number no-margin">0</div>
      </div>
    </div>
  </div>
</template>

    <!-- <div class="finance-buttons">
      <div
        class="toAdd"
        :id="section.name"
        v-for="section in allFinances"
        :key="section.name"
        @click="sectionClick(section.name)"
      >{{section.name}}</div>
    </div>
    <form v-if="activated" id="entry" v-on:submit.prevent="addAmount(); activation()">
      <input v-model="amount" placeholder="0.00" />
      <button type="submit">Submit!</button>
    </form>-->

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NumPad",
  data() {
    return {
      activated: false,
      selectedCategory: "",
      amount: ""
    };
  },
  methods: {
    ...mapActions(["updateCategory"]),
    sectionClick(name) {
      this.activated = !this.activated;
      this.selectedCategory = name;
    },
    activation() {
      this.activated = !this.activated;
    },
    addAmount() {
      console.log(this.amount);
      const updCat = {
        name: this.selectedCategory,
        amount: this.amount
      };
      this.updateCategory(updCat);
    }
  },
  computed: mapGetters(["allFinances"])
};
</script>

<style lang='scss'>
  $redBack: #fe212e;

  .main-numberpad-container {
    width: 100%;
    height: 812px;
    background-color: $redBack;
    box-sizing: border-box;
    padding: 5%;
    padding-bottom: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    .headerButtons {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .headButtonsStyle {
        width: 35px;
        height: 35px;
      }
      #goBack {
        background-image: url("../assets/back.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      #addSum {
        background-image: url("../assets/plus.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    input {
      width: 100%;
      height: 80px;
      background-color: $redBack;
      border: 0;
      font-size: 4.5rem;
      color: white;
    }
    input::placeholder {
      color: white;
    }
    h3 {
      margin: 0;
      margin-bottom: 5px;
    }
    .numPad {
      position: absolute;
      top: 212px;
      left: 0;
      height: 600px;
      width: 100%;
      background-color: white;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 5%;
      .categoryButtons {
        height: 19%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .catButtons {
          width: 50px;
          height: 50px;
          border: 2px solid white;
          border-radius: 50%;
          background-color: white;
          box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .divider {
        height: 2px;
        width: 100%;
        background-color: grey;
        opacity: 0.2;
      }
      .numbers {
        width: 100%;
        height: 80%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10%;
        .number {
          height: 65px;
          width: 65px;
          margin-left: 30px;
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 15px 15px 5px rgba(0, 0, 0, 0.1);
        }
        .no-margin {
          margin: 0;
        }
      }
    }
  }
</style>