import createId from "@/lib/idCreate";
import {Component} from "vue-property-decorator";
import Vue from "vue";

@Component
export class TagHelper extends Vue{
    createTag() {
        const name = prompt('请输入新的标签名')
        if(!name) {
            return alert('标签名不能为空')
        }
        this.$store.commit('createTag', name)
    }
        // tagListModel.create(name)
}
export default TagHelper