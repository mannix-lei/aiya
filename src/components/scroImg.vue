<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="img">
    <div id="featureContainer">
      <div id="feature">
        <div id="block">
          <div id="botton-scroll">
            <ul class="featureUL">
              <li class="featureBox">
                <div class="box">
                  <a href="#"><img alt="Paracletos" src="../assets/img/BingWallpaper-2017-05-16.jpg" width=240 height=150></a>
                </div>
              </li>
              <li class="featureBox">
                <div class="box">
                  <a href="#"><img alt="Paracletos" src="../assets/img/BingWallpaper-2017-05-16.jpg" width=240 height=150></a>
                </div>
              </li>
              <li class="featureBox">
                <div class="box">
                  <a href="#"><img alt="Paracletos" src="../assets/img/BingWallpaper-2017-05-16.jpg" width=240 height=150></a>
                </div>
              </li>
              <li class="featureBox">
                <div class="box">
                  <a href="#"><img alt="Paracletos" src="../assets/img/logo.png" width=240 height=150></a>
                </div>
              </li>
              <li class="featureBox">
                <div class="box">
                  <a href="#"><img alt="Paracletos" src="../assets/img/BingWallpaper-2017-05-16.jpg" width=240 height=150></a>
                </div>
              </li>
              <li class="featureBox">
                <div class="box">
                  <a href="#"><img alt="Paracletos" src="../assets/img/BingWallpaper-2017-05-16.jpg" width=240 height=150></a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <A class="prev" v-on:click="prev"></A>
        <A class="next"></A>
      </div>
    </div>
    <div id=wrap>
      <SPAN id=load>LOADING...</SPAN>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name:'scroImg',
    data(){
      return{

      }
    },
    methods:{
      prev(){

      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/scroImg.css';
</style>
