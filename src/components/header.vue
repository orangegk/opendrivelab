<template>
  <!-- <a-layout>
    <a-layout-header class="layout-header">
      <div class="logo">
        <img src="@/assets/images/team_logo_long.png" alt="Logo" />
      </div> -->
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="home">
          <router-link to="/">
            <a-icon type="home" />Home</router-link
          ></a-menu-item
        >
        <a-menu-item key="team">
          <router-link to="/team"> <a-icon type="team" />Team</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="experiment" /><span>Research</span></span
          >
          <a-menu-item key="1"
            ><a
              href="https://github.com/OpenDriveLab/DriveAGI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a-icon type="github" />DriveAGI</a
            >
          </a-menu-item>
          <a-menu-item key="2"
            ><a
              href="https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a-icon type="github" />End-to-end Autonomous Driving</a
            >
          </a-menu-item>
          <a-menu-item key="3"
            ><a
              href="https://github.com/OpenDriveLab/BEVPerception-Survey-Recipe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a-icon type="github" />Bird's-eye-view Perception</a
            >
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="file-search" /><span>Event</span></span
          >
          <a-menu-item key="4"
            ><router-link to="/AutonomousDrivingForum">
              <a-icon type="car" />自动驾驶论坛 @ 北京 2023</router-link
            >
          </a-menu-item>
          <a-menu-item key="5"
            ><router-link to="/ADChallenge">
              <a-icon type="car" />AD Challenge @ CVPR 2023</router-link
            >
          </a-menu-item>
          <a-menu-item key="6"
            ><router-link to="/E2EADWorkshop">
              <a-icon type="car" />E2EAD Workshop @ CVPR 2023</router-link
            >
          </a-menu-item>
          <a-menu-item key="7"
            ><router-link to="/SR4ADWorkshop">
              <a-icon type="car" />SR4AD Workshop @ ICLR 2023</router-link
            >
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="Publication">
          <router-link to="/Publication">
            <a-icon type="trophy" />Publication</router-link
          >
        </a-menu-item>
        <a-menu-item key="Sponsor">
          <a
            href="https://github.com/sponsors/OpenDriveLab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <!-- <a-icon type="heart" shape="solid" color="#FF0000" /> -->
            <a-icon
              type="heart"
              theme="filled"
              style="color: rgba(220, 20, 60, 1)"
            />Sponsor</a
          >
        </a-menu-item>
      </a-menu>
    <!-- </a-layout-header>
  </a-layout> -->

  <!-- <CarouselVue></CarouselVue> -->
</template>

<script>
export default {
  data() {
    return {
      current: ["home"],
    };
  },
};
</script>

<style lang="scss" scoped>
// .logo {
//   width: 30px;
//   height: 31px;
//   background: rgba(255, 255, 255, 0.2);
//   margin: 16px 28px 16px 0;
//   float: left;
// }
.layout-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
}
.logo img {
  height: 32px;
}
</style>
