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
              v-model="form.organization"
              :modelValue="form.organization"
              placeholder="Enter organization name"
              :errorText="dataError.organization"
              width="90"
              :isLoading="verifyOrganization"
            />
            <base-input-text
              name="input-username"
              label="Email or Username"
              v-model="form.username"
              placeholder="Enter your email or username"
              :errorText="dataError.username"
              width="90"
              :disabled="isDisabled"
            />
            <base-input-text
              name="input-password"
              label="Password"
              type="password"
              v-model="form.password"
              placeholder="Enter your password"
              :errorText="dataError.password"
              width="90"
              :disabled="isDisabled"
            />
            <button
              class="login-button"
              :class="[isDisabled ? 'login-button--disabled' : '']"
              @click="goToPage"
            >
              Login
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
      form: {
        organization: "",
        username: "",
        password: "",
      },
      dataError: {},
      isDisabled: true,
      verifyOrganization: false,
    };
  },
  watch: {
    "form.organization": function (val) {
      if (val.length > 2) {
        this.verifyOrganization = true;
        setTimeout(() => {
          this.verifyOrganization = false;
        }, 2000);
        if (this.verifyOrganization == false) {
          this.isDisabled = false;
        }
      }
    },
  },
  methods: {
    goToPage() {
      this.$router.push({ name: "map" });
    },
  },
};
</script>
