<template>
  <el-carousel height="1000px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in itemss" :key="item">
      <img :src="item" class="img1">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data() {
        return {
            itemss:[
                require("../assets/学习3.png"),
                require("../assets/学习1.png"),
                require("../assets/学习2.png"),
        
            ]
        }
    },
}
</script>

<style>

.img1{
    width: 100%;
    height: 1000px;
}
</style>