<template>
    <div id="userList" style="margin-left: 200px">
        <div class="searchLine">
            <el-input placeholder="请输入姓名" v-model="input10" clearable></el-input>
            <el-date-picker
                v-model="dateValue"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>
            <el-button type="success" @click="searchInfo(input10,dateValue)">查询</el-button>
        </div>

        <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            :data="userList"
            height="700"
            style="width: 85%;margin-left: 100px"
            :default-sort="{prop: 'date', order: 'descending'}"
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <!--<el-table-column prop="id" label="id" sortable width="280px"></el-table-column>-->
            <el-table-column prop="name" label="name" sortable width="280px"></el-table-column>
            <el-table-column prop="password" label="password" width="280px"></el-table-column>
            <el-table-column prop="creatTime" label="creatTime" sortable width="280px"></el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="handleDelete(scope.$index)">删除</el-button>
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
<script lang="ts" src="./UserList.ts"></script>
<style scoped src="./UserList.css"></style>