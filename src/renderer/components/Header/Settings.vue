<template>
  <div :class="{ noEvents, opened }" style="position: relative">
    <div :class="{ 'button-container-settings': true }" @click="toggleMenu">
      <div class="icon">
        <SettingsIcon />
      </div>
      <p>настройки</p>
    </div>
    <div class="corner">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.00002 11C6.52287 11 11 6.52285 11 1C11 0.804952 10.9944 0.611206 10.9834 0.418915C14.3183 1.5185 16.7253 4.65949 16.7253 8.36268C16.7253 12.9812 12.9813 16.7253 8.36271 16.7253C4.65952 16.7253 1.51853 14.3183 0.418945 10.9834C0.611233 10.9944 0.804977 11 1.00002 11Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="settings-overlay">
      <p>
        Выделение оперативной памяти: <b>{{ ramValues[val] }} Mb</b>
      </p>
      <Range ref="ramRange" v-model="val" :values="ramValues" />
      <p>
        Директория загрузок файлов:<br /><b class="black">{{
          gameDirectory
        }}</b>
      </p>
      <div class="game-directory">
        <ButtonAlt
          text="Сменить директорию"
          :height="40"
          style="font-size: 13px"
        />
        <div class="remove-game-dir">
          <TrashIcon iconStyle="transform: scale(1.2);" />
          <p>Удалить файлы</p>
        </div>
      </div>
      <div class="footer">
        <CheckBox v-model="fullscreenMode">
          <span :class="{ 'checkbox-text': true, colorful: fullscreenMode }"
            >Полноэкранный режим</span
          >
        </CheckBox>
        <CheckBox v-model="autojoin">
          <span :class="{ 'checkbox-text': true, colorful: autojoin }"
            >Автовход на сервер</span
          >
        </CheckBox>
        <CheckBox v-model="debug">
          <span :class="{ 'checkbox-text': true, colorful: debug }"
            >Режим отладки</span
          >
        </CheckBox>
        <ButtonAlt text="Применить" :accent="true" :height="50" />
      </div>
    </div>
  </div>
</template>

<script>
import SettingsIcon from "../Icons/Settings";
import TrashIcon from "../Icons/Trash";
import ButtonAlt from "../Elements/Button";
import Range from "../Elements/Range";
import CheckBox from "../Elements/CheckBox";

export default {
  name: "header-settings",
  components: {
    TrashIcon,
    SettingsIcon,
    Range,
    ButtonAlt,
    CheckBox,
  },
  data: () => ({
    val: 0,
    gameDirectory: "C:/Users/agere/bmd world/updates",
    fullscreenMode: true,
    autojoin: false,
    debug: false,
    ramValues: [],
    noEvents: false,
    opened: false,
  }),
  mounted() {
    this.noEvents = this.$refs.ramRange.LMBPressed;

    var gbytes = Math.floor(require("os").totalmem() / 1000000000);

    if (gbytes > 8) gbytes = 8;

    for (let i = 1; i <= gbytes; i++) {
      this.ramValues.push(i * 1024);
    }

    document.addEventListener("click", this.closeMenuEvent);
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened;
    },
    closeMenuEvent(e) {
      if (
        this.opened == true &&
        e.target instanceof HTMLElement &&
        !this.$el.contains(e.target)
      ) {
        this.opened = false;
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeMenuEvent);
  },
  props: {},
};
</script>

<style scoped>
.button-container-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 256px;
  font-size: 17px;
  line-height: 36px;
  cursor: pointer;
  height: 60px;
  width: 177px;
  background: #fff;
  font-weight: bold;
}

.opened .button-container-settings {
  border-radius: 30px 30px 0 0;
}

.button-container-settings * {
  cursor: pointer !important;
}

.button-container-settings p {
  margin-bottom: 4px;
  font-size: 16px;
  color: #000;
}

.corner {
  position: absolute;
  right: 198px;
  top: 48px;
  transform: rotateZ(90deg);
}

.icon {
  margin-right: 12px;
  margin-top: 7px;
  pointer-events: none;
}

.settings-overlay {
  width: 385px;
  height: 391px;
  background: #fff;
  border-radius: 0 40px 40px 40px;
  padding: 30px;
  flex-direction: column;
  display: none;
}

.opened .settings-overlay {
  display: flex;
}

p {
  font-size: 14px;
  color: rgba(69, 69, 69, 1);
  margin-bottom: 18px;
}

.black {
  color: #000;
}

.game-directory {
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  grid-gap: 15px;
}

.remove-game-dir {
  color: #ff008b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.remove-game-dir p {
  color: inherit;
  font-weight: bold;
  margin: 0;
  margin-left: 16px;
  font-size: 13px;
}

.footer {
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: auto;
}

.footer *:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.footer *:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}

.footer *:nth-child(3) {
  grid-column: 1;
  grid-row: 3;
}

.footer *:nth-child(4) {
  grid-column: 2;
  grid-row: 3;
}

.checkbox-text {
  font-size: 12px;
}
</style>