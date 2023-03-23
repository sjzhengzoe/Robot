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
            class="list_item"
            :class="[{ selected: nowTab === 1 }]"
          >
            <div class="list_title flex f-y-c">
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
              <div class="title">API Actions</div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="icon_que"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 333h-42v-42h42v42zm-.2-63h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"
                ></path>
              </svg>
            </div>
            <div class="add_new_btn">Add new</div>
          </div>
          <div
            @click="handleToggleTab(2)"
            class="list_item"
            :class="[{ selected: nowTab === 2 }]"
          >
            <div class="list_title flex f-y-c">
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
              <div class="title">Email Actions</div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="icon_que"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 333h-42v-42h42v42zm-.2-63h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"
                ></path>
              </svg>
            </div>
            <div class="add_new_btn">Add new</div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="componentDetails">
        <!-- 头部 -->
        <div class="header flex f-y-c f-sb">
          <h3 class="title">SELECT ACTION</h3>
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
          <!-- API 主体 -->
          <div v-if="nowTab === 1" class="main">
            <!-- 1 -->
            <div class="action_name_box">
              <div class="name">Action Name*</div>
              <input
                placeholder="Action name"
                type="text"
                class="input flex"
                value=""
              />
            </div>
            <!-- 2 -->
            <div class="method_box">
              <div class="choose_item" :style="{ width: '20%' }">
                <div class="name">Methods*</div>
                <div
                  class="select_box flex f-y-c f-sb"
                  @click="handleSelectList('get')"
                >
                  GET
                  <svg
                    class="icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                  <div
                    class="select_list"
                    :class="{ show: nowSelectType === 'get' }"
                    @click.stop="handleSelectList('')"
                  >
                    <div>GET</div>
                    <div>POST</div>
                    <div>delete</div>
                    <div>put</div>
                  </div>
                </div>
              </div>
              <div class="choose_item" :style="{ width: '30%' }">
                <div class="name">Content Type*</div>
                <div
                  class="select_box flex f-y-c f-sb"
                  @click="handleSelectList('applications')"
                >
                  applications
                  <svg
                    class="icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                  <div
                    class="select_list"
                    :class="{ show: nowSelectType === 'applications' }"
                  >
                    <div @click.stop="handleSelectList('')">
                      application/x-www-form-urlencoded
                    </div>
                    <div @click.stop="handleSelectList('')">
                      application/json
                    </div>
                  </div>
                </div>
              </div>
              <div class="choose_item" :style="{ width: '40%' }">
                <div class="name">URL*</div>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter request URL"
                />
                <div class="tips">Enter $ to see path parameter options</div>
              </div>
            </div>
            <!-- 3 -->
            <div class="body_header_box">
              <div class="tabs">
                <div
                  class="tab flex f-y-c"
                  @click="handleToggleSelectHttpTab('1')"
                  :class="[{ selected: nowSelectHttpTab === '1' }]"
                >
                  Headers (1)
                  <svg
                    @click="handleHeaders('delete')"
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
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    ></path>
                  </svg>
                  <svg
                    @click="handleHeaders('add')"
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
                      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    ></path>
                  </svg>
                </div>
                <div
                  class="tab flex f-y-c"
                  @click="handleToggleSelectHttpTab('2')"
                  :class="[{ selected: nowSelectHttpTab === '2' }]"
                >
                  Body (1)
                  <svg
                    @click="handleBody('delete')"
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
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    ></path>
                  </svg>
                  <svg
                    @click="handleBody('add')"
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
                      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    ></path>
                  </svg>
                </div>
                <div
                  class="tab flex f-y-c"
                  @click="handleToggleSelectHttpTab('3')"
                  :class="[{ selected: nowSelectHttpTab === '3' }]"
                >
                  response slots (1)
                  <svg
                    @click="handleResponse('delete')"
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
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    ></path>
                  </svg>
                  <svg
                    @click="handleResponse('add')"
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
                      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tabs_content">
                <!-- headers -->
                <div v-if="nowSelectHttpTab === '1'">
                  <div
                    class="flex f-y-start"
                    v-for="(item, idx) in headers"
                    :key="idx"
                  >
                    <div class="choose_item" :style="{ width: '10%' }">
                      <div class="name">Sec</div>
                      <input
                        class="input"
                        type="checkbox"
                        placeholder="Enter request URL"
                      />
                    </div>
                    <div class="choose_item" :style="{ width: '30%' }">
                      <div class="name">Header Type*</div>
                      <div
                        class="select_box flex f-y-c f-sb"
                        @click="handleSelectList('headerType')"
                      >
                        <div></div>
                        <svg
                          class="icon"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                        <div
                          class="select_list"
                          :class="{ show: nowSelectType === 'headerType' }"
                          @click.stop="handleSelectList('')"
                        >
                          <div>Value</div>
                          <div>Slot</div>
                          <div>Sender ID</div>
                          <div>uSER mESSAGE</div>
                          <div>Indent</div>
                          <div>Chat Log</div>
                          <div>Key Value</div>
                        </div>
                      </div>
                    </div>
                    <div class="choose_item" :style="{ width: '40%' }">
                      <div class="name">Key*</div>
                      <input class="input" type="text" placeholder="Key" />
                    </div>
                  </div>
                </div>
                <!-- body -->
                <div v-if="nowSelectHttpTab === '2'">
                  <div
                    class="flex f-y-start"
                    v-for="(item, idx) in body"
                    :key="idx"
                  >
                    <div class="choose_item" :style="{ width: '10%' }">
                      <div class="name">Sec</div>
                      <input
                        class="input"
                        type="checkbox"
                        placeholder="Enter request URL"
                      />
                    </div>
                    <div class="choose_item" :style="{ width: '30%' }">
                      <div class="name">Parameter Type*</div>
                      <div
                        class="select_box flex f-y-c f-sb"
                        @click="handleSelectList('headerType')"
                      >
                        <div></div>
                        <svg
                          class="icon"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                        <div
                          class="select_list"
                          :class="{ show: nowSelectType === 'headerType' }"
                          @click.stop="handleSelectList('')"
                        >
                          <div>Value</div>
                          <div>Slot</div>
                          <div>Sender ID</div>
                          <div>uSER mESSAGE</div>
                          <div>Indent</div>
                          <div>Chat Log</div>
                          <div>Key Value</div>
                        </div>
                      </div>
                    </div>
                    <div class="choose_item" :style="{ width: '40%' }">
                      <div class="name">Key*</div>
                      <input class="input" type="text" placeholder="Key" />
                    </div>
                  </div>
                </div>
                <!-- Response -->
                <div v-if="nowSelectHttpTab === '3'">
                  <div
                    class="flex f-y-start"
                    v-for="(item, idx) in response"
                    :key="idx"
                  >
                    <div class="choose_item" :style="{ width: '20%' }">
                      <div class="name">Slot*</div>
                      <div
                        class="select_box flex f-y-c f-sb"
                        @click="handleSelectList('slot')"
                      >
                        <div></div>
                        <svg
                          class="icon"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                        <div
                          class="select_list"
                          :class="{ show: nowSelectType === 'slot' }"
                          @click.stop="handleSelectList('')"
                        >
                          <div>Value</div>
                          <div>Slot</div>
                          <div>Sender ID</div>
                          <div>uSER mESSAGE</div>
                          <div>Indent</div>
                          <div>Chat Log</div>
                          <div>Key Value</div>
                        </div>
                      </div>
                    </div>
                    <div class="choose_item" :style="{ width: '30%' }">
                      <div class="name">Value*</div>
                      <input class="input" type="text" placeholder="Value" />
                    </div>
                    <div class="choose_item" :style="{ width: '40%' }">
                      <div class="name">Evaluation Type*</div>
                      <div
                        class="select_box flex f-y-c f-sb"
                        @click="handleSelectList('headerType')"
                      >
                        <div>Expression</div>
                        <svg
                          class="icon"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                        <div
                          class="select_list"
                          :class="{ show: nowSelectType === 'headerType' }"
                          @click.stop="handleSelectList('')"
                        >
                          <div>Value</div>
                          <div>Slot</div>
                          <div>Sender ID</div>
                          <div>uSER mESSAGE</div>
                          <div>Indent</div>
                          <div>Chat Log</div>
                          <div>Key Value</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 4 -->
            <div class="response_text_box">
              <div class="name">Response Text*</div>
              <div class="desc">Response</div>
              <input type="text" class="input flex" value="" />
            </div>
            <!-- 5 -->
            <div class="advance_box">
              <div
                class="btn_box flex f-y-c"
                :class="{ select: nowAdvancedShow }"
                @click="handleToggleNowAdvancedShow(!nowAdvancedShow)"
              >
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
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                  ></path>
                </svg>
                Advanced Options
              </div>
              <div v-if="nowAdvancedShow" class="flex f-y-start">
                <div class="choose_item" :style="{ width: '60%' }">
                  <div class="name">Dispatch Response</div>
                  <div class="toggle_box flex f-y-c f-sb">
                    <div class="left"></div>
                    <div class="bg"></div>
                  </div>
                </div>
                <div class="choose_item" :style="{ width: '30%' }">
                  <div class="name">Response Evaluation Type*</div>
                  <div
                    class="select_box flex f-y-c f-sb"
                    @click="handleSelectList('responseType')"
                  >
                    Expression
                    <svg
                      class="icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                    <div
                      class="select_list"
                      :class="{ show: nowSelectType === 'responseType' }"
                      @click.stop="handleSelectList('')"
                    >
                      <div>application/x-www-form-urlencoded</div>
                      <div>application/json</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- button -->
            <div class="save_button">Save</div>
          </div>
          <!-- Email 主体 -->
          <div v-if="nowTab === 2" class="main">
            <!-- 1 -->
            <div class="action_name_box">
              <div class="name">Name*</div>
              <input
                placeholder="Name"
                type="text"
                class="input flex"
                value=""
              />
            </div>
            <!-- 2 -->
            <div class="action_name_box">
              <div class="name">SMTP URL*</div>
              <input
                placeholder="Name"
                type="text"
                class="input flex"
                value=""
              />
              <!-- 3 -->
              <div class="input_box flex f-y-c">
                <div class="choose_item" :style="{ width: '40%' }">
                  <div class="name">SMTP Port*</div>
                  <input class="input" type="text" placeholder="0" />
                </div>
                <div class="choose_item" :style="{ width: '40%' }">
                  <div class="name">Subject*</div>
                  <input class="input" type="text" placeholder="Subject" />
                </div>
              </div>
              <!-- 4 -->
              <div class="select_box flex f-y-c">
                <div class="choose_item" :style="{ width: '40%' }">
                  <div class="name">SMTP UserId *</div>
                  <div
                    class="select_box flex f-y-c f-sb"
                    @click="handleSelectList('userId')"
                  >
                    Select
                    <svg
                      class="icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                    <div
                      class="select_list"
                      :class="{ show: nowSelectType === 'userId' }"
                      @click.stop="handleSelectList('')"
                    >
                      <div>GET</div>
                      <div>POST</div>
                      <div>delete</div>
                      <div>put</div>
                    </div>
                  </div>
                </div>
                <div class="choose_item" :style="{ width: '40%' }">
                  <div class="name">Methods*</div>
                  <div
                    class="select_box flex f-y-c f-sb"
                    @click="handleSelectList('password')"
                  >
                    Select
                    <svg
                      class="icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                    <div
                      class="select_list"
                      :class="{ show: nowSelectType === 'password' }"
                      @click.stop="handleSelectList('')"
                    >
                      <div>GET</div>
                      <div>POST</div>
                      <div>delete</div>
                      <div>put</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 5 -->
              <div class="action_name_box">
                <div class="name">From Email*</div>
                <input
                  placeholder="smtp.server_address.com"
                  type="text"
                  class="input flex"
                  value=""
                />
              </div>
              <!-- 6 -->
              <div class="action_name_box">
                <div class="name">To Email*</div>
                <input
                  placeholder="Enter comma seperated email ids: john.doe@example.com,mary.jane@example.com"
                  type="text"
                  class="input flex"
                  value=""
                />
              </div>
              <!-- 7 -->
              <div class="action_name_box">
                <div class="name">Response*</div>
                <input
                  placeholder="Response"
                  type="text"
                  class="input flex"
                  value=""
                />
              </div>
              <!-- 8 -->
              <div class="advance_box flex f-y-c">
                <div class="choose_item flex f-y-c">
                  <div class="toggle_box flex f-y-c f-sb">
                    <div class="left"></div>
                    <div class="bg"></div>
                  </div>
                  <div class="name">TLS</div>
                </div>
              </div>
              <!-- btn -->
              <div class="save_button">Save</div>
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
// 下拉框切换
const nowSelectType = ref("");
const handleSelectList = (type) => {
  nowSelectType.value = type;
};
// 切换 headers body response
const nowSelectHttpTab = ref("1");
const handleToggleSelectHttpTab = (tab) => {
  nowSelectType.value = "";
  nowSelectHttpTab.value = tab;
};

const headers = ref([{}]);
const handleHeaders = (type) => {
  if (type === "add") {
    headers.value.push({});
  } else if (type === "delete") {
    headers.value = [];
  }
};

const body = ref([{}]);
const handleBody = (type) => {
  if (type === "add") {
    body.value.push({});
  } else if (type === "delete") {
    body.value = [];
  }
};

const response = ref([{}]);
const handleResponse = (type) => {
  if (type === "add") {
    response.value.push({});
  } else if (type === "delete") {
    response.value = [];
  }
};

// advanced
const nowAdvancedShow = ref(false);
const handleToggleNowAdvancedShow = (isShow) => {
  nowAdvancedShow.value = isShow;
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
          cursor: pointer;
          border-bottom: 1px solid #eaeaea;
          font-weight: 500;
          text-align: left;
          padding: 20px 15px;
          &.selected {
            background-color: #fff;
            border-left: 3px solid #2f45c5;
            .add_new_btn {
              display: flex !important;
            }
          }
          .list_title {
            .icon {
              font-size: 16px;
              color: #2f45c5;
            }
            .icon_que {
              font-size: 20px;
              color: #888;
            }
            .title {
              margin: 0 10px;
            }
          }
          .add_new_btn {
            display: none;
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
            border-bottom: 1px solid #eaeaea;
            padding: 8px;
            .input {
              font-size: 14px;
              width: 100%;
              border-radius: 4px;
              color: rgba(0, 0, 0, 0.87);
              cursor: text;
              padding: 18.5px 14px;
              border: 1px solid #eaeaea;
              border-radius: 10px;
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
          .input_box {
            .choose_item {
              margin: 0 4px;
              .input {
                height: 25px;
                border: 1px solid #eaeaea;
                font-size: 16px;
              }
            }
          }
          .select_box {
            .choose_item {
              margin: 0 4px;
              .select_box {
                border: 1px solid #eaeaea;
                position: relative;
                border-radius: 5px;
                padding: 10px;
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
          // 4
          .response_text_box {
            border-bottom: 1px solid #eaeaea;
            padding: 8px;
            .desc {
              color: grey;
            }
            .input {
              font-size: 14px;
              width: 100%;
              border-radius: 4px;
              color: rgba(0, 0, 0, 0.87);
              cursor: text;
              border: 0;
              padding: 18.5px 14px;
              border-bottom: 1px solid #eaeaea;
            }
          }
          // 5

          .advance_box {
            border-bottom: 1px solid #eaeaea;
            padding: 8px;
            box-sizing: border-box;
            margin: 20px 0;
            .btn_box {
              padding: 4px 10px;
              border-radius: 4px;
              width: fit-content;
              margin-bottom: 20px;
              &.select {
                border: 2px solid #6c82ff;
                .icon {
                  transform: rotate(90deg);
                }
              }
              .icon {
                width: 20px;
                font-size: 24px;
                margin-right: 6px;
              }
            }
            .choose_item {
              margin: 0 4px 20px;
              .name {
                font-size: 16px;
                color: rgba(0, 0, 0, 0.54);
                margin: 10px 20px 0;
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
              .toggle_box {
                position: relative;
                margin-top: 10px;
                .left {
                  width: 16px;
                  height: 16px;
                  cursor: pointer;
                  padding: 4px;
                  top: -4px;
                  left: -2px;
                  background: #fafafa;
                  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
                    0px 8px 10px 1px rgb(0 0 0 / 14%),
                    0px 3px 14px 2px rgb(0 0 0 / 12%);

                  z-index: 1;
                  position: absolute;
                  border-radius: 50%;
                }
                .bg {
                  font-size: 16px;
                  width: 26px;
                  height: 10px;
                  border-radius: 7px;
                  opacity: 0.5;
                  background-color: #000;
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
          // button
          .save_button {
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
              .tabs {
                display: flex;
                .tab {
                  color: #888;
                  font-size: 16px;
                  width: 100%;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  &.selected {
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
