<template>
  <div class='navcontrol'>
    <div v-for='(item,index) in navcontent' :key="item.type" @click="getactive(index,item.type)">
        <div :class="{active: iscurrent === index}" class="nav-item">
            <span>{{item.content}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navcontrol',
  props: {
    navcontent: Array,
    iscurrent: Number
  },
  methods: {
    getactive(index,type) {
      // this.iscurrent = index;
      console.log(type);
      console.log(typeof type);
      this.$emit('getactive',{type,index})
    }
  }
}

</script>
<style scoped>
  .navcontrol {
    /* position: sticky;
    top: 44px; */
    display: flex;
    font-size: 14px;
    width: 100%;

    padding: 5px 0;
    /* justify-content: space-around; */
    background-color: #fff;
    /* z-index: 2; */
  }
  .navcontrol>div {
    flex: 1;
    display: flex;
    justify-content: center;
    text-align: center;
    
  }
  .nav-item {
    /* flex: 1; */
    width: 38px;
    /* text-align: center; */
    padding: 2px 3px;
    border-bottom: 2px solid #fff;
  }
  .active {
    color: #df969f;
    border-bottom-color: #df969f;
  }
</style>