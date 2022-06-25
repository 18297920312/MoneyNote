<template>
 <ul class="tabs">
   <li v-for="item in dataSource" :key="item.value"
       :class="{[classPrefix+'-tabs-item']:classPrefix,selected:item.value === value}"
       class="tabs-item"
       @click="select(item)">{{item.text}}
   </li>
 </ul>
</template>

<script lang="ts">
  import vue from "vue";
  import {Component, Prop} from "vue-property-decorator";
@Component
export default class Tabs extends vue{
  select(item: {text:string,value:string}){
    this.$emit('update:value',item.value)
  }
  @Prop({required:true,type:Array})
  dataSource!: {text:string,value:string}[]
  @Prop(String) classPrefix?:string
  @Prop(String) readonly value!: string
}

</script>

<style scoped lang="scss">
.tabs {
  background-color: #c4c4c4;
  display: flex;
  flex-wrap: wrap;
  font-size: 24px;}
    .tabs-item {   // & 代表 tabs
      flex-grow: 1;
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

</style>