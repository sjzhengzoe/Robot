<template>
  <div class="Page">
    <Header />
    <div class="hl-content">
      <BotsNav />
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import BotsNav from "../../components/BotsNav.vue";
</script>
<style lang="less" scoped>
.Page {
  .hl-content {
    height: calc(100vh - 74px);
    display: flex;
  }
}
</style>
