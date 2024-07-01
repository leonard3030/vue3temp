<template>
  <div class="navbar">
    <div class="logo">
      <img src="/logo.png" alt="NoMoreWaste" />
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/collections">Collection</router-link>
      <router-link to="/about">About us</router-link>
      <router-link to="/">Contact</router-link>
      <router-link to="/">Login</router-link>
      <router-link to="/">SignUp</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 2rem;
}
.navbar .logo {
  height: 50px;
}
.navbar .logo img {
  height: 100%;
}
.navbar .links {
  display: flex;
  gap: 20px;
}
</style>
