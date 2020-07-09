<template>
  <div>
    <el-carousel :interval="5000" arrow="always" height="350px">
      <el-carousel-item v-for="(i,index) in banner" :key="index">
        <a :href="i.url" style="text-decoration:none;">
          <el-image style="width: 375px; height: 300px" :src="i.thumbnail_pic_s" fit="cover"></el-image>
          <div class="titlebox">
            <p class="title">{{i.title}}</p>
          </div>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getHomeNews } from "network/home";
export default {
  data() {
    return {
      banner: [],
      news: []
    };
  },
  created() {
  
  },
  mounted(){
      this.gn();
  },
  methods: {
    gn() {
      getHomeNews(1).then(res => {
        this.banner = res.data;
        this.banner.length=4
        // this.news = this.banner.splice(4, 26);
      });
    }
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.title {
  margin: 0px;
  padding: 0;
   height: 50px;
        width: 100%;
          background-color: white;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        /* line-height: 40px; */
        color: black;
}
.el-image {
  z-index: 9;
  margin: 0px;
}
.titlebox {
  height: 50px;
  margin: 0px;
  background-color: white;
}
</style>