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
          <div class="list_item flex f-y-c f-sb">
            <div class="name">back</div>
            <div class="number">1</div>
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
        </div>
      </div>
      <!-- 中间 -->
      <div class="componentDetails">
        <!-- 头部 -->
        <div class="header flex f-y-c f-sb">
          <h3 class="title">greet</h3>
          <div class="search_box">
            <input
              type="text"
              class="input"
              placeholder="Search training phrase..."
              value=""
            />
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
                d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
              ></path>
            </svg>
          </div>
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
              <div class="title">Training Phrases</div>
            </div>
          </div>
          <!-- 主体 -->
          <div class="main">
            <!-- 1 -->
            <textarea
              rows="3"
              aria-invalid="false"
              name="trainingPhrase"
              placeholder="Enter new training phrase"
              class="textarea"
              style="height: 51px"
            />
            <!-- 2 -->
            <div class="tips flex f-y-c">
              Press Shift + Enter to save
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
                  d="M17 4h3c1.1 0 2 .9 2 2v2h-2V6h-3V4zM4 8V6h3V4H4c-1.1 0-2 .9-2 2v2h2zm16 8v2h-3v2h3c1.1 0 2-.9 2-2v-2h-2zM7 18H4v-2H2v2c0 1.1.9 2 2 2h3v-2zM18 8H6v8h12V8z"
                ></path>
              </svg>
              <div class="link">Add Entity</div>
            </div>
            <!-- 3 -->
            <div class="list">
              <div class="item flex f-y-c f-sb">
                <div class="flex f-y-c">
                  <input
                    class="checkbox"
                    name="6407e52e6f4e7ad5218fe50c"
                    type="checkbox"
                    data-indeterminate="false"
                    value=""
                  />
                  <div class="text">hey there</div>
                </div>
                <div class="btn_box">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="icon edit"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    ></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="delete icon"
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
          .name {
            width: 84px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 16px;
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
        .search_box {
          display: flex;
          flex-direction: column;
          position: relative;
          height: 36px;
          .input {
            outline: none;
            border: 1px solid #eaeaea;
            color: #000;
            width: 292px;
            border-radius: 18px;
            background-color: #fff;
            font-size: 14px;
            padding: 9px 36px 8px;
          }
          .icon {
            position: absolute;
            top: 10px;
            left: 12px;
            font-size: 18px;
            color: #2f45c5;
          }
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
          .textarea {
            min-height: 80px;
            font-size: 14px;
            border-radius: 4px;
            width: 100%;
            color: rgba(0, 0, 0, 0.87);
            cursor: text;
            padding: 10.5px 14px;
            border-color: rgba(0, 0, 0, 0.23);
          }

          .tips {
            margin: 6px 10px 14px 10px;
            font-size: 14px;
            color: #404040;
            .icon {
              color: #2f45c5;
              margin-left: 14px;
            }
            .link {
              margin-left: 5px;
              display: flex;
              align-items: center;
              color: #2f45c5;
              cursor: pointer;
            }
          }
          .list {
            height: calc(100% - 120px);
            display: flex;
            flex-direction: column;
            max-height: calc(100vh - 364px);
            overflow-y: auto;
            margin-right: 10px;
            .item {
              padding: 2px;
              margin-left: -11px;
              margin-right: 16px;
              padding: 2px;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              margin-left: -11px;
              margin-right: 16px;
              vertical-align: middle;
              -webkit-tap-highlight-color: transparent;
              &:hover {
                .btn_box {
                  visibility: visible !important;
                }
              }
              .checkbox {
                font-size: 20px;
                padding: 6px;
                margin: 0 6px 0 12px;
              }
              .text {
                font-size: 14px;
              }
              .btn_box {
                font-size: 20px;
                visibility: hidden;
                .icon {
                  margin: 0 5px;
                  &.edit {
                    color: #6c82ff;
                  }
                  &.delete {
                    color: #dc3545;
                  }
                }
              }
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
