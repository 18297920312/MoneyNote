<template>
<div>
  <div class="createTag-wrapper">
    <button class="button">
      <slot/>
    </button>
  </div>
</div>
</template>

<script lang="ts">
import vue from "vue";

export default class Button extends vue{
  name:string = "Button"
}
</script>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: white;
  border-radius: 5px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    flex-grow: 1;
  }
}
</style>