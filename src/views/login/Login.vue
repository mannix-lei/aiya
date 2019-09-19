<template>
    <div id="loginDiv">
        <div class="line1">
            <div class="title">LOGIN</div>
        </div>
        <div class="form">
            <el-form
                :model="ruleForm2"
                status-icon
                :rules="rules2"
                ref="ruleForm2"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="姓名" prop="name">
                    <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
                    <el-input
                        type="password"
                        v-model.number="ruleForm2.checkPass"
                        auto-complete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
                <div @click="toRegister()">
                    <el-alert
                        style="width: 200px; margin-left: 180px;cursor: pointer"
                        title="无账号？点此注册"
                        type="info"
                    ></el-alert>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts" src="./Login.ts"></script>
<style scoped src="./Login.css"></style>