<template>
  <div class="main">
    <div class="text">
      <div class="blank"></div>
      <h1 class="h11">李志刚</h1>
      <p>前端开发</p>
      <div class="detail">
        <i class="el-icon-s-custom"></i>
        <span>基本信息</span>
        <el-divider></el-divider>
        <p>姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;李志刚</p>
        <p>性别&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;男</p>
        <p>年龄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25</p>
      </div>
      <div class="detail">
        <i class="el-icon-phone-outline"></i>
        <span>联系方式</span>
        <el-divider></el-divider>
        <p>手机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18273669632</p>
        <p>邮箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1931740796@qqcom</p>
        <p>微信&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18273669632</p>
        <p>主页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lazygang.fun</p>
      </div>
      <div class="detail">
        <i class="el-icon-phone-outline"></i>
        <span>教育经历</span>
        <el-divider></el-divider>
        <p>
          <b>湖南文理学院</b>
        </p>
        <p>电子信息科学与技术/统招本科/2014.09-2017.06</p>
      </div>
      <div class="detail">
        <i class="el-icon-s-tools"></i>
        <span>技能清单</span>
        <el-divider></el-divider>
        <div>
          1.掌握html css JavaScript语言开发
          <br />2.掌握AJax,axios等网络请求方式
          <br />3.掌握ES6语法，熟悉promise网络封装模块
          <br />4.掌握vue和vue cli3开发前端页面
          <br />5.掌握webpack，npm前端自动化工具
          <br />6.了解jQuery,elemenui等其他技术栈
          <br />7..能用nodejs搭建基础的web服务
          <br />8.了解git库管理
          <br />
          <br />
        </div>
      </div>
      <div class="detail">
        <i class="el-icon-s-goods"></i>
        <span>项目经历</span>
        <el-divider></el-divider>
        <div>
          <p>
            <b>移动商城</b>
            <el-button @click="gomall">点击前往</el-button>
          </p>以vue.js为主开发移动商城项目（已上线）
          <br />1.使用vue.js模块开发的项目
          <br />2.使用axios,调用后端数据动态展示页
          <br />3使用flex移动端适应布局
          <br />4采用模块化开发思想，对组件进行封装
          <br />5使用webpack打包上线
          <br />项目域名 lazygang.fun
          <br />
          <br />
        </div>
        <div>
          <p>
            <b>个人首页</b>
            <el-button @click="goblog">点击前往</el-button>
          </p>使用nodejs搭建后端，vue搭建前端的个人首页（已上线）
          <br />1使用vue构建前端代码
          <br />2使用nodejs，express框架搭建后端接口
          <br />3使用mongodb存储后台数据
          <br />4已打包上线 地址 106.55.12.105
          <br />
          <br />
        </div>
      </div>
      <div class="detail">
        <i class="el-icon-star-on"></i>
        <span>个人评价</span>
        <el-divider></el-divider>19年本科毕业，学过c基础，算法基础，期望职位前端开发
      </div>
    </div>
  
    <router-link to="home" class="r3">
      <div>
        <el-button icon="el-icon-arrow-left" circle class="back" @click="showtop"></el-button>
      </div>
    </router-link>
    <!-- <el-backtop target=".main" :bottom="400" :right="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        border-radius: 25px;
      }"
      >up</div>
    </el-backtop>-->
  </div>
</template>

<script>
export default {
  methods: {
    showtop() {
      this.$store.state.headshow = true;
      // window.location.href = "home";
    },
    gomall() {
      window.location.href = "http://lazygang.fun/";
    },
    goblog() {
      window.location.href = "http://106.55.12.105";
    }
  }
};
</script>

<style scoped>
.main {
  background-color: white
}
.back {
  position: fixed;
  top: 0px;
  left: 0px;
}
.text {
  text-align: center;
  height: 100%;
  /* margin: 0px; */
}
.h11 {
  margin: 0px;
}
.blank {
  background-color: white;
  height: 20px;
}
.text p {
  padding: 10px;
  /* margin: 0px; */
}
.detail {
  text-align: left;
}
</style>