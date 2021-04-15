<template>
  <div>
    <!-- 单一文章信息开始 -->
    <div class="articleItem" v-for="t of wen" :key=t.id v-infinite-scroll="showmore"
    :infinite-scroll-immediate-check="true">
    <router-link :to="`article?id=${t.id}`">
      <!-- 文章标题开始 -->
      <div class="articleItem-header">{{t.subject}}</div>
      <!-- 文章标题结束 -->
      <!-- 文章图文信息开始 -->
      <div class="articleItem-wrapper">
        <!-- 文章图像开始  -->
        <div class="articleImg">
          <!-- <img :src="require(`../assets/articles/${t.image}`)" /> -->
          <img v-if="t.image" :src="t.image" />
        </div>
        <!-- 文章图像结束 -->
        <!-- 文章简介开始 -->
        <div class="articleDes">
          {{t.description}}
        </div>
        <!-- 文章简介结束 -->
      </div>
      </router-link>
      <!-- 文章图文信息结束 -->
    </div>
    
    <!-- 单一文章信息结束 -->
    <!-- 底线 -->
    <div v-if="reachBottom" class="rb">亲，我是有底线的...</div>
  </div>
</template>

<script>
export default {
  props:["navactive"],
  data() {
    return {
      // navactive: "1",
      wen:[],
      busy:false,
      page:1,
      reachBottom:false
    };
  },
  methods: {
    // 异步加载文字列表，通过callback执行回调,封装
    loadArticles(cid,page,callback){
        this.axios.get(`/articles?cid=${cid}&page=${page}`).then(res=>{
          // 处理图片路径
        res.data.results.forEach(t=>{
          if(t.image){
            // 通过require处理图片路径
            t.image=require("../assets/articles/"+t.image)
          }
        })
        if(this.page>=res.data.pagecount){
          // 当前页已经大于等于最大页数=》到底了
          this.reachBottom=true;
        }
          callback(res.data.results)
        })
    },

    showmore(){
      if(this.reachBottom){
        return;
      }
      this.busy=true;//发送请求
      let cid=this.navactive;
      this.page++;
      this.loadArticles(cid,this.page,(list)=>{
        this.wen=this.wen.concat(list);
        this.busy=false;
      })
      // this.axios.get(`/articles?cid=${cid}&page=${this.page}`).then(res=>{
      //   // console.log(res.data.results)
      //   // 处理图片路径
      //   res.data.results.forEach(t=>{
      //     if(t.image){
      //       // 通过require处理图片路径
      //       t.image=require("../assets/articles/"+t.image)
      //     }
      //   })
      //   //把获取到的数据追加到列表的末尾
      //   // this.wen=this.wen.concat(res.data.results)
      //   if(res.data.results.length!=0){
      //     this.wen=[...this.wen,...res.data.results]
      //   }
      //   this.busy=false;
      //   if(this.page>=res.data.pagecount){
      //     // 当前页已经大于等于最大页数=》到底了
      //     this.reachBottom=true;
      //   }
      // })
    }
  },
  watch:{
    //监听顶部导航的更新
     navactive(newval){
      this.page=1;
      // this.axios.get(`/articles?cid=${newval}`).then(res=>{
      //   // console.log(res)
      //   this.wen=res.data.results;
      //   this.wen.forEach(t=>{
      //     if(t.image){
      //       // 通过require处理图片路径
      //       t.image=require("../assets/articles/"+t.image)
      //     }
      //   })
      // })

      this.loadArticles(newval,1,(list)=>{
        this.wen=list;
      })
    window.scroll(0,0)
    }
  },
  mounted(){
    this.loadArticles(1,1,(list)=>{
        // list即是发送请求后，响应中的文章列表
        this.wen=list;
    })

    // cid=${navnative}
    // this.axios.get(`/articles?cid=1`).then(res=>{
    //     this.wen=res.data.results;
    //     // 整理this.wen中每个对象的image路径
    //     // 使用require对他们进行路径处理，在页面中就可以直接动态
    //     this.wen.forEach(t=>{
    //       if(t.image){
    //         // 通过require处理图片路径
    //         t.image=require("../assets/articles/"+t.image)
    //       }
    //     })
    // })
  }
};
</script>
<style scoped>
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
.rb{
  height:80px;
  line-height: 80px;
  text-align: center;
  color: #999;
}
</style>
