<template>
    <div>
        <mt-navbar v-model="navactive">
            <mt-tab-item id="1">教育
                <!-- <img src="../assets/default.png" alt="" slot="icon"> -->
            </mt-tab-item>
            <mt-tab-item id="2">人文
                <!-- <img src="../assets/default.png" alt="" slot="icon">                -->
            </mt-tab-item>
            <mt-tab-item id="3">科技
                <!-- <img src="../assets/default.png" alt="" slot="icon">                -->
            </mt-tab-item>
            <mt-tab-item id="4">数学
                <!-- <img src="../assets/default.png" alt="" slot="icon">                -->
            </mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="navactive" style="margin-top:10px">
            <mt-tab-container-item id="1">面板1</mt-tab-container-item>
            <mt-tab-container-item id="2">面板2</mt-tab-container-item>
            <mt-tab-container-item id="3">面板3</mt-tab-container-item>
            <mt-tab-container-item id="4">面板4</mt-tab-container-item>
        </mt-tab-container>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            navactive:"1",//必须字符串
        }
    }
}
</script>