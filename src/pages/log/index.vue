<template>
  <div class="Page">
    <BotNav :nowNav="[4, 3]" />
    <div>
      <BotHeader />
    </div>
  </div>
</template>

<script setup>
import BotNav from "../../components/BotNav.vue";
import BotHeader from "../../components/BotHeader.vue";
</script>
<style lang="less" scoped></style>
