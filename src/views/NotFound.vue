<template>
<div class="NotFound">
  <p>404 Not Found</p>
  <p><router-link to="/">返回首页</router-link></p>

</div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
  .NotFound {
    font-size: 20px;
    text-align: center;
    margin-top: 100px;
  }
</style>