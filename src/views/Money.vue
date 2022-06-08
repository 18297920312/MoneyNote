<template>
  <layout>
    <NumberPad />
    <Types />
    <Tags />
  </layout>
</template>

<script lang="ts">
import Tags from '@/components/Tags.vue'
import Types from '@/components/Types.vue'
import NumberPad from '@/components/NumberPad.vue'
export default {
  name: "money",
  components: {Tags,Types,NumberPad}
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
</style>