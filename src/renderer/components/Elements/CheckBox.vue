<template>
  <div class="checkbox-container" @click="toggle">
    <div :class="{ checkbox: true, on: checked, off: !checked }">
      <input type="checkbox" ref="checkbox" :checked="checked" hidden />
      <div class="ball"></div>
    </div>
    <p class="text"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: "checkbox-element",
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "тут нет текста",
    },
  },
  methods: {
    toggle() {
      //   this.$refs.checkbox.checked = !this.$refs.checkbox.checked;
      this.$emit("change", !this.checked);
    },
  },
};
</script>

<style scoped>
.checkbox {
  min-width: 35px;
  min-height: 18px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  position: relative;
  background: rgb(230, 230, 230);
}


.checkbox.off::after {
  opacity: 0;
}

.checkbox.on::before {
  opacity: 0;
}

.checkbox .ball {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  transition: 0.2s;
  z-index: 999;
  will-change: transform;
}

.checkbox.off .ball {
    background: #000;
}

.checkbox.on .ball {
  transform: translateX(100%);
  background: #FF008B;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.text {
  margin-left: 15px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #454545;
  height: 22px;
}
</style>