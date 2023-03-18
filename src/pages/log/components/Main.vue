<template>
  <div class="Main">
    <!-- 上 -->
    <div class="logview-wrapper">
      <div class="logview-header">
        <h1 class="app-heading">Logs</h1>
        <div type="button" class="icon-button-clear refresh-btn">
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
              d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"
            ></path>
          </svg>
        </div>
        <button
          type="button"
          class="icon-button-clear download-btn"
          title="Download logs"
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
            <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
          </svg>
        </button>
      </div>
      <div class="logview-menu-grp">
        <div class="logview-menu-wrapper">
          <button
            type="button"
            class="icon-button-clear arrow-btn hide-arrow-btn"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="ibc-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="logview-menu">
            <div>
              <button
                type="button"
                class="logview-menu-item logview-menu-selected"
              >
                Action Logs</button
              ><button type="button" class="logview-menu-item">
                Data Validation Logs</button
              ><button type="button" class="logview-menu-item">
                Model Testing Logs</button
              ><button type="button" class="logview-menu-item">
                Live Agent Logs</button
              ><button type="button" class="logview-menu-item">
                Delete History Logs</button
              ><button type="button" class="logview-menu-item">
                MultiLingual Logs</button
              ><button type="button" class="logview-menu-item">
                Audit Logs
                <div class="date-btn-wrapper" title="2023-02-16 to 2023-03-18">
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
                      d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <button
            type="button"
            class="icon-button-clear arrow-btn show-arrow-btn"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="ibc-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="logview-btn"></div>
      </div>
    </div>
    <!-- 下 -->
    <div class="httplogs-wrapper">
      <div class="logs-table-wrapper">
        <div class="logs-table">
          <div class="tableWrap">
            <table role="table">
              <thead>
                <tr>
                  <th colspan="6" style="text-align: left">
                    <div class="ui-search">
                      <div class="selected-tags-wrapper"></div>
                      <input
                        type="text"
                        class="ui-search-field"
                        placeholder="Search in 1 records..."
                        value=""
                      /><svg
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
                  </th>
                </tr>
                <tr role="row" class="thead">
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="
                      cursor: pointer;
                      min-width: 0px;
                      width: 150px;
                      max-width: 9.0072e15px;
                    "
                  >
                    Action Name
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="
                      cursor: pointer;
                      min-width: 0px;
                      width: 150px;
                      max-width: 9.0072e15px;
                    "
                  >
                    Action Type
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="
                      cursor: pointer;
                      min-width: 0px;
                      width: 150px;
                      max-width: 9.0072e15px;
                    "
                  >
                    Intent
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="
                      cursor: pointer;
                      min-width: 0px;
                      width: 150px;
                      max-width: 9.0072e15px;
                    "
                  >
                    Timestamp
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="
                      cursor: pointer;
                      min-width: 0px;
                      width: 150px;
                      max-width: 9.0072e15px;
                    "
                  >
                    Sender
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="
                      cursor: pointer;
                      min-width: 0px;
                      width: 150px;
                      max-width: 9.0072e15px;
                    "
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                <tr role="row" class="table-row">
                  <td
                    role="cell"
                    style="min-width: 0px; width: 150px; max-width: 9.0072e15px"
                  >
                    <div
                      title="utter_please_rephrase"
                      class="log-data log-details-button"
                      role="button"
                      tabindex="0"
                    >
                      utter_please_rephrase
                    </div>
                  </td>
                  <td
                    role="cell"
                    style="min-width: 0px; width: 150px; max-width: 9.0072e15px"
                  >
                    <p
                      title="kairon_bot_response"
                      class="log-data"
                      style="max-width: 300px"
                    >
                      kairon_bot_response
                    </p>
                  </td>
                  <td
                    role="cell"
                    style="min-width: 0px; width: 150px; max-width: 9.0072e15px"
                  >
                    <p title="mood_great" class="log-data">mood_great</p>
                  </td>
                  <td
                    role="cell"
                    style="min-width: 0px; width: 150px; max-width: 9.0072e15px"
                  >
                    <p title="March 18, 2023 10:44 AM" class="log-data">
                      March 18, 2023
                    </p>
                  </td>
                  <td
                    role="cell"
                    style="min-width: 0px; width: 150px; max-width: 9.0072e15px"
                  >
                    <p title="sjzhengzoe@gmail.com" class="log-data">
                      sjzhengzoe@gmail.com
                    </p>
                  </td>
                  <td
                    role="cell"
                    style="min-width: 0px; width: 150px; max-width: 9.0072e15px"
                  >
                    <div class="log-data">
                      <p class="log-status log-success">success</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="logs-footer">
        <nav aria-label="pagination navigation" class="MuiPagination-root">
          <ul class="MuiPagination-ul">
            <li>
              <button
                class="Mui-disabled MuiPaginationItem-sizeSmall"
                tabindex="-1"
                type="button"
                disabled=""
                aria-label="Go to first page"
              >
                <svg
                  class="MuiSvgIcon-root MuiPaginationItem-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button
                class="Mui-disabled MuiPaginationItem-sizeSmall"
                tabindex="-1"
                type="button"
                disabled=""
                aria-label="Go to previous page"
              >
                <svg
                  class="MuiSvgIcon-root MuiPaginationItem-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button
                class="Mui-selected MuiPaginationItem-sizeSmall"
                tabindex="0"
                type="button"
                aria-label="page 1"
                aria-current="true"
              >
                1<span class="MuiTouchRipple-root"></span>
              </button>
            </li>
            <li>
              <button
                class="Mui-disabled MuiPaginationItem-sizeSmall"
                tabindex="-1"
                type="button"
                disabled=""
                aria-label="Go to next page"
              >
                <svg
                  class="MuiSvgIcon-root MuiPaginationItem-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button
                class="MuiPaginationItem-sizeSmall Mui-disabled"
                tabindex="-1"
                type="button"
                disabled=""
                aria-label="Go to last page"
              >
                <svg
                  class="MuiSvgIcon-root MuiPaginationItem-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
        <div class="per-page-count">
          <div class="label" data-shrink="true">Records Per Page</div>
          <div class="input_box">
            <input
              aria-invalid="false"
              placeholder="Records Per Page"
              type="number"
              min="0"
              class="input"
              value="10"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="less" scoped>
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
  color: #000;
  .ibc-icon {
    font-size: 20px;
  }
}
.Main {
  background-color: #fdfdfd;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 34px 40px;
  height: 100%;
  // 上
  .logview-wrapper {
    display: flex;
    align-items: center;
    .logview-header {
      display: flex;
      width: 130px;
      margin-right: 10px;
      align-items: center;

      .app-heading {
        margin-right: 10px;
        font-size: 24px;
        font-weight: 600;
      }

      .download-btn,
      .refresh-btn {
        color: #000;
      }
    }

    .logview-menu-grp {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
      position: relative;
      width: calc(100% - 130px);

      .arrow-btn {
        cursor: pointer;
        color: #000;
      }

      .show-arrow-btn {
        visibility: visible;
      }

      .hide-arrow-btn {
        visibility: hidden;
      }

      .logview-menu-wrapper {
        display: flex;
        align-items: center;
        grid-gap: 1rem;
        gap: 1rem;
        width: calc(100% - 240px);

        .logview-menu {
          width: calc(100% - 72px);
          overflow-x: scroll;
          scroll-behavior: smooth;

          &::-webkit-scrollbar {
            background: transparent;
            -webkit-appearance: none;
            width: 0;
            height: 0;
          }

          > div {
            display: flex;
            align-items: center;
          }

          .logview-menu-item {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            text-decoration: none;
            padding: 8px 12px;
            margin: 4px 8px 4px 0;
            border-radius: 5px;
            outline: none;
            background-color: hsla(0, 0%, 53.3%, 0.0862745);
            font-family: "Inter";
            font-size: 12px;
            font-weight: 500;
            border: none;
            color: #404040;
            text-transform: capitalize;
            cursor: pointer;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            .date-btn-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 6px;

              svg {
                width: 15px;
                height: 15px;
              }
            }

            &.logview-menu-selected {
              background-color: #2f45c5;
              color: #fff;
            }
          }
        }
      }

      .logview-btn {
        max-width: 240px;
        min-width: 240px;
        display: flex;
        justify-content: flex-end;

        .app-btn-icon {
          max-width: 100%;

          .btn-icon-wrapper {
            .loader {
              color: inherit;
              width: 20px !important;
              height: 20px !important;
            }
          }

          span {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  // 下
  .httplogs-wrapper {
    .logs-header {
      display: flex;
      align-items: center;
      .app-heading {
        margin-right: 10px;
      }
      .icon-button-clear {
        height: 32px;
        width: 32px;
        .ibc-icon {
          font-size: 22px;
          color: #000;
        }
      }
    }
    .logs-table-wrapper {
      height: calc(100vh - 250px);
      margin-top: 30px;
      .logs-table {
        margin: 10px 0;
        .tableWrap {
          max-width: 100%;
          height: 100%;
          table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;
            width: 100%;
            height: calc(100% - 55px);
          }
        }
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
        td {
          min-width: auto;
        }
        .log-data {
          margin: 4px 0;
          max-width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .log-details-button {
          color: #2f45c5;
          cursor: pointer;
        }
      }
    }
    .logs-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .MuiPagination-ul {
        margin: 0;
        display: flex;
        padding: 0;
        flex-wrap: wrap;
        list-style: none;
        align-items: center;
        .MuiPaginationItem-sizeSmall {
          border: 0;
          display: inline-flex;
          position: relative;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: rgba(0, 0, 0, 0.87);
          font-size: 0.875rem;
          box-sizing: border-box;
          text-align: center;
          font-weight: 400;
          line-height: 1.43;
          height: 26px;
          margin: 0 1px;
          padding: 0 4px;
          min-width: 26px;
          border-radius: 13px;
          cursor: default;
          pointer-events: none;
        }
        .Mui-selected {
          border: 0;
          cursor: pointer;
          font-size: 0.875rem;
          box-sizing: border-box;
          text-align: center;
          line-height: 1.43;
          height: 26px;
          margin: 0 1px;
          padding: 0 4px;
          min-width: 26px;
          border-radius: 13px;
          color: #fff;
          background-color: #2f45c5;
        }
      }
      .per-page-count {
        position: relative;
        .label {
          color: rgba(0, 0, 0, 0.54);
          padding: 0;
          font-size: 1rem;
          display: block;
          top: 0;
          left: 0;
          position: absolute;
          transform: translate(0, 1.5px) scale(0.75);
          transform-origin: top left;
          transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
            transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        }
        .input_box {
          -webkit-font-smoothing: antialiased;
          color: rgba(0, 0, 0, 0.87);
          cursor: text;
          display: inline-flex;
          font-size: 1rem;
          box-sizing: border-box;
          align-items: center;
          font-family: Inter, Arial;
          font-weight: 400;
          line-height: 1.1876em;
          position: relative;
          margin-top: 16px;
          &:before {
            left: 0;
            right: 0;
            bottom: 0;
            content: "\00a0";
            position: absolute;
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1)
              0ms;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42);
            pointer-events: none;
          }
          &:after {
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            position: absolute;
            transform: scaleX(0);
            transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            border-bottom: 2px solid #2f45c5;
            pointer-events: none;
          }
          .input {
            -webkit-font-smoothing: antialiased;
            font: inherit;
            color: currentColor;
            width: 100%;
            border: 0;
            height: 1.1876em;
            margin: 0;
            display: block;
            padding: 6px 0 7px;
            min-width: 0;
            background: none;
            box-sizing: content-box;
            animation-name: mui-auto-fill-cancel;
            letter-spacing: inherit;
            animation-duration: 10ms;
            -webkit-tap-highlight-color: transparent;
            padding-top: 3px;
          }
        }
      }
    }
  }
}
</style>
