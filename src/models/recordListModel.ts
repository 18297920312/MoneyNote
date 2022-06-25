// const loacalStorageKeyName = 'recordList'
const model = {
    data: [] as RecordItem[],
    fetch() {
       return JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
    },
    save(){
        window.localStorage.setItem('recordList',JSON.stringify(this.data))
    },
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    create(record: RecordItem){
        record.date = new Date().toISOString()
        // const record2:RecordItem = JSON.parse(JSON.stringify(this.record))
        const record2: RecordItem = this.clone(record)
        this.data.push(record2)
        this.save()
    }
}
export default model