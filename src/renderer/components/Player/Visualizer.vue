<template>
  <div
    class="visualizer-container"
    ref="bar"
    @click="clickHandle"
    @mouseout="mouseout"
    @mouseover="mouseover"
    @mousemove="mousemove"
    @mousedown="mousedownHandler"
  >
    <p :title="songTitle">
      {{ songTitle }}
    </p>
    <div class="visualizer-thumb">
      <div class="visualizer-bar" :style="barWidth"></div>
      <div
        class="visualizer-ghost-bar"
        ref="ghost"
        v-show="hovered"
        :style="barWidth"
      ></div>
    </div>
    <div
      class="tooltip clip"
      :class="{ 'show-tooltip': pressed }"
      ref="tooltip"
    >
      {{ toHHMMSS(hoveredTime / 1000) }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    widget() {
      return this.$store.state.soundCloud.widget;
    },
    currentSong() {
      return this.$store.state.soundCloud.currentSound;
    },
    songTitle() {
      if (this.currentSong) return this.currentSong.title;
      else return "";
    },
    songDuration() {
      if (this.currentSong) return this.currentSong.duration;
      else return 0;
    },
    barWidth() {
      if (this.pressed) {
        return {
          width: `${this.lastMouse.width}%`,
        };
      } else
        return {
          width: `${(this.position / this.songDuration) * 100}%`,
        };
    },
    position() {
      return this.$store.state.soundCloud.position;
    },
  },
  watch: {
    /* eslint-disable */
    currentSong(newSong, oldSong) {
      this.$store.commit("setPosition", 0);
    },
    /* eslint-enable */
  },
  data: () => ({
    mounted: false,
    hovered: false,
    hoveredTime: null,
    pressed: false,
    lastMouse: {
      x: null,
      moved: false,
      width: 0,
    },
  }),
  mounted() {
    this.mounted = true;

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
        if (this.lastMouse.x != null) {
          let rect = this.$refs.bar.getBoundingClientRect();

          let inRegionLeft = (rect.x || rect.left) <= e.pageX;
          let inRegionRight = (rect.x || rect.left) + rect.width > e.pageX;
          let offsetX = e.pageX - (rect.x || rect.left);

          if (!inRegionLeft) {
            this.lastMouse.width = 0;
          } else if (!inRegionRight) {
            this.lastMouse.width = 100;
          } else {
            this.lastMouse.width = (offsetX * 100) / rect.width;
          }

          this.hoveredTime =
            (offsetX < 0 ? 0 : offsetX * this.currentSong.duration) /
            rect.width;

          if (this.hoveredTime > this.currentSong.duration)
            this.hoveredTime = this.currentSong.duration;

          let tooltipX = (e.pageX < 0 ? 0 : offsetX * 100) / rect.width;

          if (tooltipX > 100) tooltipX = 100;
          else if (tooltipX < 0) tooltipX = 0;

          this.$refs.tooltip.style.left = `${tooltipX}%`;
        }
        this.lastMouse.x = e.pageX;
      }
    },
    mouseupHandler() {
      if (this.pressed) {
        this.pressed = false;
        this.lastMouse.x = null;

        let time = (this.lastMouse.width * this.currentSong.duration) / 100;

        this.$store.commit("setPosition", time);

        this.widget.seekTo(time);
      }
    },
    mousedownHandler(e) {
      let fullX = e.currentTarget.offsetWidth;
      this.pressed = true;
      this.lastMouse.moved = false;

      this.lastMouse.width = (e.offsetX * 100) / fullX;
    },
    clickHandle(e) {
      if (this.$store.state.loaded && !this.lastMouse.moved) {
        let clickX = Math.abs(e.offsetX);
        let fullX = e.currentTarget.offsetWidth;

        let time = (clickX * this.currentSong.duration) / fullX;
        this.widget.seekTo(time);
      }
    },
    toHHMMSS(secs) {
      var sec_num = parseInt(secs, 10);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor(sec_num / 60) % 60;
      var seconds = sec_num % 60;

      return [hours, minutes, seconds]
        .map((v) => (v < 10 ? "0" + v : v))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
    },
    mouseover() {
      this.hovered = true;
    },
    mouseout() {
      this.hovered = false;
    },
    mousemove(e) {
      if (this.hovered) {
        let fullX = e.currentTarget.offsetWidth;

        this.hoveredTime =
          (e.offsetX < 0 ? 0 : e.offsetX * this.currentSong.duration) / fullX;

        this.$refs.tooltip.style.left = `${e.offsetX}px`;

        this.$refs.ghost.style.width = `${
          (e.offsetX < 0 ? 0 : e.offsetX * 100) / fullX
        }%`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.visualizer-container {
  position: relative;
  width: 301px;
  height: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 14px;

  p {
    position: absolute;
    top: -26px;
    font-size: 14px;
    width: 100%;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    max-width: 100%;
    font-weight: bold;
    pointer-events: none;
  }

  .visualizer-thumb {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;

    .visualizer-ghost-bar {
      height: 1px;
      width: 0%;
      position: absolute;
      left: 0;
      background: rgba(255, 255, 255, 0.6);
      z-index: -1;
    }

    .visualizer-bar {
      height: 100%;
      background: rgb(255, 255, 255);
      position: relative;

      &:hover {
        &::after {
          width: 9.6px;
          height: 9.6px;
        }
      }

      &::after {
        content: "";
        pointer-events: all;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(50%);
        transition: 0.2s width, 0.2s height, 0.2s size;
        // will-change: transform;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .visualizer-container {
    .visualizer-thumb {
      height: 4px;

      .visualizer-bar {
        &::after {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
}
</style>