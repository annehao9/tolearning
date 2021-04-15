<template>
  <div>
    我的个人信息
    <mt-tabbar v-model="selected">
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
export default {
  data(){
    return{
      selected:'me'
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
  }
}
</script>


