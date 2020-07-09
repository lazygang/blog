<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" stretch="ture">
    <el-tab-pane label="热门" name="first">
      <top/>
    </el-tab-pane>
    <el-tab-pane label="社会" name="second">
      <she-hui/>
      </el-tab-pane>
    <el-tab-pane label="国内" name="third">
      <guo-nei/>
      </el-tab-pane>
    <el-tab-pane label="国际" name="fourth">
      <guo-ji/>
      </el-tab-pane>
    <el-tab-pane label="娱乐" name="fifth">
      <yu-le/>
      </el-tab-pane>
  </el-tabs>
</template>
<script>
import Top from "views/home/child/small/Top";
import SheHui from "views/home/child/small/SheHui";
import GuoNei from "views/home/child/small/GuoNei";
import GuoJi from "views/home/child/small/GuoJi";
import YuLe from "views/home/child/small/YuLe";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
   Top,
   SheHui,
   GuoNei,
   GuoJi,
   YuLe
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.el-tabs {
  position: -webkit-sticky;
  /* position: sticky; */
  top: 200;
}
</style>