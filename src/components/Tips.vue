<template>
  <div class="Tips" :class="props.type">
    <div class="icon">
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        ></path>
      </svg>
    </div>
    <div class="message">{{ props.content }}</div>
    <div class="action" @click="handleHideTips">
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  type: {
    type: String,
  },
  content: {
    type: String,
  },
});
const handleHideTips = window.handleHideTips;
</script>
<style lang="less" scoped>
.Tips {
  top: 24px;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  display: flex;
  z-index: 1400;
  position: fixed;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding: 6px 16px;
  line-height: 1.43;
  border-radius: 4px;

  &.error {
    color: #fff;
    background-color: #dc3545;
  }

  .icon {
    display: flex;
    opacity: 0.9;
    padding: 7px 0;
    font-size: 22px;
    margin-right: 12px;
    svg {
      fill: currentColor;
      width: 22px;
      height: 22px;
      display: inline-block;
      font-size: 1.5rem;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      flex-shrink: 0;
      user-select: none;
    }
  }
  .action {
    opacity: 0.9;
    display: flex;
    padding: 7px 0;
    margin-left: 7px;
    cursor: pointer;

    svg {
      fill: currentColor;
      width: 20px;
      height: 20px;
      display: inline-block;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      flex-shrink: 0;
      user-select: none;
    }
  }
}
</style>
