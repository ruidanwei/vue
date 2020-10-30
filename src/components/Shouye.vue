<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="集册" name="first">
<div class="demo-image__preview">
  <br>
 <p><i class="el-icon-magic-stick"></i> 点开有惊喜</p> <br>
  <el-image 
    style="width: 824px; height: 558px"
    :src="url" 
    :preview-src-list="srcList"> 
  </el-image>
 
  <div class="xiaozi">
     第一次生日聚会 <hr>
    <span>雨纷纷</span>
    <el-divider direction="vertical"></el-divider>
    <span>旧故里</span>
    <el-divider direction="vertical"></el-divider>
    <span>草木深</span>
     <div id="chart" style="width:700px;height:400px;"></div>
</div> 
</div>
    </el-tab-pane>
    <el-tab-pane label="axios" name="second">
      <el-button type="primary" @click="get">笑话</el-button>
        <div>{{search}}</div>
    </el-tab-pane>

    <el-tab-pane label="简易记事本" name="third">
      <template>
        <div>
           <input type="text" v-model="xinyuansu" @keyup.enter="getXin">
        {{xinyuansu}}
        <ul><li v-for="(item, index) in list" v-show="isShow"  v-bind:key="item" @click="shanchu">{{index+1}}{{item}}</li></ul>
        <p v-show="counter!=0">{{counter}}</p>
        <button @click="qingchu" v-show="counter!=0">clear</button>

        </div>
      </template>
    </el-tab-pane>

  </el-tabs>

</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  export default {
    data() {
      return {
          isShow:true,
                counter:3,
         tableData: [],
        search:"查询笑话",
        activeName: 'first',
         url:require("../assets/0.jpg"),
        srcList: [
         require("../assets/1.png"),
         require("../assets/2.png"),
         require("../assets/3.png"),
         require("../assets/4.png"),
         require("../assets/1.jpg"),
         require("../assets/2.jpg"),
         require("../assets/3.jpg"),
         require("../assets/8.jpg"),
        ],
         list:[
                 "吃饭饭","喝水水","睡觉觉"
                ],
                xinyuansu:"好好学习"

      };
    },
  mounted(){
    this.init();
    this.get();
    },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);  
      },
      getXin:function(){
                    this.list.push(this.xinyuansu),
                    this.counter=this.list.length
                },
                qingchu:function(){
                    this.list=[],
                    this.counter=0
                },
                shanchu:function(){
                this.isShow=false
                },

        get() { // 为给定 ID 的 user 创建请求
                    var that=this
                    this.$axios({
                            method: "get",
                            url: 'https://autumnfish.cn/api/joke/list',
                            params: {
                                num: 20
                            }
                        }).then(function (res) {
                            console.log(res.data);
                            that.search=res.data.jokes[19]
                            // this 指向整个window
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                },
       init(){
      var myChart = this.$echarts.init(document.getElementById('chart'));
        // 指定图表的配置项和数据
        var option = {
           title: {
                text: '每日生活'
            },
             series : [
        {
          
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:100, name:'走路'},
                {value:3000, name:'学习'},
                {value:310, name:'音乐'},
                {value:400, name:'睡觉'},
                {value:100, name:'吃饭'}
            ]
        }
    ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}
    }
  };

</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0 auto;
  }
.xiaozi{
    color: rgb(43, 24, 24);
    text-align:right;
}
</style>

