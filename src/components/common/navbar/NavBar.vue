<template>
  <div class="home-navbar">
    <div class="left">
      <slot name="left" ></slot>
    </div>
    <div class="center">
      <slot name="center" >
    </slot>
    </div>
    <div class="right">
      <slot name="right" ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',

  }

</script>
<style scoped>
  .home-navbar {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    z-index: 1;
    display: flex;
  }
  .left,
  .right {
    width: 50px;
    height: 100%;
  }
  .center {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
</style>