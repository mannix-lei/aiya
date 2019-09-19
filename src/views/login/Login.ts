import { Form } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {
    public submitForm() {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     const user = {name: this.ruleForm2.name, password: this.ruleForm2.checkPass};
        //     this.$http.post('http://localhost:8089/login', user, {emulateJSON: true}).then((response) => {
        //       const data = response.body;
        //       console.log(data);
        //       const loading = this.$loading({
        //       lock: true,
        //       text: '正在登陆',
        //       spinner: 'el-icon-loading',
        //       background: 'rgba(0, 0, 0, 0.7)',
        //     });
        //       if (data.id === '0') {
        //         setTimeout(() => {
        //           loading.close();
        //           this.$router.replace({name: 'Mains'});
        //         }, 1000);
        //       } else if (data.id === '1') {
        //         setTimeout(() => {
        //           loading.close();
        //           this.$notify.info({
        //             title: '消息',
        //             message: '用户名不存在！',
        //           });
        //         }, 1000);
        //       } else if (data.id === '2') {
        //         setTimeout(() => {
        //           loading.close();
        //           this.$notify.error({
        //           title: '错误',
        //           message: '密码错误！',
        //           type: 'warning',
        //         });
        //         }, 1000);
        //       }
        //     }, (error) => {
        //         console.log(error);
        //       });
        //     } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
    }
    public resetForm(formName: string) {
        (this.$refs[formName] as Form).resetFields();
    }
    public toRegister() {
        this.$router.push('/register');
    }
}
