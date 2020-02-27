<template>
  <div class="main-container">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainPage",
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

<style lang="scss">
  .main-container {
    width: 100%;
    height: 600px;
    background-color: teal;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .finance-buttons {
      width: 100%;
      height: 300px;
      position: relative;
      .toAdd {
        width: 70px;
        height: 70px;
        background-color: yellow;
        border-radius: 50%;
      }
      #car {
        position: absolute;
        top: 5%;
        left: 25%;
      }
      #food {
        position: absolute;
        top: 5%;
        right: 25%;
      }
      #party {
        position: absolute;
        top: 40%;
        left: 15%;
      }
      #taxes {
        position: absolute;
        top: 40%;
        right: 15%;
      }
      #sport {
        position: absolute;
        bottom: 5%;
        left: 25%;
      }
      #misc {
        position: absolute;
        bottom: 5%;
        right: 25%;
      }
    }
    #entry {
      width: 80%;
      height: 250px;
      background-color: grey;
      position: absolute;
      top: 12%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding-top: 40px;
      padding-bottom: 40px;
      input {
        margin: 0;
        width: 90%;
        height: 100px;
        font-size: 4rem;
        text-align: center;
      }
      button {
        margin: 0;
        width: 50%;
        height: 50px;
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }
</style>