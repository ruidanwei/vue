<template>
<div class="jiemian">
<h1 style="color: rgb(196, 195, 202); padding-top:60px">Log in</h1>
<h2><el-input placeholder="You name" v-model="input" clearable>
</el-input></h2>
<h2><el-input placeholder="You password" v-model="input1" clearable >
</el-input></h2>
<h3> <el-button type="primary" plain>SUBMIT</el-button></h3>
    <p>Forget your password?    <a href="#">注册</a> </p>
    </div>
   </template>


<style>
    a{
        margin-left: 20px;
        color:yellow;
        text-decoration: none;
    }
    p{
        color: whitesmoke;
    }
.jiemian{
    background-color: rgb(42, 43, 56);
    height: 400px;
    width: 433px;
    margin: 200px auto;
}
h2{
    width: 200px;
    text-align: center;
    margin-left: 115px;
}
</style>
<script>
  export default {
    data() {
      return {
        input: '',
        input1: '',
      }
    }
  }
</script>