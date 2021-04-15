<template>
    <div>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <h1>购物车</h1>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="tabbar">
                <img v-if="selected=='tabbar'" src="../assets/main_1.png" alt="" slot="icon">
                <img v-else src="../assets/main_0.png" alt="" slot="icon">
                首页</mt-tab-item>
            <mt-tab-item id="cart">
                <img v-if="selected=='cart'" src="../assets/cart_1.png" alt="" slot="icon">
                <img v-else src="../assets/cart_0.png" alt="" slot="icon">
                购物车</mt-tab-item>
            <mt-tab-item id="my">
                <img v-if="selected=='my'" src="../assets/me_1.png" alt="" slot="icon">
                <img v-else src="../assets/me_0.png" alt="" slot="icon">
                我的</mt-tab-item>
        </mt-tabbar> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected:"cart"
        }
    },
    watch:{
        selected(newval){
            this.$router.push("/"+newval)
        }
    }
}
</script>