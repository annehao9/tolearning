<template>
    <div>
        <mt-field type="text" label="用户名" placeholder="请输入用户名" state="success"></mt-field>
        <mt-field type="password" label="密码" placeholder="请输入密码" state="error"></mt-field>
        <mt-field type="email" label="邮箱" placeholder="请输入邮箱" state="warning" :attr="{maxlength:15,autocomplete:'off'}"></mt-field>
        <mt-button size="large" type="primary">提交</mt-button>
    </div>
</template>