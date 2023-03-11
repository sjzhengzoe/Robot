<template>
  <div class="Main">
    <!-- 头部 -->
    <div class="head_box">
      <h1 class="head_title">Chatbots</h1>
      <div class="create_box">
        <div class="icon_robot">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            t="1569682613478"
            viewBox="0 0 1024 1024"
            version="1.1"
            class="btn-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <path
              d="M852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM300 328c0-33.1 26.9-60 60-60s60 26.9 60 60-26.9 60-60 60-60-26.9-60-60z m372 248c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v60z m-8-188c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60zM799 864H225c-13.8 0-25 14.3-25 32v56c0 4.4 2.8 8 6.2 8h611.5c3.4 0 6.2-3.6 6.2-8v-56c0.1-17.7-11.1-32-24.9-32z"
            ></path>
          </svg>
        </div>
        <span @click="handleAddItem">Create Chatbot</span>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list_box">
      <!-- 列表头部 -->
      <div class="list_box_head">
        <!-- 搜索 -->
        <div class="search_box">
          <input
            type="text"
            class="search_input"
            placeholder="Search bot..."
            value=""
          />
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="search_icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
            ></path>
          </svg>
        </div>
        <!-- 切换 -->
        <div class="list_toggle_box">
          <div class="list_toggle_item">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="list_toggle_item select">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 机器人列表 -->
      <div class="robots_box">
        <div class="robots_box_main">
          <!-- 列表 -->
          <div class="robot_item" v-for="item in itemData" :key="item.id">
            <div class="robot_item_head">
              <div class="robot_item_logo">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  t="1569682613478"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  class="ubc-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <path
                    d="M852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM300 328c0-33.1 26.9-60 60-60s60 26.9 60 60-26.9 60-60 60-60-26.9-60-60z m372 248c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v60z m-8-188c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60zM799 864H225c-13.8 0-25 14.3-25 32v56c0 4.4 2.8 8 6.2 8h611.5c3.4 0 6.2-3.6 6.2-8v-56c0.1-17.7-11.1-32-24.9-32z"
                  ></path>
                </svg>
              </div>

              <!-- 编辑 -->
              <template v-if="editItem.id === item.id">
                <input
                  class="robot_item_input"
                  placeholder="Enter bot name"
                  v-model="editItemValue.name"
                  :data-id="item.id"
                  ref="editInput"
                  @blur="onEditBlur(item)"
                />
                <button
                  @click="stopEdit(item)"
                  type="button"
                  class="icon-button-clear cancel-edit-action"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="ibc-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    ></path>
                  </svg>
                </button>
              </template>
              <template v-else>
                <h2 :title="item.name" class="text-overflow ubc-text">
                  {{ item.name }}
                </h2>
                <!-- 编辑按钮 -->
                <button
                  @click="handleEditItem(item)"
                  type="button"
                  class="icon-button-clear edit-action"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="ibc-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    ></path>
                  </svg>
                </button>
                <!-- 删除按钮 -->
                <button
                  type="button"
                  class="icon-button-clear delete-action"
                  title="Delete Bot"
                  @click="handleDeleteItem(item)"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="ibc-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    ></path>
                  </svg>
                </button>
              </template>
            </div>
            <div class="performance-bar-wrapper">
              <span class="measure">{{ item.progress }}% *</span>
              <div class="p-bar" title="Model has not been tested yet">
                <div
                  class="p-bar-indicate"
                  :style="{
                    backgroundColor: 'rgb(220, 53, 69)',
                    width: item.progress + '%',
                  }"
                ></div>
              </div>
            </div>
            <div class="buttons">
              <span class="type">owned</span>
              <router-link class="view_btn" :to="`/bot/${item.id}`">
                View
              </router-link>
            </div>
          </div>

          <!-- 新增 -->
          <div v-if="newItem" class="robot_item">
            <div class="robot_item_head">
              <div class="robot_item_logo">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  t="1569682613478"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  class="ubc-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <path
                    d="M852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM300 328c0-33.1 26.9-60 60-60s60 26.9 60 60-26.9 60-60 60-60-26.9-60-60z m372 248c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v60z m-8-188c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60zM799 864H225c-13.8 0-25 14.3-25 32v56c0 4.4 2.8 8 6.2 8h611.5c3.4 0 6.2-3.6 6.2-8v-56c0.1-17.7-11.1-32-24.9-32z"
                  ></path>
                </svg>
              </div>
              <input
                ref="addInput"
                class="robot_item_input"
                placeholder="Add name"
                v-model="newItem.name"
              />
            </div>
            <div class="performance-bar-wrapper">
              <span class="measure">{{ newItem.progress }}% *</span>
              <div class="p-bar">
                <div
                  class="p-bar-indicate"
                  :style="{
                    backgroundColor: 'rgb(220, 53, 69)',
                    width: newItem.progress + '%',
                  }"
                ></div>
              </div>
            </div>
            <div class="addBotCardButtons">
              <button
                class="MuiButton-root cancelBot"
                tabindex="0"
                type="button"
              >
                <span class="MuiButton-label" @click="cancelAddNewItem">
                  Cancel
                </span>
              </button>
              <button class="MuiButton-root saveBot" tabindex="0" type="button">
                <span @click="handleAddNewItem" class="MuiButton-label">
                  Save
                </span>
              </button>
            </div>
          </div>

          <!-- 新增按钮 -->
          <div @click="handleAddItem" class="robot_item add_btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 12 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
// 正在编辑的项目
const editItem = ref({});
// 正在编辑的项目 - 原始数据
const editItemValue = ref({});
// 项目列表
const itemData = ref([
  { id: 1, name: "HI-1", progress: 20 },
  { id: 2, name: "HI-2", progress: 50 },
]);
// 新增项目
const newItem = ref(null);
// 正在编辑的项目 - input
const editInput = ref(null);
// 新增的项目 - input
const addInput = ref(null);

// 编辑项目
const handleEditItem = (item) => {
  editItem.value = item;
  editItemValue.value = { ...item };
  nextTick(() => {
    editInput.value.forEach((item2) => {
      if (item2.dataset.id == item.id) {
        item2.focus();
      }
    });
  });
};
// 删除项目
const handleDeleteItem = (item) => {
  const newItemData = [];
  itemData.value.forEach((item2) => {
    if (item2.id !== item.id) {
      newItemData.push(item2);
    }
  });
  itemData.value = newItemData;
};
// 新增项目
const handleAddItem = () => {
  newItem.value = { id: itemData.value.length + 1, name: "", progress: 0 };
  nextTick(() => {
    addInput.value.focus();
  });
};

// 取消新增项目
const cancelAddNewItem = () => {
  newItem.value = null;
};
// 保存新增项目
const handleAddNewItem = () => {
  if (!newItem.value.name || newItem.value.name.length <= 0) {
    window.handleShowTips("请填写name");
    return;
  }
  itemData.value.push(newItem.value);
  newItem.value = null;
};

// enter 才保存
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    itemData.value = itemData.value.map((item) => {
      if (item.id === editItemValue.value.id) {
        item = editItemValue.value;
      }
      return item;
    });
    editItem.value = {};
  }
});
const stopEdit = (item) => {
  editItem.value = {};
};

// 失焦 不保存编辑
const onEditBlur = (item) => {
  editItem.value = {};
};
</script>
<style lang="less" scoped>
.Main {
  flex-grow: 1;
  overflow-y: auto;
  margin: 34px 64px 34px 42px;
  position: relative;

  .head_box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .head_title {
      font-size: 24px;
      font-weight: 600;
      font-family: "Inter";
      margin: 0;
    }
    .create_box {
      cursor: pointer;
      outline: none;
      border: none;
      background-color: #6c82ff;
      height: 32px;
      border-radius: 16px;
      font-family: "Inter";
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      padding: 3px 20px 3px 3px;
      display: flex;
      align-items: center;
      transition: background-color 0.2s ease;

      .icon_robot {
        display: flex;
        align-items: center;
        transition: background-color 0.2s ease;
        margin-right: 9px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        justify-content: center;
        background-color: #2f45c5;
        .btn-icon {
          font-size: 18px;
        }
      }

      &:hover {
        background-color: rgba(108, 130, 255, 0.8);
        .icon_robot {
          background-color: rgba(47, 69, 197, 0.8);
        }
      }
    }
  }

  .list_box {
    margin: 30px 0;

    .list_box_head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .search_box {
        position: relative;
        display: inline-block;
        height: 36px;
        input {
          background-color: #fdfdfd;
          background-color: @bg1;
          &:focus {
            background-color: hsla(0, 0%, 53.3%, 0.0862745);
            background-color: @trans-bg;
          }
        }
        .search_input {
          outline: none;
          border: 1px solid #eaeaea;
          border: 1px solid @border;
          color: #000;
          color: @font;
          width: 292px;
          border-radius: 18px;
          background-color: #fdfdfd;
          font-size: 14px;
          font-family: "Inter";
          padding: 9px 36px 8px;
          &:focus {
            background-color: @trans-bg;
          }
        }

        .search_icon {
          position: absolute;
          top: 10px;
          left: 22px;
          font-size: 18px;
          -webkit-transform: translate(-50%);
          transform: translate(-50%);
          color: #2f45c5;
          color: @icon;
        }

        .close-icon {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 32px;
          height: 32px;
        }

        .search_box .close-icon .ibc-icon {
          color: #888;
        }
      }
      .list_toggle_box {
        display: flex;

        .list_toggle_item {
          cursor: pointer;
          outline: none;
          background-color: initial;
          border: 1px solid #aaa;
          margin-right: 4px;
          border-radius: 2px;
          color: #404040;
          color: var(--font1);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          svg {
            font-size: 16px;
          }
          &.select {
            color: #2f45c5;
            border-color: #2f45c5;
          }
        }
      }
    }

    .robots_box {
      margin: 16px 0;
      .robots_box_main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        .robot_item {
          box-sizing: border-box;
          width: 285px;
          height: 160px;
          border-radius: 8px;
          border: 1px solid #eaeaea;
          padding: 16px;
          position: relative;
          margin: 5px 10px 5px 0;
          background-color: #fdfdfd;

          .robot_item_head {
            display: flex;
            align-items: center;
            .robot_item_logo {
              min-width: 30px;
              width: 30px;
              height: 30px;
              border-radius: 4px;
              background-color: #d63362;
              display: flex;
              align-items: center;
              justify-content: center;
              .ubc-icon {
                font-size: 20px;
                color: #fff;
              }
            }
            // 编辑
            input.robot_item_input {
              outline: none;
              border: 1px solid #eaeaea;
              color: #000;
              background-color: #fff;
              font-size: 14px;
              font-family: "Inter";
              padding: 5px;
              margin-left: 5px;
              max-width: 78%;
              &:focus {
                background-color: hsla(0, 0%, 53.3%, 0.0862745);
                background-color: var(--trans-bg);
              }
            }
            .ubc-text {
              font-size: 16px;
              font-weight: 500;
              margin: 0 12px;
              flex-grow: 1;
              max-width: 50%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .icon-button-clear {
              cursor: pointer;
              outline: none;
              border: none;
              background-color: initial;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background-color 0.2s ease;
              .ibc-icon {
                font-size: 20px;
              }

              &:hover {
                background-color: hsla(0, 0%, 53.3%, 0.0862745);
              }
            }

            .delete-action {
              color: #dc3545;
              align-self: flex-end;
              visibility: hidden;
            }
            .edit-action {
              color: #2f45c5;
              visibility: hidden;
            }

            .disabled {
              color: #888;
              cursor: not-allowed;
            }
          }
          .performance-bar-wrapper {
            margin: 25px 0 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .measure {
              font-size: 12px;
              color: #888;
              font-weight: 500;
            }
            .p-bar {
              margin-bottom: 16px;
              width: 100%;
              background-color: hsla(0, 0%, 53.3%, 0.0862745);
              border-radius: 4px;
              height: 5px;
              .p-bar-indicate {
                height: 100%;
                width: 0;
                border-radius: 4px;
                transition: width 0.8s ease;
              }
            }
          }
          .addBotCardButtons {
            display: flex;
            align-items: center;
            justify-content: right;

            .MuiButton-root {
              margin-left: 10px;
              border: 0;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              background-color: transparent;
              font-size: 14px;
              font-weight: 500;
              line-height: 1.75;

              &.cancelBot {
                padding: 6px 8px;
                color: #888888;
                &:hover {
                  background-color: rgba(136, 136, 136, 0.04);
                }
              }
              &.saveBot {
                background-color: #28a745;
                color: #fff;
                padding: 5px 15px;
                border-radius: 4px;
                transition: background-color 0.2s ease;
                height: 30px;
                text-transform: capitalize;
                &:hover {
                  background-color: rgb(32, 48, 137);
                }
              }
            }
          }
          .buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .type {
              padding: 2px 5px;
              font-size: 12px;
              font-weight: 500;
              border-radius: 4px;
              max-width: 70px;
              text-align: center;
              background-color: rgba(161, 126, 129, 0.13333333333333333);
              color: #17a2b8;
              text-transform: capitalize;
              height: 22px;
            }
            .view_btn {
              text-decoration: none;
              font-size: 14px;
              font-weight: 600;
              background-color: #2f45c5;
              color: #fff;
              padding: 5px 19px;
              border-radius: 4px;
              transition: background-color 0.2s ease;
              &:hover {
                background-color: rgba(47, 69, 197, 0.8);
              }
            }
          }
          &:hover {
            cursor: pointer;
            .delete-action,
            .edit-action,
            .translate-action {
              visibility: visible;
            }
          }

          &.add_btn {
            cursor: pointer;
            width: 285px;
            height: 160px;
            margin: 5px 0;
            border-radius: 8px;
            border: 1px solid #eaeaea;
            border: 1px solid @border;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: hsla(0, 0%, 53.3%, 0.0862745);
            background-color: @trans-bg;
            font-size: 30px;
            color: #aaa;
            color: @font2;
            font-weight: 500;
            transition: background-color 0.2s ease;
            &:hover {
              background-color: #fdfdfd;
              background-color: @bg1;
            }
          }
        }
      }
    }
  }
}
</style>
