import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from "@/lib/idCreate";
Vue.use(Vuex) // use 把 store 绑到 vue.prototype 上
// type RootState = {
//   recordList: RecordItem[],
//   tagList: Tag[],
//   currentTag?: Tag
// }

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    currentTag: undefined
  } as RootState,
    mutations: {
    setCurrnetTag(state,id:string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0]
    },
    fetchRecords(state) {
       state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
    },
      createRecord(state,record){
        const record2:RecordItem = clone(record)
        record2.date = new Date().toISOString()
        state.recordList.push(record2)
        store.commit('saveRecords')
      },
      saveRecords(state) {
        window.localStorage.setItem('recordList',JSON.stringify(state.recordList))
      },
      fetchTags(state) {
        state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
      },
      createTag(state,name:string) {
        const names = state.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {return 'duplicated'}
        const id = createId().toString()
        state.tagList.push({id:id,name:name})
        store.commit('saveTags')
        return 'success'
      },
      updateTags(state,newtag){
        state.tagList[newtag.id - 1].name = newtag.name
        // console.log(newtag.id)
        // console.log(newtag.name)
        // console.log('--------')
        for(let i=0;i < state.recordList.length;i++){
          state.recordList[i].tags.forEach(item => {
            // @ts-ignore
            if(item.id === newtag.id){
              // @ts-ignore
              console.log('之前'+item.name)
              // @ts-ignore
              item.name = newtag.name
              // @ts-ignore
              console.log('之后'+item.name)
            }
          })
        }
        store.commit('saveRecords')
        store.commit('saveTags')
      },
      saveTags(state){
        for(let i=0;i < state.tagList.length;i++) {
          state.tagList[i].id = (i+1).toString()
        }
        window.localStorage.setItem('tagList',JSON.stringify(state.tagList))
      },
      removeTag(state,id){
          let index = -1
          for (let i = 0;i < state.tagList.length;i++) {
            if (state.tagList[i].id === id){
              index = i
              break
            }
          }
          state.tagList.splice(index,1)
          store.commit('saveTags')
          return true
      }
    }
})


export  default store