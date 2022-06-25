<template>
  <layout class="layout">
    <div class="tags">
      <router-link :to="`/Labels/edit/${tag.id}`"  class="tag" v-for="tag in tags"  :key="tag.id">
        <span>{{tag.name}}</span>
        <Icons name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <!--      <button class="createTag" @click="createTag">新建标签</button>-->
      <Button class="createTag" @click.native="createTag">新建标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import vue from "vue";
  import {Component} from "vue-property-decorator";
  import tagListModel from "@/models/tagListModel";
  import Button from "@/components/Button.vue"
  import createId from '@/lib/idCreate';
  import TagHelper from "@/mixins/tagHelper";
  import { mixins } from 'vue-class-component';
  @Component({
    components:{Button},

  })
  export default class labels extends mixins(TagHelper) {
    name: string = "labels"
    // tags = this.$store.commit('fetchTags')
    get tags(){
      return this.$store.state.tagList
    }
    beforeCreate() {
      this.$store.commit('fetchTags')
    }
    // createTag() {
    //   const name = window.prompt('标签标签名')
    //   // const id = createId()
    //   if (name) {
    //     try {
    //       this.$store.commit('createTag',name)
    //       // tagListModel.create(name)
    //     } catch (error) {
    //       if (error.message === 'duplicated') {
    //         window.alert('标签名重复')
    //       }
    //     }
    //   }
    // }
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
    > .tag {
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
    //background: #767676;
    //color: white;
    //border-radius: 5px;
    //border: none;
    //height: 40px;
    //padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      flex-grow: 1;
    }
  }
</style>