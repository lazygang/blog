<template>
  <el-drawer title="我是标题" :visible.sync="drawer" direction="ltr" size="60%" :with-header="false">
    <div class="head">
      <img src="../../assets/head.png" alt="">
      <p><b>Lazy刚</b></p>
      <span>减肥</span><el-divider direction="vertical"></el-divider><span>ing</span>
      <br>
      <br>
      <br>
      <br>
          <el-divider></el-divider>
      <div>
        <a href="https://qm.qq.com/cgi-bin/qm/qr?k=Rd__7yy9khQEAEjuR6mc85PHgjc6ZoMH&noverify=0" style="text-decoration:none;">QQ</a>
      </div>
      <br>
      <div>
        <a href="https://u.wechat.com/EBHfqhjT1j2Pbe3W78C7oXk" style="text-decoration:none;">微信</a>
      </div>
      <br>
      <br>
      <el-divider></el-divider>
      UP!UP!
    </div>
  </el-drawer>
</template>

<script>
import bus from "components/content/bus.js";
export default {
  data() {
    return {
      //   activeIndex: "1",
      drawer: false
    };
  },
  // props:['drawer'],
  mounted () {    
  bus.$on('dr', (e) =>{
      this.drawer = e
  })  
},
};
</script>

<style scoped>
.head img{
width: 50%;
height: 50%;
border-radius: 60px;
margin-top: 40px;
margin-bottom: 40px;
}
.head{
  text-align: center;
}
</style>