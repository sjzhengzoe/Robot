<template>
  <div class="storyComponents-tabPanel">
    <div class="listTabPanel-container">
      <!-- 左边 -->
      <div class="componentsList-containter">
        <div class="componentsList-header">
          <div class="addNew-button">
            <div class="addNew-button-cnt">
              <input placeholder="Search or add" class="text" value="" /><svg
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
          </div>
        </div>
        <div class="componentsList-content">
          <div class="multipleComponentsList">
            <div class="sub-list-btn" :class="['sub-list-selected']">
              <div class="sl-name">
                <div class="sl-title">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                    ></path>
                  </svg>
                  API Actions
                </div>
                <button
                  class="icon-button-clear"
                  type="button"
                  title="Help Video"
                >
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
                      d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 333h-42v-42h42v42zm-.2-63h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="addNewRow"
                tabindex="0"
                role="button"
                aria-disabled="false"
              >
                Add new
              </div>
            </div>
            <div class="sub-list-btn">
              <div class="sl-name">
                <div class="sl-title">
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
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    ></path>
                  </svg>
                  Email Actions
                </div>
              </div>
              <div
                class="addNewRow"
                tabindex="0"
                role="button"
                aria-disabled="false"
              >
                Add new
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="componentDetails-containter">
        <div class="componentDetails-header">
          <h3 class="selectedInstanceName">Select action</h3>
        </div>
        <div class="componentDetails-content">
          <div class="header">
            <div class="title-wrapper">
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
              <h3 class="title">API Action</h3>
            </div>
          </div>
          <div class="httpActionForm-wrapper">
            <div class="content-wrapper">
              <!-- 1 -->
              <div class="action_name_box">
                <div class="MuiFormControl-root">
                  <label for="actionName" class="ff-component-label">
                    Action Name*
                  </label>
                  <div class="MuiTextField-root">
                    <input
                      name="actionName"
                      placeholder="Action name"
                      type="text"
                      class="MuiInputBase-input"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <!-- 2 -->
              <div class="method_box">
                <div class="MuiFormControl-root">
                  <label for="requestMethod"> Method* </label>
                  <div>
                    <div
                      class="MuiSelect-select"
                      tabindex="0"
                      role="button"
                      aria-haspopup="listbox"
                      aria-labelledby="requestMethod"
                      id="requestMethod"
                    >
                      GET
                    </div>

                    <input
                      name="requestMethod"
                      aria-hidden="true"
                      tabindex="-1"
                      class="MuiSelect-nativeInput"
                      placeholder="Method"
                      value="GET"
                    />
                    <svg
                      class="MuiSvgIcon-root MuiSelect-icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                  </div>
                </div>
                <div class="MuiFormControl-root">
                  <label for="requestMethod"> Content Type* </label>
                  <div>
                    <div
                      class="MuiSelect-select"
                      tabindex="0"
                      role="button"
                      aria-haspopup="listbox"
                      aria-labelledby="requestMethod"
                      id="requestMethod"
                    >
                      application/json
                    </div>
                    <input
                      name="requestMethod"
                      aria-hidden="true"
                      tabindex="-1"
                      class="MuiSelect-nativeInput"
                      placeholder="Method"
                      value="GET"
                    />
                    <svg
                      class="MuiSvgIcon-root MuiSelect-icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                  </div>
                </div>
                <div class="MuiFormControl-root">
                  <label for="requestMethod"> URL* </label>
                  <div>
                    <input
                      aria-invalid="false"
                      aria-describedby="httpURL-helper-text"
                      id="httpURL"
                      name="httpURL"
                      placeholder="Enter request URL"
                      type="text"
                      class="MuiInputBase-input MuiInput-input"
                      value=""
                    />
                    <p class="MuiFormHelperText-root">
                      Enter $ to see path parameter options
                    </p>
                  </div>
                </div>
              </div>
              <!-- 3 -->
              <div class="body_header_box">
                <div class="MuiTabs-flexContainer">
                  <!-- 3-1 -->
                  <div
                    class="MuiButtonBase-root"
                    :class="['Mui-selected']"
                    tabindex="0"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Headers (1)

                    <div class="icon-button-clear delete-action">
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
                    <div class="icon-button-clear">
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
                          d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <!-- 3-2 -->
                  <div
                    class="MuiButtonBase-root"
                    tabindex="0"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Body (1)

                    <div class="icon-button-clear delete-action">
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
                    <div class="icon-button-clear">
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
                          d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <!-- 3-3 -->
                  <div
                    class="MuiButtonBase-root"
                    tabindex="0"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    response slots (1)

                    <div class="icon-button-clear delete-action">
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
                    <div class="icon-button-clear">
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
                          d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- 3-1 -->
                <div class="flex">
                  <div class="MuiFormControl-root">
                    <label for="requestMethod"> Secure* </label>
                    <div>
                      <input
                        type="checkbox"
                        class="MuiInputBase-input MuiInput-input"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="MuiFormControl-root">
                    <label for="requestMethod"> Header Type* </label>
                    <div>
                      <input
                        aria-invalid="false"
                        aria-describedby="httpURL-helper-text"
                        id="httpURL"
                        name="httpURL"
                        placeholder="Enter request URL"
                        type="text"
                        class="MuiInputBase-input MuiInput-input"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- 4 -->
              <div class="action_name_box">
                <div class="MuiFormControl-root">
                  <label for="actionName" class="ff-component-label">
                    Response Text*
                  </label>
                  <div class="MuiTextField-root">
                    <input
                      name="actionName"
                      placeholder="Action name"
                      type="text"
                      class="MuiInputBase-input"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <!-- 5 -->
              <div class="advance_box">
                <div class="advance_box_btn">
                  <div class="more-actions-button actions-expanded">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="button-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                      ></path>
                    </svg>
                    <span class="button-label">Advanced Options</span>
                  </div>
                </div>
                <div class="flex">
                  <div class="MuiFormControl-root">
                    <label for="requestMethod"> Secure* </label>
                    <div>
                      <input
                        type="checkbox"
                        class="MuiInputBase-input MuiInput-input"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="MuiFormControl-root">
                    <label for="requestMethod"> Header Type* </label>
                    <div>
                      <input
                        aria-invalid="false"
                        aria-describedby="httpURL-helper-text"
                        id="httpURL"
                        name="httpURL"
                        placeholder="Enter request URL"
                        type="text"
                        class="MuiInputBase-input MuiInput-input"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- button -->
              <div class="ff-submit-btn-section flex">Save</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="correspondingStories-containter MuiGrid-item">
        <h3>Corresponding stories</h3>
        <div class="correspondingStories-content">
          <a
            class="story-link"
            href="/bot/6407e52b6f4e7ad5218fe4c8/story/6407e52e6f4e7ad5218fe502"
            ><div
              class="MuiChip-root MuiChip-colorPrimary MuiChip-outlined MuiChip-outlinedPrimary"
              title="happy path"
            >
              <div
                class="MuiAvatar-root MuiAvatar-circular MuiChip-avatar MuiChip-avatarColorPrimary MuiAvatar-colorDefault"
              >
                h
              </div>
              <span class="MuiChip-label">happy path</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
// 面板
.storyComponents-tabPanel {
  margin: 10px 0;
  height: calc(100vh - 248px);
  overflow: hidden;
  .listTabPanel-container {
    height: calc(100% - 10px);
    overflow-y: hidden;
    overflow-x: auto;
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    // 小面板 - 左边
    .componentsList-containter {
      height: 100%;
      padding: 0 10px;
      min-width: 200px;
      flex-grow: 0;
      max-width: 25%;
      flex-basis: 25%;
      margin: 0;
      box-sizing: border-box;

      .componentsList-header {
        .addNew-button {
          background-color: #fff;
          height: 36px;
          color: #888;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
          border-radius: 20px;
          border: 1px solid #eaeaea;
          padding: 9px 15px 8px;
          -webkit-margin-before: 1em;
          margin-block-start: 1em;
          -webkit-margin-after: 1em;
          margin-block-end: 1em;
          -webkit-margin-start: 0;
          margin-inline-start: 0;
          -webkit-margin-end: 0;
          margin-inline-end: 0;
        }
        .addNew-button-cnt {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          .text {
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
      }
      .componentsList-content {
        overflow-y: auto;
        height: calc(100% - 60px);
        padding-bottom: 10px;
        .multipleComponentsList {
          border-radius: 4px;
          border: 1px solid #eaeaea;
          cursor: pointer;
          .sub-list-btn {
            width: 100%;
            background: none;
            border: 0;
            border-bottom: 1px solid #eaeaea;
            font-weight: 500;
            text-align: left;
            padding: 20px 15px;
            &.sub-list-selected {
              background-color: #fff;
              border-left: 3px solid #2f45c5;
            }
            .sl-name {
              margin-bottom: 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .sl-title {
                display: flex;
                align-items: center;
                .icon {
                  color: #2f45c5;
                  margin-right: 10px;
                  font-size: 16px;
                }
              }
              .icon-button-clear {
                color: #888;
                height: -webkit-max-content;
                height: max-content;
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
            .addNewRow {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 15px;
              min-height: 40px;
              border: 1px solid #6c82ff;
              border-radius: 4px;
              font-size: 16px;
            }
          }
        }
      }
    }

    // 小面板 - 中间
    .componentDetails-containter {
      min-width: 400px;
      height: 100%;
      padding: 0 10px;
      flex-grow: 0;
      max-width: 58.333333%;
      flex-basis: 58.333333%;
      margin: 0;
      box-sizing: border-box;
      .componentDetails-header {
        display: flex;
        align-items: center;
        .selectedInstanceName {
          color: #2f45c5;
          font-weight: 600;
          text-transform: none;
          flex-grow: 1;
        }
      }
      .componentDetails-content {
        overflow-y: auto;
        height: calc(100% - 60px);
        border-radius: 8px;
        border: 1px solid #eaeaea;
        background-color: #fff;
        padding: 10px;
        width: 100%;

        .header {
          margin: 10px;
          display: flex;
          align-items: center;
          .title-wrapper {
            display: flex;
            align-items: center;
            .icon {
              font-size: 16px;
              color: #6c82ff;
              margin-right: 8px;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
            }
            .title {
              font-size: 16px;
              font-weight: 500;
              margin: 0;
            }
          }
        }
        .httpActionForm-wrapper {
          padding: 10px;
          height: calc(100% - 44px);
          .content-wrapper {
            width: 100%;
            height: 100%;
            padding-bottom: 15px;
            // 1
            .action_name_box {
              margin-top: 8px;
              border-bottom: 1px solid #eaeaea;
              padding: 8px;
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;
              .MuiFormControl-root {
                width: 100%;
                border: 0;
                margin: 0;
                display: inline-flex;
                padding: 0;
                position: relative;
                min-width: 0;
                flex-direction: column;
                vertical-align: top;
                .MuiTextField-root {
                  padding: 18.5px 14px;
                  border: 1px solid rgba(0, 0, 0, 0.87);
                  border-radius: 10px;
                  .MuiInputBase-input {
                    width: 100%;
                    border-radius: 4px;
                    color: rgba(0, 0, 0, 0.87);
                    cursor: text;
                    display: inline-flex;
                    position: relative;
                    font-size: 1rem;
                    box-sizing: border-box;
                    align-items: center;
                    font-family: Inter, Arial;
                    font-weight: 400;
                    line-height: 1.1876em;
                    border: 0;
                  }
                }
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
              .MuiFormControl-root {
                position: relative;
                padding: 8px;
                .MuiSelect-select {
                  border-bottom: 1px solid #000;
                  padding: 6px 16px 7px;
                  height: auto;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  cursor: pointer;
                  min-width: 16px;
                  font-size: 16px;
                }
              }
              .MuiSelect-nativeInput {
                left: 0;
                width: 100%;
                bottom: 0;
                opacity: 0;
                position: absolute;
                pointer-events: none;
              }
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
              .MuiSelect-icon {
                top: calc(50% - 24px);
                color: rgba(0, 0, 0, 0.54);
                right: 0;
                position: absolute;
                pointer-events: none;
                fill: currentColor;
                width: 1em;
                height: 1em;
                display: inline-block;
                font-size: 26px;
                transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                flex-shrink: 0;
                user-select: none;
              }
              .MuiFormHelperText-root {
                color: rgba(0, 0, 0, 0.54);
                margin: 0;
                font-size: 16px;
                margin-top: 3px;
                text-align: left;
                font-weight: 400;
                line-height: 1.66;
              }
            }
            // 3
            .body_header_box {
              margin-top: 8px;
              border-bottom: 1px solid #eaeaea;
              padding: 8px;
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;
              margin-top: 20px;
              .MuiTabs-flexContainer {
                display: flex;
                .MuiButtonBase-root {
                  color: #888;
                  font-size: 16px;
                  width: 100%;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  &.Mui-selected {
                    color: #2f45c5;
                  }
                  .icon-button-clear {
                    margin-left: 6px;
                    display: inherit;
                    margin-bottom: 0;
                    color: #888;
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
                    &.delete-action:hover {
                      color: red;
                    }
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
            // 5
            .advance_box {
              margin-top: 8px;
              border-bottom: 1px solid #eaeaea;
              padding: 8px;

              box-sizing: border-box;
              margin-top: 20px;
              .advance_box_btn {
                display: flex;
                flex-wrap: wrap;
              }
              .more-actions-button {
                box-shadow: 0 0 0 2px #6c82ff;
                background-color: initial;
                border-radius: 4px;
                padding: 10px;
                border: none;
                display: flex;
                align-items: center;
                cursor: pointer;
                color: #000;
                font-size: 13px;
                .button-icon {
                  font-size: 18px;
                  margin-right: 10px;
                }
                .button-label {
                  font-weight: 500;
                }
              }
            }
            // button
            .ff-submit-btn-section {
              margin-top: 10px;
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
    .correspondingStories-containter {
      height: 100%;
      padding: 0 10px;
      min-width: 200px;
      flex-grow: 0;
      max-width: 16.666667%;
      flex-basis: 16.666667%;
      margin: 0;
      box-sizing: border-box;
      h3 {
        font-weight: 600;
        text-transform: capitalize;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .correspondingStories-content {
        overflow-y: auto;
        height: calc(100% - 60px);
        .story-link {
          display: flex;
          text-decoration: none;
          .MuiChip-root {
            margin: 0 5px 5px 0;
            cursor: pointer;
            max-width: 90%;
            color: #2f45c5;
            background-color: transparent;
            border: 1px solid #2f45c5;
            height: 32px;
            border-radius: 50px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            .MuiChip-avatar {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 4px;
              color: #fff;
              background-color: rgb(32, 48, 137);
              width: 24px;
              height: 24px;
              font-size: 0.75rem;
              border-radius: 50%;
            }
            .MuiChip-label {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding-left: 4px;
              padding-right: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
