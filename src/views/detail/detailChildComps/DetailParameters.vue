<template>
  <div class='detail-parameters' v-if="parameters">
    <table class="table">
      <tr v-for="(tr,index) in parameters.table" :key="index">
        <td v-for="(td,indey) in tr" :key="indey">{{td}}</td>
      </tr>
    </table>
    <table class="set">
      <tr v-for="(tr,index) in parameters.set" :key="index">
        <td>{{tr.key}}</td>
        <td>{{tr.value}}</td>
      </tr>
    </table>
    

    

  </div>
</template>

<script>

export default {
  name: 'detailparameters',
  props: {
    parameters:Object
  },
  // computed: {
  //   getRule() {
  //     if(this.parameters) {
  //       return this.parameters.rule.tables[0]
  //     }
      
  //   }
  // }
}

</script>
<style scoped>
  .detail-parameters {
    padding: 20px;
    border-bottom: 4px solid rgba(233, 235, 236, .7);
  }
  .detail-parameters .table {
    border-bottom: 2px solid #e6e6e6;
  }
  .detail-parameters .table tr:nth-child(n+2) td {
    padding: 10px 30px 10px 0;
    /* padding-right: 30px; */
    border-top: 1px solid #e6e6e6;
  }
  .detail-parameters .table  tr:first-child td {
    padding: 10px 30px 10px 0;
  }
  .detail-parameters .set tr:nth-child(n+1) td:first-child {
    padding: 10px 45px 10px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .detail-parameters .set tr:nth-child(n+1) td:last-child {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .detail-parameters .set  tr:first-child td:first-child {
    padding: 10px 45px 10px 0;
  }
  .detail-parameters .set  tr:first-child td:last-child {
    padding: 10px 0;
  }
  .detail-parameters .set tr td:last-child {
    color: #f87496;
  }
  /* .detail-parameters .set {
    border-bottom: 2px solid #e6e6e6;
  } */


  
</style>