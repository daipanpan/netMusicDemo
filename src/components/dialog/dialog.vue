<template>
  <el-dialog
    class="login-dialog"
    :title="title"
    :visible.sync="dialogFormVisible"
    center>
    <div class="loginRegister" v-if="loginRegister">
      <img class="loginIcon" src="https://s2.music.126.net/style/web2/img/platform.png?42ab2cc5cda8e048cc14758bc2071133" alt="">
      <el-button @click="showLogin">登 录</el-button>
      <el-button type="primary" @click="showRegister">注 册</el-button>
    </div>
    <!-- 登录、注册 -->
    <div class="loginIndex" v-if="">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.psd" auto-complete="off"></el-input>
        </el-form-item>

        <div v-if="loginOrRegister">
          <el-button type="primary" @click="confirm">登 录</el-button>
          <div class="registerToLogin" @click="RegisterBtn">免费注册</div>
        </div>
        <div v-if="!loginOrRegister">
          <el-button type="primary" @click="nextStep">下一步</el-button>
        <div class="registerToLogin" @click="LoginBtn">登录</div>
        </div>    
      </el-form>
    </div>
  </el-dialog>
</template>

<script>

export default {
  name: 'login-dialog',
  data () {
    return {
      title: '登录',
      loginRegister: true,
      RegisterIndex: false,
      loginOrRegister: true,
      formLabelWidth: "80px",
      form: {
        name: "",
        psd: ""
      }
    }
  },
  computed: {
    dialogFormVisible: {
      get: function() {
        return this.$store.getters.getShowFlag;
      },
      set: function() {

      }
    }
  },
  methods: {
    showLogin () {
      this.title = '登录';
      this.loginRegister = false;
      // this.RegisterIndex = false;
    },
    showRegister () {
      this.title = '注册';
      this.loginIndex = false;
      this.loginRegister = true;
      // this.RegisterIndex = true;
    },
    RegisterBtn (){

    },
    LoginBtn (){

    },
    cancel () {
      this.$store.dispatch('setShowFlag',false);
    },
    confirm () {

    }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .login-dialog{
    min-width: 600px;
  }
  .loginRegister .el-button {
    margin: 0 0 10px;
    width: 100%;
  }
  .loginIndex .el-button {
    margin: 0 0 10px 80px;
    width: calc(100% - 80px);
  }
  .loginRegister{
    text-align: center;
  }
  .loginIcon {
    margin: 10px;
  }
  .registerToLogin {
    margin-left: 80px;
    cursor: pointer;
    display: inline-block;
  }

</style>
