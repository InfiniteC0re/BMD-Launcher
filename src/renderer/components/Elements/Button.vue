<template>
  <div
    :class="{ 'button-container': true, wide, disabled, accent }"
    :style="`height: ${height}px`"
    @click="click"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "button-element",
  props: {
    text: {
      type: String,
      default: "",
    },
    wide: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 60,
    },
    accent: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      if (!this.disabled) this.$emit("click");
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 256px;
  color: #fff;
  font-size: 17px;
  line-height: 36px;
  cursor: pointer;
  transition: 0.2s;
  max-width: 320px;
}
.button-container.disabled {
  background: #E6E6E6;
  cursor: default !important;
}
.accent {
  background: #ff008b;
}
.wide {
    width: 100%;
}
</style>