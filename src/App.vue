<template>
  <div>
    <router-view/>          <!--   展示路由文件内容-->
  </div>
</template>

<script>
  // import Nav from "@/components/Nav";
  export default {

  }
</script>

<style lang="scss">
@import "~@/assets/style/helper.scss";
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: $fonts;
  }
  body {
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul,ol {
    list-style: none;
  }
  button,input {
    font: inherit;
  }
  #app {
      max-width: 500px;
  }
  :focus {
    outline: none;
  }
</style>
