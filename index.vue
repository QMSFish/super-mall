<template>
    <div class="wrapper" ref="wrapper">
        <div v-for="item in data" :key="item">
            <img :src="item" alt="">
        </div>
    </div>
</template>
<script> import BScroll from 'better-scroll'
export default {
  data() {
    return {data: []}
  }, 
  created() {
    this.loadData()
  }, 
  methods: {
    loadData() {
      requestData().then((res) => {
        this.data.push(...res.data.info)  //res.data.info是请求过来的图片数组
        console.log(this.$refs.wrapper.scrollHeight);
        // setTimeout(() => {
        //   console.log(this.$refs.wrapper.scrollHeight);
        // }, 5);
        this.$nextTick(() => {
          console.log(this.$refs.wrapper.scrollHeight);
            })
          })
      }
    }
  }

</script>