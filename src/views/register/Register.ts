import { Form } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Register extends Vue {
    public submitForm(formName: string) {
        console.log('====================================');
        console.log(formName);
        console.log('====================================');
        // const self = this;
        // this.$refs[formName].validate((valid) => {
        //     if (valid) {
        //         const creatTime = new Date().getTime();
        //         const user = { name: this.ruleForm2.name, password: this.ruleForm2.checkPass, creatTime };
        //         this.$http.post('http://localhost:8089/register', user, { emulateJSON: true }).then(
        //             (response) => {
        //                 const data = response.data;
        //                 if (data.id === '0') {
        //                     this.$notify({
        //                         title: '注册成功',
        //                         message: '点击跳转到登录界面',
        //                         type: 'success',
        //                         duration: 2000,
        //                         onClick() {
        //                             self.$router.push('/login');
        //                         },
        //                     });
        //                 } else if (data.id === '1') {
        //                     this.$notify({
        //                         title: '失败',
        //                         message: '用户名已经存在',
        //                         type: 'warning',
        //                     });
        //                 }
        //             },
        //             (error) => {
        //                 console.log(error);
        //             },
        //         );
        //     } else {
        //         return false;
        //     }
        // });
    }
    public resetForm(formName: string) {
        (this.$refs[formName] as Form).resetFields();
    }
    public toLogin() {
        // this.$router.push('/login');
    }
}
