<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <main-view />
  </div>
</template>

<script>
import TabBar from "views/tabbar/TabBar";
import MainView from "components/content/MainView";
export default {
  components: {
    TabBar,
    MainView
  }
};
</script>

<style >
/* .el-header{
  background-color: red;
} */
/* .app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0px,0px,0px,0px;
  margin: 0;
  border: 0;
} */
body{
  margin: 0;
}
</style>
