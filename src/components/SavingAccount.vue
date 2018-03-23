<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="hello">
    <div class="info1">
      <div class="title">
        Saving Account
      </div>
      <div class="Aback" v-bind:title="message">
        <img src="../assets/img/ARight.png" width="20px" height="20px">
      </div>
      <div class="saDiv">
        <ul class="table">
          <li>上次取款时间</li>
          <li>上次存款时间</li>
          <li>存款金额</li>
          <li>取款金额</li>
          <li>存取款地点</li>
        </ul>

        <ul>
          <li>{{time}}</li>
          <li>{{time}}</li>
          <li>1亿</li>
          <li>500万</li>
          <li>北京</li>
        </ul>
      </div>

      <div class="pre">
        <img src="../assets/img/left.png" width="20px" height="20px">
      </div>
      <div class="next">
        <img src="../assets/img/right.png" width="20px" height="20px">
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
export default {
  name: 'SavingAccount',
  data () {
    return {
      message:'back to home',
      time:new Date().toLocaleString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/SavingAccount.css';
</style>
