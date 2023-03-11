<template>
  <div
    class="BotNav"
    :class="{ 'navbar-open': isEnter }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <router-link to="/bots">
      <div class="navlogo-wrapper">
        <img src="../assets/logo.svg" alt="Kairon" class="navlogo" />
        <img src="../assets/kAIron.svg" alt="kAIron" class="navkairon" />
      </div>
    </router-link>
    <div class="navlinks">
      <div class="subnav" @click="handleToggleNav(1)">
        <div
          class="nav-link"
          :class="{ 'nl-selected': nowNav[0] === 1 }"
          role="button"
          tabindex="0"
        >
          <div class="link-icon-wrapper">
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
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
              ></path>
            </svg>
          </div>
          <span class="link-text">
            Create
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="sublist-icon"
              :class="{ 'open-sublist-icon': nowToggleNav === 1 }"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div v-if="nowToggleNav === 1" class="expansion-panel">
          <a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 1 && nowNav[1] === 1 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8"
          >
            <div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
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
            </div>
            <span class="subnav-text" title="Conversations">
              Conversations
            </span>
          </a>

          <router-link
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 1 && nowNav[1] === 2 }"
            :to="`/bot/${$route.params.id}/components`"
          >
            <div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                ></path>
              </svg>
            </div>
            <span class="subnav-text" aria-describedby="mui-47458"
              >Components
            </span>
          </router-link>
          <router-link
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 1 && nowNav[1] === 3 }"
            :to="`/bot/${$route.params.id}/fileUpload`"
          >
            <div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                ></path>
              </svg>
            </div>
            <span class="subnav-text" title="Upload / Download Data">
              Upload / Download Data
            </span>
          </router-link>
          <a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 1 && nowNav[1] === 4 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8/storiesEdit"
          >
            <div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M4 8h16V5H4v3zm10 11v-9h-4v9h4zm2 0h4v-9h-4v9zm-8 0v-9H4v9h4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                  ></path>
                </g>
              </svg>
            </div>
            <span class="subnav-text" title="Manage Q&amp;A Stories"
              >Manage Q&amp;A Stories</span
            >
          </a>
        </div>
      </div>
      <div class="subnav" @click="handleToggleNav(2)">
        <div
          class="nav-link"
          :class="{ 'nl-selected': nowNav[0] === 2 }"
          role="button"
          tabindex="0"
        >
          <div class="link-icon-wrapper">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="link-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"
              ></path>
            </svg>
          </div>
          <span class="link-text"
            >Train
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              :class="{ 'open-sublist-icon': nowToggleNav === 2 }"
              class="sublist-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div v-if="nowToggleNav === 2" class="expansion-panel">
          <a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 2 && nowNav[1] === 1 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8/train"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="subnav-icon"
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
            <span class="subnav-text" title="Training History"
              >Training History</span
            ></a
          ><a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 2 && nowNav[1] === 2 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8/config"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zM8.634 8.17l5 8.66 1.732-1-5-8.66-1.732 1z"
                  ></path>
                </g>
              </svg>
            </div>
            <span class="subnav-text" title="Model Configuration"
              >Model Configuration</span
            ></a
          >
        </div>
      </div>
      <div class="subnav" @click="handleToggleNav(3)">
        <div
          class="nav-link"
          :class="{ 'nl-selected': nowNav[0] === 3 }"
          role="button"
          tabindex="0"
        >
          <div class="link-icon-wrapper">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="link-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 7H3V2h1v5zm-1 7h1v-3H3v3zm5 0h1V8H8v6zm5 0h1v-2h-1v2zm1-12h-1v6h1V2zM9 2H8v2h1V2zM5 8H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5-3H7c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z"
              ></path>
            </svg>
          </div>
          <span class="link-text"
            >Deploy
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              :class="{ 'open-sublist-icon': nowToggleNav === 3 }"
              class="sublist-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div v-if="nowToggleNav === 3" class="expansion-panel">
          <a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 3 && nowNav[1] === 1 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8/client"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm1.69-6.929l-.975.563 1 1.732.976-.563c.501.51 1.14.887 1.854 1.071V16h2v-1.126a3.996 3.996 0 0 0 1.854-1.071l.976.563 1-1.732-.975-.563a4.004 4.004 0 0 0 0-2.142l.975-.563-1-1.732-.976.563A3.996 3.996 0 0 0 13 7.126V6h-2v1.126a3.996 3.996 0 0 0-1.854 1.071l-.976-.563-1 1.732.975.563a4.004 4.004 0 0 0 0 2.142zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  ></path>
                </g>
              </svg>
            </div>
            <span class="subnav-text" title="Configure Client"
              >Configure Client</span
            ></a
          ><a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 3 && nowNav[1] === 2 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8/telemetry"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  ></path>
                </g>
              </svg>
            </div>
            <span class="subnav-text" title="Configure Telemetry"
              >Configure Telemetry</span
            ></a
          ><a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 3 && nowNav[1] === 3 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8/integrations"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zM20 17h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zM12 14h-2v4h2c0 1.1.9 2 2 2h3v-8h-3c-1.1 0-2 .9-2 2z"
                ></path>
                <path
                  d="M5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2z"
                ></path>
              </svg>
            </div>
            <span class="subnav-text" title="Integrations"
              >Integrations</span
            ></a
          ><a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 3 && nowNav[1] === 4 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8/admin"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976L12 1zm0 6a2 2 0 0 0-1 3.732V15h2l.001-4.268A2 2 0 0 0 12 7z"
                  ></path>
                </g>
              </svg>
            </div>
            <span class="subnav-text" aria-describedby="mui-51721"
              >Administration</span
            ></a
          >
        </div>
      </div>
      <div class="subnav" @click="handleToggleNav(4)">
        <div
          class="nav-link"
          :class="{ 'nl-selected': nowNav[0] === 4 }"
          role="button"
          tabindex="0"
        >
          <div class="link-icon-wrapper">
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
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              ></path>
            </svg>
          </div>
          <span class="link-text"
            >Monitor
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              :class="{ 'open-sublist-icon': nowToggleNav === 4 }"
              class="sublist-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div v-if="nowToggleNav === 4" class="expansion-panel">
          <a
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 4 && nowNav[1] === 1 }"
            href="/bot/6407e52b6f4e7ad5218fe4c8/history"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0L24 0 24 24 0 24z"></path>
                  <path
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.702 0-3.305-.425-4.708-1.175L2 22l1.176-5.29C2.426 15.306 2 13.703 2 12 2 6.477 6.477 2 12 2zm1 5h-2v7h6v-2h-4V7z"
                  ></path>
                </g>
              </svg>
            </div>
            <span class="subnav-text" aria-describedby="mui-2132">
              Chat History
            </span>
          </a>
          <router-link
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 4 && nowNav[1] === 2 }"
            :to="`/bot/${$route.params.id}/analytics`"
          >
            <div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M379.4 178.3l-87.2 133.4C299 320 303 330.5 303 342c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-3 .3-6 .8-8.9l-57.6-33.5c-8.6 8.3-20.3 13.4-33.3 13.4-8.6 0-16.6-2.3-23.6-6.2L32 364.2v57.2c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V208.8l-58.6-38.9c-8.1 6.3-18.3 10.1-29.4 10.1-4.4 0-8.7-.6-12.7-1.7z"
                ></path>
                <path
                  d="M117 217c26.5 0 48 21.5 48 48 0 2.1-.2 4.2-.4 6.2l60.1 33.6c8.3-6.8 18.8-10.8 30.4-10.8 3.6 0 7.1.4 10.4 1.1l87.4-135.4c-5.6-7.8-8.9-17.4-8.9-27.8 0-26.5 21.5-48 48-48s48 21.5 48 48c0 3.9-.5 7.7-1.3 11.3l41.3 27.6V90.7c0-23.5-19.2-42.7-42.7-42.7H74.7C51.2 48 32 67.2 32 90.7V320l40-38.3c-1.9-5.2-3-10.8-3-16.7 0-26.5 21.5-48 48-48z"
                ></path>
              </svg>
            </div>
            <span class="subnav-text">Analytics</span>
          </router-link>
          <router-link
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 4 && nowNav[1] === 3 }"
            :to="`/bot/${$route.params.id}/log`"
          >
            <div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
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
            <span class="subnav-text" title="Logs">Logs</span>
          </router-link>
        </div>
      </div>
      <div class="subnav" @click="handleToggleNav(5)">
        <div
          class="nav-link"
          :class="{ 'nl-selected': nowNav[0] === 5 }"
          role="button"
          tabindex="0"
        >
          <div class="link-icon-wrapper">
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
          </div>
          <span class="link-text"
            >Help
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              :class="{ 'open-sublist-icon': nowToggleNav === 5 }"
              class="sublist-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div v-if="nowToggleNav === 5" class="expansion-panel">
          <a
            href="https://www.digite.com/kairon/getting-started"
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 5 && nowNav[1] === 1 }"
            target="_blank"
            rel="noreferrer"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
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
            </div>
            <span class="subnav-text" title="Getting Started"
              >Getting Started
            </span>
          </a>
          <a
            href="https://discord.gg/AUFe5Z6QgZ"
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 5 && nowNav[1] === 2 }"
            target="_blank"
            rel="noreferrer"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
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
            </div>
            <span class="subnav-text" title="Join us on Discord"
              >Join us on Discord</span
            ></a
          ><a
            href="http://kairon-docs.digite.com/"
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 5 && nowNav[1] === 3 }"
            target="_blank"
            rel="noreferrer"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
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
            </div>
            <span class="subnav-text">Server Documentation</span></a
          ><a
            href="mailto:kairon@digite.com"
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 5 && nowNav[1] === 4 }"
            target="_blank"
            rel="noreferrer"
            ><div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                ></path>
              </svg>
            </div>
            <span class="subnav-text" title="Contact: kairon@digite.com"
              >Contact: kairon@digite.com</span
            ></a
          >
          <div
            class="subnav-link"
            :class="{ 'subnav-selected': nowNav[0] === 5 && nowNav[1] === 5 }"
            role="button"
            tabindex="0"
          >
            <div class="subnav-icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="subnav-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
                ></path>
              </svg>
            </div>
            <span class="subnav-text" title="Feedback">Feedback</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-user">
      <div class="profile-photo-wrapper">
        <div class="user-photo">DH</div>
      </div>
      <div class="user-text" role="button" tabindex="0">Logout</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, watch } from "vue";
const props = defineProps({
  nowNav: {
    type: Array,
  },
});
// 目前的页面是哪个
const nowNav = ref(props.nowNav);
// 展示的 Nav 是哪个
const nowToggleNav = ref("");
const isEnter = ref(false);

const onMouseEnter = () => {
  isEnter.value = true;
  nowToggleNav.value = props.nowNav[0];
};
const onMouseLeave = () => {
  nowToggleNav.value = null;
  isEnter.value = false;
};
// 切换 Nav
const handleToggleNav = (nav) => {
  nowToggleNav.value = nav;
};
</script>
<style lang="less" scoped>
.BotNav {
  grid-area: navbar;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaeaea;
  transition: width 0.15s ease;
  position: fixed;
  height: 100vh;
  width: 64px;
  z-index: 100;
  .navlogo-wrapper {
    padding: 5px 11px;
    -webkit-user-select: none;
    user-select: none;
    height: 64px;
    display: flex;
    flex-direction: column;
    background-color: hsla(0, 0%, 99.2%, 0.219608);
    .navlogo {
      width: 42px;
    }
    .navkairon {
      width: 40px;
      margin: 0 auto;
      display: block;
      transition: width 0.1s ease;
    }
  }

  .navlinks {
    margin-top: 36px;
    width: 100%;

    .nav-link {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 50px;
      justify-content: flex-start;
      padding: 10px;
      position: relative;
      transition: background-color 0.15s ease;
      text-decoration: none;
      &:hover {
        background-color: hsla(0, 0%, 53.3%, 0.0862745);
      }
      .link-icon-wrapper {
        display: flex;
        align-items: center;
        .link-icon {
          color: #aaa;
          font-size: 22px;
          transition: color 0.15s ease;
          margin-left: 11px;
        }
      }
      .link-text {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #aaa;
        margin-left: 20px;
        font-size: 16px;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .sublist-icon {
          font-size: 20px;
          color: #888;
          transition: -webkit-transform 0.2s ease;
          transition: transform 0.2s ease;
          transition: transform 0.2s ease, -webkit-transform 0.2s ease;
          &.open-sublist-icon {
            transform: rotate(180deg);
          }
        }
      }
      &.nl-selected {
        background-color: hsla(0, 0%, 53.3%, 0.0862745) !important;
        border-left: 4px solid #6c82ff;
        padding-left: 6px;
        .link-icon {
          color: #6c82ff !important;
        }
        .link-text {
          color: #6c82ff !important;
        }
        .sublist-icon {
          color: #6c82ff !important;
        }
      }
    }
    .expansion-panel {
      display: flex;
      flex-direction: column;
      .subnav-link {
        text-decoration: none;
        color: #888;
        display: flex;
        padding: 10px 16px 10px 20px;
        transition: background-color 0.15s ease, color 0.15s ease;
        cursor: pointer;
        &:hover {
          background-color: hsla(0, 0%, 53.3%, 0.0862745);
          color: #404040;
        }
        &.subnav-selected {
          color: #6c82ff !important;
        }
        .subnav-icon-wrapper {
          display: flex;
          align-items: center;
          .subnav-icon {
            font-size: 18px;
            margin-right: 10px;
            margin-left: 24px;
          }
        }
        .subnav-text {
          font-size: 14px;
          font-weight: 500;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .nav-user {
    position: relative;
    margin: auto 0 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 4px 0;
    .profile-photo-wrapper {
      .user-photo {
        margin: 0 8px;
        color: #fff;
        font-weight: 500;
        width: 48px;
        height: 48px;
        background-color: #2f45c5;
        border-radius: 50%;
        border: 6px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .user-text {
      font-size: 16px;
      font-weight: 500;
      margin-left: 4px;
      color: #888;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  &.navbar-open {
    height: 100%;
    width: 260px;
    min-width: 260px;
    box-shadow: -2px 12px 10px #aaa;
    .navlogo-wrapper {
      flex-direction: row;
      align-items: flex-start;
      .navkairon {
        width: 70px;
        padding-top: 8px;
        margin: 0 8px;
      }
    }
  }
}
</style>
