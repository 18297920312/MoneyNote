<template>
  <div class="numberPad">
    <div class="output">
      {{output}}
    </div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="del">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="OK" @click="OK">OK</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import vue from 'vue';
import {Component} from "vue-property-decorator";
@Component
export default class NumberPad extends vue{
  name:string =  "NumberPad.vue";
  output:string = '0';
  inputContent(event:MouseEvent) {
    const button = (event.target as HTMLButtonElement)
    const input = button.textContent! // ! 号 表示强制执行这条语句
    if(this.output.length === 16) {return;}
    if('0123456789'.indexOf(input) >= 0 && this.output === '0' ) {
      this.output = input
    } else if(this.output.indexOf('.') >= 0 && input === '.'){
      return
    } else {
      this.output += input
    }
  }
  clear() {
    this.output = '0';
  }
  del() {
    if(this.output.length === 1){
      this.output = '0'
    }else {
      this.output = this.output.slice(0,this.output.length - 1)
    }
  }
  OK(){
    this.$emit('update:value',this.output)
    alert('已保存')
    this.output = '0'
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
  }
  button {
    @extend %clearFix;
    width: 25%;
    height: 64px;
    border: none;
    float: left;
    background-color: transparent;
    &.OK {
      float: right;
      height: 128px;
    }
    &.zero {
      width: 50%;
    }
    $bg: #f2f2f2;
    &:nth-child(1) {
      background-color: $bg;
    }
    &:nth-child(2),&:nth-child(5) {
      background-color: darken($bg,4%);
    }
    &:nth-child(3),&:nth-child(6),&:nth-child(9){
      background-color: darken($bg,4% * 2);
    }
    &:nth-child(4),&:nth-child(7),&:nth-child(10){
      background-color: darken($bg,4% * 3);
    }
    &:nth-child(8),&:nth-child(11),&:nth-child(13){
      background-color: darken($bg,4% * 4);
    }
    &:nth-child(14){
      background-color: darken($bg,5% * 5);
    }
    &:nth-child(12){
      background-color: darken($bg,5% * 6);
    }
  }
}
</style>