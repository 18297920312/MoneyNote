<template>
  <div>
  <label class="notes">
    <span class="name">{{this.fileName}}</span>
    <input type="text"  :placeholder="placeholder" :value="value" @input="onValueChange($event.target.value)" />
  </label>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import {Component, Watch,Prop} from "vue-property-decorator";
@Component
export default class Notes extends vue{
  // name ="Notes"
  value:string = ''
  @Prop({required:true}) fileName!: string;
  @Prop() placeholder?: string;
  // writeNote(event:KeyboardEvent){
  //   const input = event.target as HTMLInputElement // 强制变换成输入元素
  //   this.value = input.value
  //   console.log(this.value)
  //   this.$emit('update:note',this.value)
  // }
  onValueChange(value:string){
    console.log(value)
    this.$emit('update:note',value)
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background-color: #f5f5f5;
  display: block;
  padding: 0 16px;
.name {
  padding-right: 16px;
}
input {
  height: 64px;
  background-color: #f5f5f5;
  border: none;
}
}
</style>