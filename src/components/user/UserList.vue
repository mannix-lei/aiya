<template xmlns="http://www.w3.org/1999/html">
  <div id="userList" style="margin-left: 200px">

    <div class="searchLine">
      <el-input
        placeholder="请输入姓名"
        v-model="input10"
        clearable>
      </el-input>
      <el-date-picker
              v-model="dateValue"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
      </el-date-picker>
      <el-button type="success" @click="searchInfo(input10,dateValue)">查询</el-button>
    </div>


    <el-table ref="multipleTable"
              tooltip-effect="dark"
              :data="userList" height="700" style="width: 85%;margin-left: 100px"
              :default-sort = "{prop: 'date', order: 'descending'}"
              @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <!--<el-table-column prop="id" label="id" sortable width="280px"></el-table-column>-->
      <el-table-column prop="name" label="name" sortable width="280px"></el-table-column>
      <el-table-column prop="password" label="password" width="280px"></el-table-column>
      <el-table-column prop="creatTime" label="creatTime" sortable width="280px"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index)">编辑</el-button>
          <el-button
            type="danger"
            size="mini"
            @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


    <div class="bottomColo">
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button @click="deleteAllUser()">删除选中</el-button>
    </div>

    <!--<el-dialog title="用户编辑" :visible.sync="dialogFormVisible">-->
      <!--<el-form :model="user">-->
        <!--<el-form-item label="用户名" :label-width="formLabelWidth">-->
          <!--<el-input style="width: 700px" v-model="user.name" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="密码" :label-width="formLabelWidth">-->
          <!--<el-input style="width: 700px" v-model="user.password" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="submitEdit(user)">确 定</el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->

  </div>
</template>

<script>
  import Vue from 'vue'
  export default{
    name:'userList',
    data(){
      return{
        userList:[{
          id:'',
          name:'',
          password:'',
          creatTime:''
        }],
        multipleSelection: [],
        input10:'',
        dateValue:'',
        user:{
          id:'',
          name:'',
          password:'',
          creatTime:''
        },
        formLabelWidth: '120px',
      }
    },
    methods:{
        _getUserList(){
          this.$http.get('http://localhost:8089/getUser',{emulateJSON: true}).then(response =>{
            var list = response.data
            this.userList  = list
          },response =>{
              console.log("error");
            })
        },
      delUser(x){
        let id = {'id':this.userList[x].id};
        console.info(id),
        this.$http.post('http://localhost:8089/delUser',id,{emulateJSON:true}).then((response) =>{
          console.log(response)
        },response =>{
//          console.log("error")
          return
        })
      },

      //删除提示框
      handleDelete(x) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delUser(x),
          this.userList.splice(x,1),
          this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
          this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
      },
      handleEdit(index) {
        console.info(index)
        let user = this.userList[index]
        this.$router.push('/userInfoEdit' + '/' + user.id)
        this.user = this.userList[index];
      },
      formatter(row, column) {
        return row.address;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
        });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        var idList = [];
        for(var i=0;i<val.length;i++){
          idList[i] = val[i].id;
          return idList;
        }
      },
      searchInfo(x,value){
        var searchName = x;
//        var start = value[0].getTime();
//        var end = value[1].getTime();
        let name = {'name':searchName};
        if(searchName ==""){
          this.getUserList()
        }else{
          this.$http.post('http://localhost:8089/findUserByID',name,{emulateJSON:true}).then(response =>{
            var userInfo = response.data
            console.info(userInfo)
          this.userList = [userInfo]
        },response =>{
            console.info("error")
          })
        }
      },

      submitEdit(){
        this.dialogFormVisible = false;
        let user = {'id':this.user.id,'name':this.user.name,'password':this.user.password,'creatTime':this.user.creatTime};
        this.$http.post('http://localhost:8089/updateUser',user,{emulateJSON:true}).then(response =>{
          var updateInfo = response.data
          console.info(updateInfo)
        if(updateInfo.id == "0") {
          this.$message({
            message: '用户信息更新成功',
            duration:2000,
            type: 'success'
          });
        }
        },response =>{
          console.info("error")
        })
      }
    },
    created(){
      this._getUserList();
    }
  }
</script>

<style>
  @import "../../assets/css/Userlist.css";
</style>
