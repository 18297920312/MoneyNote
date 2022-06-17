<template>
  <Layout>
    <div class="frontNav">
       <Icon name="left" class="left" @click.native="goBack"/>
       <span>编辑标签</span>
       <span class="right"></span>
    </div>
      <Notes class="notes" :value="tag.name" file-name="重置标签名:" placeholder="请输入标签名" @update:note="update" />
    <div class="ButtonBox">
      <Button @click.native="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import vue from "vue";
import {Component,Prop} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import Notes from  "@/components/Notes.vue"
import Icon from "@/components/Icon.vue";
import Button from "@/components/Button.vue";
import Layout from "@/components/Layout.vue";
@Component({
  components: {Button, Notes,Icon,Layout}
})
export default class EditLabel extends vue{
  tag?:{id:string,name:string} = undefined
  created() {
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter(t => t.id === id)[0]
    if(tag){
      this.tag = tag
    } else {
      this.$router.replace('404')
    }
  }
  update(name:string){
    if(this.tag){
      tagListModel.update(this.tag.id,name)
    }
  }
  remove(){
    if(this.tag){
      if(tagListModel.remove(this.tag.id)){
        this.$router.back()
      } else {
        window.alert('删除失败')
      }
    }
  }
  goBack(){
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.frontNav{
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 12px 16px;
  align-items: center;
  > .left {
    width: 24px;
    height: 24px;
  }
  > .right {
    width: 24px;
    height: 24px;
  }
}
  .notes {
    margin-top: 8px;

  }
  .ButtonBox{
    display: flex;
    justify-content: center;
    padding: 30px;

  }
</style>