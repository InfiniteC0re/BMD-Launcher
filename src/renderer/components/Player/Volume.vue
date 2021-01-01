<template>
  <div id="volumeButton">
    <div class="volumepanel" :class="{ show: pressed }">
      <div
        class="volumepanel-bar-thumb"
        id="volumeThumbBar"
        @click="bar_handleClick"
        @mousedown="mousedownHandler"
      >
        <div class="volumepanel-bar" id="volumeBar" :style="barHeight"></div>
      </div>
    </div>
    <div class="icon" @click="icon_handleClick">
      <FullVolumeIcon v-if="volume == 100" />
      <MiddleVolumeIcon v-else-if="volume >= 50" />
      <LowVolumeIcon v-else-if="volume > 0" />
      <NoVolumeIcon v-else-if="volume == 0" />
    </div>
  </div>
</template>

<script>
import FullVolumeIcon from "../Icons/FullVolume";
import MiddleVolumeIcon from "../Icons/MiddleVolume";
import LowVolumeIcon from "../Icons/LowVolume";
import NoVolumeIcon from "../Icons/NoVolume";

export default {
  components: {
    FullVolumeIcon,
    MiddleVolumeIcon,
    LowVolumeIcon,
    NoVolumeIcon,
  },
  data: () => ({
    volume: 100,
    prevVolume: 100,
    pressed: false,
    lastMouse: {
      y: null,
      pressedTime: null,
      unpressedTime: null,
      moved: false,
    },
  }),
  computed: {
    barHeight() {
      return {
        height: `${this.volume}%`,
      };
    },
  },
  mounted() {
    let widget = this.$store.state.soundCloud.widget;
    if (widget)
      widget.getVolume((volume) => {
        this.volume = volume;
      });

    document.addEventListener("mousemove", this.mousemoveHandler);
    document.addEventListener("mouseup", this.mouseupHandler);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.mousemoveHandler);
    document.removeEventListener("mouseup", this.mouseupHandler);
  },
  methods: {
    mousemoveHandler(e) {
      if (this.pressed) {
        this.lastMouse.moved = true;
        if (this.lastMouse.y != null) {
          let diff = this.lastMouse.y - e.clientY;
          if (this.volume + diff >= 0 && this.volume + diff <= 100) {
            this.volume += diff;
          } else if (this.volume + diff <= 0) {
            this.volume = 0;
          } else if (this.volume + diff >= 100) {
            this.volume = 100;
          }
          this.$store.state.soundCloud.widget.setVolume(this.volume);
        }
        this.lastMouse.y = e.clientY;
      }
    },
    mouseupHandler() {
      if (this.pressed) {
        this.pressed = false;
        this.lastMouse.y = null;
        this.lastMouse.unpressedTime = Date.now();
      }
    },
    mousedownHandler() {
      this.lastMouse.pressedTime = Date.now();
      this.pressed = true;
      this.lastMouse.moved = false;
    },
    icon_handleClick() {
      let { volume } = this;

      if (document.body.offsetWidth < 1000) return;

      if (this.volume > 0) {
        this.prevVolume = volume;
        this.volume = 0;

        this.$store.state.soundCloud.widget.setVolume(this.volume);
      } else if (this.volume == 0) {
        this.volume = this.prevVolume;

        this.$store.state.soundCloud.widget.setVolume(this.volume);
      }
    },
    bar_handleClick(e) {
      if (this.lastMouse.moved) return;
      let clickY = e.offsetY;
      let target = e.currentTarget;
      let height = target.offsetHeight;

      clickY = height - clickY;

      let volume = (clickY * 100) / height;
      this.$store.state.soundCloud.widget.setVolume(volume);
      this.prevVolume = volume;
      this.volume = volume;
    },
  },
};
</script>

<style lang="scss" scoped>
#volumeButton {
  margin-left: 12px;
  position: relative;
  padding-top: 27px;
  margin-bottom: 27px;

  .icon {
    width: 32px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  &:hover .volumepanel {
    display: flex;
    opacity: 1;
  }

  .volumepanel {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 16px;
    width: 32px;
    height: 126px;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(48px);
    clip-path: polygon(100% 80%, 75% 80%, 50% 85%, 25% 80%, 0 80%, 0 0, 100% 0);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;
    padding-bottom: 40px;
    box-sizing: border-box;
    display: none;
    opacity: 0;
    cursor: default;

    &.show {
      display: flex;
      opacity: 1;
    }

    .volumepanel-bar-thumb {
      width: 4px;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      position: relative;
      cursor: pointer;

      .volumepanel-bar {
        background: rgba(255, 255, 255, 0.3);
        height: 50%;
        width: 100%;
        position: absolute;
        bottom: 0;
        pointer-events: none;

        &::after {
          content: "";
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          min-height: 10px;
          min-width: 10px;
          background: rgb(230, 230, 230);
          border-radius: 50%;
          transition: 0.2s transform;
          pointer-events: all;
        }
      }

      &:hover {
        .volumepanel-bar::after {
          transform: translateX(-50%) scale(1.2);
        }
      }
    }
  }
}
</style>
