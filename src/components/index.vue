<template id="">
  <div class="logDiv">
     <div class='logbox'>
       <p class='title'>用户登录</p>
       <el-form :model='ruleForm2' :rules='rules' ref='ruleForm2' label-width='0px' class='login_ruleForm'>
         <el-form-item label="" prop="username">
         <el-input type="text" class='username' v-model="ruleForm2.username" placeholder="用户名"  auto-complete="off"></el-input>
         <span class="start">*</span>
         </el-form-item>
         <el-form-item label="" prop="password">
         <el-input type="password" class='password' v-model="ruleForm2.password" placeholder="密码"  auto-complete="off"></el-input>
         <span class="start">*</span>
         </el-form-item>
         <el-form-item label="" prop="phone">
         <el-input type="text" class='phone' v-model="ruleForm2.phone" placeholder="分机号"  auto-complete="off"></el-input>
         <span class="start">*</span>
         </el-form-item>
         <el-form-item label="" prop="checkCode">
         <el-input type="text" class='checkCode' v-model="ruleForm2.checkCode" placeholder="校验码"  auto-complete="off"></el-input>
          <span class="imgSpan"><img src="../images/img.jpg" alt=""></span>
          <span class="start">*</span>
         </el-form-item>
         <el-button type="info" class="infoButton" @click="submitForm('ruleForm2')">登录</el-button>
       </el-form>
     </div>
  </div>
</template>
<script type="text/javascript">
   export default{
     data(){
       var validateUser = (rule,value,callback)=>{
         var reg = new RegExp(/^[A-Za-z0-9]{4,40}$/);
         if(!value){
           return callback(new Error('用户名不能为空！'))
         }else if(!reg.test(value)){
           return callback(new Error('用户名为4-16位的字母或数字'))
         }else {
            callback()
         }
       };
       var validatePass = (rule,value,callback)=>{
         var reg=new RegExp(/^[A-Za-z0-9\x21-x7e]{6,20}$/);
         if(!value){
           return callback(new Error('密码不能为空！'))
         }else if(!reg.test(value)){
           //alert(!reg.test(value) +"---"+value)
           return callback(new Error('密码为6-20位的字符'))
         }else{
           callback()
         }
       };
       var validatephone = (rule,value,callback)=>{
         var reg=new RegExp(/^[0-9]{4}$/);
         if(!value){
           return callback(new Error('分机号不能为空！'))
         }else if(!reg.test(value)){
           return callback(new Error('分机号为4位数字'))
         }else{
           callback()
         }
       }
       var validateCode = (rule,value,callback)=>{
         if(!value){
           return callback(new Error('验证码不能为空！'))
         }else{
           callback()
         }
       }
       return {
          ruleForm2:{
            username:'',
            password:'',
            phone:'',
            checkCode:''
          },
          rules:{
            username:[
              {validator:validateUser,trigger:'blur'} //用户名为4-16位的字母或数字
            ],
            password:[
              {validator:validatePass,trigger:'blur'} //密码为6-20位的字符
            ],
            phone:[
              {validator:validatephone,trigger:'blur'} //分机号为4位数字
            ],
            checkCode:[
              {validator:validateCode,trigger:'blur'}  //分机号为4位字符
            ]
          }
       }
     },
     methods:{
       submitForm(formName){
         this.$refs[formName].validate((valid) => {
         if (valid) {
           alert('submit!');
         } else {
           console.log('error submit!!');
           return false;
         }
       });
       }
     }
   }
</script>
<style lang='sass' scoped>
  .logDiv{width:800px;height:420px;background:#fff url('../images/login_bg.jpg') 0 0 no-repeat;position: absolute;top:50%;left:50%;margin-left:-400px;margin-top:-210px;border-radius:3px;}
  .logbox{float:right;width:315px;font-size:18px;padding:55px 0 0 0;}
  .title{text-align:left;}
  .login_ruleForm{padding:20px 0 0 0;}
  .username,.password,.phone{width:85%;float:left;margin:0;}
  .checkCode{width:49%;float:left;margin:0;}
  .start{float:left;padding:5px 5px;color:red;}
  .imgSpan{float:left;width:92px;padding:0 0 0 20px;}
  .imgSpan img{padding:0;margin:0;}
  .infoButton{width:85%;float:left;background-color: #22b7b5;border-color:transparent;}
</style>
