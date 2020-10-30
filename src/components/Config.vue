<template>
   <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in items" :key="item">
      <div>
          <h2>壁纸</h2>
           <img :src="item" class="img">
      </div>
    
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .img{width:100%;}
</style>

<script>
  export default {
    data() {
      return {
        items: [
         require("../assets/4.jpg"),
         require("../assets/5.jpg"),
         require("../assets/6.jpg"),
         require("../assets/1.jpg"),
         require("../assets/2.jpg"),
         require("../assets/3.jpg"),
         require("../assets/8.jpg"),
        ],
        names:''
      }
    }
  }

</script>