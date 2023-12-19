<template>
  <div class="home">
    <Carousel></Carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from './home/CarouselVue.vue';
export default {
  name: 'HomeView',
  components: {
    Carousel,
  },
}

</script>
<style scoped>
</style>
