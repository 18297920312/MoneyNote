<template>
  <layout>
  <div class="Layout">
    <NumberPad @update:value="onUpdateAmount"/>
    <Types @update:value="onUpdateTypes"/>
    <Notes @update:note="onUpdateNote"
            file-name="备注"
            placeholder="请输入备注"/>
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
import Component from "vue-class-component"
import {Watch} from "vue-property-decorator"
import model from '@/models/recordListModels'
const recordList: RecordItem[] = model.fetch()
@Component ({
  components: {Tags,Notes,Types,NumberPad}
})
export default class Money extends vue{
  record: RecordItem = {
    tags: [],notes: '',type: '-',amount: 0
  }
  name:string = "money"
  recordList:RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')
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
    this.record.date = new Date()
    // const record2:RecordItem = JSON.parse(JSON.stringify(this.record))
    const record2: RecordItem = model.clone(this.record)
    this.recordList.push(record2)
  }
  @Watch('recordList')
  saveRecordChange(){
    // window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    model.save(this.recordList)
  }
  //
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