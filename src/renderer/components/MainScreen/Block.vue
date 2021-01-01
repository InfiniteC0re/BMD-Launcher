<template>
  <div class="block">
    <slot name="icon"></slot>
    <!-- <div class="overlay"></div> -->
    <div class="status">
      <div class="icon">
        <UserIcon iconStyle="fill: #30E520; transform: scale(0.7)" />
      </div>
      <p>{{ players }}/{{ slots }}</p>
    </div>
    <div class="info">
      <InfoIcon />
    </div>
    <h1>{{ name }}</h1>
    <div class="button">
      <ButtonAlt :white="true" text="запустить" />
    </div>
  </div>
</template>

<script>
import UserIcon from "../Icons/User";
import InfoIcon from "../Icons/Info";
import ButtonAlt from "../Elements/Button";

export default {
  name: "main-screen-block",
  props: {
    name: {
      type: String,
      default: "no name",
    },
    ip: {
      type: String,
      default: "",
    },
    port: {
      type: String,
      default: "25565",
    },
  },
  components: {
    UserIcon,
    InfoIcon,
    ButtonAlt,
  },
  data: () => ({
    interval: null,
    players: 0,
    slots: 0,
  }),
  methods: {
    refreshServer() {
      if (this.ip != "") {
        //
      }
    },
  },
  mounted() {
    this.refreshServer();
    this.interval = setInterval(this.refreshServer, 10000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.block {
  margin-top: 16px;
  background: radial-gradient(
    81.5% 81.5% at 50% 0%,
    rgba(116, 71, 182, 0.7) 0%,
    rgba(49, 0, 129, 0.7) 100%
  );
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.53), 0px 12px 14px rgba(0, 0, 0, 0.21);
  backdrop-filter: blur(16.3097px);
  border-radius: 25px;
  position: relative;
  height: 281px;
}

.overlay {
  position: absolute;
  z-index: 10;
  padding: 8px;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  background: rgba(0, 0, 0, 0.9);
  border-radius: 23px;
  margin: 8px;
}

.block h1 {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 28px;
  width: 100%;
  text-align: center;
}

.block .status {
  margin: 16px;
  display: flex;
  align-items: center;
  color: #30e520;
  font-weight: bold;
  font-size: 13px;
}

.block .status p {
  margin-bottom: 3px;
  margin-left: 4px;
}

.block .button {
  width: 150px;
  margin: auto;
  margin-top: 164px;
}

.block .info {
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 11;
}
</style>