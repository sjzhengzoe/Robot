<template>
  <div class="Main">
    <div class="storyComponents-wrapper">
      <div class="storyComponents-head">
        <h1 class="app-heading">Components</h1>
      </div>
      <div class="storyComponents-content">
        <div class="storyComponents-tabs">
          <!-- 左边 tab -->
          <div class="tab-collection">
            <div class="header">Story</div>
            <div class="all-tabs-wrapper">
              <div class="MuiTabs-root selected">
                <div class="MuiTabs-scroller" style="overflow: hidden">
                  <div class="MuiTabs-flexContainer" role="tablist">
                    <button
                      :class="{ 'Mui-selected': nowTab === '1' }"
                      class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      @click="handleToggleTab('1')"
                    >
                      <span class="MuiTab-wrapper">Intents</span>
                    </button>
                    <button
                      :class="{ 'Mui-selected': nowTab === '2' }"
                      class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      @click="handleToggleTab('2')"
                    >
                      <span class="MuiTab-wrapper">Utterances</span>
                    </button>
                    <button
                      :class="{ 'Mui-selected': nowTab === '3' }"
                      class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"
                      tabindex="0"
                      type="button"
                      role="tab"
                      aria-selected="true"
                      @click="handleToggleTab('3')"
                    >
                      <span class="MuiTab-wrapper">Actions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右边 tab -->
          <div class="tab-collection">
            <div class="header">Form</div>
            <div class="all-tabs-wrapper">
              <div class="MuiTabs-root">
                <div
                  class="MuiTabs-scroller MuiTabs-fixed"
                  style="overflow: hidden"
                >
                  <div
                    aria-label="components tabs"
                    class="MuiTabs-flexContainer"
                    role="tablist"
                  >
                    <button
                      :class="{ 'Mui-selected': nowTab === '4' }"
                      @click="handleToggleTab('4')"
                      class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span class="MuiTab-wrapper">Slots</span>
                    </button>
                    <button
                      :class="{ 'Mui-selected': nowTab === '5' }"
                      @click="handleToggleTab('5')"
                      class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span class="MuiTab-wrapper">Slot Mappings</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TabPanel1 v-if="nowTab === '1'" />
        <TabPanel2 v-if="nowTab === '2'" />
        <TabPanel3 v-if="nowTab === '3'" />
        <TabPanel4 v-if="nowTab === '4'" />
        <TabPanel5 v-if="nowTab === '5'" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TabPanel1 from "./TabPanel1.vue";
import TabPanel2 from "./TabPanel2.vue";
import TabPanel3 from "./TabPanel3.vue";
import TabPanel4 from "./TabPanel4.vue";
import TabPanel5 from "./TabPanel5.vue";

const nowTab = ref("1");

const handleToggleTab = (tab) => {
  nowTab.value = tab;
};
</script>
<style lang="less" scoped>
.Main {
  background-color: #fdfdfd;
  overflow-y: auto;
  overflow-x: hidden;

  .storyComponents-wrapper {
    padding: 34px 40px;
    height: 100%;
    padding: 34px 40px;
    box-sizing: border-box;
    height: 100%;

    // 头部
    .storyComponents-head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .app-heading {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
      }
    }

    .storyComponents-content {
      margin: 30px 0;
      // tabs
      .storyComponents-tabs {
        display: flex;

        .tab-collection {
          margin-right: 20px;
          .header {
            color: #2f45c5;
            text-transform: uppercase;
            font-weight: 600;
          }

          .all-tabs-wrapper {
            display: flex;
            align-items: center;
            .MuiTabs-root {
              display: flex;
              overflow: hidden;
              min-height: 48px;

              .MuiTabs-scroller {
                width: 100%;
                flex: 1 1 auto;
                display: inline-block;
                position: relative;
                white-space: nowrap;
                .MuiTabs-flexContainer {
                  background-color: #f3f5ff;
                  border-radius: 4px;
                  padding: 0 5px;
                  border: 1px solid #eaeaea;
                  button {
                    cursor: pointer;
                    min-width: 160px;
                    text-transform: capitalize;
                    min-height: 40px;
                    color: #888;
                    text-transform: capitalize;
                    min-height: 40px;

                    padding: 6px 12px;
                    overflow: hidden;
                    position: relative;
                    font-size: 0.875rem;
                    max-width: 264px;
                    box-sizing: border-box;

                    text-align: center;
                    flex-shrink: 0;
                    font-weight: 500;
                    line-height: 1.75;
                    white-space: normal;

                    user-select: none;
                    outline: 0;
                    border: 0;

                    background-color: transparent;
                    .MuiTab-wrapper {
                      text-transform: capitalize;
                      font-weight: 600;
                      z-index: 2;
                      font-size: 14px;
                    }

                    &.Mui-selected {
                      background-color: #fdfdfd;
                      color: #2f45c5;
                      opacity: 1;
                    }
                  }
                }
              }
            }
          }

          .MuiTab-wrapper {
            color: #2f45c5;
            text-transform: capitalize;
            font-weight: 600;
            z-index: 2;
            font-size: 14px;
          }

          .MuiTabs-indicator {
            background-color: #fdfdfd;
            z-index: 1;
            height: 70%;
            bottom: 24%;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
