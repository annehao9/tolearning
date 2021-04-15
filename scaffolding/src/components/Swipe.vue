<template>
    <div>
        <mt-swipe :style="{height:h}" :show-indicators="false" :continuous="false" class="swipe"> 
            <mt-swipe-item>
                <img src="../assets/1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/3.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<style scoped>
/* .swipe{
    height: 200px;
} */
.swipe img{
    width: 100%;
}
</style>
<script>
export default {
    data(){
        return{
            h:"200px"
        }
    },
    mounted(){
        // 初始化适配轮播图的高度
        let picwidth = 1242;
        let picheight = 698;
        // 屏幕宽
        let screenwidth = window.screen.width;
        let height = Math.floor((picheight * screenwidth) / picwidth) + 'px';
        this.h=height;
    }
}
</script>