<template>

  <div id="registerPage">
    <div class="line">
      <div class="title1">REGISTER</div>
    </div>
    <div><hr></div>
    <div class="form2">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        <div @click="toLogin()">
          <el-alert style="width: 200px; margin-left: 180px;cursor: pointer"
                    title="已有账号？点此登录"
                    type="info">
          </el-alert>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
        setTimeout(() => {
          if (this.ruleForm2.name.length>0 && this.ruleForm2.name.valueOf().match(/[^%&',;=?$\x22]+/)==false) {
          callback(new Error('不能输入特殊字符'));
        } else {
          callback();
        }
      }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var creatTime = (new Date()).getTime();
            var user = {'name':this.ruleForm2.name,'password':this.ruleForm2.checkPass,'creatTime':creatTime};
            this.$http.post('http://localhost:8089/register',user,{emulateJSON: true}).then((response)=>{
              var data =response.data
               console.log(data)
              if(data.id == "0") {
                this.$notify({
                  title: '注册成功',
                  message: '点击跳转到登录界面',
                  type:'success',
                  duration:2000,
                  onClick:function(){
                    self.$router.push('/login');
                  }
                });
              }else if(data.id == "1"){
                this.$notify({
                  title: '失败',
                  message: '用户名已经存在',
                  type: 'warning'
                });
              }
            },(error)=>{
                console.log(error);
            })
          }else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toLogin(){
        this.$router.push('/login')
      },


    }
  }
</script>

<style scoped>
  @import '../assets/css/assign.css';
</style>
