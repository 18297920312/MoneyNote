<template>
  <Layout>
    <div class="frontNav">
       <Icon name="left" class="left" @click.native="goBack"/>
       <span>编辑标签</span>
       <span class="right"></span>
    </div>
      <Notes class="notes" :value="tag.name" file-name="重置标签名:" placeholder="请输入标签名" @update:note="update" />
    <div class="ButtonBox">
      <Button class="Button" @click.native="remove">删除标签</Button>
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
  components: {Button, Notes,Icon,Layout},

})
export default class EditLabel extends vue{
  // tag?:{id:string,name:string} = undefined
  get tag(){
    return this.$store.state.currentTag
  }
  created() {
    const id = this.$route.params.id
    this.$store.commit('setCurrnetTag',id)
    // const tags = tagListModel.data
    // const tag = tags.filter(t => t.id === id)[0]
    if(!this.tag) {
      this.$router.replace('404')
    }
  }
  update(value:string){
    if(this.tag){
      this.$store.commit('updateTags',{id: this.tag.id,name:value})
    // this.$store.commit('saveTags')
      // tagListModel.update(this.tag.id,name)

    }
  }
  remove(){
    // if(this.tag){
      this.$store.commit('removeTag',this.tag.id)
      this.$router.back()
      // if(this.$store.commit('removeTag',this.tag.id)){
      //   this.$router.back()
      // } else {
      //   window.alert('删除失败')
      // }
    // }
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