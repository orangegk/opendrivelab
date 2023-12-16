<template>
  <div class="about">
    <h6>{{ ans }}</h6>
    <div id="canvas-container">
      <canvas id="canvas" style="width: 750px;height:500px"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ans: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // console.log(this.ans, '   111')
      this.ans = []
      // let  ans=[]
      //canvas里面给定一个有多个动物的图片，后端给几百个X,Y坐标值的位置标记某一个动物的边界，
      //然后由canvas绘制标记出这个动物，和其他动物隔开，并加上蒙层，并在这一个动物外面加一个红色矩形标注
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext('2d');

      // 加载图片
      const image = new Image();
      image.onload = function () {
        // 设置canvas的宽高与图片一致
        const imageWidth = image.width;
        const imageHeight = image.height;
        canvas.width = imageWidth;
        canvas.height = imageHeight;

        // 在Canvas中绘制图片
        ctx.drawImage(image, 0, 0);

        // 假设后端返回的标注信息为一个动物的曲线边界坐标
        const boundary = [
          { x: 100, y: 100 },
          { x: 150, y: 50 },
          { x: 200, y: 100 },
          { x: 200, y: 200 },
          { x: 150, y: 250 },
          { x: 100, y: 200 },
        ];

        // 绘制曲线边界
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(boundary[0].x, boundary[0].y);
        for (let i = 1; i < boundary.length - 2; i++) {
          const controlPointX = (boundary[i].x + boundary[i + 1].x) / 2;
          const controlPointY = (boundary[i].y + boundary[i + 1].y) / 2;
          ctx.quadraticCurveTo(boundary[i].x, boundary[i].y, controlPointX, controlPointY);
        }
        // 绘制最后两个点
        ctx.quadraticCurveTo(boundary[boundary.length - 2].x, boundary[boundary.length - 2].y, boundary[boundary.length - 1].x, boundary[boundary.length - 1].y);
        ctx.stroke();
      };

      // 设置图片路径
      image.src = require('@/assets/test_image.jpg');


      // 添加点击事件监听器获取动物边缘坐标值
      // canvas.addEventListener('click', (event) => {
      //   var rect = canvas.getBoundingClientRect();
      //   var x = (event.clientX - rect.left) * (canvas.width / rect.width);
      //   var y = (event.clientY - rect.top) * (canvas.height / rect.height);
      //   x = x.toFixed(2); // 保留两位小数
      //   y = y.toFixed(2); // 保留两位小数
      //   // console.log(x, y, this.ans);
      //   this.ans.push([x, y]);
      //   // 在这里可以根据点击的坐标进行相应的操作
      // });

      // 点击图片返回一个坐标值，作为参数，调用后端接口，后端返回一个动物的边界坐标，根据坐标绘制图形边框
      canvas.addEventListener('click', (event) => {
        // console.log('1111111111111111111111111')
        var rect = canvas.getBoundingClientRect();
        var x = (event.clientX - rect.left) * (canvas.width / rect.width);
        var y = (event.clientY - rect.top) * (canvas.height / rect.height);
        x = x.toFixed(2); // 保留两位小数
        y = y.toFixed(2); // 保留两位小数
        // console.log(x, y, this.ans);
        this.ans.push([x, y]);
        // 在这里可以根据点击的坐标进行相应的操作

        if (this.ans.length > 0) {
          // 后端接口
          // 这里可以根据坐标值，调用后端接口，后端返回一个动物的边界坐标，根据坐标绘制图形边框
          // console.log(this.ans);
          let mockData = [["822.84", "1132.64"], ["825.85", "1111.67"], ["831.88", "1084.70"], ["834.89", "1054.74"], ["840.92", "1024.78"], ["843.93", "979.84"], ["819.83", "919.92"], ["810.79", "868.99"], ["807.77", "818.06"], ["801.75", "755.14"], ["810.79", "695.22"], ["871.05", "662.67"], ["898.17", "650.68"], ["928.31", "629.71"], ["970.49", "614.73"], ["1012.68", "614.73"], ["1063.91", "602.75"], ["1094.04", "617.73"], ["1139.24", "617.73"], ["1175.40", "647.69"], ["1190.47", "671.65"], ["1217.59", "716.59"], ["1223.61", "749.95"], ["1217.59", "815.86"], ["1211.56", "857.80"], ["1202.52", "908.74"], ["1202.52", "929.71"], ["1211.56", "959.67"], ["1232.65", "989.63"], ["1244.71", "1013.60"], ["1253.75", "1025.58"], ["1256.76", "1037.56"], ["1247.72", "1034.97"], ["1229.64", "1014.00"], ["1205.53", "999.02"], ["1199.51", "960.07"], ["1190.47", "951.08"], ["1178.41", "1002.01"], ["1172.39", "1058.94"], ["1163.35", "1109.87"], ["1157.32", "1145.82"], ["1127.19", "1148.82"], ["1066.92", "1107.27"], ["1075.96", "1152.21"], ["1054.87", "1158.20"], ["1030.76", "1149.22"], ["1012.68", "1137.23"], ["1030.76", "1092.29"], ["1015.69", "1068.32"], ["985.56", "1092.29"], ["985.56", "1122.25"], ["982.55", "1146.22"], ["960.45", "1140.63"], ["933.33", "1158.60"], ["882.10", "1155.61"], ["830.88", "1155.61"], ["824.85", "1146.62"]]
          // 将字符串转换为数字
          const processedBoundary = mockData.map(point => [parseFloat(point[0]), parseFloat(point[1])]);

          // console.log('222222222222222222222')
          // 找到动物曲线边界的最小和最大值·
          let minX = Number.MAX_VALUE;
          let minY = Number.MAX_VALUE;
          let maxX = Number.MIN_VALUE;
          let maxY = Number.MIN_VALUE;

          for (let i = 0; i < processedBoundary.length; i++) {
            if (processedBoundary[i][0] < minX) minX = processedBoundary[i][0];
            if (processedBoundary[i][0] > maxX) maxX = processedBoundary[i][0];
            if (processedBoundary[i][1] < minY) minY = processedBoundary[i][1];
            if (processedBoundary[i][1] > maxY) maxY = processedBoundary[i][1];
          }
          // console.log('333333333333333')
          // 绘制动物的曲线边界
          ctx.strokeStyle = '#67C23A';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(processedBoundary[0][0], processedBoundary[0][1]);
          for (let i = 1; i < processedBoundary.length - 2; i++) {
            const controlPointX = (processedBoundary[i][0] + processedBoundary[i + 1][0]) / 2;
            const controlPointY = (processedBoundary[i][1] + processedBoundary[i + 1][1]) / 2;
            ctx.quadraticCurveTo(processedBoundary[i][0], processedBoundary[i][1], controlPointX, controlPointY);
          }
          // 绘制最后两个点
          ctx.quadraticCurveTo(processedBoundary[processedBoundary.length - 2][0], processedBoundary[processedBoundary.length - 2][1], processedBoundary[processedBoundary.length - 1][0], processedBoundary[processedBoundary.length - 1][1]);
          ctx.stroke();
          // console.log('4444444444444444444')
          // 添加蒙层
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.beginPath();
          ctx.moveTo(processedBoundary[0][0], processedBoundary[0][1]);
          for (let i = 1; i < processedBoundary.length - 2; i++) {
            const controlPointX = (processedBoundary[i][0] + processedBoundary[i + 1][0]) / 2;
            const controlPointY = (processedBoundary[i][1] + processedBoundary[i + 1][1]) / 2;
            ctx.quadraticCurveTo(processedBoundary[i][0], processedBoundary[i][1], controlPointX, controlPointY);
          }
          // 绘制最后两个点
          ctx.quadraticCurveTo(processedBoundary[processedBoundary.length - 2][0], processedBoundary[processedBoundary.length - 2][1], processedBoundary[processedBoundary.length - 1][0], processedBoundary[processedBoundary.length - 1][1]);
          ctx.closePath();
          ctx.fill();
          // console.log('55555555555555555555')
          // 添加红色矩形框标注
          ctx.strokeStyle = '#ff0000';
          ctx.lineWidth = 4;
          ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
          // console.log('666666666666666666666')


          // // 找到动物曲线边界的最小和最大值
          // let minX = processedBoundary[0][0];
          // let minY = processedBoundary[0][1];
          // let maxX = processedBoundary[0][0];
          // let maxY = processedBoundary[0][1];

          // for (let i = 1; i < processedBoundary.length; i++) {
          //   if (processedBoundary[i][0] < minX) {
          //     minX = processedBoundary[i][0];
          //   }
          //   if (processedBoundary[i][0] > maxX) {
          //     maxX = processedBoundary[i][0];
          //   }
          //   if (processedBoundary[i][1] < minY) {
          //     minY = processedBoundary[i][1];
          //   }
          //   if (processedBoundary[i][1] > maxY) {
          //     maxY = processedBoundary[i][1];
          //   }
          // }
          // // 绘制动物的曲线边界
          // ctx.strokeStyle = '#67C23A';
          // ctx.lineWidth = 2;
          // ctx.beginPath();
          // ctx.moveTo(processedBoundary[0][0], processedBoundary[0][1]);
          // for (let i = 1; i < processedBoundary.length - 2; i++) {
          //   const controlPointX = (processedBoundary[i][0] + processedBoundary[i + 1][0]) / 2;
          //   const controlPointY = (processedBoundary[i][1] + processedBoundary[i + 1][1]) / 2;
          //   ctx.quadraticCurveTo(processedBoundary[i][0], processedBoundary[i][1], controlPointX, controlPointY);
          // }
          // // 绘制最后两个点
          // ctx.quadraticCurveTo(processedBoundary[processedBoundary.length - 2][0], processedBoundary[processedBoundary.length - 2][1], processedBoundary[processedBoundary.length - 1][0], processedBoundary[processedBoundary.length - 1][1]);
          // ctx.stroke();

          // // 添加蒙层
          // ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          // ctx.fillRect(minX, minY, maxX - minX, maxY - minY);

          // // 添加红色矩形框标注
          // ctx.strokeStyle = '#ff0000';
          // ctx.lineWidth = 4;
          // ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);

        }
      });

    },
  }
}

</script>