<template>
  <a-menu v-model="current" mode="horizontal">
    <a-menu-item key="home"> <router-link to="/"> <a-icon type="home" />Home</router-link></a-menu-item>
    <a-menu-item key="team">
      <router-link to="/team"> <a-icon type="team" />Team</router-link>
    </a-menu-item>
    <a-sub-menu>
      <span slot="title" class="submenu-title-wrapper"
        ><a-icon type="experiment" />Research</span
      >
      <a-menu-item-group title="Item 1">
        <a-menu-item key="setting:1"> Option 1 </a-menu-item>
        <a-menu-item key="setting:2"> Option 2 </a-menu-item>
      </a-menu-item-group>
      <!-- <a-menu-item-group title="Item 2">
        <a-menu-item key="setting:3"> Option 3 </a-menu-item>
        <a-menu-item key="setting:4"> Option 4 </a-menu-item>
      </a-menu-item-group> -->
    </a-sub-menu>
    <a-menu-item key="alipay">
      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
        >Navigation Four - Link</a
      >
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      current: ["mail",],
    };
  },
};
</script>

<style></style>
