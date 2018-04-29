<template>
  <div class="slider-wrapper chinese-show">
    <div class="slider-content">
      <div class="slider-left">ā á ǎ à</div>
      <div class="slider-left">这是中文字体测试</div>
      <div class="slider-right">这是中文字体测试</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'slider',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slider-wrapper {
    width: 100%;
    height: 336px;
  }
  .slider-content {
    display: flex;
  }
  .slider-content div{
    flex:1;
    margin: 10px;
    text-align: center;
  }
</style>
