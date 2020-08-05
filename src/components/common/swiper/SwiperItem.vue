<template>
  <div class="swiperitem">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
  name: 'swiperitem',
  
}

</script>
<style scoped>
  .swiperitem {
    float: left;
    width: 10%;
  }
  /* .swiperitem img {
     height: 195px;
    width: 100%;
  } */
  
</style>