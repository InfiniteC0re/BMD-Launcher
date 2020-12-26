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
      default: "ваша реклама может быть здесь",
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
  color: rgba(69,69,69,1);
  font-size: 17px;
  line-height: 36px;
  cursor: pointer;
  transition: 0.2s;
  max-width: 320px;
  background: #E6E6E6;
  font-weight: bold;
}
.button-container.disabled {
  background: #e6e6e6;
  cursor: default !important;
}
.accent {
  background: #ff008b;
  color: #fff;
  font-weight: normal;
  transition: 0.3s ease;
}
.accent:hover {
  background: rgb(255, 255, 255);
  color: #ff008b;
}
.button-container.disabled:hover {
  background: #e6e6e6;
  color: #fff;
}
.wide {
  width: 100%;
}
</style>