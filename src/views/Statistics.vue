<template>
    <layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tabs :data-source="intervalList" :value.sync="interval" />
      <div>
        type:{{type}}
        <br>
        inbterval: {{interval}}
      </div>
      <div>
        <ol>
          <li v-for="(group,index) in result" :key="index">
            <h3>{{group.title}}</h3>>
            <ol>
              <li v-for="item in group.items" :key="item.id">{{item.amount}} {{item.date}}
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
import typeList from '@/constants/recordTypeList'
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
    type HashTableValue = { title:string, items: RecordList[] }
    const hashTable: { [key:string]: {title:string,items: RecordItem[]}[] } = {}
    for(let i = 0;i < recordList.length;i++){
      const [date,time] = recordList[i].date.split('T')
      hashTable[date] = hashTable[date] || {title: date,items: []}
      hashTable[date].items.push(recordList[i])
    }
    return hashTable
  }
  get recordList(){
    return this.$store.state.recordList
  }

  beforeCreate(){
    this.$store.commit('fetchRecords')
  }

}


</script>
<style scoped lang="scss">
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