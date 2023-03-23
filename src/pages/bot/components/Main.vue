<template>
  <div class="Main">
    <div class="stories-wrapper">
      <div class="stories-head">
        <!-- 左边 -->
        <div class="left-headings">
          <h1 class="app-heading">Conversations</h1>
          <div class="scroll-to-sections">
            <button
              :class="[{ 'not-visible': nowTab !== 'story' }]"
              @click="handleToTabList('story')"
              type="button"
            >
              STORIES
            </button>
            <button
              @click="handleToTabList('form')"
              type="button"
              :class="[{ 'not-visible': nowTab !== 'form' }]"
            >
              FORMS
            </button>
          </div>
        </div>
        <!-- 右边 -->
        <div type="button" class="app-btn-icon">
          <div class="btn-icon-wrapper">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="btn-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"
              ></path>
            </svg>
          </div>
          Add New
          <!-- 下拉框 -->
          <div class="sub-categories-wrapper">
            <div class="sub-categories">
              <button type="button" class="sub-list-btn">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="sl-icon icon-story"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 1H1V9H9V6H11V20H15V23H23V15H15V18H13V6H15V9H23V1H15V4H9V1ZM21 3H17V7H21V3ZM17 17H21V21H17V17Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div @click="handleToggleAddNewPopup(true)" class="sl-name">
                  STORY
                </div>
              </button>
              <button type="button" class="sub-list-btn">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="sl-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z"
                  ></path>
                </svg>
                <div class="sl-name">FORM</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 搜索 -->
      <div class="search-and-view">
        <div class="left-content">
          <div class="ui-search">
            <div class="selected-tags-wrapper"></div>
            <input
              type="text"
              class="ui-search-field"
              placeholder="Search Stories and Forms"
              value=""
            />
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="search-icon"
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
        <div class="grid-list-view">
          <button class="switch-view list" type="button">
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
          </button>
          <button class="switch-view card sv-select" type="button">
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
          </button>
        </div>
      </div>
      <!-- 列表 -->
      <div class="conversations-content">
        <!-- story -->
        <div ref="storyTag" class="stories-section">
          <!-- head -->
          <div class="convos-header">
            <h3 class="convos-subheading">STORIES</h3>
            <div class="tags-filter-wrapper">
              <button type="button" class="icon-button-clear filter-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="ibc-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48 87.2c0 5.8 2 11.4 5.6 15.7l152.2 179.8c3.6 4.3 5.6 9.9 5.6 15.7v107c0 10 5.9 18.8 14.6 22l55 19.8c9.6 3.5 19.6-4.3 19.6-15.3V298.3c0-5.8 2-11.4 5.6-15.7l152.2-179.8c3.6-4.3 5.6-9.9 5.6-15.7 0-12.8-9.6-23.2-21.4-23.2H69.4C57.6 64 48 74.4 48 87.2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- list -->
          <div class="stories-content">
            <div class="story-grid-item">
              <div class="ui-storycard">
                <div class="uis-upper">
                  <div class="icons-wrapper">
                    <div class="flow-icon-wrapper">
                      <img
                        src="../../../assets/flowIcon.svg"
                        alt=""
                        class="flow-icon"
                      />
                    </div>
                    <button
                      type="button"
                      class="icon-button-clear delete-action"
                      title="Delete Story"
                      @click="() => handleToggleDeletePopup(true)"
                    >
                      <div class="tips">Delete Story</div>
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
                  </div>
                  <h4 title="sad path 1" class="text-overflow story-name">
                    sad path 1
                  </h4>
                  <div class="story-type-wrapper">
                    <p class="story-type">Custom</p>
                  </div>
                </div>
                <div class="uis-lower">
                  <p class="update-details">
                    Interactions: <span class="update-date">7</span>
                  </p>
                  <a
                    class="story-link"
                    href="/bot/6407e52b6f4e7ad5218fe4c8/story/6407e52e6f4e7ad5218fe503"
                    >Edit</a
                  >
                </div>
              </div>
            </div>
            <!-- 新增 -->
            <div class="story-grid-item" @click="handleToggleAddNewPopup(true)">
              <div class="add-convo-card" role="button" tabindex="0">
                <div class="add-convo-icon">
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
                <h3 class="add-title">Add Story</h3>
                <p class="add-text">Create New Story</p>
              </div>
            </div>
          </div>
        </div>
        <!-- form -->
        <div ref="formTag" class="forms-section">
          <h3 class="convos-subheading">FORMS</h3>
          <div class="add-convo-card add-form-card" role="button" tabindex="0">
            <div class="add-convo-icon">
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
            <h3 class="add-title">Add Form</h3>
            <p class="add-text">Create New Form</p>
          </div>
        </div>
      </div>
    </div>
    <!-- add new dialog -->
    <div
      @click="(e) => handleClickAddNewPopup(e)"
      v-if="visibleAddNewPopup"
      class="popup_add_new_story"
      role="none presentation"
      tabindex="-1"
      :style="{
        opacity: 1,
        transition: `opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
      }"
    >
      <div class="container" @click.stop="() => {}" role="dialog">
        <div class="title">Select Story Template</div>
        <div class="content">
          <div class="templates-list">
            <div class="template-type" role="button" tabindex="0">
              <img
                src="../../../assets/type_qna.svg"
                alt="Q&amp;A"
                class="type-image"
              />
              <p class="type-name">Q&amp;A</p>
              <div
                class="template-help"
                title="Story with single user interaction and corresponding bot response."
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="help-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="template-type" role="button" tabindex="0">
              <img
                src="../../../assets/type_rule.svg"
                alt="Rule"
                class="type-image"
              />
              <p class="type-name">Rule</p>
              <div
                class="template-help"
                title="Rule based story is short conversation that always follows the same path."
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="help-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="template-type" role="button" tabindex="0">
              <img
                src="../../../assets/type_custom.svg"
                alt="Custom"
                class="type-image"
              />
              <p class="type-name">Custom</p>
              <div
                class="template-help"
                title="Build your custom story with multiple user and bot interactions."
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="help-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="template-type" role="button" tabindex="0">
              <img
                src="../../../assets/type_multiflow.svg"
                alt="Multiflow"
                class="type-image"
              />
              <p class="type-name">Multiflow</p>
              <div
                class="template-help"
                title="Build your custom story with multiple branches."
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="help-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- delete dialog -->
    <div
      v-if="visibleDeletePopup"
      class="popup_delete_story"
      :style="{
        opacity: 1,
        transition: `opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
      }"
    >
      <div class="container">
        <div class="title">Are you sure?</div>
        <div class="content">
          This story will be deleted permanently. Do you wish to proceed?
        </div>
        <div class="btn_box flex f-y-c f-x-end">
          <div @click="handleToggleDeletePopup(false)" class="cancel btn">
            CANCEL
          </div>
          <div class="go btn" @click="handleDeleteStory">PROCEED</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const storyTag = ref();
const formTag = ref();
const nowTab = ref("story");

const handleClickAddNewPopup = (e) => {
  visibleAddNewPopup.value = false;
};

const visibleAddNewPopup = ref(false);
const visibleDeletePopup = ref(false);
const handleToggleAddNewPopup = (isShow) => {
  visibleAddNewPopup.value = isShow;
};
const handleToggleDeletePopup = (isShow) => {
  visibleDeletePopup.value = isShow;
};
const handleDeleteStory = () => {
  visibleDeletePopup.value = false;
};

// 点击滑动到对应的模块
const handleToTabList = (tab) => {
  nowTab.value = tab;
  if (tab === "story") {
    storyTag.value.scrollIntoView({
      block: "start",
      inline: "center",
      behavior: "smooth",
    });
  }
  if (tab === "form") {
    formTag.value.scrollIntoView({
      block: "start",
      inline: "center",
      behavior: "smooth",
    });
  }
};
</script>
<style lang="less" scoped>
.Main {
  background-color: #fdfdfd;
  overflow-y: auto;
  overflow-x: hidden;
  .stories-wrapper {
    padding: 34px 40px;
    box-sizing: border-box;
    height: 100%;
    .stories-head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // 左边
      .left-headings {
        display: flex;
        align-items: flex-end;
        .app-heading {
          font-size: 24px;
          font-weight: 600;
          font-family: "Inter";
          margin: 0;
        }
        .scroll-to-sections {
          margin: 0 0 4px 20px;
          button {
            margin-left: 14px;
            text-decoration: none;
            color: #2f45c5;
            font-size: 12px;
            font-weight: 600;
            background-color: initial;
            outline: none;
            border: none;
            cursor: pointer;
            &.not-visible {
              color: #888;
            }
          }
        }
      }
      // 右边
      .app-btn-icon {
        position: relative;
        display: flex;
        align-items: center;
        transition: background-color 0.2s ease;
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
        &:hover {
          background-color: rgba(108, 130, 255, 0.8);
          .sub-categories-wrapper {
            display: flex;
          }
        }
        .btn-icon-wrapper {
          margin-right: 9px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          justify-content: center;
          background-color: #2f45c5;
          display: flex;
          align-items: center;
          transition: background-color 0.2s ease;
          .btn-icon {
            font-size: 18px;
          }
        }
        .sub-categories-wrapper {
          position: absolute;
          right: 0;
          top: 0;
          display: none;
          flex-direction: column;
          background-color: initial;
          z-index: 1;
          .sub-categories {
            background-color: #fdfdfd;
            box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%),
              0 2px 5px 1px rgb(0 0 0 / 14%), 0 3px 5px 2px rgb(0 0 0 / 12%);
            padding: 10px 0;
            margin-top: 42px;
            border-radius: 2px;
            .sub-list-btn {
              width: 180px;
              background-color: initial;
              border: none;
              outline: none;
              display: flex;
              align-items: center;
              padding: 10px 16px;
              color: #888;
              cursor: pointer;
              &:hover {
                color: #2f45c5;
                background-color: #f3f5ff;
              }
              .icon-story {
                font-size: 16px;
              }
              .sl-icon {
                font-size: 18px;
              }
              .sl-name {
                font-size: 12px;
                margin-left: 12px;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
    .search-and-view {
      margin: 18px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // 左边
      .left-content {
        display: flex;
        align-items: center;
        .ui-search {
          position: relative;
          display: inline-block;
          height: 36px;
          .ui-search-field {
            outline: none;
            border: 1px solid #eaeaea;
            color: #000;
            width: 292px;
            border-radius: 18px;
            background-color: #fff;
            font-size: 14px;
            padding: 9px 36px 8px;
            &:focus {
              background-color: #fdfdfd;
            }
          }
          .search-icon {
            position: absolute;
            top: 10px;
            left: 22px;
            font-size: 18px;
            -webkit-transform: translate(-50%);
            transform: translate(-50%);
            color: #2f45c5;
          }
        }
      }
      // 右边
      .grid-list-view {
        display: flex;
        .switch-view {
          cursor: pointer;
          outline: none;
          background-color: initial;
          border: 1px solid #aaa;
          margin-right: 4px;
          border-radius: 2px;
          color: #404040;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          svg {
            font-size: 16px;
          }
          &.sv-select {
            color: #2f45c5;
            border-color: #2f45c5;
          }
        }
      }
    }
    .conversations-content {
      max-height: calc(100vh - 256px);
      overflow: auto;
      .stories-section {
        margin: 0 0 16px;
        min-height: 200px;
        .convos-header {
          padding-top: 10px;
          display: flex;
          align-items: center;
          .convos-subheading {
            margin-bottom: 0;
            color: #2f45c5;
            font-size: 15px;
            font-weight: 600;
            margin: 0 0 4px;
          }
          .tags-filter-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 10px;
            .filter-icon {
              color: #2f45c5;
              position: relative;
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
                font-size: 18px;
              }
            }
          }
        }
        .stories-content {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          .story-grid-item {
            margin: 8px 15px 7px 0;
            box-sizing: border-box;
            .ui-storycard {
              height: 200px;
              width: 176px;
              border-radius: 8px;
              border: 1px solid #eaeaea;
              background-color: #fff;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              overflow: hidden;
              position: relative;
              cursor: pointer;
              &:hover {
                .icons-wrapper .delete-action {
                  visibility: visible !important;
                }
              }
              .uis-upper {
                margin: 16px;
                .icons-wrapper {
                  display: flex;
                  .flow-icon-wrapper {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    background-color: #f3f5ff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .flow-icon {
                      -webkit-user-select: none;
                      user-select: none;
                    }
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
                  }
                  .delete-action {
                    color: #dc3545;
                    visibility: hidden;
                    margin-left: auto;
                    position: relative;
                    &:hover {
                      .tips {
                        visibility: visible !important;
                      }
                    }
                    .ibc-icon {
                      font-size: 20px;
                    }
                    .tips {
                      visibility: hidden;
                      white-space: nowrap;
                      position: absolute;
                      top: 40px;
                      right: 0;
                      color: #fff;
                      background-color: gray;
                      padding: 10px;
                      border-radius: 5px;
                    }
                  }
                }
                .story-name {
                  font-size: 13px;
                  font-weight: 500;
                  color: #404040;
                  margin: 12px 0 0;
                }
                .story-type-wrapper {
                  display: flex;
                  align-items: center;
                  .story-type {
                    font-size: 12px;
                    font-weight: 500;
                    color: #aaa;
                    margin-top: 0;
                  }
                }
              }
              .uis-lower {
                background-color: #f3f5ff;
                padding: 8px 12px 12px;
                height: 68px;
                .update-details {
                  font-size: 12px;
                  color: #888;
                  font-weight: 500;
                  margin: 0;
                  .update-date {
                    font-weight: 600;
                    color: #2f45c5;
                  }
                }
                .story-link {
                  right: 12px;
                  bottom: 12px;
                  padding: 3px 15px;
                  font-size: 13px;

                  position: absolute;
                  text-decoration: none;
                  font-weight: 600;
                  background-color: #2f45c5;
                  color: #fff;
                  border-radius: 4px;
                  transition: background-color 0.2s ease;
                }
              }
            }
            .add-convo-card {
              height: 200px;
              width: 176px;
              position: relative;
              border: 1px solid #eaeaea;
              border-radius: 8px;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              &:hover {
                background-color: #fdfdfd;
              }
              .add-convo-icon {
                height: 72px;
                width: 72px;
                border-radius: 20px;
                background-color: #f3f5ff;
                display: flex;
                align-items: center;
                justify-content: center;
                svg {
                  font-size: 20px;
                  color: #888;
                }
              }
              .add-title {
                font-size: 14px;
                font-weight: 600;
                color: #2f45c5;
                margin: 12px 0 0;
              }
              .add-text {
                font-size: 11px;
                font-weight: 500;
                color: #aaa;
              }
            }
          }
        }
      }
      .forms-section {
        min-height: 200px;
        .convos-subheading {
          padding-top: 10px;
          color: #2f45c5;
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 4px;
        }
        .add-convo-card {
          height: 200px;
          width: 176px;
          position: relative;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover {
            background-color: #fdfdfd;
          }
          .add-convo-icon {
            height: 72px;
            width: 72px;
            border-radius: 20px;
            background-color: #f3f5ff;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              font-size: 20px;
              color: #888;
            }
          }
          .add-title {
            font-size: 14px;
            font-weight: 600;
            color: #2f45c5;
            margin: 12px 0 0;
          }
          .add-text {
            font-size: 11px;
            font-weight: 500;
            color: #aaa;
          }
        }
      }
    }
  }
}
.popup_add_new_story {
  position: fixed;
  z-index: 1300;
  inset: 0px;
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: 100%;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: calc(100% - 64px);
    max-width: 600px;

    display: flex;
    max-height: calc(100% - 64px);
    flex-direction: column;
    margin: 32px;
    position: relative;
    overflow-y: auto;
    border-radius: 4px;

    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
      0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    .title {
      flex: 0 0 auto;
      margin: 0;
      padding: 16px 24px;
      font-size: 18px;
      font-weight: 500;
      line-height: 32px;
      font-weight: 500;
    }
    .content {
      flex: 1 1 auto;
      padding: 8px 24px;
      overflow-y: auto;

      .templates-list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
      }

      .template-type {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        width: 160px;
        height: 160px;
        background-color: hsla(0, 0%, 99.2%, 0.219608);
        background-color: var(--trans-bg1);
        border-radius: 6px;
        border: 1px solid hsla(0, 0%, 53.3%, 0.13333333333333333);
        padding: 10px;
        margin: 10px;
        transition: box-shadow 0.2s ease;
        &:hover {
          box-shadow: 0 0 4px 0 hsla(0, 0%, 53.3%, 0.5333333333333333);
        }
      }

      .type-name {
        font-weight: 500;
      }

      .template-help {
        position: absolute;
        top: 10px;
        right: 10px;
      }

      .help-icon {
        font-size: 16px;
        color: #aaa;
      }

      .help-popup {
        display: block;
      }
    }
  }
}
.popup_delete_story {
  position: fixed;
  z-index: 1300;
  inset: 0px;
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: 100%;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: calc(100% - 64px);
    max-width: 600px;

    display: flex;
    max-height: calc(100% - 64px);
    flex-direction: column;
    margin: 32px;
    position: relative;
    overflow-y: auto;
    border-radius: 4px;

    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
      0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    .title {
      flex: 0 0 auto;
      margin: 0;
      padding: 16px 24px;
      font-size: 18px;
      font-weight: 500;
      line-height: 32px;
      font-weight: 500;
    }
    .content {
      padding: 8px 24px;
    }
    .btn_box {
      padding: 8px 24px;
      .btn {
        margin: 0 10px;
        cursor: pointer;
      }
      .cancel {
        color: grey;
      }
      .go {
        color: #2f45c5;
      }
    }
  }
}
</style>
