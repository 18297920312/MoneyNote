<template>
  <layout>
  <div class="Layout">
    <NumberPad @update:value="onUpdateAmount"/>
    <Types @update:value="onUpdateTypes"/>
    <Notes @update:note="onUpdateNote"
            file-name="备注" placeholder="请输入备注" />
    <Tags @update:tags="onUpdateTags" />
  </div>
  </layout>
</template>

<script lang="ts">
import Tags from '@/components/Tags.vue'
import Notes from '@/components/Notes.vue'
import Types from '@/components/Types.vue'
import NumberPad from '@/components/NumberPad.vue'
import vue from "vue"
import {Component,Watch} from "vue-property-decorator"
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";


@Component ({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends vue{
  // tags: Tag[] = window.tagList
  // recordList: RecordItem[] = recordListModel.fetch()
  record: RecordItem = {
    tags: [],notes: '',type: '-',amount: 0
  }

  get recordList(){
    return this.$store.state.recordList
  }
  onUpdateTags(value:string[]){
    console.log(value)
    this.record.tags = value
  }
  onUpdateNote(value:string){
    console.log(value)
    this.record.notes = value
  }
  onUpdateTypes(value:string){
    console.log(value)
    this.record.type = value
  }
  onUpdateAmount(value:string){
    const num:number = parseFloat(value)
    console.log(num)
    this.record.amount = num
    this.$store.commit('createRecord',this.record)
    // this.record.date = new Date()
    // const record2:RecordItem = JSON.parse(JSON.stringify(this.record))
    // const record2: RecordItem = recordListModel.clone(this.record)
    // this.$store.state.recordList.push(record2)
  }
  created() {
    this.$store.commit('fetchRecords')
  }
  @Watch('recordList')
  saveRecordChange(){
    this.$store.commit('saveRecords',this.record)
  }

}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .Layout {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    flex-grow: 1;
  }
</style>