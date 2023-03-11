<template>
  <div class="BotsNav">
    <div class="sidepanel-links">
      <router-link
        class="side-link"
        :class="{ 'link-selected': pathname === '/bots' }"
        to="/bots"
      >
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
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
            ></path>
          </g>
        </svg>
        <span class="link-text">Chatbots</span>
      </router-link>
      <router-link
        class="side-link"
        :class="{ 'link-selected': pathname === '/profile' }"
        to="/profile"
      >
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
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
            ></path>
          </g>
        </svg>
        <span class="link-text">Profile</span>
      </router-link>
      <router-link
        class="side-link"
        :class="{ 'link-selected': pathname === '/settings' }"
        to="/settings"
      >
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
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
          ></path>
        </svg>
        <span class="link-text">Settings</span>
      </router-link>
      <div class="help-wrapper">
        <div class="side-link">
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
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
            ></path>
          </svg>
          <span class="link-text sl-submenu">
            Help
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="expand-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </span>
        </div>
        <div class="help-links">
          <a
            class="help-link"
            href="https://discord.gg/AUFe5Z6QgZ"
            target="_blank"
            rel="noreferrer"
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
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill-rule="nonzero"
                  d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z"
                ></path>
              </g>
            </svg>
            <span class="text">Join us on Discord</span>
          </a>
          <a
            class="help-link"
            href="https://www.digite.com/kairon/getting-started"
            target="_blank"
            rel="noreferrer"
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
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zm7.622 4.422a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z"
                ></path>
              </g>
            </svg>
            <span class="text">Getting Started</span>
          </a>
          <a
            class="help-link"
            href="http://kairon-docs.digite.com/"
            target="_blank"
            rel="noreferrer"
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
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M14.997 2L21 8l.001 4.26A5.466 5.466 0 0 0 17.5 11l-.221.004a5.503 5.503 0 0 0-5.127 4.205l-.016.074-.03.02A4.75 4.75 0 0 0 10.878 22L3.993 22a.993.993 0 0 1-.986-.876L3 21.008V2.992c0-.498.387-.927.885-.985L4.002 2h10.995zM17.5 13a3.5 3.5 0 0 1 3.5 3.5l-.001.103a2.75 2.75 0 0 1-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.392L14 16.5a3.5 3.5 0 0 1 3.5-3.5z"
                ></path>
              </g>
            </svg>
            <span class="text">Server Documentation</span>
          </a>
          <a
            class="help-link"
            href="mailto:kairon@digite.com"
            target="_blank"
            rel="noreferrer"
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
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              ></path>
            </svg>
            <span class="text">kairon@digite.com</span>
          </a>
        </div>
      </div>
      <div class="side-link">
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
            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
          ></path>
        </svg>
        <span class="link-text">Feedback</span>
      </div>
    </div>
    <div class="sidepanel-links logout-wrapper">
      <button type="button" class="side-link logout-button">
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
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"
            ></path>
          </g>
        </svg>
        <span class="link-text">Logout</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const pathname = location.pathname;
</script>
<style lang="less" scoped>
.BotsNav {
  height: 100%;
  width: 260px;
  min-width: 260px;
  background-color: #fdfdfd;
  border-right: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #2f45c5;

  .sidepanel-links {
    margin-top: 30px;
    .side-link {
      text-decoration: none;
      display: flex;
      align-items: center;
      margin-right: 30px;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      color: #888;
      color: @gray;
      padding: 14px 30px;
      cursor: pointer;
      .link-icon {
        font-size: 18px;
        margin-right: 14px;
      }
      .link-text {
        font-size: 16px;
      }
      &:hover {
        background-color: hsla(0, 0%, 53.3%, 0.0862745);
        background-color: @trans-bg;
      }
      &.link-selected {
        background-color: #f3f5ff !important;
        background-color: @bg2 !important;
        .link-icon,
        .link-text {
          color: @primary;
        }
      }
    }
    .help-wrapper {
      &:hover .help-links {
        display: block;
      }
      .side-link .sl-submenu {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .expand-icon {
          font-size: 22px;
        }
      }
      .help-links {
        display: none;
        margin-right: 30px;
        .help-link {
          display: flex;
          align-items: center;
          min-height: 36px;
          padding-left: 40px;
          border-radius: 0 50px 50px 0;
          text-decoration: none;
          cursor: pointer;
          color: #888;
          color: @gray;
          &:hover {
            background-color: hsla(0, 0%, 53.3%, 0.0862745);
            background-color: @trans-bg;
          }
          .icon {
            font-size: 16px;
            margin-right: 6px;
          }
          .text {
            font-size: 14px;
          }
        }
      }
    }
  }

  .logout-wrapper {
    margin-bottom: 40px;
    .logout-button {
      border: none;
      background-color: initial;
      font-family: "Inter";
      font-weight: 400;
      cursor: pointer;
      width: 228px;
      padding: 16px 30px;
    }
    .logout-button:hover {
      background-color: hsla(0, 0%, 53.3%, 0.0862745);
      background-color: @trans-bg;
    }
  }
}
</style>
