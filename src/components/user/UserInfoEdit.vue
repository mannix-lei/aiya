<template>
  <div id="userInfoEdit">
    <div class="editArea">
      <div class="edit_Name">
        姓名：<el-input style="width: 80%" v-model="vm.user.name" placeholder="请输入姓名"></el-input>
      </div>
      <div class="edit_password">
        密码：<el-input style="width: 80%" v-model="vm.user.password" placeholder="请输入密码"></el-input>
      </div>
      <div class="edit_confirmPassword">
        确认：<el-input style="width: 80%" v-model="vm.user.confirmPassword" placeholder="请再次输入密码"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        vm:{
          user:{
            name:'',
            password:'',
            confirmPassword:''
          }
        }
      }
    },
    methods: {
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
          this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
      }
    }
  }
</script>

<style>
  @import "../../assets/css/userInfoEdit.css";
</style>
