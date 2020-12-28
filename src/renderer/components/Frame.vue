<template>
  <div id="__frame">
    <div class="button minimize" @click="minimize">
      <HideIcon />
    </div>
    <div class="button close" @click="close">
      <CloseIcon />
    </div>
  </div>
</template>

<script>
import CloseIcon from "./Icons/Close";
import HideIcon from "./Icons/Hide";
export default {
  name: "frame",
  components: {
    CloseIcon,
    HideIcon,
  },
  methods: {
    close() {
      require("electron").remote.getCurrentWindow().close();
    },
    minimize() {
      require("electron").remote.getCurrentWindow().minimize();
    }
  },
};
</script>

<style scoped>
#__frame {
  background: #fff;
  height: 30px;
  width: 100%;
  -webkit-app-region: drag;
  display: flex;
  justify-content: flex-end;
}

.button {
  height: 100%;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-app-region: no-drag;
  transition: 0.1s;
}

.button:hover {
  background: rgba(0, 0, 0, 0.2);
}

.button svg {
  width: 12px;
}

.button.close:hover {
  background: rgb(240, 18, 66);
}
</style>