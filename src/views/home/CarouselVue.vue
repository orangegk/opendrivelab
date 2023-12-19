<template>
  <div style="width:100%;height:100%">
    <a-carousel autoplay>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
/* For demo */
::v-deep .ant-carousel  .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

::v-deep .ant-carousel  .slick-slide h3 {
  color: #fff;
}
</style>
