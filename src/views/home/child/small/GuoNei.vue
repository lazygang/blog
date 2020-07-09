<template>
  <div>
    <div v-for="(i,index) in news" :key="index" class="item">
      <a :href="i.url" style="text-decoration:none;">
        <div class="titlebox">
          <p class="title">{{i.title}}</p>
        </div>
        <div class="ibox">
          <span class="boximg">
            <el-image :src="i.thumbnail_pic_s" fit="fill"></el-image>
          </span>
          <span class="boximg">
            <el-image :src="i.thumbnail_pic_s02" fit="fill">
              <div slot="error" class="image-slot"></div>
            </el-image>
          </span>
          <span class="boximg">
            <el-image :src="i.thumbnail_pic_s03" fit="fill">
              <div slot="error" class="image-slot"></div>
            </el-image>
          </span>
        </div>
        <div class="infobox">
          <span class="info">来源：{{i.author_name}}</span>
          &emsp;&emsp;
          <span class="info">{{i.date}}</span>
        </div>
      </a>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
import { getHomeGuonei } from "network/home";
export default {
  data() {
    return {
      banner: [],
      news: []
    };
  },
  created() {
    this.gn();
  },
  methods: {
    gn() {
      getHomeGuonei().then(res => {
        this.news = res.data;
      });
    }
  }
};
</script>

<style scoped>
.title {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  color: black;
  border-radius: 5px;
}
.el-image {
  border-radius: 5px;
}
.item {
  padding: 10px 10px;
}
.el-divider {
  background-color: rgba(0, 0, 0, 0.12);
}
.info {
  flex: 1;
  width: 50%;
  text-align: center;
  color: rgba(136, 143, 141, 0.911);
  font-size: 50%;
}
.ibox {
  display: flex;
}
.boximg {
  margin: 2px;
}
</style>