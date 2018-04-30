<template>
  <div class="findMusic-wrapper">
    <Slider></Slider>
    <HotRecommend></HotRecommend>
  </div>
</template>

<script>
import Slider from '@/components/findMusic/slider'
import HotRecommend from '@/components/findMusic/hotRecommend'

export default {
  name: 'findMusic',
  data () {
    return {
      name: "daipanpan test"

    }
  },
  components: {
    Slider,
    HotRecommend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
