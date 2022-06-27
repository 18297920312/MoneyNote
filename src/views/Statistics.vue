<template>
    <layout class="layout">
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tabs :data-source="intervalList" :value.sync="interval" />
      <div>
        <ol>
          <li v-for="(group,index) in result" :key="index">
            <h3 class="title">{{beautify(group.title)}}</h3>
            <ol>
              <li v-for="item in group.items" :key="item.id" class="record">
                 <span>{{toString(item.tags)}}</span>
                <span class="note">{{item.notes}}</span>
                <span>¥ {{item.amount}}</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </layout>
</template>

<script lang="ts">
import Types from "@/components/Types.vue";
import {Component,Watch} from "vue-property-decorator";
import vue from "vue";
import Tabs from "@/components/Tabs.vue";
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/recordTypeList';
let dayjs = require('dayjs')
@Component({
  components:{Tabs, Types}
})
export default class Statistics extends vue{
  type = '-'
  interval = 'day'
  intervalList = intervalList
  typeList = typeList
  get result(){
    const {recordList} = this
    const hashTable: { [key:string]: {title:string,items: any}[] } = {}
    for(let i = 0;i < recordList.length;i++){
      const [date,time] = recordList[i].date.split('T')
      hashTable[date] = hashTable[date] || {title: date,items: []}
      hashTable[date].items.push(recordList[i])!
    }
    return hashTable
  }
  beautify(string: string){
    const day = dayjs(string)
    const now = dayjs()
    if( day.isSame(now,"day") ){
      return '今天'
    }else if( day.isSame(now.subtract(1,"day"),"day") ){
      return '昨天'
    }else if( day.isSame(now.subtract(2,"day"),"day") ){
      return '前天'
    }else if( day.isSame(now,"years") ){
      return day.format('M月D日')
    }else {
      return day.format('YYYY年M月D日')
    }
  }
  get recordList(){
    return this.$store.state.recordList
  }

  beforeCreate(){
    this.$store.commit('fetchRecords')
  }
  tagString(tags: Tag[]){
    return tags.length === 0 ? '无' :  tags.join(',')
  }

}


</script>
<style scoped lang="scss">
  .layout {
    background-color: #f5f5f5;
  }
  .title{
    padding: 8px 16px;
    background-color: white;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .note{
    margin-left: 1em;
    margin-right: auto;
    color: #C4C4C4;
    max-width: 9em;
    overflow: hidden ;
  }
  .record{
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
   ::v-deep {
     .type-tabs-item{
       background-color: white;
       &.selected {
         background: #C4C4C4;
         &::after {
           display: none;
         }
       }
       .tabs .interval-tab-item{
         height: 30px;
       }
   }

  }
</style>