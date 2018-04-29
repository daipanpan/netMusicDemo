<template>
  <div id="app">
    <HeaderComponment></HeaderComponment>
    <div class="red-block"></div>
    <router-view></router-view>
    <AuthorInfo></AuthorInfo>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/dialog/dialog.vue"

import HeaderComponment from '@/components/headerComponment'
import AuthorInfo from '@/components/authorInfo'
import spectralFlux from './audioCompare.js'

export default {
  name: 'App',
  data () {
    return {
      // showLoginDialog: true
    }
  },
  created () {
    require("./common/common.css");
    // const difference = spectralFlux({
    //   signal: '',
    //   previousSignal: ''
    // });
  },
  components: {
    Dialog,
    HeaderComponment,
    AuthorInfo
  }
}
</script>

<style>
#app {
  min-width: 1120px;
  height: 100%;
}
.red-block {
 height: 20px;
 width: 100%;
 background: red;
}
</style>
