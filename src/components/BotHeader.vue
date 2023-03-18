<template>
  <div class="BotHeader">
    <div class="tb-details" id="jride-topbar-breadcrumb">
      <h1 class="tb-header">
        <router-link to="/bots">Chatbots</router-link>
      </h1>
      <div class="tb-active"></div>
      <div class="tb-select">
        <div class="name" tabindex="0" role="button" aria-haspopup="listbox">
          Hi-Hello
        </div>
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
            d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm0 272l-96-96h192l-96 96z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="tb-right-wrapper">
      <button
        type="button"
        class="tb-right-button"
        id="jride-topbar-train"
        title="Train Bot"
      >
        <div class="tb-right-icon-wrapper">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="tb-trainicon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M461.8 53.6c-.4-1.7-1.6-3-3.3-3.4-54.4-13.3-180.1 34.1-248.2 102.2-13.3 13.3-24.2 26.4-33.1 39.1-21-1.9-42-.3-59.9 7.5-50.5 22.2-65.2 80.2-69.3 105.1-1 5.9 3.9 11 9.8 10.4l81.1-8.9c.1 7.8.6 14 1.1 18.3.4 4.2 2.3 8.1 5.3 11.1l31.4 31.4c3 3 6.9 4.9 11.1 5.3 4.3.5 10.5 1 18.2 1.1l-8.9 81c-.6 5.9 4.5 10.8 10.4 9.8 24.9-4 83-18.7 105.1-69.2 7.8-17.9 9.4-38.8 7.6-59.7 12.7-8.9 25.9-19.8 39.2-33.1 68.4-68 115.5-190.9 102.4-248zM298.6 213.5c-16.7-16.7-16.7-43.7 0-60.4 16.7-16.7 43.7-16.7 60.4 0 16.7 16.7 16.7 43.7 0 60.4-16.7 16.7-43.7 16.7-60.4 0z"
            ></path>
            <path
              d="M174.5 380.5c-4.2 4.2-11.7 6.6-19.8 8-18.2 3.1-34.1-12.8-31-31 1.4-8.1 3.7-15.6 7.9-19.7l.1-.1c2.3-2.3.4-6.1-2.8-5.7-9.8 1.2-19.4 5.6-26.9 13.1-18 18-19.7 84.8-19.7 84.8s66.9-1.7 84.9-19.7c7.6-7.6 11.9-17.1 13.1-26.9.3-3.2-3.6-5.1-5.8-2.8z"
            ></path>
          </svg>
        </div>
      </button>
      <button
        @click="handleShowRobot()"
        type="button"
        class="tb-right-button"
        title="Show bot"
      >
        <div class="tb-right-icon-wrapper">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="tb-trainicon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M128 464v-80H56a24 24 0 01-24-24V72a24 24 0 0124-24h400a24 24 0 0124 24v288a24 24 0 01-24 24H245.74zM456 80z"
            ></path>
          </svg>
        </div>
      </button>
      <button type="button" class="tb-right-button" title="Help Bot">
        <div class="tb-right-icon-wrapper">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="tb-trainicon"
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
      </button>
    </div>
  </div>
  <!-- 机器人弹窗 -->
  <div class="popup_robot" v-if="visibleRobot">
    <div class="header">
      <span>kairon</span>
    </div>
    <div class="main">
      <div class="content">
        <div class="messages">
          <!-- robot -->
          <div class="content_of_robot">
            <div class="text_box">
              <div class="messagesContainer">
                <div class="messageWrapper">
                  <p class="message">Hello! How are you?</p>
                </div>
                <!-- 点赞 -->
                <div class="feedbackWrapper">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="thumbsUp-5-2-77"
                  >
                    <path
                      d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                    ></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="thumbsDown-5-2-80"
                  >
                    <path
                      d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- my -->
          <div class="content_of_me">
            <div class="text">1</div>
          </div>
        </div>
      </div>
      <form class="input_box">
        <input
          type="text"
          placeholder="Type a message"
          class="input"
          value=""
        />
        <button class="submit_btn" type="submit">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            class="send_icon"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
          </svg>
        </button>
      </form>
    </div>
    <div class="footer flex f-y-c f-x-c">
      <p class="text">Powered by</p>
      <img
        src="https://kairon.digite.com/assets/logo/kAIron.png"
        alt="Kairon Logo"
        class="footerLogo-5-2-12"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const visibleRobot = ref(false);
// 显示机器人弹窗
const handleShowRobot = () => {
  if (visibleRobot.value) {
    visibleRobot.value = false;
  } else {
    visibleRobot.value = true;
  }
};
</script>
<style lang="less" scoped>
.BotHeader {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 13px 40px 13px 40px;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 63px;
  width: calc(100% - 63px);
  z-index: 199;

  .tb-details {
    display: flex;
    align-items: center;
    .tb-header {
      margin: 0;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      a {
        color: #2f45c5;
        text-decoration: none;
      }
      &:after {
        content: "/";
        margin: 0 14px;
        font-size: 14px;
        color: #aaa;
        font-weight: 700;
      }
    }
    .tb-active {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #44e571;
      margin-right: 6px;
    }
    .tb-select {
      font-size: 14px;
      font-weight: 500;
      border-left: 6px;
      color: #000;
      cursor: text;
      box-sizing: border-box;
      align-items: center;
      display: inline-flex;
      line-height: 16px;
      position: relative;

      .name {
        padding: 6px 24px 7px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }

      .icon {
        font-size: 20px;
        color: #6c82ff;
        opacity: 0.5;
        transition: opacity 0.2s ease;
        top: calc(50% - 11px);
        right: 0;
        position: absolute;
        pointer-events: none;
      }
    }
    .tb-active-users {
      margin-left: 15px;
    }
  }
  .tb-right-wrapper {
    display: flex;
    align-items: center;
    .tb-right-button {
      cursor: pointer;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      font-family: "Inter";
      background-color: #2f45c5;
      border: 1px solid;
      color: #fff;
      border-radius: 18px;
      height: 36px;
      display: flex;
      align-items: center;
      padding: 0;
      transition: -webkit-transform 0.4s ease-in-out;
      transition: transform 0.4s ease-in-out;
      transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
      width: 36px;
      margin-left: 10px;

      .tb-right-icon-wrapper {
        width: 36px;
        height: 36px;
        margin-left: 0;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.2s ease;
      }
    }
  }
}
.popup_robot {
  height: 500px;
  max-width: calc(100vw - 100px);
  max-height: calc(100vh - 100px);
  transition: height 0.5s ease 0s;
  background-color: rgb(255, 255, 255);
  right: 20px;
  width: 350px;
  bottom: 90px;
  z-index: 1000;
  overflow: hidden;
  position: fixed;
  box-shadow: rgb(0 0 0 / 16%) 0px 5px 40px;
  border-radius: 16px;
  .header {
    width: 100%;
    border: none;
    margin: 0px;
    display: flex;
    outline: none;
    padding: 0px;
    font-size: 18px;
    align-items: center;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    border-radius: 0px 0px 4px 4px;

    color: rgb(255, 255, 255);
    justify-content: center;
    height: 60px;
    background: rgb(43, 53, 149);
    padding-right: 0px;
    cursor: pointer;
  }
  .main {
    height: calc((100% - 60px) - 26px);
    padding: 10px 0px 0px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    .content {
      flex: 1 1 0%;
      height: calc(100% - 60px);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .messages {
        margin: 0 0 8px 0;
        display: flex;
        padding: 0 14px;
        overflow-x: hidden;
        overflow-y: auto;
        flex-direction: column;
        scroll-behavior: smooth;
      }
      .content_of_robot {
        align-items: flex-end;
        width: 100%;
        margin: 4px 2px;
        display: flex;
        .text_box {
          display: flex;
          max-width: 80%;
          flex-direction: column;
          .messagesContainer {
            display: flex;
            max-width: 80%;
            flex-direction: column;
            .messageWrapper {
              background-color: rgb(224, 224, 224);
              color: rgb(0, 0, 0);
              margin: 3px 0px;
              align-self: flex-start;
              border-radius: 12px 12px 12px 0px;
              .message {
                font-size: 14px;
                color: rgb(0, 0, 0);
                padding: 20px;
                margin: 0px;
                overflow: hidden;
                box-shadow: rgb(50 50 93 / 8%) 0px 0.25rem 6px,
                  rgb(0 0 0 / 5%) 0px 1px 3px;
                word-break: break-word;
                font-weight: 400;
                border-radius: 12px 12px 12px 0px;
              }
            }
            .feedbackWrapper {
              color: #000;
              display: flex;
              margin-top: 2px;
              justify-content: flex-end;
              .thumbsUp-5-2-77 {
                cursor: pointer;
                opacity: 0.4;
                margin-right: 8px;
                &:hover {
                  opacity: 1;
                }
              }
              .thumbsDown-5-2-80 {
                cursor: pointer;
                opacity: 0.4;
                &:hover {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
      .content_of_me {
        align-items: flex-end;
        width: 100%;
        margin: 4px 2px;
        display: flex;
        align-self: flex-end;
        justify-content: flex-end;
        .text {
          margin: 3px 0px;
          max-width: 80%;
          border-radius: 12px 12px 0px;

          font-size: 14px;
          color: rgb(255, 255, 255);
          padding: 20px;
          background-color: rgb(43, 53, 149);
          border-radius: 12px 12px 0px;

          margin: 0px;
          box-shadow: rgb(50 50 93 / 8%) 0px 0.25rem 6px,
            rgb(0 0 0 / 5%) 0px 1px 3px;
          word-break: break-word;
        }
      }
    }
    .input_box {
      margin: 4px 6px;
      padding: 0px 14px;
      background-color: transparent;
      display: flex;
      position: relative;
      align-items: center;
      .input {
        height: 52px;
        border: none;
        margin: 0px;
        line-height: 0px;
        border-radius: 30px;
        background-color: rgba(170, 170, 170, 0.3);
        color: rgb(64, 64, 64);
        outline: none;
        padding: 6px 42px 6px 18px;
        flex-grow: 1;
        font-size: 14px;
        max-width: 100%;
        box-sizing: border-box;
        transition: background-color 0.1s ease 0s;
        font-family: Roboto;
      }
      .submit_btn {
        border-radius: 50%;
        right: 0px;
        background-color: rgb(43, 53, 149);
        border: 5px solid rgb(255, 255, 255);
        height: 60px;
        width: 60px;
        cursor: pointer;
        margin: 0px;
        display: flex;
        outline: none;
        padding: 0px;
        position: absolute;
        max-width: none;
        min-width: 0px;
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        .send_icon {
          color: rgb(255, 255, 255);
          width: 1em;
          height: 1em;
          font-size: 18px;
        }
      }
    }
  }
  .footer {
    color: gray;
    font-size: 12px;
    margin-top: 4px;
    p {
      margin: 0px;
    }
    img {
      height: 15px;
    }
  }
}
</style>
