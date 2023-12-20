<template>
  <div class="home">
    <Carousel></Carousel>
    <div style="background-color: #fafafa; padding: 24px">
      <div class="title">Recruitment</div>
      <a-descriptions >
        <a-descriptions-item>
          We are searching for talents from all over the world.
          <br />
          Are you looking for opportunities as Postdoc, full-time employee,
          intern, etc.?
          <br />
          Don't hesitate to contact us via contact@opendrivelab.com or Dr.
          Hongyang Li.
          <br />
          <div style="margin-top: 10px">
            我们正在招募 2024年 直博/普博，欢迎垂询！
          </div>
        </a-descriptions-item>
        <!-- <a-descriptions-item span="3">
          我们正在招募 2024年 直博/普博，欢迎垂询！
        </a-descriptions-item> -->
      </a-descriptions>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "./home/CarouselVue.vue";
export default {
  name: "HomeView",
  components: {
    Carousel,
  },
};
</script>
<style lang="scss" scoped>
.title {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}
</style>
