<template>
  <div class="tabbar-top">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",

}  

</script>
<style scoped>
.tabbar-top {
  width: 100%;
  display: flex;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background-color: #f4f4f4;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, .1);
}
</style>