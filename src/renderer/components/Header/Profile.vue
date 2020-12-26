<template>
  <div :class="{ opened }" style="position: relative">
    <div :class="{ 'button-container-profile': true }" @click="toggleMenu">
      <div class="avatar"></div>
      <div class="info">
        <div class="nickname">InfiniteC0re</div>
        <div class="balance">$984,492.45</div>
      </div>
      <div class="icon">
        <DownArrowIcon />
      </div>
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
    <div class="overlay">
      <div class="table">
        <div class="column1">
          <router-link to="/main" :class="{ colorful: $route.path == '/main' }"
            >Сервера<span class="servers_count">6</span></router-link
          >
          <router-link
            to="/music"
            :class="{ colorful: $route.path == '/music' }"
            >Музыка</router-link
          >
          <span :class="{ colorful: $route.path == '/mini-games' }"
            >Мини-игры</span
          >
          <span :class="{ colorful: $route.path == '/exchange' }">Биржа</span>
          <span :class="{ colorful: $route.path == '/top' }">Топ-лист</span>
          <span :class="{ colorful: $route.path == '/settings' }"
            >Настройки</span
          >
          <ButtonAlt text="Выход" style="margin-top: auto" />
        </div>
        <div class="column2">
          <div class="item">
            <p class="name">В кармане</p>
            <div class="text purple">
              <div class="coin bmd"><BMDCoinIcon /></div>
              100,000.43
            </div>
          </div>
          <div class="item">
            <p class="name">В банке</p>
            <div class="text purple">
              <div class="coin bmd"><BMDCoinIcon /></div>
              250,040.40
            </div>
          </div>
          <div class="item">
            <p class="name"><b>Биткойн</b> ($13,454,34)</p>
            <div class="text">
              <div class="coin btc"><BTCCoinIcon /></div>
              1 BTC
            </div>
          </div>
          <div class="item">
            <p class="name"><b>Эфириум</b> ($340,43)</p>
            <div class="text">
              <div class="coin eth"><ETHCoinIcon /></div>
              1 ETH
            </div>
          </div>
          <div class="item">
            <p class="name"><b>Лайткойн</b> ($55,43)</p>
            <div class="text">
              <div class="coin ltc"><LTCCoinIcon /></div>
              1 ETH
            </div>
          </div>
          <div class="item">
            <p class="name"><b>Итого</b></p>
            <div class="text">
              <div class="coin bmd"><BMDCoinIcon /></div>
              984,492.45
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAlt from "../Elements/Button";
import DownArrowIcon from "../Icons/DownArrow";
import BMDCoinIcon from "../Icons/BMDCoin";
import BTCCoinIcon from "../Icons/BTCCoin";
import ETHCoinIcon from "../Icons/ETHCoin";
import LTCCoinIcon from "../Icons/LTCCoin";

export default {
  name: "header-profile",
  components: {
    ButtonAlt,
    DownArrowIcon,
    BMDCoinIcon,
    BTCCoinIcon,
    ETHCoinIcon,
    LTCCoinIcon,
  },
  data: () => ({
    opened: false,
  }),
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
  mounted() {
    document.addEventListener("click", this.closeMenuEvent);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeMenuEvent);
  },
  props: {},
};
</script>

<style scoped>
.button-container-profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 256px;
  font-size: 17px;
  line-height: 36px;
  cursor: pointer;
  height: 60px;
  width: 188px;
  background: #fff;
  font-weight: bold;
  margin-left: auto;
  padding: 18px 12px;
}

.avatar {
  width: 34px;
  height: 34px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-right: 8px;
}

.info {
  line-height: 16px;
  font-size: 14px;
  text-align: right;
  max-width: 100px;
}

.info .nickname {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info .balance {
  font-size: 14px;
  margin-left: auto;
  color: rgba(107, 57, 249, 1);
}

.icon {
  margin-left: 12px;
  margin-bottom: 4px;
  transition: 0.2s;
}

.opened .icon {
  transform: rotateZ(180deg);
  margin-bottom: 0;
  margin-top: 6px;
}

.corner {
  position: absolute;
  right: 182px;
  top: 49px;
  display: none;
}

.opened .corner {
  display: block;
}

.opened .button-container-profile {
  border-radius: 30px 30px 0 0;
}

.button-container-profile * {
  cursor: pointer !important;
}

.button-container-profile p {
  margin-bottom: 4px;
  font-size: 16px;
  color: #000;
}

.overlay {
  width: 346px;
  height: 362px;
  background: #fff;
  border-radius: 40px 0 40px 40px;
  padding: 23px;
  flex-direction: column;
  display: none;
  overflow: hidden;
}

.opened .overlay {
  display: flex;
}

.table {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

.column1 {
  padding-top: 6px;
  animation: table1_appear 0.8s forwards;
}

.column2 {
  animation: table2_appear 0.8s forwards;
  animation-delay: 0.25s;
}

.column1,
.column2 {
  display: flex;
  flex-direction: column;
  opacity: 0;
}

.column1 a,
.column1 span {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #454545;
  margin-left: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.servers_count {
  width: 24px;
  height: 24px;
  background: #ff008b;
  margin-bottom: 0 !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff !important;
  padding-bottom: 3px;
}

.column2 .item {
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-bottom: 15px;
}

.column2 .item .name {
  font-size: 14px;
}

.column2 .item .text {
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
}

.column2 .item:nth-last-child(1) {
  margin-top: auto;
}

.column2 .item:nth-last-child(1) .text,
.purple {
  color: rgba(107, 57, 249, 1);
}

.coin {
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25),
    inset 0px 1px 0px rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 4px;
}

.coin.bmd {
  background: #6b39f9;
}

.coin.btc {
  background: #f8971b;
}

.coin.eth {
  background: #454a75;
}

.coin.ltc {
  background: #345d9d;
}

@keyframes table1_appear {
  0% {
    opacity: 0;
    transform: translateX(-60%);
  }

  25% {
    opacity: 0;
  }

  50% {
    opacity: 1;
    transform: translateX(0%);
  }

  100% {
    opacity: 1;
  }
}

@keyframes table2_appear {
  0% {
    opacity: 0;
    transform: translateX(60%);
  }

  25% {
    opacity: 0;
  }

  50% {
    opacity: 1;
    transform: translateX(0%);
  }

  100% {
    opacity: 1;
  }
}
</style>