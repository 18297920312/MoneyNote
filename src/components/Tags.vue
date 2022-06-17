<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          @click="toggle(tag)" :class="{selected:(selectedTags.indexOf(tag) >= 0)}">
        {{tag.name}}
      </li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
<!--    <label class="notes">-->
<!--      <span class="name">备注</span>-->
<!--      <input type="test" placeholder="请输入备注" v-model="value"/>-->
<!--    </label>-->
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import {Component, Watch} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import {mixins} from "vue-class-component";
import tagHelper from "@/mixins/tagHelper";

@Component({
  computed: {
    tagList() {
      return this.$store.commit('fetchTags')
    }
  }
})
export default class Tags extends mixins(tagHelper) {
  name:string = "Tags.vue"
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTags');
  }
  // tags = this.$store.commit('fetchTags')
  // value = ''
  // tags:Tag[] = tagListModel.fetch() || []
  selectedTags:string[] = []
  // writeNote(event:KeyboardEvent){
  //   const input = event.target as HTMLInputElement // 强制变换成输入元素
  //   this.value = input.value
  //   console.log(this.value)
  // }

  toggle(tag:string){
    const index:number = this.selectedTags.indexOf(tag)
    if(index >= 0){
      this.selectedTags.splice(index,1)
    }else {
      this.selectedTags.push(tag)
    }
    this.$emit('update:tags',this.selectedTags)
  }
  // add(){
  //   const name:string = prompt('请输入新的标签名')!
  //   this.$store.commit('createTag',name)
    // tagListModel.create(name)
    // const names = this.tags.map(item => item.name)
    // if(names.indexOf(name) >= 0){
    //   return
    // }
    // if(name !== ''){
    //   this.tags.push(name)
    // }else {
    //   alert('输入不能为空！')
    // }
  // }

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
      &.selected {
        background-color: #606060;
        color: white;
      }
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