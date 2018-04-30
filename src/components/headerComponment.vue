<template>
  <div class="header-wrapper">
    <div class="header-content">
      <a class="net-logo" href="#">{{$t("langType.music")}}</a>
      <div class="head-nav">
        <router-link to="/findMusic">{{$t("langType.findMusic")}}</router-link>
        <router-link to="/myMusic">{{$t("langType.myMusic")}}</router-link>
        <router-link to="/friend">{{$t("langType.friend")}}</router-link>
        <router-link to="/musican">{{$t("langType.musician")}}</router-link>
        <router-link to="/download">{{$t("langType.download")}}</router-link>
      </div>
      <input class="search-input" type="text" :placeholder="$t('langType.placeholder.search')">
      <a class="login" @mouseover="showLogin" @mouseout="hideLogin">
        {{$t("langType.login")}}
        <ul class="loginType" v-if="loginFlag">
          <li @click="loginDialog">{{$t("langType.loginType.number")}}</li>
          <li @click="loginDialog">{{$t("langType.loginType.wechat")}}</li>
          <li @click="loginDialog">{{$t("langType.loginType.QQ")}}</li>
          <li @click="loginDialog">{{$t("langType.loginType.Sina")}}</li>
          <li @click="loginDialog">{{$t("langType.loginType.net")}}</li>
          <!-- <li v-for="(item, index) in  > -->
          </li>
        </ul>
      </a>
    </div>
    <!-- <Dialog></Dialog> -->
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      loginFlag: false,
      age: 19,
      msg: 'Welcome to Your Vue.js App. This is why we play. niaho dkjfh. yes,you are.   '
    }
  },
  components: {
    // Dialog
  },
  methods: {
    showLogin () {
      this.loginFlag = !this.loginFlag;
    },
    hideLogin () {
      this.loginFlag = !this.loginFlag;
    },
    loginDialog () {
      this.$store.dispatch('setShowFlag', true)
    }
  },
  created () {
    this.$router.push({name: "findMusicComponment"});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-wrapper {
    height: 70px;
    width: 100%;
    background: #242424;
    line-height: 70px;
  }
  .header-content {
    margin: 0 auto;
    min-width: 960px;
    height: 100%;
    width: 30%;
  }
  .net-logo{
    float: left;
    margin-right: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
  }
  .head-nav {
    font-family: myFirstFont;
    float: left;
    display: flex;
  }
  .head-nav a{
    flex: 1;
    width: 90px;
    text-align: center;
    /* font-size: 1.2rem; */
    color: #fff;
  }
  .head-nav a:hover{
    background: #000;
  }
  .router-link-active {
    background: #000;
  }
  .search-input {
    margin-left: 20px;
    /* float: left; */
  }
  .login {
    position: relative;
    display: inline-block;
    height: 70px;
    margin-left: 10px;
    color:#fff;
    cursor: pointer;
    /* float: left; */
  }

  .login1 {
    display: none;
  }

  .loginType {
    position: absolute;
    top: 70px;
    left: -40px;
    display: block;
    background: #242424

  }

  .loginType li{
    width: 120px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .loginType li:hover{
    background: #4b4747;
  }
  .loginType li + li{
    border-top: 1px solid rgb(97, 93, 93);
  }

</style>
