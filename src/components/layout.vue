<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
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
  height: 100vh;
}
.content {
  flex-grow: 1;
}
</style>