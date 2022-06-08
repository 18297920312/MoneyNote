<template>
  <div class="types">
    <ul>
      <li :class="type === '-' && 'selected'" @click="typeSelected('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="typeSelected('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

  @Component ({
    props: {
      propMessage: String
    }
  })
export default class Types extends  Vue{
    type = '-'
    helloMsg = 'hello,' + this.propMessage
    typeSelected(type:string){
      if(type !== '-' && type !== '+'){
        throw new Error('type in unknown')
      }else {
        this.type = type
      }
    }
//   name: "Types.vue",
//   data() {
//     return {
//       type: '-',
//     }
//   },
//   methods:{
//     typeSelected(type){
//       this.type = type
//       console.log(type)
//     }
//   }
}
</script>

<style lang="scss" scoped>
.types{
  background-color: #c4c4c4;
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 24px;
    li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        border: 3px solid black;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
}
</style>