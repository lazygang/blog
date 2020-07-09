<template>
  <el-container>
    <el-header style v-show="this.$store.state.headshow">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link to="home" class="r3">
            <div>首页</div>
          </router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">杂物</template>
          <el-menu-item index="2-1">
            <router-link to="guest" class="r3">留言板</router-link>
            </el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" @click="hidetop">
          <router-link to="person" class="r3">
            <div>个人简历</div>
          </router-link>
        </el-menu-item>
        <el-menu-item index="4" @click="handcl">侧栏</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </el-header>
    <el-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </el-main>
    <drawer />
  </el-container>
</template>

<script>
import Drawer from "components/content/Drawer";
import bus from "components/content/bus.js";
export default {
  data() {
    return {
      activeIndex: "1"
      // drawer: false
    };
  },
  components: {
    Drawer
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handcl() {
      bus.$emit("dr", true);
    },
    hidetop() {
      this.$store.state.headshow = false;
    }
  }
  // computed
};
</script>

<style scoped>
.el-header {
  /* width: 100%; */
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 100;
  /* height: 100%; */
  padding: 0;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12);
  margin: 0;
  /* background-color: blue; */
  /* border: 0; */
}
/* .el-container{
  padding: 0px,0px,0px,0px;
    padding: 0px,0px,0px,0px;
  margin: 0;
  border: 0;
} */
/* .el-menu{
    padding: 0px,0px,0px,0px;
  margin: 0;
  border: 0;
  width: 100%;
} */
.el-main {
  padding: 0;
}
.r3 {
  text-decoration: none;
}
.el-menu{
  display: flex;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
  
}
.el-menu-item{
  flex: 1;
  /* color: black; */
}
.r3{
  color: black;
}
</style>