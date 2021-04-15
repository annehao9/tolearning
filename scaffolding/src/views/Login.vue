<template>
    <div>
        <mt-header title="学前端，到学问">
            <mt-button icon="back" slot="left"></mt-button>
            <router-link to="/register" slot="right">注册</router-link>
        </mt-header>
        <mt-field type="text" label="用户名" placeholder="请输入用户名" v-model="username" :state="usernameState"></mt-field>
        <mt-field type="password" label="密码" placeholder="请输入密码" v-model="upwd" :state="upwdState"></mt-field>
        <mt-button size="large" type="primary" @click="checkForm">快速登录</mt-button>
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
        // 验证表单
        checkForm(){
           if(this.checkUsername()&&this.checkUpwd()){
               //    发送注册请求，实现注册业务
            let url='/login'
            let param=`username=${this.username}&password=${this.upwd}`;
            this.axios.post(url,param).then(res=>{
                console.log(res);
                if(res.data.code==200){//登录成功
                    this.$toast({
                        message:"登录成功",
                        duration:3000,
                        position:'bottom'
                    })//吐司提示框
                    // 调用mutations更新登录状态
                    this.$store.commit('updateLoginState',res.data.result)
                    this.$router.push('/')
                }else{//注册失败
                //在MintUI的install方法内部：Vue.prototype.$menssagebox=Messagebox
                    this.$messagebox('提示信息','密码错误')//消息对话框
                }
            })
           }else{

           }
            
        }
    }
}
</script>