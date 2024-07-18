<template>
  <div class="Home">
    <div class="left" :class="$store.state.showSANav ? 'active' : ''">
      <Sidebar />
    </div>
    <div class="right" :class="!$store.state.showSANav ? 'active' : ''">
      <div class="content">
        <Topbar />
        <router-view class="art-content" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/views/admin/components/Sidebar.vue";
import Topbar from "@/views/admin/components/Topbar.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    Topbar,
  },
  data() {
    return {};
  },
  mounted() {
    // if (!this.$getUser()) {
    //   this.$router.push({ name: "AdminLogin" });
    // }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.Home {
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-height: 100vh;
  background-color: #ebeef5;
  // overflow-x: hidden;
  .left {
    width: 260px;
    margin-left: -260px;
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 1500px) {
      width: 200px;
      margin-left: -200px;
    }
    &.active {
      margin-left: 0;
    }
  }
  .right {
    width: calc(100vw - 260px);
    height: 100vh;
    // overflow: hidden;
    @media screen and (max-width: 1500px) {
      width: calc(100vw - 200px);
    }
    &.active {
      width: 100vw;
    }
    .art-content {
      overflow-y: auto;
      height: calc(100vh - 60px);
    }
  }
}
</style>