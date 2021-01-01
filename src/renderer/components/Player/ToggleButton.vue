<template>
  <div class="button-container">
    <button class="button" @click="clickHandle" :style="elemSize">
      <PlayIcon v-if="!isPlaying" color="#4514A3" />
      <PauseIcon :style="iconScale" v-if="isPlaying" color="#4514A3" />
    </button>
  </div>
</template>

<script>
import PlayIcon from "../Icons/Play";
import PauseIcon from "../Icons/Pause";

export default {
  components: {
    PlayIcon,
    PauseIcon,
  },
  computed: {
    isPlaying() {
      return !this.$store.state.soundCloud.isPaused;
    },
    elemSize() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
    },
    iconScale() {
      return {
        transform: `scale(${this.size < 80 ? 0.8 : 1})`,
      };
    },
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 80,
    },
  },
  methods: {
    clickHandle() {
      if (
        this.strict &&
        this.$store.state.soundCloud.currentSound.title != this.songTitle
      ) {
        this.$store.state.soundCloud.widget.skip(this.index);
      } else {
        this.$store.state.soundCloud.widget.toggle();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.button {
  outline: none;
  border: none;
  background: #f8f8f8;
  margin-left: 24px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: 0.1s;
  background: #ffffff;
  text-transform: uppercase;
  box-shadow: 0px 14px 24px rgba(82, 41, 205, 0.1);
  border-radius: 70px;
  font-family: "bmd-bold";
  color: #4514a3;

  svg {
    * {
      transition: 0.2s fill;
    }
  }
}

.button:hover {
  transform: scale(1.1);

  * {
    fill: #5700ff;
  }
}

.button:active {
  transform: scale(0.9);

  * {
    fill: #5700ff;
  }
}

.button:disabled {
  cursor: auto;
  color: gray;
  background: #d3d3d3;
}

.button:disabled:hover {
  transform: scale(1);
}

.button {
  margin: 0;
  border-radius: 100px !important;
  width: 60px;
  height: 60px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-play {
  margin-left: 4px;
}

p {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
}
</style>
