<template>
  <div class="home">
    <Navbar />
    <h1>This is an home page</h1>
    <button>I have {{ count }} pages</button>
    <button @click="count++">Add one page</button>
    <button @click="count--">Remove one page</button>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  data: () => ({
    count: 5,
  }),
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>