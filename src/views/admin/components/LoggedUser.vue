<template>
  <div class="left">
    <!-- <h2>{{ user.name }}</h2>
    <p>Admin</p> -->
  </div>
  <div class="right">
    <div class="a">
      <img :src="$img('prof.png')" alt="profile" @error="$imageurlalt()" />
      <div class="drop" v-if="showDrop">
        <router-link
          :to="{ name: 'AdminDashboard', params: { tab: 'profile' } }"
          class="item"
          >Profile</router-link
        >
        <div class="item" @click="$userLogout()">Logout</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDrop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: {
        name: "Admin",
      },
    };
  },
  mounted() {
    // this.user = this.$getUser();
  },
};
</script>

<style lang="scss" scoped>
$primary_color: #1d2088;
$secondary_color: #1eb9ee;
.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: black;
    @media screen and (max-width: 1500px) {
      font-size: 1rem;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    color: #c7c7c7;
    @media screen and (max-width: 1500px) {
      font-size: 0.7rem;
    }
  }
}
.right {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      @media screen and (max-width: 1500px) {
        width: 40px;
        height: 40px;
      }
    }
    .drop {
      position: absolute;
      top: 58px;
      right: 20px;
      width: 150px;
      height: 100px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 10px;
      z-index: 100;
      &::before {
        content: "";
        position: absolute;
        top: -10px;
        right: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
      }
      .item {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
        cursor: pointer;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
}
</style>