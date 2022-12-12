<template>
  <div class="form-input" :class="[error ? 'invalid-input' : '']">
    <label v-if="label" class="field-label" :for="id">{{ label }}</label>
    <input
      class="field-input"
      autocomplete="off"
      :class="['w-' + width]"
      :disabled="disabled"
      :type="type"
      :id="id"
      :name="name"
      :min="min"
      :max="max"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
    <div
      v-if="isLoading"
      class="icon-container"
      :class="[error ? 'adjustment-position' : '']"
    >
      <i class="icon-loader"></i>
    </div>
    <base-input-text-error v-if="error" :text="error" />
  </div>
</template>

<script>
import BaseInputTextError from "@/components/BaseInputTextError.vue";
export default {
  name: "base-input-text",
  components: {
    BaseInputTextError,
  },
  props: {
    label: {
      default: "",
      type: String,
    },
    name: {
      type: String,
    },
    type: {
      default: "text",
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      default: "",
      type: String,
    },
    min: {
      type: String,
      default: "",
    },
    max: {
      type: String,
      default: "",
    },
    width: [Number, String],
    errorText: {
      default: "",
      type: String,
    },
    isLoading: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  computed: {
    id() {
      if (!this.name) {
        return;
      } else if (this.indexKey !== "") {
        return `input-text--${this.name}--${this.indexKey}`;
      }
      return `input-text--${this.name}`;
    },
    error() {
      return typeof this.errorText == "string" ? this.errorText.trim() : "";
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.error {
  border-color: red !important;
  &--text {
    color: red;
  }
}
.icon-container {
  position: absolute;
  right: 40px;
  top: calc(50% - 15px);
}

.adjustment-position {
  top: calc(50% - 25px) !important;
}
.icon-loader {
  position: relative;
  height: 20px;
  width: 20px;
  display: inline-block;
  animation: around 5.4s infinite;
}

@keyframes around {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.icon-loader::after,
.icon-loader::before {
  content: "";
  background: white;
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-color: #505154 #505154 transparent transparent;
  border-style: solid;
  border-radius: 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  animation: around 0.7s ease-in-out infinite;
}

.icon-loader::after {
  animation: around 0.7s ease-in-out 0.1s infinite;
  background: transparent;
}
</style>
