<template>
  <div class="login">
    <div class="login-container">
      <div class="login-content">
        <div class="login-box">
          <a
            href="https://enterprise.mile.app/"
            target="_blank"
            rel="noreferrer noopener"
            class="login-box--link"
          >
            <img
              src="../assets/images/logo-milesapp.png"
              alt=""
              class="login-box--logo"
            />
          </a>
          <div class="login-box-card">
            <h1 class="login-box-card--title">Login</h1>
            <base-input-text
              name="input-organization"
              label="Organization Name"
              v-model="form.organization"
              placeholder="Input organization name"
              :errorText="dataError.organization"
              width="90"
            />
            <base-input-text
              name="input-username"
              label="Email or Username"
              v-model="form.username"
              placeholder="Input your email or username"
              :errorText="dataError.username"
              width="90"
              :disabled="true"
            />
            <base-input-text
              name="input-password"
              label="Password"
              type="password"
              v-model="form.password"
              placeholder="Input your password"
              :errorText="dataError.password"
              width="90"
              :disabled="true"
            />
          </div>
        </div>
        <div class="login-bg">
          <img src="../assets/images/bg-2.png" alt="" />
          <div class="login-footer">
            &copy; Copyright 2021 PT. Paket Informasi Digital. All Rights
            Reserved
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInputText from "@/components/BaseInputText";

export default {
  name: "LoginView",
  components: {
    BaseInputText,
  },
  data() {
    return {
      form: {
        organization: "",
      },
      dataError: {},
    };
  },
};
</script>
