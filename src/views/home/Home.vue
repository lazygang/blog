<template>
  <div class="big"  v-infinite-scroll="load">
    <main-txt class="main" />
    <el-backtop target=".big" :bottom="100" :right='20'>
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
    </el-backtop>
  </div>
</template>

<script>
import MainTxt from "views/home/child/MainTxt";
import AsideTxt from "views/home/child/AsideTxt";
import { getHomeNews } from "network/home";
// import BackTop from "components/common/BackTop";
export default {
  name: "home",
  components: {
    MainTxt,
    AsideTxt
  },
  methods:{
    load(){
      this.$store.state.toppage += 1;
      getHomeNews(this.$store.state.toppage).then(res => {
       this.$store.state.topdata.push(...res.data)
       console.log('qqqq');
       
       console.log(this.$store.state.topdata);
      });
    }
  }
};
</script>

<style scoped>
/* .el-container {
  position: relative;
  top: 40px;
} */
.main {
  /* position: relative; */
  /* top: 100px; */
  /* height: 1000px; */
  padding-top: 60px;
}
.big{
  height: 100vh;
  overflow-x: hidden;
}
/* .el-backtop{
border-radius: 25px;
} */
</style>