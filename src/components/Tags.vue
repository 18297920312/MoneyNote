<template>
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
</template>

<script>
export default {
  name: "Tags.vue"
}
</script>

<style lang="scss" scoped>
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
</style>