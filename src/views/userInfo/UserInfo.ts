import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class UserInfo extends Vue {
    public user: any = {
        name: '',
        password: '',
        confirmPassword: '',
    };

    public open3() {
        this.$prompt('请输入邮箱', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '邮箱格式不正确',
        })
            .then((value) => {
                this.$message({
                    type: 'success',
                    message: '你的邮箱是: ' + value,
                });
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入',
                });
            });
    }
}
