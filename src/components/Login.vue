<template>
  <div id="loginDiv">
    <div class="line1">
      <div class="title">LOGIN</div>
    </div>
    <div><hr></div>

    <div class="form">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model.number="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        <div @click="toRegister()">
          <el-alert style="width: 200px; margin-left: 180px;cursor: pointer"
                    title="无账号？点此注册"
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
//    created(){
//      var self = this;
//      this.$notify({
//        title: '提示',
//        message: '无账号？点此注册',
//        onClick:function(){
//          self.$router.push('/register');
//        }
//      });
//    },
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }setTimeout(() => {
          if (!Number.isInteger(value)){
            callback(new Error('请输入数字值'));
          }
        console.info(this.ruleForm2.checkPass.toString())
          if (this.ruleForm2.checkPass.toString().length < 3) {
            callback(new Error('必须为6位及以上数字'));
          } else {
            callback();
          }
        }, 1000);
      };
      return {
        ruleForm2: {
          name: '',
          checkPass: ''
        },
        rules2: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        fullscreenLoading:false
      };
    },
    methods: {
      submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
            let user = {'name':this.ruleForm2.name,'password':this.ruleForm2.checkPass};
            this.$http.post('http://localhost:8089/login',user,{emulateJSON: true}).then((response)=>{
              var data = response.body;
              console.log(data)

            const loading = this.$loading({
              lock: true,
              text: '正在登陆',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });

              if(data.id == "0"){
                setTimeout(() => {
                  loading.close();
                  this.$router.replace({name:'Mains'})
                }, 1000);
              }else if(data.id == "1"){
                setTimeout(() => {
                  loading.close();
                  this.$notify.info({
                    title: '消息',
                    message: '用户名不存在！'
                  });
                }, 1000);
              }else if(data.id == "2"){
                setTimeout(() => {
                  loading.close();
                this.$notify.error({
                  title: '错误',
                  message: '密码错误！',
                  type: 'warning'
                });
                }, 1000);
              }
            },(error)=>{
                console.log(error)
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
      toRegister(){
        this.$router.push('/register')
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/Login.css';
</style>
