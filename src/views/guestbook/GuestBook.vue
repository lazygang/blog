<template>
  <div class="main">
    <div class="show">
      <div v-for="(i,index) in content" :key="index" class="item">
        <h3>昵称：{{i.title}}</h3>
        <p>{{i.content}}</p>
        <p class="date">{{i.date}}</p>
      </div>
    </div>
    <el-button type="primary" icon="el-icon-edit" circle class="add" @click="show = !show"></el-button>

    <transition name="el-fade-in-linear">
      <div v-show="show" class="transition-box">
        <el-form ref="form" :model="form" label-width="auto" size="medium">
          <el-form-item label="大侠姓名" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="留言" prop="content">
            <el-input type="textarea" v-model="form.content" class="content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">留言</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
import { pushguest, getguest } from "network/guest";
export default {
  data: () => ({
    show: false,
    content: [],
    form: {
      title: "",
      content: "",
      date: ""
    }
    // rules: {
    //   title: [
    //     { required: true, message: "请输入昵称", trigger: "blur" },
    //     { min: 2, max: 20, message: "请不要输入空字符", trigger: "blur" }
    //   ],
    //   content: [
    //     { required: true, message: "请输入留言", trigger: "blur" },
    //     { min: 2, max: 1000, message: "请不要输入空字符", trigger: "blur" }
    //   ]
    // }
  }),
  created() {},
  mounted() {
    this.gn();
  },
  methods: {
    onSubmit() {
      var dd = new Date();
      this.form.date = dd.toLocaleString();
      console.log(this.form.date);

      pushguest(this.form);
      this.show = false;

      this.$notify({
        title: "成功",
        message: "2秒后刷新",
        type: "success",
        position: "bottom-right"
      });

      setTimeout(() => {
        this.gn();
      }, 2000);
    },
    gn() {
      getguest().then(res => {
        this.content = res.data;
        this.content.reverse();
      });
    }
  }
};
</script>

<style scoped>
.main {
  position: relative;
  top: 80px;
}
.add {
  position: fixed;
  top: 100px;
  right: 20px;
}
.el-form {
  position: fixed;
  bottom: 0px;
  left: 20px;
  z-index: 10;
  background-color: white;
}
.item {
  margin: 8px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
}
.date {
  color: rgba(136, 143, 141, 0.911);
  font-size: 50%;
}
/* .content{

} */
</style>