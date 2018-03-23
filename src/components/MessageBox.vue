<template>
  <el-button type="text" @click="open2">点击打开 Message Box</el-button>
</template>

<script>
  export default {
    name:'MessageBox',
    created(){
      this.open2();
    },
    methods: {
      open2() {
        this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
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
      }
    }
  }
</script>
