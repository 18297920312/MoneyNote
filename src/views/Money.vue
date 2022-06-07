<template>
  <layout>
<!--    Money.vue  -->
    <div class="numberPad">
      <div class="output">
        100
      </div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="OK">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <div class="types">
      <ul>
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="test" placeholder="请输入备注"/>
    </label>
  </div>
  </layout>
</template>

<script lang="ts">
export default {
  name: "money"
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .tags {
    font-size: 14px;
    .current {
      display: flex;
      flex-wrap: wrap;
      margin-left: 16px;
      max-height: 100px;
      overflow: auto;
       li {
        background-color: #d9d9d9;
        height: 24px;
        border-radius: 12px;
        padding: 0 16px;
         margin-top: 3px;
         margin-right: 12px;
        line-height: 24px;
      }
    }
    .new{
      padding: 10px 16px;
      button {
        background-color: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 5px;
      }
    }
      .notes {
      font-size: 14px;
      background-color: #f5f5f5;
      display: block;
      padding: 0 16px;
        .name {
          padding-right: 16px;
        }
        input {
          height: 64px;
          background-color: #f5f5f5;
          border: none;
        }
      }
    }
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
//.nav-wrapper {
//  display: flex;
//  flex-direction: column;
//  height: 100vh;
//}
//.content {
//  flex-grow: 1;
//  border: 3px solid #f5a416;
//}
</style>