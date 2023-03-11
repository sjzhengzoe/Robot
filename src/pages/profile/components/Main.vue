<template>
  <div class="Main">
    <div class="profile-page">
      <h1 class="app-heading">Profile</h1>
      <div class="proifle-content">
        <div class="photo-wrapper">
          <div class="photo">DH</div>
          <div class="account-info">
            <h2 class="fullname">DELUSION HUMAN</h2>
          </div>
        </div>
        <div class="account-details">
          <div class="title">Account Details</div>
          <div class="detail-row">
            <div class="detail">
              <p class="detail-name">First Name:</p>
              <p class="detail-value">DELUSION</p>
            </div>
            <div class="detail">
              <p class="detail-name">Last Name:</p>
              <p class="detail-value">HUMAN</p>
            </div>
          </div>
          <div class="detail-row">
            <div class="detail">
              <p class="detail-name">Email:</p>
              <p class="detail-value">sjzhengzoe@gmail.com</p>
            </div>
            <div class="detail">
              <p class="detail-name">Member Since:</p>
              <p class="detail-value">March 8, 2023 1:30 AM</p>
            </div>
          </div>
        </div>
      </div>
      <div class="more-actions-wrapper">
        <button
          @click="handleExpanded"
          type="button"
          class="more-actions-button"
          :class="{ 'actions-expanded': isExpanded }"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="button-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
            ></path>
          </svg>
          <span class="button-label">More Actions</span>
        </button>
        <div v-if="isExpanded" class="more-actions-content">
          <h3 class="action-title">Delete Account</h3>
          <p class="text">Would you like to delete your account?</p>
          <p class="text">
            This account contains 2 chatbots. Deleting your account will remove
            all the content associated with it.
          </p>
          <button type="button" class="delete-account-button">
            I want to delete my account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isExpanded = ref(false);

const handleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
<style lang="less" scoped>
.Main {
  flex-grow: 1;
  overflow-y: auto;
  .profile-page {
    margin: 34px 64px 34px 42px;
    .app-heading {
      font-size: 24px;
      font-weight: 600;
      font-family: "Inter";
      margin: 0;
    }

    .proifle-content {
      padding-top: 16px;
      .photo-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .photo {
          border-radius: 50%;
          background-color: #2f45c5;
          -webkit-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          width: 88px;
          height: 88px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 400;
          font-size: 36px;
          text-transform: uppercase;
        }
        .account-info {
          margin: 16px;
          .fullname {
            font-size: 20px;
            font-weight: 500;
            margin: 0;
          }
        }
      }
      .account-details {
        margin: 24px 0;
        .title {
          font-size: 18px;
          font-weight: 500;
          padding-bottom: 4px;
          margin-bottom: 20px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          .detail {
            width: 48%;
            display: flex;
            margin: 15px 0;
            padding-bottom: 10px;
            border-bottom: 1px solid #eaeaea;
            .detail-name {
              font-size: 15px;
              font-weight: 500;
              min-width: 150px;
              margin: 0;
            }
            .detail-value {
              font-size: 15px;
              margin: 0 0 0 6px;
              flex-grow: 1;
            }
          }
        }
      }
    }
    .more-actions-wrapper {
      .more-actions-button {
        background-color: initial;
        border-radius: 4px;
        padding: 10px;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #000;
        color: var(--font);
        font-size: 13px;
        .button-label {
          font-family: "Inter";
          font-weight: 500;
        }
        .button-icon {
          font-size: 18px;
          margin-right: 10px;
        }
        &.actions-expanded {
          box-shadow: 0 0 0 2px #6c82ff;
          .button-icon {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
          }
        }
      }

      .more-actions-content {
        margin: 10px 0;
        transition: height 0.1s ease;
        .action-title {
          font-weight: 500;
          font-size: 14px;
        }
        .text {
          margin: 0;
          font-size: 13px;
        }
        .delete-account-button {
          margin: 10px 0;
          padding: 0;
          background-color: initial;
          color: red;
          font-family: "Inter";
          font-weight: 500;
          cursor: pointer;
          border: none;
          border-bottom: 1px solid red;
        }
      }
    }
  }
}
</style>
