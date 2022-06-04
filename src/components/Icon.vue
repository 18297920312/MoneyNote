<template>
  <svg class="icon">
    <use :xlink:href="'#icon_' + name"/>
  </svg>
</template>

<script lang="ts">
  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
  try {
    importAll(require.context('../assets/icons',true,/\.svg$/))  // 记忆这段代码
  } catch (error) {
    console.log(error)
  }
export default {
  props: ['name'],
  name: "Icon",
}
</script>

<style lang="scss" scoped>
  .icon {
    width: 2em;   // em代表一个字的大小
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>