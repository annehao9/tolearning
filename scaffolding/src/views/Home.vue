<template>
  <div>
    <mt-header title="学前端，到学问" fixed>
        <div slot="right" class="link" v-if="this.$store.state.isLogin==0">
          <router-link to="/register" slot="right">注册&nbsp;&nbsp;</router-link>
          <router-link to="/login" slot="right">登录</router-link>
        </div>
        <div v-else slot="right">
          欢迎：
        </div>
    </mt-header>
    <!-- 导航 -->
    <mt-navbar v-model="navactive" fixed style="top:40px">
      <!-- 数据拿到，渲染列表 -->
      <!-- :id="t.id.toString()" -->
        <mt-tab-item :id="t.id+''" v-for="t of category" :key=t.id>{{t.category_name}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container style="margin-top:90px;margin-bottom:55px">
        <mt-tab-container-item>
         <swipe></swipe>
         <articleone :navactive="navactive"></articleone>
        </mt-tab-container-item>
    </mt-tab-container> 
    <!-- 底部选项卡 -->
    <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home">
          <img v-if="selected=='home'" src="../assets/main_1.png" alt="" slot="icon">
          <img v-else src="../assets/main_0.png" alt="" slot="icon">
          首页</mt-tab-item>
        <mt-tab-item id="me">
          <img v-if="selected=='me'" src="../assets/me_1.png" alt="" slot="icon">
          <img v-else src="../assets/me_0.png" alt="" slot="icon">
          我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Swipe from '../components/Swipe.vue'
import Articleone from '../components/Articleone.vue'
export default {
  components: { Swipe,Articleone },
  data(){
    return{
      selected:'home',
      navactive:'1',
      category:[]
    }
  },
  watch:{
    selected(newval){
      // this.$router.push("/"+newval)
      if(newval=="home"){
        this.$router.push("/")
      }else if(newval=="me"){
        this.$router.push("/me")
      }
    }
  },
  mounted() {
    this.axios.get("/category").then(res=>{
      this.category=res.data.results;
    })
  },
}
</script>
<style scoped>
.link a{
  color: #fff;
}
.swipe img{
    width: 100%;
}
</style>


