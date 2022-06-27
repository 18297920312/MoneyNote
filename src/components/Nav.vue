<template>
<nav>
   <!-- name 是props单向传值 active-class点击就会选中 -->
  <router-link to="/money" class="item" active-class="selected">
    <Icons name="money"/>记账
  </router-link>
  <router-link to="/labels" class="item" active-class="selected">
   <Icons name="label"/>标签
  </router-link>
  <router-link to="/statistics" class="item" active-class="selected">
    <Icons name="statistics"/>统计
  </router-link>
</nav>
</template>

<script lang="ts">
import Vue from "vue"

// import icon_money from "@/assets/icons/icon_money.svg";  //引入 SVG 文件
// console.log(icon_money)

export default {
  name: "Nav"

}
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    background-color: white;
    > .item {
      width: 33.333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon {
        width: 32px;
        height: 38px;
      }
    }
    > .selected {
      color: #cb9307;
    }
  }
</style>