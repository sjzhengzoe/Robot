<template>
  <div class="Main">
    <div class="header_box">
      <h1 class="title">Analytics</h1>
      <div class="icons">
        <!-- settings -->
        <div class="settings">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewbox="0 0 24 24"
            class="ibc-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
            ></path>
          </svg>
        </div>
        <!-- toggle -->
        <div class="toggle">
          <div class="left"></div>
          <div class="bg"></div>
        </div>
      </div>
    </div>

    <div class="content_box">
      <div class="analytics-dashboard">
        <div class="analytics-widget-cnt">
          <div class="react-grid-layout" style="height: 1610px">
            <!-- 1 -->
            <div
              class="item_box"
              style="
                width: 247px;
                height: 310px;
                position: absolute;
                transform: translate(10px, 10px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">Conversations</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="content">
                <div style="min-height: 151.2px">
                  <div
                    class="apexcharts-canvas"
                    style="width: 207px; height: 151.2px"
                  >
                    <svg
                      width="207"
                      height="151.20000000000002"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      class="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style="background: transparent"
                    >
                      <g
                        id="SvgjsG3212"
                        class="apexcharts-inner apexcharts-graphical"
                        transform="translate(30.25, 0)"
                      >
                        <defs id="SvgjsDefs3211">
                          <clippath id="gridRectMaskanwha2yc">
                            <rect
                              id="SvgjsRect3214"
                              width="154.5"
                              height="172.5"
                              x="-3"
                              y="-1"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clippath>
                          <clippath id="forecastMaskanwha2yc"></clippath>
                          <clippath id="nonForecastMaskanwha2yc"></clippath>
                          <clippath id="gridRectMarkerMaskanwha2yc">
                            <rect
                              id="SvgjsRect3215"
                              width="152.5"
                              height="174.5"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clippath>
                          <filter
                            id="SvgjsFilter3226"
                            filterunits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feflood
                              id="SvgjsFeFlood3227"
                              flood-color="#000000"
                              flood-opacity="0.45"
                              result="SvgjsFeFlood3227Out"
                              in="SourceGraphic"
                            ></feflood>
                            <fecomposite
                              id="SvgjsFeComposite3228"
                              in="SvgjsFeFlood3227Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite3228Out"
                            ></fecomposite>
                            <feoffset
                              id="SvgjsFeOffset3229"
                              dx="1"
                              dy="1"
                              result="SvgjsFeOffset3229Out"
                              in="SvgjsFeComposite3228Out"
                            ></feoffset>
                            <fegaussianblur
                              id="SvgjsFeGaussianBlur3230"
                              stddeviation="1 "
                              result="SvgjsFeGaussianBlur3230Out"
                              in="SvgjsFeOffset3229Out"
                            ></fegaussianblur>
                            <femerge
                              id="SvgjsFeMerge3231"
                              result="SvgjsFeMerge3231Out"
                              in="SourceGraphic"
                            >
                              <femergenode
                                id="SvgjsFeMergeNode3232"
                                in="SvgjsFeGaussianBlur3230Out"
                              ></femergenode>
                              <femergenode
                                id="SvgjsFeMergeNode3233"
                                in="[object Arguments]"
                              ></femergenode>
                            </femerge>
                            <feblend
                              id="SvgjsFeBlend3234"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge3231Out"
                              mode="normal"
                              result="SvgjsFeBlend3234Out"
                            ></feblend>
                          </filter>
                        </defs>
                        <g id="SvgjsG3216" class="apexcharts-pie">
                          <g
                            id="SvgjsG3217"
                            transform="translate(0, 0) scale(1)"
                          >
                            <circle
                              id="SvgjsCircle3218"
                              r="43.18536585365854"
                              cx="74.25"
                              cy="74.25"
                              fill="transparent"
                            ></circle>
                            <g id="SvgjsG3219" class="apexcharts-slices">
                              <g
                                id="SvgjsG3220"
                                class="apexcharts-series apexcharts-pie-series"
                                seriesname="Successful"
                                rel="1"
                                data:realindex="0"
                              >
                                <path
                                  id="SvgjsPath3221"
                                  d="M 74.25 7.810975609756085 A 66.43902439024392 66.43902439024392 0 0 1 74.25 7.810975609756085 L 74.25 31.06463414634146 A 43.18536585365854 43.18536585365854 0 0 0 74.25 31.06463414634146 L 74.25 7.810975609756085 z"
                                  fill="rgba(40,167,69,1)"
                                  fill-opacity="1"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-pie-area apexcharts-donut-slice-0"
                                  index="0"
                                  j="0"
                                  data:angle="0"
                                  data:startangle="0"
                                  data:strokewidth="2"
                                  data:value="0"
                                  data:pathorig="M 74.25 7.810975609756085 A 66.43902439024392 66.43902439024392 0 0 1 74.25 7.810975609756085 L 74.25 31.06463414634146 A 43.18536585365854 43.18536585365854 0 0 0 74.25 31.06463414634146 L 74.25 7.810975609756085 z"
                                  stroke="#ffffff"
                                ></path>
                              </g>
                              <g
                                id="SvgjsG3222"
                                class="apexcharts-series apexcharts-pie-series"
                                seriesname="Failed"
                                rel="2"
                                data:realindex="1"
                              >
                                <path
                                  id="SvgjsPath3223"
                                  d="M 74.25 7.810975609756085 A 66.43902439024392 66.43902439024392 0 1 1 74.23840420278464 7.8109766216802825 L 74.24246273181001 31.064634804092194 A 43.18536585365854 43.18536585365854 0 1 0 74.25 31.06463414634146 L 74.25 7.810975609756085 z"
                                  fill="rgba(255,193,7,1)"
                                  fill-opacity="1"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-pie-area apexcharts-donut-slice-1"
                                  index="0"
                                  j="1"
                                  data:angle="360"
                                  data:startangle="0"
                                  data:strokewidth="2"
                                  data:value="1"
                                  data:pathorig="M 74.25 7.810975609756085 A 66.43902439024392 66.43902439024392 0 1 1 74.23840420278464 7.8109766216802825 L 74.24246273181001 31.064634804092194 A 43.18536585365854 43.18536585365854 0 1 0 74.25 31.06463414634146 L 74.25 7.810975609756085 z"
                                  stroke="#ffffff"
                                ></path>
                              </g>
                              <g id="SvgjsG3224" class="apexcharts-datalabels">
                                <text
                                  id="SvgjsText3225"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="74.25"
                                  y="129.06219512195122"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="12px"
                                  font-weight="600"
                                  fill="#ffffff"
                                  class="apexcharts-text apexcharts-pie-label"
                                  filter="url(#SvgjsFilter3226)"
                                  style="
                                    font-family: Helvetica, Arial, sans-serif;
                                  "
                                >
                                  1
                                </text>
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG3235"
                            class="apexcharts-datalabels-group"
                            transform="translate(0, 0) scale(1)"
                          >
                            <text
                              id="SvgjsText3236"
                              font-family="Helvetica, Arial, sans-serif"
                              x="74.25"
                              y="64.25"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="12px"
                              font-weight="400"
                              fill="#888888"
                              class="apexcharts-text apexcharts-datalabel-label"
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                fill: rgb(136, 136, 136);
                              "
                            >
                              Successful
                            </text>
                            <text
                              id="SvgjsText3237"
                              font-family="Helvetica, Arial, sans-serif"
                              x="74.25"
                              y="100.25"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="20px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-datalabel-value"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              0%
                            </text>
                          </g>
                        </g>
                        <line
                          id="SvgjsLine3238"
                          x1="0"
                          y1="0"
                          x2="148.5"
                          y2="0"
                          stroke="#b6b6b6"
                          stroke-dasharray="0"
                          stroke-width="1"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs"
                        ></line>
                        <line
                          id="SvgjsLine3239"
                          x1="0"
                          y1="0"
                          x2="148.5"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs-hidden"
                        ></line>
                      </g>
                      <g id="SvgjsG3213" class="apexcharts-annotations"></g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <!-- 2 -->
            <div
              class="item_box"
              style="
                width: 847px;
                height: 310px;
                position: absolute;
                transform: translate(10px, 330px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">User Metrics</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="cards-wrapper content">
                <div class="statCard-wrapper">
                  <div
                    class="info-icon-wrapper"
                    title="Percentage count of the users that had multiple conversations with the bot"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewbox="0 0 512 512"
                      class="info-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                      ></path>
                    </svg>
                  </div>
                  <div class="icon-container">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewbox="0 0 24 24"
                      class="icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h2 class="stat-data">100.00%</h2>
                  <p class="stat-text">User Retention</p>
                </div>
                <div class="statCard-wrapper">
                  <div
                    class="info-icon-wrapper"
                    title="Count of new users that engaged with the bot"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewbox="0 0 512 512"
                      class="info-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                      ></path>
                    </svg>
                  </div>
                  <div class="icon-container">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewbox="0 0 20 20"
                      aria-hidden="true"
                      class="icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                      ></path>
                    </svg>
                  </div>
                  <h2 class="stat-data">0</h2>
                  <p class="stat-text">New Users</p>
                </div>
                <div class="statCard-wrapper">
                  <div
                    class="info-icon-wrapper"
                    title="Number of users that had long conversations with the bot"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewbox="0 0 512 512"
                      class="info-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                      ></path>
                    </svg>
                  </div>
                  <div class="icon-container">
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
                        d="M450.679 273.5c-14.585-14.577-36.054-15.89-50.639-1.312l-41.687 41.664c-10.852 10.836-23.93 10.859-31.564 1.852-5.057-5.968-3.061-24.374-1.644-36.049l20.907-171.849c1.867-15.353-9.07-30.185-24.43-32.051-15.358-1.867-29.322 9.939-31.191 25.289L267.37 236.021c-1.205 3.358-3.79 3.938-4.081-.582L255.44 60c0-15.465-12.542-28-28.014-28-15.473 0-28.015 12.535-28.015 28l-.552 176.752c.146 2.04-1.604 2.624-1.92.294L172.016 99.077c-2.75-15.219-17.323-26.203-32.548-23.453-15.227 2.748-25.339 18.187-22.591 33.403l22.193 161.455c.023 2.872-.941 4.513-2.308.831l-33.109-88.517c-5.18-14.572-21.196-23.065-35.776-17.889-14.579 5.177-22.201 22.061-17.023 36.631l58.042 189.625c.303 1.046.624 2.085.953 3.118l.121.39c.011.031.025.058.035.088C126.079 444.233 172.57 480 227.427 480c35.116 0 71.591-12.378 99.357-33.672l.003-.002c29.99-18.051 126.071-121.347 126.071-121.347 14.587-14.577 12.408-36.899-2.179-51.479z"
                      ></path>
                    </svg>
                  </div>
                  <h2 class="stat-data">0</h2>
                  <p class="stat-text">Engaged Users</p>
                </div>
                <div class="statCard-wrapper">
                  <div class="info-icon-wrapper">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewbox="0 0 512 512"
                      class="info-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                      ></path>
                    </svg>
                  </div>
                  <div class="icon-container">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewbox="0 0 24 24"
                      class="icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M9 18H4v-8h5v8zm6 0h-5V6h5v12zm6 0h-5V2h5v16zm1 4H3v-2h19v2z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h2 class="stat-data">1</h2>
                  <p class="stat-text">Avg. Conversation Steps</p>
                </div>
              </div>
            </div>
            <!-- 3 -->
            <div
              class="item_box fallbackStats"
              style="
                width: 333px;
                height: 310px;
                position: absolute;
                transform: translate(10px, 650px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">FallBack</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="content">
                <div class="fallback-stats-cnt">
                  <div class="fallback-percent">100%</div>
                  <div class="fallback-percent-text">Fallback Percentage</div>
                  <div class="fallback-count">
                    <span>Fallback count: </span>
                    <span class="count">
                      1
                      <span
                        title="Check all the fallback instances in Chat History"
                        class=""
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewbox="0 0 24 24"
                          class="info-icon"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="threshold-cnt">
                  <div class="threshold-count">
                    <span>Fallback intent Threshold: </span>
                    <span class="count">0.7</span>
                  </div>
                  <div class="threshold-count">
                    <span>Fallback action Threshold: </span>
                    <span class="count">0.3</span>
                  </div>
                  <p class="config-link">
                    <span>Click here</span> to configure thresholds
                  </p>
                </div>
              </div>
            </div>
            <!-- 4 -->
            <div
              class="topIntents item_box"
              style="
                width: 247px;
                height: 310px;
                position: absolute;
                transform: translate(610px, 10px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">Top Intents</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="content">
                <ul>
                  <li title="nlu_fallback">
                    <span>nlu_fallback</span>
                    <span class="count">1</span>
                    <span class="bar-cnt">
                      <span class="bar-fill" style="width: 100%"> </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 5 -->
            <div
              class="topActions item_box"
              style="
                width: 333px;
                height: 310px;
                position: absolute;
                transform: translate(267px, 10px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">Top Actions</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="content">
                <ul>
                  <li title="utter_please_rephrase">
                    <span>utter_please_rephrase</span>
                    <span class="count">1</span>
                    <span class="bar-cnt">
                      <span class="bar-fill" style="width: 100%"> </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 6 -->
            <div
              class="trendAnalysis item_box"
              style="
                width: 847px;
                height: 310px;
                position: absolute;
                transform: translate(10px, 970px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">Trend Analysis</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="content">
                <div class="tags-container">
                  <div
                    title="Monthly Unique Users"
                    class="tag tag-selected"
                    role="button"
                    tabindex="0"
                    style="min-width: 20ch"
                  >
                    <span>Monthly Unique Users</span>
                  </div>
                  <div
                    title="Successful Conversations (Sessions)"
                    class="tag"
                    role="button"
                    tabindex="0"
                  >
                    <span>Successful Conversations (Sessions)</span>
                  </div>
                  <div
                    title="Conversation Steps"
                    class="tag"
                    role="button"
                    tabindex="0"
                  >
                    <span>Conversation Steps</span>
                  </div>
                  <div
                    title="User Retention %"
                    class="tag"
                    role="button"
                    tabindex="0"
                  >
                    <span>User Retention %</span>
                  </div>
                  <div title="New Users" class="tag" role="button" tabindex="0">
                    <span>New Users</span>
                  </div>
                  <div
                    title="Engaged Users"
                    class="tag"
                    role="button"
                    tabindex="0"
                  >
                    <span>Engaged Users</span>
                  </div>
                  <div
                    title="Fallback %"
                    class="tag"
                    role="button"
                    tabindex="0"
                  >
                    <span>Fallback %</span>
                  </div>
                </div>
                <div class="charts-wrapper">
                  <div style="min-height: 194px">
                    <div
                      class="apexcharts-canvas"
                      style="width: 807px; height: 179px"
                    >
                      <svg
                        id="SvgjsSvg3262"
                        width="807"
                        height="179"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev"
                        class="apexcharts-svg apexcharts-zoomable"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style="background: transparent"
                      >
                        <rect
                          id="SvgjsRect3269"
                          width="0"
                          height="0"
                          x="0"
                          y="0"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fefefe"
                        ></rect>
                        <g
                          id="SvgjsG3313"
                          class="apexcharts-yaxis"
                          rel="0"
                          transform="translate(13.125, 0)"
                        >
                          <g id="SvgjsG3314" class="apexcharts-yaxis-texts-g">
                            <text
                              id="SvgjsText3316"
                              font-family="Helvetica, Arial, sans-serif"
                              x="20"
                              y="31.5"
                              text-anchor="end"
                              dominant-baseline="auto"
                              font-size="11px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-yaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3317">5</tspan>
                              <title>5</title>
                            </text>
                            <text
                              id="SvgjsText3319"
                              font-family="Helvetica, Arial, sans-serif"
                              x="20"
                              y="53.769600000000004"
                              text-anchor="end"
                              dominant-baseline="auto"
                              font-size="11px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-yaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3320">4</tspan>
                              <title>4</title>
                            </text>
                            <text
                              id="SvgjsText3322"
                              font-family="Helvetica, Arial, sans-serif"
                              x="20"
                              y="76.03920000000001"
                              text-anchor="end"
                              dominant-baseline="auto"
                              font-size="11px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-yaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3323">3</tspan>
                              <title>3</title>
                            </text>
                            <text
                              id="SvgjsText3325"
                              font-family="Helvetica, Arial, sans-serif"
                              x="20"
                              y="98.30880000000002"
                              text-anchor="end"
                              dominant-baseline="auto"
                              font-size="11px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-yaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3326">2</tspan>
                              <title>2</title>
                            </text>
                            <text
                              id="SvgjsText3328"
                              font-family="Helvetica, Arial, sans-serif"
                              x="20"
                              y="120.57840000000002"
                              text-anchor="end"
                              dominant-baseline="auto"
                              font-size="11px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-yaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3329">1</tspan>
                              <title>1</title>
                            </text>
                            <text
                              id="SvgjsText3331"
                              font-family="Helvetica, Arial, sans-serif"
                              x="20"
                              y="142.848"
                              text-anchor="end"
                              dominant-baseline="auto"
                              font-size="11px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-yaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3332">0</tspan>
                              <title>0</title>
                            </text>
                          </g>
                          <g id="SvgjsG3333" class="apexcharts-yaxis-title">
                            <text
                              id="SvgjsText3334"
                              font-family="Helvetica, Arial, sans-serif"
                              x="55.9609375"
                              y="85.674"
                              text-anchor="end"
                              dominant-baseline="auto"
                              font-size="13px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-yaxis-title-text apexcharts-yaxis-title"
                              style="font-family: Helvetica, Arial, sans-serif"
                              transform="rotate(-90 -1.125 81.17400360107422)"
                            >
                              Total Conversations
                            </text>
                          </g>
                        </g>
                        <g
                          id="SvgjsG3264"
                          class="apexcharts-inner apexcharts-graphical"
                          transform="translate(43.125, 30)"
                        >
                          <defs id="SvgjsDefs3263">
                            <clippath id="gridRectMaskdij83ifv">
                              <rect
                                id="SvgjsRect3271"
                                width="749.3390625"
                                height="114.14800000000001"
                                x="-3.4"
                                y="-1.4"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clippath>
                            <clippath id="forecastMaskdij83ifv"></clippath>
                            <clippath id="nonForecastMaskdij83ifv"></clippath>
                            <clippath id="gridRectMarkerMaskdij83ifv">
                              <rect
                                id="SvgjsRect3272"
                                width="746.5390625"
                                height="115.34800000000001"
                                x="-2"
                                y="-2"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clippath>
                          </defs>
                          <line
                            id="SvgjsLine3270"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="111.34800000000001"
                            stroke="#b6b6b6"
                            stroke-dasharray="3"
                            stroke-linecap="butt"
                            class="apexcharts-xcrosshairs"
                            x="0"
                            y="0"
                            width="1"
                            height="111.34800000000001"
                            fill="#b1b9c4"
                            filter="none"
                            fill-opacity="0.9"
                            stroke-width="1"
                          ></line>
                          <line
                            id="SvgjsLine3282"
                            x1="0"
                            y1="112.34800000000001"
                            x2="0"
                            y2="118.34800000000001"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine3283"
                            x1="148.5078125"
                            y1="112.34800000000001"
                            x2="148.5078125"
                            y2="118.34800000000001"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine3284"
                            x1="297.015625"
                            y1="112.34800000000001"
                            x2="297.015625"
                            y2="118.34800000000001"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine3285"
                            x1="445.5234375"
                            y1="112.34800000000001"
                            x2="445.5234375"
                            y2="118.34800000000001"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine3286"
                            x1="594.03125"
                            y1="112.34800000000001"
                            x2="594.03125"
                            y2="118.34800000000001"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine3287"
                            x1="742.5390625"
                            y1="112.34800000000001"
                            x2="742.5390625"
                            y2="118.34800000000001"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <g id="SvgjsG3278" class="apexcharts-grid">
                            <g
                              id="SvgjsG3279"
                              class="apexcharts-gridlines-horizontal"
                            ></g>
                            <g
                              id="SvgjsG3280"
                              class="apexcharts-gridlines-vertical"
                            ></g>
                            <line
                              id="SvgjsLine3289"
                              x1="0"
                              y1="111.34800000000001"
                              x2="742.5390625"
                              y2="111.34800000000001"
                              stroke="transparent"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                            ></line>
                            <line
                              id="SvgjsLine3288"
                              x1="0"
                              y1="1"
                              x2="0"
                              y2="111.34800000000001"
                              stroke="transparent"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                            ></line>
                          </g>
                          <g id="SvgjsG3281" class="apexcharts-grid-borders">
                            <line
                              id="SvgjsLine3312"
                              x1="0"
                              y1="112.34800000000001"
                              x2="742.5390625"
                              y2="112.34800000000001"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-width="1"
                              stroke-linecap="butt"
                            ></line>
                          </g>
                          <g
                            id="SvgjsG3273"
                            class="apexcharts-line-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG3274"
                              class="apexcharts-series"
                              seriesname="TotalxConversations"
                              data:longestseries="true"
                              rel="1"
                              data:realindex="0"
                            >
                              <path
                                id="SvgjsPath3277"
                                d="M 0 111.34800000000001 L 148.5078125 111.34800000000001 L 297.015625 111.34800000000001 L 445.5234375 111.34800000000001 L 594.03125 111.34800000000001 L 742.5390625 111.34800000000001"
                                fill="none"
                                fill-opacity="1"
                                stroke="rgba(0,143,251,0.85)"
                                stroke-opacity="1"
                                stroke-linecap="butt"
                                stroke-width="2.8"
                                stroke-dasharray="0"
                                class="apexcharts-line"
                                index="0"
                                clip-path="url(#gridRectMaskdij83ifv)"
                                pathto="M 0 111.34800000000001 L 148.5078125 111.34800000000001 L 297.015625 111.34800000000001 L 445.5234375 111.34800000000001 L 594.03125 111.34800000000001 L 742.5390625 111.34800000000001"
                                pathfrom="M 0 105.34800000000001 L 96.3078125 105.34800000000001 L 192.615625 105.34800000000001 L 288.9234375 105.34800000000001 L 385.23125 105.34800000000001 L 481.5390625 105.34800000000001"
                                fill-rule="evenodd"
                              ></path>
                              <g
                                id="SvgjsG3275"
                                class="apexcharts-series-markers-wrap"
                                data:realindex="0"
                              >
                                <g class="apexcharts-series-markers">
                                  <circle
                                    id="SvgjsCircle3338"
                                    r="0"
                                    cx="0"
                                    cy="0"
                                    class="apexcharts-marker wjmwxw7az no-pointer-events"
                                    stroke="#ffffff"
                                    fill="#008ffb"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="0"
                                  ></circle>
                                </g>
                              </g>
                            </g>
                            <g
                              id="SvgjsG3276"
                              class="apexcharts-datalabels"
                              data:realindex="0"
                            ></g>
                          </g>
                          <line
                            id="SvgjsLine3290"
                            x1="0"
                            y1="0"
                            x2="742.5390625"
                            y2="0"
                            stroke="#b6b6b6"
                            stroke-dasharray="0"
                            stroke-width="1"
                            stroke-linecap="butt"
                            class="apexcharts-ycrosshairs"
                          ></line>
                          <line
                            id="SvgjsLine3291"
                            x1="0"
                            y1="0"
                            x2="742.5390625"
                            y2="0"
                            stroke-dasharray="0"
                            stroke-width="0"
                            stroke-linecap="butt"
                            class="apexcharts-ycrosshairs-hidden"
                          ></line>
                          <g
                            id="SvgjsG3292"
                            class="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG3293"
                              class="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                id="SvgjsText3295"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="140.348"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                <tspan id="SvgjsTspan3296">Oct</tspan>
                                <title>Oct</title>
                              </text>
                              <text
                                id="SvgjsText3298"
                                font-family="Helvetica, Arial, sans-serif"
                                x="148.5078125"
                                y="140.348"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                <tspan id="SvgjsTspan3299">Nov</tspan>
                                <title>Nov</title>
                              </text>
                              <text
                                id="SvgjsText3301"
                                font-family="Helvetica, Arial, sans-serif"
                                x="297.015625"
                                y="140.348"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                <tspan id="SvgjsTspan3302">Dec</tspan>
                                <title>Dec</title>
                              </text>
                              <text
                                id="SvgjsText3304"
                                font-family="Helvetica, Arial, sans-serif"
                                x="445.5234375"
                                y="140.348"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                <tspan id="SvgjsTspan3305">Jan</tspan>
                                <title>Jan</title>
                              </text>
                              <text
                                id="SvgjsText3307"
                                font-family="Helvetica, Arial, sans-serif"
                                x="594.03125"
                                y="140.348"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                <tspan id="SvgjsTspan3308">Feb</tspan>
                                <title>Feb</title>
                              </text>
                              <text
                                id="SvgjsText3310"
                                font-family="Helvetica, Arial, sans-serif"
                                x="742.5390625"
                                y="140.348"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                <tspan id="SvgjsTspan3311">Mar</tspan>
                                <title>Mar</title>
                              </text>
                            </g>
                          </g>
                          <g
                            id="SvgjsG3335"
                            class="apexcharts-yaxis-annotations"
                          ></g>
                          <g
                            id="SvgjsG3336"
                            class="apexcharts-xaxis-annotations"
                          ></g>
                          <g
                            id="SvgjsG3337"
                            class="apexcharts-point-annotations"
                          ></g>
                          <rect
                            id="SvgjsRect3339"
                            width="0"
                            height="0"
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke="none"
                            stroke-dasharray="0"
                            fill="#fefefe"
                            class="apexcharts-zoom-rect"
                          ></rect>
                          <rect
                            id="SvgjsRect3340"
                            width="0"
                            height="0"
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke="none"
                            stroke-dasharray="0"
                            fill="#fefefe"
                            class="apexcharts-selection-rect"
                          ></rect>
                        </g>
                        <g id="SvgjsG3265" class="apexcharts-annotations"></g>
                      </svg>
                      <div
                        class="apexcharts-legend"
                        style="max-height: 89.5px"
                      ></div>
                      <div class="apexcharts-tooltip">
                        <div
                          class="apexcharts-tooltip-title"
                          style="
                            font-family: Helvetica, Arial, sans-serif;
                            font-size: 12px;
                          "
                        ></div>
                        <div
                          class="apexcharts-tooltip-series-group"
                          style="order: 1"
                        >
                          <span
                            class="apexcharts-tooltip-marker"
                            style="background-color: rgb(0, 143, 251)"
                          >
                          </span>
                          <div
                            class="apexcharts-tooltip-text"
                            style="
                              font-family: Helvetica, Arial, sans-serif;
                              font-size: 12px;
                            "
                          >
                            <div class="apexcharts-tooltip-y-group">
                              <span class="apexcharts-tooltip-text-y-label">
                              </span>
                              <span class="apexcharts-tooltip-text-y-value">
                              </span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span class="apexcharts-tooltip-text-goals-label">
                              </span>
                              <span class="apexcharts-tooltip-text-goals-value">
                              </span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span class="apexcharts-tooltip-text-z-label">
                              </span>
                              <span class="apexcharts-tooltip-text-z-value">
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom"
                      >
                        <div
                          class="apexcharts-xaxistooltip-text"
                          style="
                            font-family: Helvetica, Arial, sans-serif;
                            font-size: 12px;
                          "
                        ></div>
                      </div>
                      <div
                        class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left"
                      >
                        <div class="apexcharts-yaxistooltip-text"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 7 -->
            <div
              class="uniqueUserInputs item_box"
              style="
                width: 504px;
                height: 310px;
                position: absolute;
                transform: translate(353px, 650px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">User Inputs Not In Training Data </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="content">
                <ul>
                  <li title="1">
                    <span>1</span>
                    <span>1</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 8 -->
            <div
              class="intentsBeforeDropoff topIntents item_box"
              style="
                width: 247px;
                height: 310px;
                position: absolute;
                transform: translate(10px, 1290px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">Intents Before Dropoff </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="content">
                <ul>
                  <li title="nlu_fallback">
                    <span>nlu_fallback</span>
                    <span class="count">1</span>
                    <span class="bar-cnt">
                      <span class="bar-fill" style="width: 100%"> </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 9 -->
            <div
              class="item_box chatFeedbackMetrics"
              style="
                width: 247px;
                height: 310px;
                position: absolute;
                transform: translate(267px, 1290px);
              "
            >
              <div class="header flex f-y-c f-sb">
                <span class="title">Chat Feedback Metrics</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewbox="0 0 24 24"
                  class="calendar"
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
              <div class="feedback">
                <div style="min-height: 222.033px">
                  <div
                    class="apexcharts-canvas"
                    style="width: 280px; height: 222.033px"
                  >
                    <svg
                      id="SvgjsSvg3240"
                      width="280"
                      height="222.03333333333333"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      class="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style="background: transparent"
                    >
                      <g
                        id="SvgjsG3242"
                        class="apexcharts-inner apexcharts-graphical"
                        transform="translate(36.33333333333333, 10)"
                      >
                        <defs id="SvgjsDefs3241">
                          <clippath id="gridRectMaskw5ubcoiw">
                            <rect
                              id="SvgjsRect3244"
                              width="215.33333333333334"
                              height="233.33333333333334"
                              x="-3"
                              y="-1"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clippath>
                          <clippath id="forecastMaskw5ubcoiw"></clippath>
                          <clippath id="nonForecastMaskw5ubcoiw"></clippath>
                          <clippath id="gridRectMarkerMaskw5ubcoiw">
                            <rect
                              id="SvgjsRect3245"
                              width="213.33333333333334"
                              height="235.33333333333334"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clippath>
                        </defs>
                        <g id="SvgjsG3246" class="apexcharts-pie">
                          <g
                            id="SvgjsG3247"
                            transform="translate(0, 0) scale(1)"
                          >
                            <circle
                              id="SvgjsCircle3248"
                              r="62.4739837398374"
                              cx="104.66666666666667"
                              cy="104.66666666666667"
                              fill="transparent"
                            ></circle>
                            <g id="SvgjsG3249" class="apexcharts-slices">
                              <g
                                id="SvgjsG3250"
                                class="apexcharts-series apexcharts-pie-series"
                                seriesname="PositivexFeedback"
                                rel="1"
                                data:realindex="0"
                              >
                                <path
                                  id="SvgjsPath3251"
                                  d="M 8.55284552845528 104.66666666666666 A 96.11382113821139 96.11382113821139 0 0 1 8.55284552845528 104.66666666666666 L 42.19268292682927 104.66666666666666 A 62.4739837398374 62.4739837398374 0 0 0 42.19268292682927 104.66666666666666 L 8.55284552845528 104.66666666666666 z"
                                  fill="rgba(40,167,69,1)"
                                  fill-opacity="1"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-pie-area apexcharts-donut-slice-0"
                                  index="0"
                                  j="0"
                                  data:angle="0"
                                  data:startangle="-90"
                                  data:strokewidth="2"
                                  data:value="0"
                                  data:pathorig="M 8.55284552845528 104.66666666666666 A 96.11382113821139 96.11382113821139 0 0 1 8.55284552845528 104.66666666666666 L 42.19268292682927 104.66666666666666 A 62.4739837398374 62.4739837398374 0 0 0 42.19268292682927 104.66666666666666 L 8.55284552845528 104.66666666666666 z"
                                  stroke="#ffffff"
                                ></path>
                              </g>
                              <g
                                id="SvgjsG3252"
                                class="apexcharts-series apexcharts-pie-series"
                                seriesname="NegativexFeedback"
                                rel="2"
                                data:realindex="1"
                              >
                                <path
                                  id="SvgjsPath3253"
                                  d="M 8.55284552845528 104.66666666666666 A 96.11382113821139 96.11382113821139 0 0 1 8.55284552845528 104.66666666666666 L 42.19268292682927 104.66666666666666 A 62.4739837398374 62.4739837398374 0 0 0 42.19268292682927 104.66666666666666 L 8.55284552845528 104.66666666666666 z"
                                  fill="rgba(255,193,7,1)"
                                  fill-opacity="1"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-pie-area apexcharts-donut-slice-1"
                                  index="0"
                                  j="1"
                                  data:angle="0"
                                  data:startangle="-90"
                                  data:strokewidth="2"
                                  data:value="0"
                                  data:pathorig="M 8.55284552845528 104.66666666666666 A 96.11382113821139 96.11382113821139 0 0 1 8.55284552845528 104.66666666666666 L 42.19268292682927 104.66666666666666 A 62.4739837398374 62.4739837398374 0 0 0 42.19268292682927 104.66666666666666 L 8.55284552845528 104.66666666666666 z"
                                  stroke="#ffffff"
                                ></path>
                              </g>
                              <g
                                id="SvgjsG3254"
                                class="apexcharts-series apexcharts-pie-series"
                                seriesname="NeutralxFeedback"
                                rel="3"
                                data:realindex="2"
                              >
                                <path
                                  id="SvgjsPath3255"
                                  d="M 8.55284552845528 104.66666666666666 A 96.11382113821139 96.11382113821139 0 0 1 8.55284552845528 104.66666666666666 L 42.19268292682927 104.66666666666666 A 62.4739837398374 62.4739837398374 0 0 0 42.19268292682927 104.66666666666666 L 8.55284552845528 104.66666666666666 z"
                                  fill="rgba(170,170,170,1)"
                                  fill-opacity="1"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-pie-area apexcharts-donut-slice-2"
                                  index="0"
                                  j="2"
                                  data:angle="0"
                                  data:startangle="-90"
                                  data:strokewidth="2"
                                  data:value="0"
                                  data:pathorig="M 8.55284552845528 104.66666666666666 A 96.11382113821139 96.11382113821139 0 0 1 8.55284552845528 104.66666666666666 L 42.19268292682927 104.66666666666666 A 62.4739837398374 62.4739837398374 0 0 0 42.19268292682927 104.66666666666666 L 8.55284552845528 104.66666666666666 z"
                                  stroke="#ffffff"
                                ></path>
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG3256"
                            class="apexcharts-datalabels-group"
                            transform="translate(0, 0) scale(1)"
                          >
                            <text
                              id="SvgjsText3257"
                              font-family="Helvetica, Arial, sans-serif"
                              x="104.66666666666667"
                              y="94.66666666666667"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="14px"
                              font-weight="400"
                              fill="#888888"
                              class="apexcharts-text apexcharts-datalabel-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              Total
                            </text>
                            <text
                              id="SvgjsText3258"
                              font-family="Helvetica, Arial, sans-serif"
                              x="104.66666666666667"
                              y="130.66666666666669"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="20px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-datalabel-value"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              0
                            </text>
                          </g>
                        </g>
                        <line
                          id="SvgjsLine3259"
                          x1="0"
                          y1="0"
                          x2="209.33333333333334"
                          y2="0"
                          stroke="#b6b6b6"
                          stroke-dasharray="0"
                          stroke-width="1"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs"
                        ></line>
                        <line
                          id="SvgjsLine3260"
                          x1="0"
                          y1="0"
                          x2="209.33333333333334"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs-hidden"
                        ></line>
                      </g>
                      <g id="SvgjsG3243" class="apexcharts-annotations"></g>
                    </svg>
                    <div class="apexcharts-legend"></div>
                    <div class="apexcharts-tooltip apexcharts-theme-dark">
                      <div
                        class="apexcharts-tooltip-series-group"
                        style="order: 1"
                      >
                        <span
                          class="apexcharts-tooltip-marker"
                          style="background-color: rgb(40, 167, 69)"
                        >
                        </span>
                        <div
                          class="apexcharts-tooltip-text"
                          style="
                            font-family: Helvetica, Arial, sans-serif;
                            font-size: 12px;
                          "
                        >
                          <div class="apexcharts-tooltip-y-group">
                            <span class="apexcharts-tooltip-text-y-label">
                            </span>
                            <span class="apexcharts-tooltip-text-y-value">
                            </span>
                          </div>
                          <div class="apexcharts-tooltip-goals-group">
                            <span class="apexcharts-tooltip-text-goals-label">
                            </span>
                            <span class="apexcharts-tooltip-text-goals-value">
                            </span>
                          </div>
                          <div class="apexcharts-tooltip-z-group">
                            <span class="apexcharts-tooltip-text-z-label">
                            </span>
                            <span class="apexcharts-tooltip-text-z-value">
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="apexcharts-tooltip-series-group"
                        style="order: 2"
                      >
                        <span
                          class="apexcharts-tooltip-marker"
                          style="background-color: rgb(255, 193, 7)"
                        >
                        </span>
                        <div
                          class="apexcharts-tooltip-text"
                          style="
                            font-family: Helvetica, Arial, sans-serif;
                            font-size: 12px;
                          "
                        >
                          <div class="apexcharts-tooltip-y-group">
                            <span class="apexcharts-tooltip-text-y-label">
                            </span>
                            <span class="apexcharts-tooltip-text-y-value">
                            </span>
                          </div>
                          <div class="apexcharts-tooltip-goals-group">
                            <span class="apexcharts-tooltip-text-goals-label">
                            </span>
                            <span class="apexcharts-tooltip-text-goals-value">
                            </span>
                          </div>
                          <div class="apexcharts-tooltip-z-group">
                            <span class="apexcharts-tooltip-text-z-label">
                            </span>
                            <span class="apexcharts-tooltip-text-z-value">
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="apexcharts-tooltip-series-group"
                        style="order: 3"
                      >
                        <span
                          class="apexcharts-tooltip-marker"
                          style="background-color: rgb(170, 170, 170)"
                        >
                        </span>
                        <div
                          class="apexcharts-tooltip-text"
                          style="
                            font-family: Helvetica, Arial, sans-serif;
                            font-size: 12px;
                          "
                        >
                          <div class="apexcharts-tooltip-y-group">
                            <span class="apexcharts-tooltip-text-y-label">
                            </span>
                            <span class="apexcharts-tooltip-text-y-value">
                            </span>
                          </div>
                          <div class="apexcharts-tooltip-goals-group">
                            <span class="apexcharts-tooltip-text-goals-label">
                            </span>
                            <span class="apexcharts-tooltip-text-goals-value">
                            </span>
                          </div>
                          <div class="apexcharts-tooltip-z-group">
                            <span class="apexcharts-tooltip-text-z-label">
                            </span>
                            <span class="apexcharts-tooltip-text-z-value">
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content">
                <div class="feedback-content">
                  <div class="feedback-header">Latest Feedbacks</div>
                  <ul class="fb-list"></ul>
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
  .header_box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 24px;
      font-weight: 600;
    }
    .icons {
      display: flex;
      align-items: center;
      .settings {
        color: #888;
        cursor: pointer;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .ibc-icon {
          font-size: 26px;
        }
      }
      .toggle {
        position: relative;
        .left {
          width: 16px;
          height: 16px;
          cursor: pointer;
          padding: 4px;
          top: -4px;
          left: -2px;
          background: #fafafa;
          z-index: 1;
          position: absolute;
          border-radius: 50%;
        }
        .bg {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.43;
          box-sizing: inherit;
          width: 26px;
          height: 10px;
          z-index: -1;
          border-radius: 7px;
          opacity: 0.5;
          background-color: #000;
        }
      }
    }
  }
  .content_box {
    margin: 30px 0;
    .analytics-dashboard {
      max-height: calc(100vh - 192px);
      overflow: auto;
      padding-right: 10px;
      .analytics-widget-cnt {
        display: flex;
        overflow: auto;
        width: 100%;
        .react-grid-layout {
          width: 100%;
          .item_box {
            border-radius: 8px;
            padding: 10px 10px 16px;
            background-color: #fff;
            box-shadow: 2px 1px 10px #eaeaea;
            display: flex;
            flex-direction: column;
            align-items: center;
            .header {
              height: 40px;
              padding: 10px;
              width: 100%;
              margin-bottom: 10px;
              .title {
                text-transform: capitalize;
                font-weight: 600;
                border-bottom: 1px dashed #eaeaea;
                transition: border-bottom 0.4s ease-in;
                cursor: default;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                &:hover {
                  border-bottom: 1px dashed #404040;
                }
              }
              svg {
                font-size: 24px;
                transform: scale(0.7);
              }
            }
            .content {
              height: calc(100% - 50px);
              display: flex;
              width: 100%;
              padding: 0 10px;
              overflow-y: auto;
            }
          }
        }

        .chatFeedbackMetrics {
          min-width: 300px;
          min-height: 310px;
          text.apexcharts-pie-label {
            fill: #fff;
          }
          .feedback {
            border-bottom: 1px solid #eaeaea;
            min-height: 140px;
            overflow: hidden;
            padding-bottom: 15px;
            margin-bottom: 10px;
          }
          .content {
            .feedback-content {
              width: 100%;
              .feedback-header {
                font-size: 14px;
                color: #888;
                text-transform: capitalize;
                margin-bottom: 10px;
                text-align: center;
              }
              .fb-list {
                padding-left: 0;
              }
              .fb-unique {
                display: flex;
                margin-bottom: 8px;
                position: relative;
                justify-content: space-between;
                .long-text-wrapper {
                  margin-right: 5px;
                }
                span {
                  white-space: break-spaces;
                  padding-left: 0;
                  overflow-wrap: anywhere;
                }
                .rating {
                  white-space: nowrap;
                }
              }
            }
          }
          .apexcharts-datalabels-group {
            -webkit-transform: translateY(-25px);
            transform: translateY(-25px);
          }
        }
        .topActions {
          ul {
            margin: 0;
            list-style-position: inside;
            padding-left: 0;
            width: 100%;
          }
          li {
            display: flex;
            margin-bottom: 8px;
            position: relative;
            > span {
              &:first-child {
                flex: 1 1;
                max-width: 90%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                z-index: 2;
                padding-left: 8px;
              }
            }
            .count {
              z-index: 2;
              min-width: 15%;
              text-align: right;
              padding-right: 10px;
            }
            .bar-cnt {
              position: absolute;
              height: 100%;
              width: 100%;
              z-index: 1;
              .bar-fill {
                position: absolute;
                height: 100%;
                background-color: #6c82ff;
                transition: width 0.8s ease-in;
              }
            }
          }
        }
        .topIntents {
          ul {
            margin: 0;
            list-style-position: inside;
            padding-left: 0;
            width: 100%;
          }
          li {
            display: flex;
            margin-bottom: 8px;
            position: relative;
            > span {
              &:first-child {
                flex: 1 1;
                max-width: 90%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                z-index: 2;
                padding-left: 8px;
              }
            }
            .count {
              z-index: 2;
              min-width: 15%;
              text-align: right;
              padding-right: 10px;
            }
            .bar-cnt {
              position: absolute;
              height: 100%;
              width: 100%;
              z-index: 1;
              .bar-fill {
                position: absolute;
                height: 100%;
                background-color: #6c82ff;
                transition: width 0.8s ease-in;
              }
            }
          }
        }
        .uniqueUserInputs {
          ul {
            margin: 0;
            list-style-position: inside;
            padding-left: 0;
            width: 100%;
          }
          li {
            display: flex;
            margin-bottom: 8px;
            position: relative;
            > span {
              &:first-child {
                flex: 1 1;
                max-width: 90%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                z-index: 2;
                padding-left: 8px;
              }
            }
            .count {
              z-index: 2;
              min-width: 15%;
              text-align: right;
              padding-right: 10px;
              padding-left: 0;
            }
            .bar-cnt {
              position: absolute;
              height: 100%;
              width: 100%;
              z-index: 1;
              .bar-fill {
                position: absolute;
                height: 100%;
                background-color: #6c82ff;
                transition: width 0.8s ease-in;
              }
            }
            span {
              &:first-child {
                white-space: break-spaces;
                padding-left: 0;
              }
            }
          }
        }
        .fallbackStats {
          .content {
            flex-direction: column;
          }
          .fallback-stats-cnt {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 10px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eaeaea;
            .fallback-percent {
              font-weight: 800;
              font-size: 24px;
              text-align: center;
              margin: 10px 0 15px;
            }
            .fallback-percent-text {
              text-align: center;
              margin-bottom: 15px;
              font-size: 14px;
              color: #888;
            }
            .fallback-count {
              > span {
                &:first-child {
                  font-size: 14px;
                  color: #888;
                  text-transform: capitalize;
                }
              }
              .count {
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px;
                .info-icon {
                  margin-left: 5px;
                  position: relative;
                  top: 5px;
                  transform: scale(0.8);
                  font-size: 24px;
                  cursor: pointer;
                }
              }
            }
          }
          .threshold-cnt {
            .threshold-count {
              padding-right: 5px;
              margin-top: 10px;
              span {
                &:first-child {
                  font-size: 14px;
                  color: #888;
                  text-transform: capitalize;
                }
              }
              .count {
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px;
                float: right;
              }
            }
            .config-link {
              font-size: 14px;
              span {
                color: #6c82ff;
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }
        .trendAnalysis {
          .tags-container {
            display: flex;
            align-items: center;
            height: 40px;
            .tag {
              cursor: pointer;
              margin: 0 3px;
              color: #6c82ff;
              border: 1px solid #6c82ff;
              padding: 2px 12px;
              border-radius: 20px;
              -webkit-user-select: none;
              user-select: none;
              min-width: 0;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              transition: min-width 0.8s ease-in;
            }
            .tag-selected {
              background-color: #6c82ff;
              border-color: #6c82ff;
              color: #fff;
            }
          }
          .charts-wrapper {
            height: calc(100% - 40px);
            .apexcharts-tooltip {
              color: #000;
            }
          }
          .content {
            flex-direction: column;
            overflow-y: hidden;
          }
        }
      }
      .cards-wrapper {
        display: flex;
        overflow: auto;
        width: 100%;
        .statCard-wrapper {
          position: relative;
          min-width: 150px;
          height: auto;
          border-radius: 8px;
          padding: 10px 10px 16px;
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-grow: 1;
          .stat-data-loader {
            min-height: 35px;
            margin: 10px 0 0;
            padding-top: 8px;
          }
          .info-icon-wrapper {
            position: absolute;
            right: 12px;
            top: 12px;
            color: #888;
            cursor: pointer;
          }
          .icon-container {
            margin-top: 15px;
            width: 42px;
            height: 42px;
            background-color: #f3f5ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
              font-size: 20px;
              color: #2f45c5;
            }
          }
          .stat-data {
            margin: 10px 0 0;
            font-weight: 800;
            font-size: 24px;
          }
          .stat-text {
            margin: 0;
            text-align: center;
            font-size: 14px;
            color: #888;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
