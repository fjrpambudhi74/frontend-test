<template>
  <div class="login">
    <div class="login-container">
      <div class="login-content">
        <div class="login-box">
          <div class="login-box-logo">
            <a
              href="https://enterprise.mile.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="../assets/images/logo-milesapp.png"
                alt=""
                class="login-box--image"
              />
            </a>
          </div>

          <div class="login-box-card">
            <h1 class="login-box-card--title">Login</h1>
            <base-input-text
              name="input-organization"
              label="Organization"
              v-model="formLogin.organization"
              :modelValue="formLogin.organization"
              placeholder="Enter organization name"
              :errorText="dataError.organization"
              width="90"
              :isLoading="verifyOrganization"
            />
            <base-input-text
              name="input-username"
              label="Email or Username"
              v-model="formLogin.username"
              placeholder="Enter your email or username"
              :errorText="dataError.username"
              width="90"
              :disabled="isDisabled"
            />
            <base-input-text
              name="input-password"
              label="Password"
              type="password"
              v-model="formLogin.password"
              placeholder="Enter your password"
              :errorText="dataError.password"
              width="90"
              :disabled="isDisabled"
            />
            <button
              class="login-button"
              :class="[isDisabled ? 'login-button--disabled' : '']"
              @click="submitForm"
            >
              <div class="loader" v-if="isLoading"></div>
              <div class="m-r--auto m-l--auto" v-else>Login</div>
            </button>
            <p>
              Not registered yet?
              <span class="login-contact"
                ><a
                  href="https://mile.app/signup"
                  target="_blank"
                  rel="noreferrer noopener"
                  >Register now</a
                ></span
              >
              <br />
              or for more info
              <span class="login-contact"
                ><a
                  href="https://mile.app/talk-to-sales"
                  target="_blank"
                  rel="noreferrer noopener"
                  >Contact us</a
                ></span
              >
            </p>
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
      formLogin: {
        organization: "",
        username: "",
        password: "",
      },
      dataError: {},
      isDisabled: true,
      isLoading: false,
      verifyOrganization: false,
    };
  },
  watch: {
    "formLogin.organization": function (val) {
      if (val.length > 2) {
        this.verifyOrganization = true;
        // should be api call
        setTimeout(() => {
          this.verifyOrganization = false;
          this.isDisabled = false;
        }, 1000);
      }
    },
  },
  methods: {
    goToPage() {
      this.$router.push({ name: "map" });
    },
    submitForm() {
      this.isLoading = true;
      if (!this.isFormValid()) {
        this.isLoading = false;
        return;
      }
      // should be api call
      else {
        setTimeout(() => {
          this.isLoading = false;
          this.goToPage();
        }, 1000);
      }
    },
    isFormValid() {
      let result = true;
      this.dataError = {};

      const { username, password } = this.formLogin;

      if (!username) {
        this.dataError.username = "Email or username must be filled";
        result = false;
      }

      if (!password) {
        this.dataError.password = "Password must be filled";
        result = false;
      } else if (password.length <= 6) {
        this.dataError.password = "Password must be at least 6 characters";
        result = false;
      }

      return result;
    },
  },
};
</script>
