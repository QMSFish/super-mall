<template>
  <div class="home-navbar">
    <slot name="left" class="left"></slot>
    <slot name="center" class="center"></slot>
    <slot name="right" class="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'navbar',

  }

</script>
<style scoped>
  .home-navbar {
    height: 44px;
    display: flex;
  }
  .left,
  .right {
    width: 50px;
  }
  .center {
    flex: 1;
  }
</style>