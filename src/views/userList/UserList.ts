import { Component, Vue } from 'vue-property-decorator';
import { IUser } from '../../model/User';

@Component({})
export default class UserList extends Vue {
    public userList: IUser[] = [];
    public multipleSelection: [] = [];
    public input10: string = '';
    public dateValue: string = '';
    public user: IUser = {
        id: null,
        name: null,
        password: null,
        creatTime: null,
    };
    public formLabelWidth: string = '120px';

    public _getUserList() {
        // this.$http.get('http://localhost:8089/getUser', { emulateJSON: true }).then(
        //     (response) => {
        //         const list = response.data;
        //         this.userList = list;
        //     },
        //     (response) => {
        //         console.log('error');
        //     },
        // );
    }
    public delUser() {
        // const id = { id: this.userList[x].id };
        // this.$http.post('http://localhost:8089/delUser', id, { emulateJSON: true }).then(
        //     (response) => {
        //         console.log(response);
        //     },
        //     (response) => {
        //         return;
        //     },
        // );
    }

    // 删除提示框
    public handleDelete() {
        // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //     confirmButtonText: '确定',
        //     cancelButtonText: '取消',
        //     type: 'warning',
        // })
        //     .then(() => {
        //         this.delUser(x),
        //             this.userList.splice(x, 1),
        //             this.$message({
        //                 type: 'success',
        //                 message: '删除成功!',
        //             });
        //     })
        //     .catch(() => {
        //         this.$message({
        //             type: 'info',
        //             message: '已取消删除',
        //         });
        //     });
    }
    public handleEdit(index: number) {
        const user = this.userList[index];
        this.$router.push('/userInfoEdit' + '/' + user.id);
        this.user = this.userList[index];
    }
    // public formatter(row) {
    //     return row.address;
    // }
    // public toggleSelection(rows) {
    //     if (rows) {
    //         rows.forEach((row) => {
    //             this.$refs.multipleTable.toggleRowSelection(row);
    //         });
    //     } else {
    //         this.$refs.multipleTable.clearSelection();
    //     }
    // }
    // public handleSelectionChange(val) {
    //     this.multipleSelection = val;
    //     const idList = [];
    //     for (let i = 0; i < val.length; i++) {
    //         idList[i] = val[i].id;
    //         return idList;
    //     }
    // }
    public searchInfo() {
        // const searchName = x;
        // //        var start = value[0].getTime();
        // //        var end = value[1].getTime();
        // const name = { name: searchName };
        // if (searchName === '') {
        //     this.getUserList();
        // } else {
        //     this.$http.post('http://localhost:8089/findUserByID', name, { emulateJSON: true }).then(
        //         (response) => {
        //             const userInfo = response.data;
        //             console.info(userInfo);
        //             this.userList = [userInfo];
        //         },
        //         (response) => {
        //             console.info('error');
        //         },
        //     );
        // }
    }

    public submitEdit() {
        // this.dialogFormVisible = false;
        // const user = {
        //     id: this.user.id,
        //     name: this.user.name,
        //     password: this.user.password,
        //     creatTime: this.user.creatTime,
        // };
        // this.$http.post('http://localhost:8089/updateUser', user, { emulateJSON: true }).then(
        //     (response) => {
        //         const updateInfo = response.data;
        //         console.info(updateInfo);
        //         if (updateInfo.id === '0') {
        //             this.$message({
        //                 message: '用户信息更新成功',
        //                 duration: 2000,
        //                 type: 'success',
        //             });
        //         }
        //     },
        //     (response) => {
        //         console.info('error');
        //     },
        // );
    }
}
