<template>
  <div id="app">

    <div class="line1">
      <div class="title">Bank Of Mannix</div>
    </div>
    <div><hr></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'app',
    components:{

    },
    data(){
      return{

      }
    }
  }
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.line1{
  height: 65px;
}
.title{
  font-family: "Times New Roman";
  color: black;
  font-size: 50px;
  width: 500px;
  margin-left: 745px;
}
</style>
