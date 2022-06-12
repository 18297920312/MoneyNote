<template>
  <layout class="layout">
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag">
        <span>{{tag}}</span>
        <Icons name="right" />
      </li>
    </ul>

  </layout>
</template>

<script lang="ts">
  import vue from "vue";
  import {Component} from "vue-property-decorator";
  import tagListModel from "@/models/tagListModel.ts";
  tagListModel.fetch()
  @Component
  export default class labels extends vue {
    name: string = "labels"
    tags = tagListModel.data

    createTag() {
      const name = window.prompt('标签标签名')
      if (name) {
        try {
          tagListModel.create(name)
        } catch (error) {
          if (error.message === 'duplicated') {
            window.alert('标签名重复')
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .layout {
    background-color: #f5f5f5;
  }
  .tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > li {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      .icon{
        height: 1em;
      }
      svg {
        width: 18px;
        height: 18px;
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .createTag {
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