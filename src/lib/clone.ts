const clone = function(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data))
}
export default clone
