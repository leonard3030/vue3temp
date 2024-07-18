<template>
  <div class="mi-loader">
    <div class="bg"></div>
    <img :src="$img('nmwlogo.png')" alt="Logo" />
    <div class="loader">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$primary_color: #1d2088;
$secondary_color: #1eb9ee;
.mi-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99999;
  overflow: hidden;
  .bg {
    background-color: #ffffff0c;
    backdrop-filter: blur(2px);
    filter: blur(2px);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  img {
    width: 100px;
    margin-bottom: 1rem;
    z-index: 999;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $primary_color;
      margin: 0 5px;
      animation: bounce 0.5s infinite;
      &.dot-1 {
        animation-delay: 0.1s;
      }
      &.dot-2 {
        animation-delay: 0.2s;
      }
      &.dot-3 {
        animation-delay: 0.3s;
      }
    }
  }
  @keyframes bounce {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.5);
    }
  }
}
</style>