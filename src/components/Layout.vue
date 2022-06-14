<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>     <!--  slot 是插槽的意思，这里面是用来放想要插入的文本内容 例：<layout>这是插入的文字</layout> ,具体看 -->
    </div>
    <div>
      <Nav/>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout"
}
</script>


<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
}
.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>