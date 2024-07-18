<template>
  <div class="Topbar">
    <div class="toggler" v-if="expand">
      <div class="nav-lines" @click="$toggleSANav()">
        <!-- <div></div>
        <div></div>
        <div></div> -->
        <i
          class="fas fa-angle-left"
          :class="!$store.state.showSANav ? 'rotate' : ''"
        ></i>
        <!-- <i class="fas fa-angle-right" v-else></i> -->
      </div>
    </div>
    <div class="topbar-label">
      <h3>{{ pageTitle }}</h3>
    </div>
    <div class="right">
      <div class="notifications">
        <i class="fas fa-bell"></i>
        <span>10</span>
      </div>
      <div
        class="profile"
        @click="showAccountDrop = true"
        v-click-out-side="customMethod2"
      >
        <LoggedUser :showDrop="showAccountDrop" />
      </div>
    </div>
  </div>
</template>

<script>
import clickOutSide from "@mahdikhashan/vue3-click-outside";
import LoggedUser from "./LoggedUser.vue";
export default {
  name: "Topbar",
  props: {
    pageTitle: {
      type: String,
      default: "Dashboard",
    },
    expand: {
      type: Boolean,
      default: true,
    },
  },
  directives: {
    clickOutSide,
  },
  components: {
    LoggedUser,
  },
  data() {
    return {
      showAccountDrop: false,
      house: null,
    };
  },
  methods: {
    customMethod2() {
      this.showAccountDrop = false;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.Topbar {
  width: 100%;
  // height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: #fff;
  @media screen and (max-width: 1500px) {
    // height: 40px;
  }
  label {
    font-size: 20px;
    font-weight: 600;
    @media screen and (max-width: 1500px) {
      font-size: 14px;
    }
  }
  .toggler {
    display: flex;
    .nav-lines {
      display: flex;
      flex-direction: column;
      border: 1px #686868 solid;
      justify-content: center;
      align-items: center;
      padding: 8px 10px;
      border-radius: 5px;
      row-gap: 2px;
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.5s;
      @media screen and (max-width: 1500px) {
        padding: 3px;
      }
      &:hover {
        background-color: #444;
        i {
          color: #fff;
        }
      }
      i {
        color: #686868;
        transition: all 0.5s;
        &.rotate {
          transform: rotate(180deg);
        }
      }
    }
  }
  .topbar-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
      @media screen and (max-width: 1500px) {
        font-size: 18px;
      }
      i {
        font-size: 20px;
        margin-left: 5px;
        cursor: pointer;
        color: $primary_color;
        @media screen and (max-width: 1500px) {
          font-size: 14px;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
    .notifications {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      cursor: pointer;
      position: relative;
      flex-wrap: wrap;
      margin-top: 0.8rem;
      i {
        font-size: 20px;
        color: #c7c7c7;
        display: block;
        @media screen and (max-width: 1500px) {
          font-size: 14px;
        }
      }
      span {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: $primary_color;
        color: #fff;
        padding: 5px;
        border-radius: 50%;
        font-size: 10px;
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1500px) {
          font-size: 10px;
        }
      }
    }
    .profile {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      column-gap: 10px;
      border-radius: 1000px;
      cursor: pointer;
    }
  }
}
</style>