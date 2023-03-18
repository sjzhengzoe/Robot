<template>
  <div class="Page">
    <BotNav :nowNav="[4, 3]" />
    <div class="main">
      <BotHeader />
      <Main class="main_box" />
    </div>
  </div>
</template>

<script setup>
import BotNav from "../../components/BotNav.vue";
import BotHeader from "../../components/BotHeader.vue";
import Main from "./components/Main.vue";
</script>
<style lang="less" scoped>
.Page {
  .main {
    width: calc(100% - 63px);
    position: relative;
    left: 64px;
    .main_box {
      position: relative;
      top: 63px;
    }
  }
}
</style>
