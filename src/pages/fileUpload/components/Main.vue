<template>
  <div class="Main">
    <!-- header -->
    <div class="file-upload-head">
      <h1 class="app-heading">Advanced Configurations</h1>
      <router-link class="logs-link" :to="`/bot/${$route.params.id}/log`">
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
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM8 7v2h8V7H8zm0 4v2h8v-2H8zm0 4v2h5v-2H8z"
              ></path>
            </g>
          </svg>
        </div>
        Data Validation Logs
      </router-link>
    </div>
    <div class="file-upload-block">
      <div class="file-upload-wraper">
        <!-- 1 -->
        <div class="file-upload-row">
          <h3>Upload Files</h3>
          <div class="file-upload-row-container">
            <!-- 1-1 -->
            <div class="file-upload-cell">
              <div class="file-upload-dropzone">
                <section class="dropzoneContainer">
                  <div role="button" tabindex="0" class="dropzone">
                    <input
                      accept=".md, .yml, .zip"
                      multiple=""
                      type="file"
                      autocomplete="off"
                      tabindex="-1"
                      style="display: none"
                    />Click here or drop a file to upload!
                  </div>
                </section>
                File types must be .zip / .md / .yml.<br />Maximum file size is
                25MB.
              </div>
              <div class="file-upload-status">No files selected for upload</div>
            </div>
            <!-- 1-2 -->
            <div class="file-upload-cell valign">
              <h3 class="file-upload-title">Choose upload mode</h3>
              <div class="file-upload-cell">
                <div class="file-upload-vertical-align">
                  <label class="MuiFormControlLabel-root">
                    <span
                      class="MuiButtonBase-root MuiIconButton-root jss49 MuiCheckbox-root MuiCheckbox-colorPrimary validate-checkbox jss50 Mui-checked MuiIconButton-colorPrimary"
                      aria-disabled="false"
                    >
                      <span class="MuiIconButton-label">
                        <input
                          class="jss90"
                          name="validate"
                          type="checkbox"
                          data-indeterminate="false"
                          value=""
                          checked=""
                        />
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          ></path>
                        </svg>
                      </span>
                      <span class="MuiTouchRipple-root"></span
                    ></span>
                    <span
                      class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1"
                    >
                      <p class="list-text">Validate files</p>
                    </span>
                  </label>
                  <label class="MuiFormControlLabel-root">
                    <span
                      class="MuiButtonBase-root MuiIconButton-root jss49 MuiCheckbox-root MuiCheckbox-colorPrimary importControl-checkbox MuiIconButton-colorPrimary"
                      aria-disabled="false"
                    >
                      <span class="MuiIconButton-label">
                        <input
                          class="jss90"
                          name="importControl"
                          type="checkbox"
                          data-indeterminate="false"
                          value=""
                        />
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                          ></path>
                        </svg>
                      </span>
                      <span class="MuiTouchRipple-root"></span
                    ></span>
                    <span
                      class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1"
                    >
                      <p class="list-text">Import files</p>
                    </span>
                  </label>
                </div>
              </div>
              <div class="file-action-button upload-btn">
                <input type="file" class="input" />
                <div class="file-action-button-wrapper">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="file-downloadicon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"
                    ></path>
                    <path
                      d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"
                    ></path>
                  </svg>
                </div>
                Upload files
              </div>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="file-upload-row">
          <h3>Download Resources</h3>
          <div class="file-upload-row-container">
            <div class="file-upload-cell">
              <div class="file-download-card">
                <div class="file-download-card-header">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    class="file-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"
                    ></path>
                  </svg>
                  Training Files
                </div>
                <div class="file-download-card-content">
                  Bot configuration and data files which can be downloaded and
                  modified to your needs. These files can be uploaded again to
                  train new models.
                </div>
                <div class="file-action-button">
                  <input type="file" class="input" />
                  <div class="file-action-button-wrapper">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      class="file-downloadicon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"
                      ></path>
                      <path
                        d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"
                      ></path>
                    </svg>
                  </div>
                  File Download
                </div>
              </div>
              <div class="file-download-card">
                <div class="file-download-card-header">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="file-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14h2z"
                      ></path>
                    </g>
                  </svg>
                  Training Model
                </div>
                <div class="file-download-card-content">
                  Model file which can be downloaded. This model contains data
                  which is currently in kAIron You can deploy this model to
                  other bot instance.
                </div>
                <div class="file-action-button">
                  <input type="file" class="input" />
                  <div class="file-action-button-wrapper">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      class="file-downloadicon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"
                      ></path>
                      <path
                        d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"
                      ></path>
                    </svg>
                  </div>
                  Model Download
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="less" scoped>
.Main {
  background-color: #fdfdfd;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 34px 40px;
  height: 100%;
  .file-upload-head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logs-link {
      text-decoration: none;
      letter-spacing: 1px;
      color: #2f45c5;
      cursor: pointer;
      outline: none;
      border: none;
      background-color: #6c82ff;
      height: 32px;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      padding: 3px 20px 3px 3px;
      display: flex;
      align-items: center;
      transition: background-color 0.2s ease;
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
    }
  }
  .file-upload-block {
    margin: 20px 0;
    .file-upload-wraper {
      margin: 10px 0;
      .file-upload-row {
        width: 100%;
        height: 50%;
        border-bottom: 1px solid #f0f0f0;
        border-bottom: 1px solid var(--border1);
        margin: 10px 0;
        .file-upload-row-container {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100%;
          .file-upload-title {
            margin: 0;
            padding-bottom: 5px;
            color: #404040;
            font-size: 16px;
            font-weight: 400;
          }
          .file-upload-cell {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: row;
            margin: 10px 0;
            &.valign {
              flex-direction: column;
              .file-upload-cell {
                width: 100%;
                .file-upload-vertical-align {
                  width: 250px;
                }
              }
              .file-action-button {
                width: 40%;
              }
            }
            .file-action-button {
              cursor: pointer;
              outline: none;
              font-size: 14px;
              font-weight: 600;
              background-color: #6c82ff;
              border: none;
              color: #fff;
              border-radius: 18px;
              height: 36px;
              display: flex;
              align-items: center;
              padding: 0 4px 0 18px;
              transition: background-color 0.2s ease;
              width: 100%;
              justify-content: center;
              position: relative;
              .input {
                position: absolute;
                opacity: 0;
              }
              .file-action-button-wrapper {
                background-color: #2f45c5;
                width: 28px;
                height: 28px;
                margin-right: 10px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: background-color 0.2s ease;
                .file-downloadicon {
                  width: 16px;
                  height: 16px;
                }
              }
              &:hover {
                background-color: rgba(108, 130, 255, 0.8);
                .file-download-action-wrapper {
                  background-color: rgba(47, 69, 197, 0.8);
                }
              }
            }
            .file-upload-dropzone {
              width: 50%;
              .dropzoneContainer {
                width: 100%;
                margin: 10px 10px 10px 0;
                .dropzone {
                  display: flex;
                  height: 160px;
                  justify-content: center;
                  align-items: center;
                  border-radius: 5px;
                  border: 1px dashed #c1c1c1;
                }
              }
            }
            .file-upload-status {
              width: 50%;
              height: 100%;
              overflow-y: auto;
              text-align: center;
              vertical-align: middle;
              margin: 10px 20px;
              .file-name-row {
                height: 35px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .file-deleteicon {
                  display: none;
                  font-size: 1.2em;
                  cursor: pointer;
                }
                &:hover {
                  .file-deleteicon {
                    display: block;
                  }
                }
              }
            }
            .file-download-card {
              width: 50%;
              border: 1px solid #f0f0f0;
              padding: 10px;
              margin: 10px 20px 10px 0;
              .file-icon {
                color: #2f45c5;
                margin-right: 6px;
                font-size: 1.2em;
                vertical-align: sub;
              }
              .file-download-card-content {
                margin: 10px 0;
                color: #888;
                font-size: 0.8em;
              }
            }
            .MuiFormControlLabel-root {
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              margin-left: -11px;
              margin-right: 16px;
              vertical-align: middle;
              -webkit-tap-highlight-color: transparent;
              .MuiCheckbox-colorPrimary {
                -webkit-font-smoothing: antialiased;
                font-family: Inter, Arial;
                font-weight: 400;
                line-height: 1.43;
                box-sizing: inherit;
                border: 0;
                cursor: pointer;
                margin: 0;
                display: inline-flex;
                outline: 0;
                position: relative;
                align-items: center;
                user-select: none;
                vertical-align: middle;
                justify-content: center;
                text-decoration: none;
                background-color: transparent;
                -webkit-appearance: none;
                -webkit-tap-highlight-color: transparent;
                flex: 0 0 auto;
                overflow: visible;
                font-size: 1.5rem;
                text-align: center;
                transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)
                  0ms;
                border-radius: 50%;
                padding: 9px;
                color: #2f45c5;
                &.Mui-checked {
                  color: #2f45c5;
                  padding: 9px;
                }
                .jss90 {
                  -webkit-font-smoothing: antialiased;
                  user-select: none;
                  -webkit-tap-highlight-color: transparent;
                  box-sizing: inherit;
                  top: 0;
                  left: 0;
                  width: 100%;
                  cursor: inherit;
                  height: 100%;
                  margin: 0;
                  opacity: 0;
                  padding: 0;
                  z-index: 1;
                  position: absolute;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
