<template>
  <div class="home">
    <div class="img-box" v-for="(item,index) in 6" :key="index">
      <img :src="require(`../assets/images/${index+1}.jpg`)" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return {
      imgUrl:'../assets/images/'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  .img-box
    width 100%
    img
      width 100%


</style>
