<template>
  <div v-if="computedText" class="invalid-input__text">
    <img :src="iconInfo" alt="" width="13" />
    <span>{{ computedText }}</span>
  </div>
</template>

<script>
import iconInfo from "@/assets/images/info-red.svg";
export default {
  name: "BaseInputError",
  props: {
    text: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      iconInfo,
    };
  },
  computed: {
    computedText() {
      return typeof this.text == "string" ? this.text.trim() : "";
    },
  },
};
</script>
