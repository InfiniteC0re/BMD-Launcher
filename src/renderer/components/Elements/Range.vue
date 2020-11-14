<template>
  <div class="slider-container">
    <div
      :class="{'point': true, 'noEvents': !LMBPressed}"
      :key="value._id"
      :style="{
        left: `${(index * 100) / (values.length - 1)}%`,
        top: `-100vh`,
      }"
      v-for="(value, index) in values"
      @mouseenter="setValue(index)"
    ></div>
    <div id="slider-thumb" @mousedown="setMouseState(true)" @mouseup="setMouseState(false)">
      <div id="slider-bar" :style="barWidth"></div>
    </div>
    <div class="values">
      <span
        :key="value._id"
        v-for="(value, index) in values"
        :style="{ left: `${(index * 100) / (values.length - 1)}%` }"
        >{{ value }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "range-element",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    values: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    LMBPressed: false,
  }),
  computed: {
    barWidth() {
      return {
        width: `${(this.value * 100) / (this.values.length - 1)}%`,
      };
    },
  },
  methods: {
    setValue(i) {
      if (this.LMBPressed) this.$emit("change", i);
    },
    setMouseState(state) {
      this.LMBPressed = state;
    },
    setMouseStateFalse() {
      this.LMBPressed = false;
    }
  },
  mounted() {
    document.addEventListener("mouseup", this.setMouseStateFalse);
  },
  beforeDestroy() {
    document.removeEventListener("mouseup", this.setMouseStateFalse);
  }
};
</script>

<style scoped>
.slider-container {
  height: 8px;
  user-select: none;
  position: relative;
  margin-bottom: 48px;
}

#slider-thumb {
  background: rgba(230, 230, 230, 1);
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
  pointer-events: none;
}

#slider-bar {
  background: rgba(0, 0, 0, 1);
  width: 0%;
  height: 100%;
  position: relative;
  border-radius: 4px;
}

#slider-bar::after {
  content: url('data:image/svg+xml; utf-8, <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.44482 0.137634L0.582457 6L6.44482 11.8624L6.44482 0.137634Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.58228 0.137634L14.4446 6L8.58228 11.8624L8.58228 0.137634Z" fill="white"/></svg>');
  width: 24px;
  height: 24px;
  background: rgba(255, 0, 139, 1);
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 6px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  pointer-events: all;
}

.values {
  width: 100%;
  position: relative;
  margin-top: 12px;
  font-weight: bold;
  font-size: 13px;
  pointer-events: none;
}

.values span {
  position: absolute;
  width: 50px;
  transform: translateX(-50%);
  text-align: center;
}

.point {
  position: absolute;
  width: 24px;
  height: 200vh;
  top: -8px;
  transform: translateX(-12px);
  opacity: 0;
}
</style>