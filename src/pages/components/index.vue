<template>
  <div class="Page">
    <BotNav :nowNav="[1, 2]" />
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
