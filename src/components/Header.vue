<template>
  <div class="Header">
    <div class="navbar flex f-y-c">
      <div class="logo flex f-y-c">
        <a href="/bots">
          <img src="../assets/logo.svg" alt="Kairon" class="logo" />
        </a>
        <a href="/bots">
          <img src="../assets/kAIron.svg" alt="KAIron" class="text" />
        </a>
        <span class="digite-text">
          Powered by
          <a
            href="https://www.digite.com/"
            target="_blank"
            rel="noreferrer"
            class="digite-link"
          >
            Digité
          </a>
        </span>
      </div>
      <div class="userinfo flex f-y-c">
        <a href="/profile" class="user-photo-wrapper">
          <span class="user-initials">DH</span>
        </a>
        <div>Delusion Hgu</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.Header {
  .navbar {
    height: 74px;
    padding: 12px 64px 12px 16px;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    border-bottom: 1px solid @border;
    background-color: #f3f5ff;
    background-color: @bg2;

    .logo {
      .logo {
        width: 50px;
        height: 50px;
        -webkit-user-select: none;
        user-select: none;
      }
      .text {
        height: 30px;
        width: auto;
        -webkit-user-select: none;
        user-select: none;
      }
      .digite-text {
        color: #888;
        color: @gray;
      }
      .digite-link {
        font-weight: 300;
        color: #000;
        color: @font;
        font-size: 14px;
        text-underline-offset: 4px;
      }
    }
  }

  .digite-text:before {
    content: "|";
    font-size: 16px;
    margin: 0 12px;
  }

  .userinfo {
    display: flex;
    align-items: center;
  }

  .user-photo-wrapper {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    background-color: #2f45c5;
    color: #fff;
  }

  .user-initials {
    font-size: 16px;
    font-weight: 500;
    -webkit-user-select: none;
    user-select: none;
  }
}
</style>
