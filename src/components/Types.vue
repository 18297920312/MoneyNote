<template>
  <div class="types">
    <ul>
      <li :class="{[classPrefix+'-item']:classPrefix,selected: type === '-'}"
          @click="typeSelected('-')" >支出</li>
      <li :class="{[classPrefix+'-item']:classPrefix,selected: type === '+'}" @click="typeSelected('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component,Prop,Watch} from "vue-property-decorator";

  @Component
  export default class Types extends  Vue{
    @Prop(String) classPrefix?:string
    @Prop(String) readonly value !: string
    type = '-'
    typeSelected(type:string){
      if(type !== '-' && type !== '+'){
        throw new Error('type in unknown')
      }else {
        this.type = type
      }
    }
    @Watch('type')
    onTypeChange(type:string){
      this.$emit('update:value',type)
    }

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