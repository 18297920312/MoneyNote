<template>
    <layout class="layout">
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <div>
        <ol v-if="result !== null">
          <li v-for="(group,index) in result" :key="index">
            <h3 class="title">
              <span>{{beautify(group.title)}}</span>
              <span>总计：{{group.sum}}元</span>
            </h3>
            <ol>
              <li v-for="item in group.items" :key="item.id" class="record">
                <span>{{tagString(item.tags)}}</span>
                <span class="note">{{item.notes}}</span>
                <span>¥ {{item.amount}}</span>
              </li>
            </ol>
          </li>
        </ol>
        <div  v-else class="noResult">还没有任何数据</div>
      </div>
    </layout>
</template>

<script lang="ts">
import Types from "@/components/Types.vue";
import {Component,Watch} from "vue-property-decorator";
import vue from "vue";
import Tabs from "@/components/Tabs.vue";
import typeList from '@/constants/recordTypeList';
import clone from "@/lib/clone";
const dayjs = require('dayjs')
@Component({
  components:{Tabs, Types}
})
export default class Statistics extends vue{
  type = '-'
  typeList = typeList
  get result(){
    const {recordList} = this
    // type HashTableValue = { title: string,items: RecordItem[]}
    let sortList = clone(recordList).filter( (r: { type: string }) => r.type === this.type)
    // console.log(sortList)
    if(sortList.length === 0) return null;
    sortList.sort((a: any, b: any) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf())
    const dispalyList = [{title: dayjs(sortList[0].date).format('YYYY-MM-DD'),items: [sortList[0]],sum: sortList[0].amount}]
    for(let i = 1;i < sortList.length;i++){
      const current = sortList[i]
      const last = dispalyList[dispalyList.length - 1]
      if(dayjs(last.title).isSame(dayjs(current.date),"day")){
        last.items.push(current)
        last.sum += current.amount
      }else {
        dispalyList.push({title: dayjs(current.date).format('YYYY-MM-DD'),items: [current],sum: current.amount})
      }
    }
    // console.log(dispalyList)
    return dispalyList
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
    const newTags = tags.map(t => t.name)
    return newTags.length === 0 ? '无' :  newTags.join('，')
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
  .noResult {
    margin: 30px;
    text-align: center;
  }
   ::v-deep {
     .type-tabs-item{
       background-color: white;
       border-bottom: 1px dashed darkgrey;
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