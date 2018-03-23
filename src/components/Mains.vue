<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="Mains">
    <div id="bg">
      <!--this is task column-->
      <div id="left" v-if="left">
        <div class="left">INDEX</div>
        <div class="left1">
          <ul>
            <li v-for="todo in todos" v-on:click="show(todo.txt)">
              {{todo.txt}}
            </li>
          </ul>
        </div>
      </div>

      <!--Main page-->
      <div class="main">
        <div class="navigateBar">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">Saving Account</el-menu-item>
            <el-menu-item index="2">Interest Account</el-menu-item>
            <el-menu-item index="3">Checking Account</el-menu-item>
            <el-submenu index="4">
              <template slot="title">User Management</template>
              <el-menu-item index="4-1">edit</el-menu-item>
              <el-menu-item index="4-2">add</el-menu-item>
              <el-menu-item index="4-3">delete</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>

        <div class="scrollImage">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  export default{
    name:'Mains',
    components:{

    },
    data (){
      return{
        left:true,
        todos:[
          {txt:'Saving Account'},
          {txt:'Interest Account'},
          {txt:'Checking Account'},
          {txt:'UserList'}
        ],
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods:{
      show:function(x){
        if(x == "Saving Account"){
          this.$router.push('/savingAccount')
        }else if(x == "Interest Account"){
          this.$router.push('/interestAccount')
        }else if(x == "Checking Account"){
          this.$router.push('/checkingAccount')
        }else if(x == "UserList"){
          this.$router.push('/userList')
        }
      },
      handleSelect(key, keyPath) {
        if(key == 1){
          this.$router.push('/savingAccount')
        }else if(key == 2){
          this.$router.push('/interestAccount')
        }else if(key == 3){
          this.$router.push('/checkingAccount')
        }else if(key == 4){
          this.$router.push('/userList')
        }
        console.log(key, keyPath);
      }
    }
  }

</script>

<style scoped>
  @import '../assets/css/main.css';
</style>
