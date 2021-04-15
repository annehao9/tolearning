<template>
    <div>
        <div v-infinite-scroll="showmore" infinite-scroll-disabled="busy" :infinite-scroll-immediate-check="true">
            <div class="item" v-for="(item,i) in n" :key="i">当前列表项：{{item}}</div>
        </div> 
    </div>  
</template>
<style scoped>
.item{
    height: 40px;
    line-height:40px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
</style>
<script>
export default {
    data(){
        return{
            busy:false,
            n:50
        }
    },
    methods:{
        showmore(){//将在触底事件后执行
        // console.log("showmore")
        this.busy=true;//无限滚动状态，设置繁忙
        setTimeout(() => {//模拟发请求，2s以后更新列表
            this.n+=20;
            this.busy=false;//空闲 
        }, 2000);          
        }
    }
}
</script>