<template>
    <div>
        <mt-header title="学前端，到学问">
            <mt-button icon="back" slot="left"></mt-button>
            <router-link to="/login" slot="right">登录</router-link>
        </mt-header>
        <mt-field type="text" label="用户名" placeholder="请输入用户名" v-model="username"     
        @blur.native.capture="checkUsername" :state="usernameState"></mt-field>
        <mt-field type="password" label="密码" placeholder="请输入密码" v-model="upwd" 
        @blur.native.capture="checkUpwd" :state="upwdState"></mt-field>
        <mt-field type="password" label="重复密码" placeholder="请再次输入密码" v-model="reupwd" 
        @blur.native.capture="checkUpwd" :state="reupwdState"></mt-field>
        <mt-button size="large" type="primary" @click="checkForm">免费注册</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            usernameState:'',
            upwd:'',
            upwdState:'',
            reupwd:'',
            reupwdState:''
        }
    },
    methods:{
        checkUsername(){
            // 验证用户名
            let username=this.username;
            let reg=/^\w{6,12}$/;
            if(reg.test(username)){
                this.usernameState="success";
                return true;
            }else{
                this.usernameState="error";
                return false;
            }
        },
        checkUpwd(){
            // let upwd=this.upwd;
            let reg=/^\d{6}$/;
            if(reg.test(this.upwd)){
                this.upwdState="success";
                return true;
            }else{
                this.upwdState="error";
                return false;
            }
        },
        checkReupwd(){
            let reg=/^\d{6}$/;
            if(reg.test(this.reupwd)&&(this.upwd==this.reupwd)){
                this.reupwdState="success";
                return true;
            }else{
                this.reupwdState="error";
                return false;
            }
        },
        checkForm(){
           if(this.checkUsername()&&this.checkUpwd()&&this.checkReupwd()){
            //    发送注册请求，实现注册业务
            let url='/register'
            let param=`username=${this.username}&password=${this.upwd}`;
            this.axios.post(url,param).then(res=>{
                console.log(res);
                if(res.data.code==200){//注册成功
                    this.$toast({
                        message:"注册成功",
                        duration:3000,
                        position:'bottom'
                    })//吐司提示框
                    this.$router.push('/login')
                }else{//注册失败
                //在MintUI的install方法内部：Vue.prototype.$menssagebox=Messagebox
                    this.$messagebox('提示信息','用户已存在')//消息对话框
                }
            })
           }else{

           }
            
        }
    }
}
</script>