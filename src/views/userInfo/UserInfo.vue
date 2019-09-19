<template>
    <div id="userInfoEdit">
        <div class="editArea">
            <div class="edit_Name">
                姓名：
                <el-input style="width: 80%" v-model="vm.user.name" placeholder="请输入姓名"></el-input>
            </div>
            <div class="edit_password">
                密码：
                <el-input style="width: 80%" v-model="vm.user.password" placeholder="请输入密码"></el-input>
            </div>
            <div class="edit_confirmPassword">
                确认：
                <el-input
                    style="width: 80%"
                    v-model="vm.user.confirmPassword"
                    placeholder="请再次输入密码"
                ></el-input>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UserInfo.ts"></script>
<style scoped src="./UserInfo.css"></style>
