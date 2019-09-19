<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="ca">
    <div>
      <div class="title">Checking Account</div>
    </div>

    <div class="Aback" v-bind:title="message">
      <img src="../assets/img/ARight.png" width="20px" height="20px">
    </div>

    <div class="pre">
      <img src="../assets/img/left.png" width="20px" height="20px">
    </div>
    <div class="next">
      <img src="../assets/img/right.png" width="20px" height="20px">
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default ({
    name:'Checking Account',
    data(){
      return{

      }
    }
  })
</script>

<style scoped>
  @import '../assets/css/CheckingAccount.css';
</style>
