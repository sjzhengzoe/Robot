<template>
  <div class="storyComponents-tabPanel">
    <div
      class="MuiGrid-root listTabPanel-container MuiGrid-container MuiGrid-wrap-xs-nowrap"
    >
      <div
        class="MuiGrid-root componentsList-containter MuiGrid-item MuiGrid-grid-xs-3"
      >
        <div class="componentsList-header">
          <div class="addNew-button">
            <div class="addNew-button-cnt">
              <input placeholder="Search or add" class="text" value="" />
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
          </div>
        </div>
        <div class="componentsList-content">
          <div class="multipleComponentsList">
            <div type="button" class="sub-list-btn sub-list-selected">
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
              <ul class="MuiList-root componentsList">
                <div
                  class="MuiButtonBase-root MuiListItem-root addNewRow MuiListItem-dense MuiListItem-gutters MuiListItem-button"
                  tabindex="0"
                  role="button"
                  aria-disabled="false"
                >
                  <div
                    class="MuiListItemText-root MuiListItemText-dense"
                    id="addNewRow"
                  >
                    <span
                      class="MuiTypography-root MuiListItemText-primary MuiTypography-body2 MuiTypography-displayBlock"
                    >
                      Add new
                    </span>
                  </div>
                  <span class="MuiTouchRipple-root"></span>
                </div>
              </ul>
            </div>
            <div type="button" class="sub-list-btn">
              <div class="sl-name">
                <div class="sl-title">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    class="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
                    ></path>
                  </svg>
                  Reset Slots
                </div>
              </div>
            </div>
            <div type="button" class="sub-list-btn">
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
            </div>
            <div type="button" class="sub-list-btn">
              <div class="sl-name">
                <div class="sl-title">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 488 512"
                    class="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Google Actions
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
            </div>
            <div type="button" class="sub-list-btn">
              <div class="sl-name">
                <div class="sl-title">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    class="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z"
                    ></path>
                  </svg>
                  Jira Actions
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
            </div>
            <div type="button" class="sub-list-btn">
              <div class="sl-name">
                <div class="sl-title">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    class="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path
                      d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
                    ></path>
                  </svg>
                  Zendesk Actions
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
            </div>
            <div type="button" class="sub-list-btn">
              <div class="sl-name">
                <div class="sl-title">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 288 512"
                    class="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                    ></path>
                  </svg>
                  Pipedrive Actions
                </div>
              </div>
            </div>
            <div type="button" class="sub-list-btn">
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
                      d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6 0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5-10.8 0-20.9 4.2-28.5 11.8-7.6 7.6-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5c7.6 7.6 17.8 11.6 28.5 11.6 10.8 0 20.9-3.9 28.6-11.6 7.6-7.6 11.8-17.8 11.8-28.5 0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9 71.9 0 130-58.3 130-130.2 0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9 0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6-27.6-20.9-117.5-85.7-168.9-124.8 1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0 48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3 9.8 0 18.9-2.9 26.8-7.6l163.2 114.7zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69 69 30.9 69 69-30.9 69-69 69z"
                    ></path>
                  </svg>
                  Hubspot Actions
                </div>
              </div>
            </div>
            <div type="button" class="sub-list-btn">
              <div class="sl-name standAloneAction">
                <div class="sl-title">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                    ></path>
                  </svg>
                  Two Stage Fallback Action
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="MuiGrid-root componentDetails-containter MuiGrid-item MuiGrid-grid-xs-7"
        id="jride-components-listdetails"
      >
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
        </div>
      </div>
      <div
        class="MuiGrid-root correspondingStories-containter MuiGrid-item MuiGrid-grid-xs-2"
        id="jride-components-relatedstories"
      >
        <h3>Corresponding stories</h3>
        <div class="correspondingStories-content"></div>
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

        h3 {
          font-weight: 600;
          text-transform: capitalize;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        h3.selectedInstanceName {
          color: #2f45c5;
          text-transform: none;
          flex-grow: 1;
        }

        .listTabPanel-container {
          height: calc(100% - 10px);
          overflow-y: hidden;
          overflow-x: auto;
        }

        .listTabPanel-container > .MuiGrid-item {
          height: 100%;
          padding: 0 10px;
        }

        .listTabPanel-container > .MuiGrid-item > div:last-child {
          overflow-y: auto;
          height: calc(100% - 60px);
        }

        .listTabPanel-container .componentDetails-header {
          display: flex;
          align-items: center;
        }

        .listTabPanel-container .componentDetails-header .search-container {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .listTabPanel-container
          .componentDetails-header
          .search-container
          .ui-search
          input {
          transition: width 0.2s ease-in;
        }

        .listTabPanel-container
          .componentDetails-header
          .search-container
          .ui-search
          input:focus {
          width: 400px;
        }

        .listTabPanel-container
          .componentDetails-header
          .search-container
          .search-results-container {
          position: absolute;
          max-height: 300px;
          width: 110%;
          background-color: #fff;
          top: 40px;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          overflow-y: auto;
          z-index: 2;
          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
            0 8px 10px 1px rgba(0, 0, 0, 0.14),
            0 3px 14px 2px rgba(0, 0, 0, 0.12);
          transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }

        .listTabPanel-container .componentDetails-containter {
          min-width: 400px;
        }

        .listTabPanel-container .componentDetails-containter button {
          text-transform: capitalize;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiGrid-item {
          margin-top: 8px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .ff-submit-btn-section {
          margin-top: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .httpActionForm {
          padding-bottom: 15px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiTabs-root
          button {
          color: #888;
          text-transform: capitalize;
          font-size: 1rem;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiTabs-root
          button.Mui-selected {
          color: #2f45c5;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .httpURL-input {
          margin-top: 24px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterButtons {
          display: flex;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterButtons
          button {
          font-size: 24px;
          color: #888;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiGrid-container.MuiGrid-item {
          border-bottom: 1px solid #eaeaea;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterRow {
          width: 100%;
          display: flex;
          position: relative;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterRow
          > div {
          padding: 8px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterRow
          .MuiButtonBase-root,
        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterRow
          .MuiTextField-root {
          margin-top: 24px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterRow
          .ff-component-label {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterRow
          .deleteParameter {
          position: absolute;
          right: 15px;
          top: 15px;
          visibility: hidden;
          cursor: pointer;
          color: #000;
          font-size: 16px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .parameterRow:hover
          .deleteParameter {
          visibility: visible;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiSwitch-root {
          margin-top: 24px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiSelect-root
          .ff-select-item {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .more-actions-button {
          background-color: initial;
          border-radius: 4px;
          padding: 10px;
          border: none;
          display: flex;
          align-items: center;
          cursor: pointer;
          color: #000;
          font-size: 13px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .more-actions-button
          .button-icon {
          font-size: 18px;
          margin-right: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .more-actions-button
          .button-label {
          font-family: "Inter";
          font-weight: 500;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .more-actions-button:hover {
          background-color: hsla(0, 0%, 53.3%, 0.0862745);
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .httpURL-cnt {
          position: relative;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .httpURL-cnt
          .search-results-container {
          position: absolute;
          max-height: 300px;
          width: 40%;
          background-color: #fff;
          top: 88px;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          overflow-y: auto;
          z-index: 2;
          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
            0 8px 10px 1px rgba(0, 0, 0, 0.14),
            0 3px 14px 2px rgba(0, 0, 0, 0.12);
          transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .more-actions-button.actions-expanded {
          box-shadow: 0 0 0 2px #6c82ff;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .more-actions-button.actions-expanded
          .button-icon {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiTabs-root
          .MuiTab-root
          div {
          display: none;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiTabs-root
          .Mui-selected.MuiTab-root
          .MuiTab-wrapper {
          flex-direction: row-reverse;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiTabs-root
          .Mui-selected.MuiTab-root
          div {
          margin-left: 6px;
          display: inherit;
          margin-bottom: 0;
          color: #888;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiTabs-root
          .Mui-selected.MuiTab-root
          div:hover {
          color: #2f45c5;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiTabs-root
          .Mui-selected.MuiTab-root
          .delete-action {
          margin-left: 15px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .MuiTabs-root
          .Mui-selected.MuiTab-root
          .delete-action:hover {
          color: #dc3545;
        }

        .listTabPanel-container
          .componentDetails-containter
          .httpActionForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          cursor: pointer;
          margin: 20px 2px;
          text-transform: capitalize;
          outline: none;
          border: none;
          font-weight: 600;
          padding: 8px 20px;
          font-size: 14px;
          border-radius: 50px;
          font-family: "Inter";
          color: #fff;
          background-color: #dc3545;
        }

        .listTabPanel-container .componentDetails-containter .slotForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotForm-wrapper
          .ff-submit-btn-section {
          justify-content: flex-start;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          background-color: #dc3545;
          order: 1;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotForm-wrapper
          .MuiFormControlLabel-root {
          margin-left: -5px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .emailActionForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .emailActionForm-wrapper
          .ff-submit-btn-section {
          justify-content: flex-start;
        }

        .listTabPanel-container
          .componentDetails-containter
          .emailActionForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          background-color: #dc3545;
          order: 1;
        }

        .listTabPanel-container
          .componentDetails-containter
          .emailActionForm-wrapper
          .MuiFormControlLabel-root {
          margin-left: -5px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .googleActionForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .googleActionForm-wrapper
          .ff-submit-btn-section {
          justify-content: flex-start;
        }

        .listTabPanel-container
          .componentDetails-containter
          .googleActionForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          background-color: #dc3545;
          order: 1;
        }

        .listTabPanel-container
          .componentDetails-containter
          .googleActionForm-wrapper
          .MuiFormControlLabel-root {
          margin-left: -5px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .jiraActionForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .jiraActionForm-wrapper
          .ff-submit-btn-section {
          justify-content: flex-start;
        }

        .listTabPanel-container
          .componentDetails-containter
          .jiraActionForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          background-color: #dc3545;
          order: 1;
        }

        .listTabPanel-container
          .componentDetails-containter
          .jiraActionForm-wrapper
          .MuiFormControlLabel-root {
          margin-left: -5px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .zendeskActionForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .zendeskActionForm-wrapper
          .ff-submit-btn-section {
          justify-content: flex-start;
        }

        .listTabPanel-container
          .componentDetails-containter
          .zendeskActionForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          background-color: #dc3545;
          order: 1;
        }

        .listTabPanel-container
          .componentDetails-containter
          .zendeskActionForm-wrapper
          .MuiFormControlLabel-root {
          margin-left: -5px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .pipedriveActionForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .pipedriveActionForm-wrapper
          .metadata-note {
          margin: 0;
        }

        .listTabPanel-container
          .componentDetails-containter
          .pipedriveActionForm-wrapper
          .metadata-note
          span {
          font-weight: 600;
        }

        .listTabPanel-container
          .componentDetails-containter
          .pipedriveActionForm-wrapper
          .ff-submit-btn-section {
          justify-content: flex-start;
        }

        .listTabPanel-container
          .componentDetails-containter
          .pipedriveActionForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          background-color: #dc3545;
          order: 1;
        }

        .listTabPanel-container
          .componentDetails-containter
          .pipedriveActionForm-wrapper
          .MuiFormControlLabel-root {
          margin-left: -5px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .MuiFormControlLabel-root {
          margin-left: -5px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section {
          margin: 20px 0;
          padding-top: 20px;
          border-top: 1px solid #eaeaea;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .form-fields-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .form-fields-header
          .title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .form-fields-header
          .title-wrapper
          .fields-heading {
          font-weight: 500;
          margin: 0;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .form-fields-header
          .title-wrapper
          .help-icon-wrapper {
          margin: 0 10px;
          display: flex;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .form-fields-header
          .title-wrapper
          .help-icon-wrapper
          .help-icon {
          color: #888;
          font-size: 18px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .form-fields-header
          .add-button {
          font-family: "Inter";
          font-size: 14px;
          font-weight: 500;
          background-color: #2f45c5;
          outline: none;
          border: none;
          border-radius: 4px;
          padding: 6px 10px;
          cursor: pointer;
          color: #fff;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .field-wrapper {
          position: relative;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .field-wrapper
          .ff-component-label,
        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .field-wrapper
          .MuiSelect-root
          span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .field-wrapper
          .param-delete-button {
          position: absolute;
          right: 0;
          top: 30px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .field-wrapper
          .param-delete-button
          .ibc-icon {
          color: #dc3545;
          font-size: 18px;
          display: none;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .form-fields-section
          .field-wrapper:hover
          .param-delete-button
          .ibc-icon {
          display: block;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .buttons-section {
          display: flex;
          align-items: center;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .buttons-section
          .saveButton {
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

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .buttons-section
          .saveButton:hover {
          background-color: #6c82ff;
        }

        .listTabPanel-container
          .componentDetails-containter
          .hubspotActionForm-wrapper
          .buttons-section
          .deleteButton {
          background-color: #dc3545 !important;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotMappingForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotMappingForm-wrapper
          .ff-submit-btn-section {
          justify-content: flex-start;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotMappingForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          cursor: pointer;
          margin: 20px 2px;
          text-transform: capitalize;
          outline: none;
          border: none;
          font-weight: 600;
          padding: 8px 20px;
          font-size: 14px;
          border-radius: 50px;
          font-family: "Inter";
          color: #fff;
          background-color: #dc3545;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotMappingForm-wrapper
          .mappings-container {
          margin-top: 15px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotMappingForm-wrapper
          .mappings-container
          .mappings-header {
          margin: 10px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotMappingForm-wrapper
          .mappings-container
          .mappings-header
          .ff-textfield {
          max-width: 200px;
          margin-left: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .slotMappingForm-wrapper
          .mappings-container
          .mappings-header
          .buttons {
          display: flex;
          align-items: center;
          width: 65%;
          justify-content: flex-end;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .MuiSwitch-root {
          margin-top: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .ff-submit-btn-section {
          justify-content: flex-start;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .ff-submit-btn-section
          .deleteButton {
          cursor: pointer;
          margin: 20px 2px;
          text-transform: capitalize;
          outline: none;
          border: none;
          font-weight: 600;
          padding: 8px 20px;
          font-size: 14px;
          border-radius: 50px;
          font-family: "Inter";
          color: #fff;
          background-color: #dc3545;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .triggerRules-container {
          margin-top: 20px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .triggerRules-container
          .triggerRules-header {
          margin: 10px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .triggerRules-container
          .triggerRules-header
          .ff-textfield {
          max-width: 200px;
          margin-left: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .triggerRules-container
          .triggerRules-header
          .buttons {
          display: flex;
          align-items: center;
          width: 65%;
          justify-content: flex-end;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .trigger-rule-wrapper {
          border-radius: 4px;
          border: 1px solid #eaeaea;
          padding: 10px 15px;
          width: 100%;
          margin: 0 0 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .trigger-rule-wrapper
          label {
          color: #888;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .trigger-rule-wrapper
          .trigger-rule-header {
          display: flex;
          justify-content: space-between;
          position: relative;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .trigger-rule-wrapper
          .deleteTriggerRule {
          position: absolute;
          right: 5px;
          visibility: hidden;
          cursor: pointer;
          color: #000;
          font-size: 16px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .trigger-rule-wrapper:hover
          .deleteTriggerRule {
          visibility: visible;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .trigger-rule-wrapper
          .dynamic-msg-cnt
          .MuiSwitch-root {
          margin-top: 24px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .payload-cnt
          .MuiTextField-root,
        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .text-cnt
          .MuiTextField-root {
          margin-top: 16px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .payload-cnt
          label
          + .MuiInput-formControl,
        .listTabPanel-container
          .componentDetails-containter
          .twoStageFallbackActionConfigForm-wrapper
          .text-cnt
          label
          + .MuiInput-formControl {
          margin-top: 8px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .resetActions-wrapper {
          padding: 10px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .resetActions-wrapper
          .MuiGrid-item {
          margin-top: 8px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .resetActions-wrapper
          .slotRow {
          width: 100%;
          display: flex;
          position: relative;
          margin-top: 8px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .resetActions-wrapper
          .slotRow
          > div {
          padding: 8px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .resetActions-wrapper
          .slotRow
          .MuiTextField-root {
          margin-top: 24px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .resetActions-wrapper
          .slotRow
          .deleteSlot {
          position: absolute;
          right: 15px;
          top: 15px;
          visibility: hidden;
          cursor: pointer;
          color: #000;
          font-size: 16px;
        }

        .listTabPanel-container
          .componentDetails-containter
          .resetActions-wrapper
          .slotRow:hover
          .deleteSlot {
          visibility: visible;
        }

        .listTabPanel-container
          .componentDetails-containter
          .resetActions-wrapper
          .ff-submit-btn-section
          .deleteButton {
          cursor: pointer;
          margin: 20px 2px;
          text-transform: capitalize;
          outline: none;
          border: none;
          font-weight: 600;
          padding: 8px 20px;
          font-size: 14px;
          border-radius: 50px;
          font-family: "Inter";
          color: #fff;
          background-color: #dc3545;
        }

        .listTabPanel-container .addNew-button {
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

        .listTabPanel-container .addNew-button .addNew-button-cnt {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .listTabPanel-container .addNew-button .text {
          margin: 0;
          width: 80%;
          border: 0;
          outline: 0;
          background-color: inherit;
          color: #000;
          font-size: 14px;
        }

        .listTabPanel-container .addNew-button .text:focus {
          color: #000;
        }

        .listTabPanel-container
          .addNew-button
          .text::-webkit-input-placeholder {
          font-size: 14px;
          color: #000;
          font-weight: 400;
        }

        .listTabPanel-container .addNew-button .text::placeholder {
          font-size: 14px;
          color: #000;
          font-weight: 400;
        }

        .listTabPanel-container .addNew-button .icon {
          color: #888;
          font-size: 18px;
          margin-left: 5px;
        }

        .MuiListItem-root span.MuiListItemText-primary {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .Mui-selected.MuiListItem-root {
          background-color: #6c82ff;
          color: #fff;
        }

        .MuiChip-label {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .MuiChip-root {
          margin: 0 5px 5px 0;
          cursor: pointer;
          max-width: 90%;
        }

        .MuiChip-root > div {
          text-transform: uppercase;
        }

        .componentDetails-content {
          border-radius: 8px;
          border: 1px solid #eaeaea;
          background-color: #fff;
          padding: 10px;
          width: 100%;
        }

        .componentDetails-content .header {
          margin: 10px;
          display: flex;
          align-items: center;
        }

        .componentDetails-content .header .title-wrapper {
          display: flex;
          align-items: center;
        }

        .componentDetails-content .header .title-wrapper .icon {
          font-size: 16px;
          color: #6c82ff;
          margin-right: 8px;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        .componentDetails-content .header .title-wrapper .title {
          font-size: 16px;
          font-weight: 500;
          margin: 0;
        }

        .componentDetails-content .header .add-update-loader {
          margin-left: 10px;
        }

        .componentDetails-content .header .add-update-loader .progress-circle {
          width: 15px !important;
          height: 15px !important;
        }

        .componentDetails-content .form-note {
          margin: 0;
        }

        .componentDetails-content .form-note span {
          font-weight: 600;
        }

        .componentDetails-content .training-phrases-wrapper {
          height: calc(100% - 44px);
        }

        .componentDetails-content .training-phrases-wrapper .content-wrapper {
          height: 100%;
        }

        .componentDetails-content
          .training-phrases-wrapper
          .content-wrapper
          .list-wrapper {
          height: calc(100% - 120px);
        }

        .componentDetails-content
          .training-phrases-wrapper
          .content-wrapper
          .list-wrapper
          .list-item.pagination {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .componentDetails-content .responses-wrapper {
          height: calc(100% - 50px);
        }

        .componentDetails-content .responses-wrapper .content-wrapper {
          height: 100%;
        }

        .componentDetails-content
          .responses-wrapper
          .content-wrapper
          .list-wrapper {
          height: calc(100% - 150px);
        }

        .componentDetails-content
          .responses-wrapper
          .content-wrapper
          .list-item.pagination {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .componentDetails-content .responses-wrapper .radio-button {
          margin-left: auto;
          margin-right: 0;
          font-size: 13px;
          color: #404040;
        }

        .componentDetails-content
          .responses-wrapper
          .radio-button
          .MuiCheckbox-root {
          padding: 0 5px;
        }

        .componentDetails-content .responses-wrapper .json-button {
          color: #404040;
        }

        .componentDetails-content
          .responses-wrapper
          .json-button
          .MuiTypography-root {
          font-size: 14px;
        }

        .componentDetails-content .httpActionForm-wrapper {
          height: calc(100% - 44px);
        }

        .componentDetails-content .httpActionForm-wrapper .content-wrapper {
          height: 100%;
        }

        .componentsList-content {
          padding-bottom: 10px;
        }

        .componentsList-content .circular-progress-wrapper {
          display: inline-flex;
          position: relative;
          margin-left: 8px;
        }

        .componentsList-content .circular-progress-wrapper .success {
          color: #28a745;
        }

        .componentsList-content .circular-progress-wrapper .warning {
          color: #ffc107;
        }

        .componentsList-content .circular-progress-wrapper .danger {
          color: #dc3545;
        }

        .componentsList-content .circular-progress-wrapper .label-cnt {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }

        .componentsList-content
          .circular-progress-wrapper
          .label-cnt
          .small-label {
          font-size: 10px;
        }

        .componentsList-content
          .MuiListItem-root
          .cicular-progress-wrapper
          .success {
          color: #28a745;
        }

        .componentsList-content
          .MuiListItem-root
          .cicular-progress-wrapper
          .warning {
          color: #ffc107;
        }

        .componentsList-content
          .MuiListItem-root
          .cicular-progress-wrapper
          .danger {
          color: #dc3545;
        }

        .componentsList-content
          .MuiListItem-root
          .cicular-progress-wrapper
          .label-cnt
          .small-label {
          font-size: 10px;
        }

        .componentsList-content .MuiListItem-root .list-actions {
          display: flex;
          visibility: hidden;
          align-items: center;
          margin-left: 5px;
        }

        .componentsList-content
          .MuiListItem-root
          .list-actions
          .icon-button-clear {
          width: 32px;
          height: 32px;
        }

        .componentsList-content
          .MuiListItem-root
          .list-actions
          .icon-button-clear
          .ibc-icon {
          font-size: 20px;
        }

        .componentsList-content .MuiListItem-root .list-actions .delete-action {
          color: #dc3545;
          padding: 0;
        }

        .componentsList-content .MuiListItem-root:hover .list-actions {
          visibility: visible;
        }

        .componentsList-content
          .MuiListItem-root.Mui-selected
          .list-actions
          .delete-action {
          color: #fff;
        }

        .componentsList-content .componentsList .addNewRow {
          border: 1px solid #6c82ff;
          margin-top: 10px;
          border-radius: 4px;
          text-align: center;
          text-transform: capitalize;
        }

        .componentsList-content .componentsList .MuiListItem-root {
          min-height: 40px;
        }

        .componentsList-content .multipleComponentsList {
          border-radius: 4px;
          border: 1px solid #eaeaea;
          cursor: pointer;
        }

        .componentsList-content
          .multipleComponentsList
          .componentsList
          .addNewRow {
          margin-top: 15px;
        }

        .componentsList-content .multipleComponentsList .sub-list-btn {
          width: 100%;
          background: none;
          border: 0;
          border-bottom: 1px solid #eaeaea;
          font-weight: 500;
          text-align: left;
          padding: 20px 15px;
        }

        .componentsList-content .multipleComponentsList .sub-list-btn .sl-name {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .componentsList-content
          .multipleComponentsList
          .sub-list-btn
          .sl-name
          .sl-title {
          display: flex;
          align-items: center;
        }

        .componentsList-content
          .multipleComponentsList
          .sub-list-btn
          .sl-name
          .sl-title
          .icon {
          color: #2f45c5;
          margin-right: 10px;
          font-size: 16px;
        }

        .componentsList-content
          .multipleComponentsList
          .sub-list-btn
          .sl-name
          .icon-button-clear {
          color: #888;
          height: -webkit-max-content;
          height: max-content;
        }

        .componentsList-content
          .multipleComponentsList
          .sub-list-btn
          .sl-name
          .icon-button-clear
          .ibc-icon {
          font-size: 20px;
        }

        .componentsList-content
          .multipleComponentsList
          .sub-list-btn
          .sl-name
          .icon-button-clear:hover {
          color: #2f45c5;
        }

        .componentsList-content .multipleComponentsList .sub-list-selected {
          background-color: #fff;
          background-color: var(--bg);
          border-left: 3px solid #2f45c5;
        }

        .componentsList-content
          .multipleComponentsList
          .sub-list-selected
          .sl-name {
          margin-bottom: 10px;
        }

        .componentsList-content
          .multipleComponentsList
          .sub-list-selected
          .standAloneAction.sl-name {
          margin-bottom: 0;
        }

        .correspondingStories-containter {
          min-width: 200px;
        }

        .correspondingStories-containter .correspondingStories-content a {
          text-decoration: none;
        }

        .componentsList-containter {
          min-width: 200px;
        }
      }</style>
