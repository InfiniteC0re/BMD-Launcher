<template>
  <div id="app">
    <Background :logoType="logoType" :showHands="showHands" />
    <Frame />
    <transition name="slide" mode="out-in" class="full">
      <router-view id="__router"></router-view>
    </transition>
  </div>
</template>

<script>
import Background from "./components/Background";
import Frame from "./components/Frame";

export default {
  name: "bmd-launcher",
  components: {
    Background,
    Frame,
  },
  data: () => ({
    logoType: 0,
    showHands: true,
  }),
  methods: {
    setLogo(i) {
      this.logoType = i;
    },
    setShowHands(i) {
      this.showHands = i;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "BMD";
  font-weight: normal;
  src: url(./assets/fonts/sbc-font-Regular.ttf);
}

* {
  box-sizing: border-box;
  user-select: none;
}

p,
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: "BMD";
  overflow: hidden;
}

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at center top, #4e00b4, #1b005a);
}

#__router {
  flex: 1;
  z-index: 2;
}

#form {
  height: 100%;
  position: relative;
}

#form h2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 28px;
}

#form h2.top {
  top: 144px;
}

#form h2.bottom {
  bottom: 144px;
}

#form h3 {
  color: #fff;
  font-size: 28px;
}

.mainPanel {
  width: 405px;
  padding: 42px;
  background: #fff;
  border-radius: 37px;
  position: absolute;
  top: 204px;
  left: 50%;
  transform: translateX(-50%);
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.22s;
}
.slide-enter {
  will-change: transform, opacity;
  transform: translate(0, 100%);
  pointer-events: none;
}
.slide-leave-to {
  transform: translate(0, -100%);
  opacity: 0;
}

.noEvents {
  pointer-events: none;
}

.colorful {
  color: #ff008b !important;
}
</style>
