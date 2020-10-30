<template>
    <div>
      <el-header>
      </el-header>
      <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo"   @open="handleOpen"
      @close="handleClose" router>

         <el-menu-item index="/shouye">
        <i class="el-icon-message"></i>
            <span slot="title">404</span>
      </el-menu-item>

          <el-menu-item index="/second">
            <i class="el-icon-document"></i>
            <span slot="title">第二页</span>
          </el-menu-item>

          <el-menu-item index="/application">
            <i class="el-icon-menu"></i>
            <span slot="title">学习笔记</span>
          </el-menu-item>

          <el-menu-item index="/config">
        <i class="el-icon-setting"></i>
          <span slot="title">壁纸</span>
      </el-menu-item>
        </el-menu>
      </el-aside>
      
        <el-main><router-view></router-view></el-main>
    </el-container>
    <el-footer>
    </el-footer>
    </div>
</template>
<style>
.footer,.el-header{
  background-color: azure;
  color: #333;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  font-weight: 700;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 850px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>