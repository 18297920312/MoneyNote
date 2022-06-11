<template>
  <layout>
    <NumberPad @update:value="onUpdateAmount"/>
    <Types propMessage= "123" @update:value="onUpdateTypes"/>
    <Tags @update:tags="onUpdateTags" @update:note="onUpdateNote"/>
    {{recordList}}
  </layout>

</template>

<script lang="ts">
import Tags from '@/components/Tags.vue'
import Types from '@/components/Types.vue'
import NumberPad from '@/components/NumberPad.vue'
import vue from "vue"
import Component from "vue-class-component"
import {Watch} from "vue-property-decorator";
type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
  date?: Date
}

@Component ({
  components: {Tags,Types,NumberPad}
})
export default class Money extends vue{
  record: Record = {
    tags: [],notes: '',type: '-',amount: 0
  }
  name:string = "money"
  recordList:Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')
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
    const record2:Record = JSON.parse(JSON.stringify(this.record))

    this.recordList.push(record2)
  }
  @Watch('recordList')
  saveRecordChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
  //
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
</style>