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
          <span :class="{ colorful: $route.path == '/main' }"
            >Сервера<span class="servers_count">6</span></span
          >
          <span :class="{ colorful: $route.path == '/music' }">Музыка</span>
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
            <p class="text">$100,000.43</p>
          </div>
          <div class="item">
            <p class="name">В банке</p>
            <p class="text">$250,040.40</p>
          </div>
          <div class="item">
            <p class="name"><b>Биткойн</b> ($13,454,34)</p>
            <p class="text">1 BTC</p>
          </div>
          <div class="item">
            <p class="name"><b>Эфириум</b> ($340,43)</p>
            <p class="text">100 ETH</p>
          </div>
          <div class="item">
            <p class="name"><b>Лайткойн</b> ($55,43)</p>
            <p class="text">10 LTC</p>
          </div>
          <div class="item">
            <p class="name"><b>Итого</b></p>
            <p class="text">$984,492.45</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAlt from "../Elements/Button";
import DownArrowIcon from "../Icons/DownArrow";

export default {
  name: "header-profile",
  components: {
    ButtonAlt,
    DownArrowIcon,
  },
  data: () => ({
    opened: false,
  }),
  mounted() {
    console.log(this.$route.path);
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened;
    },
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
  color: #1bbb0d;
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
  animation: table1_appear 0.6s forwards;
}

.column2 {
  animation: table2_appear 0.6s forwards;
  animation-delay: 0.3s;
}

.column1,
.column2 {
  display: flex;
  flex-direction: column;
  opacity: 0;
}

.column1 span {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #454545;
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.servers_count {
    width: 24px;
    height: 24px;
    background: #FF008B;
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
}

.column2 .item:nth-last-child(1) {
  margin-top: auto;
}

.column2 .item:nth-last-child(1) .text {
  color: #1bbb0d;
}

@keyframes table1_appear {
  0% {
    opacity: 0;
    transform: translateX(-60%);
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes table2_appear {
  0% {
    opacity: 0;
    transform: translateX(60%);
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>