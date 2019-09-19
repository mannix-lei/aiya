<template>
    <div id="registerPage">
        <div class="line">
            <div class="title1">REGISTER</div>
        </div>
        <div class="form2">
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
                    <el-alert
                        style="width: 200px; margin-left: 180px;cursor: pointer"
                        title="已有账号？点此登录"
                        type="info"
                    ></el-alert>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts" src="./Register.ts"></script>