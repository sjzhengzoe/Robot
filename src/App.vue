<template>
  <router-view></router-view>
  <Tips v-if="isShowTips" :content="content" :type="type" />
</template>

<script setup>
import { ref } from "vue";
import Tips from "./components/Tips.vue";

const isShowTips = ref(false);
const content = ref("");
const type = ref("");
// 关闭
window.handleHideTips = () => {
  isShowTips.value = false;
};
// 打开
window.handleShowTips = (contents, types = "error", time = 3000) => {
  isShowTips.value = true;
  content.value = contents;
  type.value = types;
  setTimeout(() => {
    isShowTips.value = false;
  }, time);
};
</script>

<style scoped></style>
