<template>
  <div class="tabPanel">
    <div class="container">
      <!-- 左边 -->
      <div class="componentsList">
        <!-- 搜索框 -->
        <div class="search_box flex f-y-c">
          <input placeholder="Search or add" class="input" value="" />
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
            ></path>
          </svg>
        </div>
        <!-- 列表 -->
        <div class="search_list">
          <div
            @click="handleToggleTab(1)"
            class="list_item flex f-y-c f-sb"
            :class="[{ selected: nowTab === 1 }]"
          >
            <div class="name">back</div>
            <div class="btn_box">
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
            </div>
          </div>
          <div class="add_new_btn">Add new</div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="componentDetails">
        <!-- 头部 -->
        <div class="header flex f-y-c f-sb">
          <h3 class="title">kairon_action_response</h3>
        </div>
        <!-- 内容 -->
        <div class="content">
          <!-- 标题 -->
          <div class="header flex f-y-c f-sb">
            <div class="flex f-y-c">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"
                ></path>
              </svg>
              <div class="title">API Actions</div>
            </div>
          </div>
          <!-- 主体 -->
          <div class="main">
            <!-- 1 -->
            <div class="method_box">
              <div class="choose_item" :style="{ width: '100%' }">
                <div class="name">Methods*</div>
                <div class="select_box flex f-y-c f-sb">
                  GET
                  <svg
                    class="icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                  <div class="select_list" :class="{ show: false }">
                    <div>GET</div>
                    <div>POST</div>
                    <div>delete</div>
                    <div>put</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 2 -->
            <div class="mapping_box">
              <div class="title_box flex f-sb">
                <div class="title">Mappings</div>
                <div class="btn_box flex f-y-c">
                  <div class="btn">Add</div>
                  <div class="btn">Delete All</div>
                </div>
              </div>
              <div class="mapping_content">
                <div>Mapping-1</div>
                <div class="item flex f-sb">
                  <div class="item_title">Intent</div>
                  <div class="choose_item" :style="{ width: '70%' }">
                    <div class="select_box flex f-y-c f-sb">
                      <div></div>
                      <svg
                        class="icon"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M7 10l5 5 5-5z"></path>
                      </svg>
                      <div class="select_list" :class="{ show: false }">
                        <div>GET</div>
                        <div>POST</div>
                        <div>delete</div>
                        <div>put</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item flex f-sb">
                  <div class="item_title">Intent</div>
                  <div class="choose_item" :style="{ width: '70%' }">
                    <div class="select_box flex f-y-c f-sb">
                      <div></div>
                      <svg
                        class="icon"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M7 10l5 5 5-5z"></path>
                      </svg>
                      <div class="select_list" :class="{ show: false }">
                        <div>GET</div>
                        <div>POST</div>
                        <div>delete</div>
                        <div>put</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- button -->
            <div class="button_box flex">
              <div class="button">Save</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="correspondingStories">
        <div class="title">Corresponding stories</div>
        <div class="content">
          <router-link to="/bots" class="link flex f-y-c">
            <div class="little_avatar flex f-y-c f-x-c">h</div>
            happy path
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const nowTab = ref(1);
const handleToggleTab = (tab) => {
  nowTab.value = tab;
};
</script>
<style lang="less" scoped>
// 面板
.tabPanel {
  margin: 10px 0;
  height: calc(100vh - 248px);
  overflow: hidden;
  .container {
    height: calc(100% - 10px);
    overflow-y: hidden;
    overflow-x: auto;
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    box-sizing: border-box;

    // 小面板 - 左边
    .componentsList {
      height: 100%;
      padding: 0 10px;
      min-width: 200px;
      flex-grow: 0;
      max-width: 25%;
      flex-basis: 25%;
      margin: 0;
      box-sizing: border-box;
      .search_box {
        background-color: #fff;
        width: 100%;
        height: 36px;
        color: #888;
        margin: 14px 0;
        border-radius: 20px;
        border: 1px solid #eaeaea;
        padding: 9px 15px 8px;
        .input {
          margin: 0;
          width: 80%;
          border: 0;
          outline: 0;
          background-color: inherit;
          color: #000;
          font-size: 14px;
        }
        .icon {
          color: #888;
          font-size: 18px;
          margin-left: 5px;
        }
      }
      .search_list {
        padding-bottom: 10px;
        overflow-y: auto;
        height: calc(100% - 60px);
        .list_item {
          width: 100%;
          padding: 4px 4px 4px 16px;
          cursor: pointer;
          justify-content: flex-start;
          &:hover {
            background-color: rgba(0, 0, 0, 0.04);
            .btn_box {
              visibility: visible !important;
            }
          }
          .number {
            font-size: 16px;
          }
          .btn_box {
            visibility: hidden;
            color: #dc3545;
            padding: 0;
            width: 32px;
            height: 32px;
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
          }
        }
        .add_new_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 40px;
          border: 1px solid #6c82ff;
          border-radius: 4px;
          font-size: 16px;
        }
      }
    }
    // 小面板 - 中间
    .componentDetails {
      min-width: 400px;
      height: 100%;
      padding: 0 10px;
      flex-grow: 0;
      max-width: 58.333333%;
      flex-basis: 58.333333%;
      margin: 0;
      box-sizing: border-box;
      // 头部
      .header {
        .title {
          color: #2f45c5;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      // 内容
      .content {
        overflow-y: auto;
        height: calc(100% - 60px);
        border-radius: 8px;
        border: 1px solid #eaeaea;
        background-color: #fff;
        padding: 10px;
        width: 100%;
        .header {
          margin: 10px;

          .icon {
            font-size: 16px;
            color: #6c82ff;
            margin-right: 8px;
            transform: rotate(45deg);
          }
          .title {
            font-size: 16px;
          }
        }
        .main {
          position: relative;
          height: calc(100% - 44px);
          // 1
          .action_name_box {
            padding: 8px;
            .input {
              font-size: 14px;
              width: 100%;
              border-radius: 4px;
              color: rgba(0, 0, 0, 0.87);
              cursor: text;
              padding: 10.5px 14px;
              border: 0;
              border-bottom: 1px solid #eaeaea;
            }
          }
          // 2
          .method_box {
            margin-top: 8px;
            border-bottom: 1px solid #eaeaea;
            padding: 8px;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            margin-top: 20px;
            .choose_item {
              margin: 0 4px;
              .select_box {
                height: 40px;
                padding: 7px;
                border-bottom: 1px solid #eaeaea;
                position: relative;
                .icon {
                  width: 24px;
                  height: 24px;
                  color: #888;
                  font-size: 24px;
                }
                .select_list {
                  visibility: hidden;
                  position: absolute;
                  top: 30px;
                  background-color: #fff;
                  border-radius: 5px;
                  padding: 10px 0;
                  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
                    0px 8px 10px 1px rgb(0 0 0 / 14%),
                    0px 3px 14px 2px rgb(0 0 0 / 12%);
                  &.show {
                    visibility: visible;
                  }
                  > div {
                    white-space: nowrap;
                    cursor: pointer;
                    padding: 4px 20px;
                    font-size: 16px;
                    &:hover {
                      background-color: rgba(0, 0, 0, 0.08);
                    }
                  }
                }
              }
              .input {
                height: 40px;
                padding: 0 10px;
                border: 0;
                border: 1px solid #eaeaea;
                font-size: 16px;
              }
              .tips {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.54);
              }
            }
          }
          // 3
          .body_header_box {
            margin-top: 8px;
            border-bottom: 1px solid #eaeaea;
            padding: 8px;
            margin-top: 20px;
            .tabs {
              display: flex;
              .tab {
                color: #888;
                font-size: 14px;
                padding-bottom: 10px;
                margin-right: 20px;

                &.selected {
                  color: #2f45c5;
                  border-bottom: 2px solid #2f45c5;
                }
                .icon {
                  margin: 0 10px;
                  width: 24px;
                  height: 24px;
                  font-size: 24px;
                }
              }
            }
            .tabs_content {
              margin-top: 14px;
              .choose_item {
                margin: 0 4px;
                .name {
                  margin-bottom: 14px;
                }
                .select_box {
                  border-bottom: 1px solid #eaeaea;
                  position: relative;
                  .icon {
                    width: 24px;
                    height: 24px;
                    color: #888;
                    font-size: 24px;
                  }
                  .select_list {
                    visibility: hidden;
                    position: absolute;
                    top: 30px;
                    background-color: #fff;
                    border-radius: 5px;
                    padding: 10px 0;
                    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
                      0px 8px 10px 1px rgb(0 0 0 / 14%),
                      0px 3px 14px 2px rgb(0 0 0 / 12%);
                    &.show {
                      visibility: visible;
                    }
                    > div {
                      white-space: nowrap;
                      cursor: pointer;
                      padding: 4px 20px;
                      font-size: 16px;
                      &:hover {
                        background-color: rgba(0, 0, 0, 0.08);
                      }
                    }
                  }
                }
                .input {
                  height: 25px;
                  border: 0;
                  border-bottom: 1px solid #eaeaea;
                  font-size: 16px;
                }
                .tips {
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.54);
                }
              }
            }
            .MuiFormControl-root {
              position: relative;
              padding: 8px;
              .MuiInputBase-input {
                font: inherit;
                color: currentColor;
                width: 100%;
                border: 0;
                height: 1.1876em;
                margin: 0;
                display: block;
                padding: 9px 0 7px;
                min-width: 0;
                background: none;
                box-sizing: content-box;
                animation-name: mui-auto-fill-cancel;
                letter-spacing: inherit;
                animation-duration: 10ms;
                -webkit-tap-highlight-color: transparent;
                border-bottom: 1px solid #000;
                font-size: 16px;
              }
            }
          }

          .mapping_box {
            margin: 10px 0;
            .title_box {
              margin-bottom: 10px;
              .btn_box {
                .btn {
                  max-width: 200px;
                  margin-left: 10px;
                  border: 1px solid rgba(0, 0, 0, 0.23);
                  padding: 5px 15px;
                  color: rgba(0, 0, 0, 0.87);
                  border-radius: 5px;
                }
              }
            }
            .mapping_content {
              border: 1px solid #eaeaea;
              border-radius: 4px;
              padding: 20px;
              .item {
                .item_title {
                  width: 20%;
                  padding: 20px;
                  box-sizing: border-box;
                  line-height: 40px;
                  color: #888;
                }
                .choose_item {
                  margin: 20px 4px;
                  .select_box {
                    height: 40px;
                    padding: 10px;
                    border: 1px solid #eaeaea;
                    position: relative;
                    border-radius: 5px;

                    .icon {
                      width: 24px;
                      height: 24px;
                      color: #888;
                      font-size: 24px;
                    }
                    .select_list {
                      visibility: hidden;
                      position: absolute;
                      top: 30px;
                      background-color: #fff;
                      border-radius: 5px;
                      padding: 10px 0;
                      box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
                        0px 8px 10px 1px rgb(0 0 0 / 14%),
                        0px 3px 14px 2px rgb(0 0 0 / 12%);
                      &.show {
                        visibility: visible;
                      }
                      > div {
                        white-space: nowrap;
                        cursor: pointer;
                        padding: 4px 20px;
                        font-size: 16px;
                        &:hover {
                          background-color: rgba(0, 0, 0, 0.08);
                        }
                      }
                    }
                  }
                  .input {
                    height: 40px;
                    padding: 0 10px;
                    border: 0;
                    border: 1px solid #eaeaea;
                    font-size: 16px;
                  }
                  .tips {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.54);
                  }
                }
              }
            }
          }
          // button
          .button_box {
            .button {
              margin: 10px 0 30px;
              display: flex;
              width: fit-content;
              justify-content: flex-end;

              cursor: pointer;
              margin: 20px 2px;
              text-transform: capitalize;
              outline: none;
              background-color: #2f45c5;
              border: none;
              color: #fff;
              font-weight: 600;
              padding: 8px 20px;
              font-size: 14px;
              border-radius: 50px;
              font-family: "Inter";
            }
          }
        }
      }
    }

    // 小面板 - 右边
    .correspondingStories {
      height: 100%;
      padding: 0 10px;
      min-width: 200px;
      flex-grow: 0;
      max-width: 16.666667%;
      flex-basis: 16.666667%;
      margin: 0;
      box-sizing: border-box;
      .title {
        font-weight: 600;
        margin-bottom: 10px;
      }
      .content {
        overflow-y: auto;
        height: calc(100% - 60px);
        .link {
          width: fit-content;
          text-decoration: none;
          margin: 4px 5px 5px 0;
          padding: 5px;
          cursor: pointer;
          color: #2f45c5;
          background-color: transparent;
          border: 1px solid #2f45c5;
          height: 32px;
          border-radius: 50px;
          box-sizing: border-box;
          .little_avatar {
            color: #fff;
            background-color: rgb(32, 48, 137);
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>
