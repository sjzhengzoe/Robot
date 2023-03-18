<template>
  <div class="storyComponents-tabPanel">
    <div class="listTabPanel-container">
      <!-- 左边 -->
      <div
        class="MuiGrid-root componentsList-containter MuiGrid-item MuiGrid-grid-xs-3"
      >
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
          <ul class="MuiList-root componentsList">
            <div
              class="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-button"
              tabindex="0"
              role="button"
              aria-disabled="false"
            >
              <div
                class="MuiListItemText-root MuiListItemText-dense"
                title="back"
              >
                <span
                  class="MuiTypography-root MuiListItemText-primary MuiTypography-body2 MuiTypography-displayBlock"
                  >back</span
                >
              </div>
              <div class="MuiBox-root circular-progress-wrapper">
                <div class="MuiBox-root label-cnt">
                  <div class="MuiTypography-root MuiTypography-caption">0</div>
                </div>
              </div>
              <div class="list-actions">
                <button
                  type="button"
                  class="icon-button-clear delete-action"
                  title="Delete"
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
              </div>
              <span class="MuiTouchRipple-root"></span>
            </div>
            <div
              class="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-button"
              tabindex="0"
              role="button"
              aria-disabled="false"
            >
              <div
                class="MuiListItemText-root MuiListItemText-dense"
                id="6407e52e6f4e7ad5218fe4e9"
                title="out_of_scope"
              >
                <span
                  class="MuiTypography-root MuiListItemText-primary MuiTypography-body2 MuiTypography-displayBlock"
                  >out_of_scope</span
                >
              </div>
              <div class="MuiBox-root jss838 circular-progress-wrapper">
                <div class="MuiBox-root jss839 label-cnt">
                  <div class="MuiTypography-root MuiTypography-caption">0</div>
                </div>
              </div>
              <div class="list-actions">
                <button type="button" class="icon-button-clear delete-action">
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
              <span class="MuiTouchRipple-root"></span>
            </div>
            <div
              class="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-button"
              tabindex="0"
              role="button"
              aria-disabled="false"
            >
              <div
                class="MuiListItemText-root MuiListItemText-dense"
                id="6407e52e6f4e7ad5218fe4ea"
                title="session_start"
              >
                <span
                  class="MuiTypography-root MuiListItemText-primary MuiTypography-body2 MuiTypography-displayBlock"
                  >session_start</span
                >
              </div>
              <div class="MuiBox-root jss840 circular-progress-wrapper">
                <div class="MuiBox-root jss841 label-cnt">
                  <div class="MuiTypography-root MuiTypography-caption">0</div>
                </div>
              </div>
              <div class="list-actions">
                <button type="button" class="icon-button-clear delete-action">
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
              <span class="MuiTouchRipple-root"></span>
            </div>
            <div
              class="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-button"
              tabindex="0"
              role="button"
              aria-disabled="false"
            >
              <div
                class="MuiListItemText-root MuiListItemText-dense"
                id="6407e52e6f4e7ad5218fe4eb"
                title="nlu_fallback"
              >
                <span
                  class="MuiTypography-root MuiListItemText-primary MuiTypography-body2 MuiTypography-displayBlock"
                  >nlu_fallback</span
                >
              </div>
              <div class="MuiBox-root jss842 circular-progress-wrapper">
                <div
                  class="MuiCircularProgress-root danger MuiCircularProgress-colorPrimary MuiCircularProgress-determinate"
                  role="progressbar"
                  aria-valuenow="0"
                  style="width: 25px; height: 25px; transform: rotate(-90deg)"
                >
                  <svg class="MuiCircularProgress-svg" viewBox="22 22 44 44">
                    <circle
                      class="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate"
                      cx="44"
                      cy="44"
                      r="20.2"
                      fill="none"
                      stroke-width="3.6"
                      style="
                        stroke-dasharray: 126.92;
                        stroke-dashoffset: 126.92px;
                      "
                    ></circle>
                  </svg>
                </div>
                <div class="MuiBox-root jss843 label-cnt">
                  <div class="MuiTypography-root MuiTypography-caption">0</div>
                </div>
              </div>
              <div class="list-actions">
                <button
                  type="button"
                  class="icon-button-clear delete-action"
                  title="Delete"
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
              </div>
              <span class="MuiTouchRipple-root"></span>
            </div>
          </ul>
        </div>
      </div>
      <!-- 中间 -->
      <div
        class="MuiGrid-root componentDetails-containter MuiGrid-item MuiGrid-grid-xs-7"
      >
        <div class="componentDetails-header">
          <h3 class="selectedInstanceName">greet</h3>
          <div class="search-container">
            <div class="ui-search">
              <div class="selected-tags-wrapper"></div>
              <input
                type="text"
                class="ui-search-field"
                placeholder="Search training phrase..."
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
              <h3 class="title">Training Phrases</h3>
            </div>
          </div>
          <div class="training-phrases-wrapper">
            <div class="header-onselect">
              <div class="header-content">
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained generate-training-phrases MuiButton-containedSizeSmall MuiButton-sizeSmall MuiButton-disableElevation"
                  tabindex="0"
                  type="button"
                >
                  <span class="MuiButton-label">Generate Training Phrases</span
                  ><span class="MuiTouchRipple-root"></span>
                </button>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="MuiFormControl-root MuiTextField-root input-field">
                <div
                  class="MuiInputBase-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline MuiInputBase-marginDense MuiOutlinedInput-marginDense"
                >
                  <textarea
                    rows="3"
                    aria-invalid="false"
                    id="trainingPhrase"
                    name="trainingPhrase"
                    placeholder="Enter new training phrase"
                    class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                    style="height: 51px"
                  ></textarea>
                </div>
              </div>
              <div class="info-data">
                <p class="helper-text">Press Shift + Enter to save</p>
                <div class="entity-helper-text">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="link-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M17 4h3c1.1 0 2 .9 2 2v2h-2V6h-3V4zM4 8V6h3V4H4c-1.1 0-2 .9-2 2v2h2zm16 8v2h-3v2h3c1.1 0 2-.9 2-2v-2h-2zM7 18H4v-2H2v2c0 1.1.9 2 2 2h3v-2zM18 8H6v8h12V8z"
                    ></path>
                  </svg>
                  <span class="link-text">Add Entity</span>
                </div>
              </div>
              <div class="list-wrapper">
                <label class="MuiFormControlLabel-root list-item">
                  <span
                    class="MuiButtonBase-root MuiIconButton-root jss862 MuiCheckbox-root MuiCheckbox-colorPrimary list-checkbox MuiIconButton-colorPrimary"
                    aria-disabled="false"
                  >
                    <span class="MuiIconButton-label">
                      <input
                        class="jss865"
                        name="6407e52e6f4e7ad5218fe50c"
                        type="checkbox"
                        data-indeterminate="false"
                        value=""
                      />
                    </span>
                  </span>
                  <span
                    class="MuiTypography-root MuiFormControlLabel-label list-label MuiTypography-body1"
                  >
                    <div class="list-content-wrapper">
                      <p class="list-text">
                        <span class="inlineEl">hey there</span>
                      </p>
                      <div class="list-actions">
                        <button
                          type="button"
                          class="icon-button-clear edit-action"
                          title="Edit"
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
                        <button
                          type="button"
                          class="icon-button-clear delete-action"
                          title="Delete"
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
                      </div>
                    </div>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div
        class="MuiGrid-root correspondingStories-containter MuiGrid-item MuiGrid-grid-xs-2"
        id="jride-components-relatedstories"
      >
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
          <a
            class="story-link"
            href="/bot/6407e52b6f4e7ad5218fe4c8/story/6407e52e6f4e7ad5218fe503"
            ><div
              class="MuiChip-root MuiChip-colorPrimary MuiChip-outlined MuiChip-outlinedPrimary"
              title="sad path 1"
            >
              <div
                class="MuiAvatar-root MuiAvatar-circular MuiChip-avatar MuiChip-avatarColorPrimary MuiAvatar-colorDefault"
              >
                s
              </div>
              <span class="MuiChip-label">sad path 1</span>
            </div></a
          ><a
            class="story-link"
            href="/bot/6407e52b6f4e7ad5218fe4c8/story/6407e52e6f4e7ad5218fe504"
            ><div
              class="MuiChip-root MuiChip-colorPrimary MuiChip-outlined MuiChip-outlinedPrimary"
              title="sad path 2"
            >
              <div
                class="MuiAvatar-root MuiAvatar-circular MuiChip-avatar MuiChip-avatarColorPrimary MuiAvatar-colorDefault"
              >
                s
              </div>
              <span class="MuiChip-label">sad path 2</span>
            </div></a
          >
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
        padding-bottom: 10px;
        overflow-y: auto;
        height: calc(100% - 60px);
        .MuiList-root {
          margin: 0;
          padding: 0;
          position: relative;
          list-style: none;
          .MuiListItem-root {
            min-height: 40px;
            transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 4px;
            padding-bottom: 4px;
            justify-content: flex-start;
            text-decoration: none;
            width: 100%;
            display: flex;
            position: relative;
            box-sizing: border-box;
            text-align: left;
            align-items: center;
            color: inherit;
            border: 0;
            cursor: pointer;
            margin: 0;
            outline: 0;
            user-select: none;
            border-radius: 0;
            vertical-align: middle;
            background-color: transparent;
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
            &:hover {
              .list-actions {
                visibility: visible !important;
              }
            }
            .MuiListItemText-root {
              flex: 1 1 auto;
              min-width: 0;
              margin-top: 4px;
              margin-bottom: 4px;
            }
            .circular-progress-wrapper {
              display: inline-flex;
              position: relative;
              margin-left: 8px;
              .label-cnt {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                .MuiTypography-caption {
                  font-size: 0.75rem;
                  font-family: Inter, Arial;
                  font-weight: 400;
                  line-height: 1.66;
                  margin: 0;
                }
              }
            }
          }
          .list-actions {
            display: flex;
            visibility: hidden;
            align-items: center;
            margin-left: 5px;
            .delete-action {
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
          text-transform: none;
          flex-grow: 1;
          font-weight: 600;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .search-container {
          display: flex;
          flex-direction: column;
          position: relative;
          .ui-search {
            position: relative;
            display: inline-block;
            height: 36px;
            input {
              transition: width 0.2s ease-in;
            }
            .ui-search-field {
              outline: none;
              border: 1px solid #eaeaea;
              color: #000;
              color: var(--font);
              width: 292px;
              border-radius: 18px;
              background-color: #fff;
              font-size: 14px;
              padding: 9px 36px 8px;
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
        .training-phrases-wrapper {
          position: relative;
          height: calc(100% - 44px);
          .header-onselect {
            position: absolute;
            top: -45px;
            right: 0;
            overflow: hidden;
            margin-right: 10px;
            .header-content {
              height: 50px;
              padding-left: 10px;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              // margin-right: -70px;
              transition: margin 0.2s ease;
              button {
                text-transform: capitalize;
                padding: 4px 10px;
                font-size: 0.8125rem;
                box-shadow: none;
                background-color: #e0e0e0;
                color: rgba(0, 0, 0, 0.87);
                font-weight: 500;
                line-height: 1.75;
                border-radius: 4px;
                min-width: 64px;
                box-sizing: border-box;
                transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)
                    0ms,
                  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                  border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                border: 0;
                cursor: pointer;
                margin: 0;
                display: inline-flex;
                outline: 0;
              }
            }
          }
          .content-wrapper {
            height: 100%;
            .input-field {
              padding: 14px 10px 4px;

              // textarea
              .MuiInputBase-root {
                font-size: 14px;
                position: relative;
                border-radius: 4px;
                width: 100%;
                color: rgba(0, 0, 0, 0.87);
                cursor: text;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;

                .MuiInputBase-input {
                  width: 100%;
                  padding: 10.5px 14px;
                  border-color: rgba(0, 0, 0, 0.23);
                  font-size: 14px;
                  border-radius: 10px;
                }
              }
            }
            .info-data {
              display: flex;
              align-items: center;
              margin: 0 10px 14px;
              .helper-text {
                font-size: 13px;
                color: #404040;
                margin: 0;
              }
              .entity-helper-text {
                font-size: 13px;
                color: #404040;
                border-radius: 4px;
                max-width: 50%;
                margin: 0 0 0 10px;
                flex-grow: 1;

                .insert-link {
                  border: none;
                  background-color: initial;
                  outline: none;
                  font-family: "Inter";
                  margin-left: 10px;
                  display: flex;
                  align-items: center;
                  color: #2f45c5;
                  cursor: pointer;
                  font-size: 13px;
                  .link-icon {
                    margin-right: 2px;
                    font-size: 16px;
                  }
                  .link-text {
                    font-weight: 500;
                  }
                }
              }
            }
          }
          .list-wrapper {
            height: calc(100% - 120px);
            display: flex;
            flex-direction: column;
            max-height: calc(100vh - 364px);
            overflow-y: auto;
            margin-right: 10px;
            .list-item {
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
                .list-actions {
                  visibility: visible !important;
                }
              }
              .list-checkbox {
                font-size: 20px;
                padding: 6px;
                margin: 0 6px 0 12px;
              }
              .list-label {
                flex-grow: 1;
                font-size: 1rem;
                font-family: Inter, Arial;
                font-weight: 400;
                line-height: 1.5;
                .list-content-wrapper {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  .list-text {
                    font-size: 14px;
                    margin: 0;
                    line-height: 1.8;
                    word-break: break-word;
                  }
                  .list-actions {
                    display: flex;
                    visibility: hidden;
                    align-items: center;

                    .icon-button-clear {
                      color: #6c82ff;
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
                      &.delete-action {
                        color: #dc3545;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .notfound-text {
          margin: 20px;
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
