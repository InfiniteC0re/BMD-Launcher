<template>
  <div class="track-wrap">
    <div class="track-stat-info">
      {{ index }}
    </div>
    <div class="track-cover" @click="play">
      <div
        :style="{
          backgroundImage: `url( ${
            sound.artwork_url || require('@/assets/tracks/unknown.png')
          })`,
        }"
        class="artwork"
      ></div>
      <div class="overlay">
        <PauseIcon v-if="playingThisTrack" />
        <PlayIcon v-else />
      </div>
    </div>
    <div class="track-info">
      {{ sound.title }}
    </div>
    <div class="listens-count">
      {{ sound.playback_count }}
    </div>
  </div>
</template>

<script>
import PauseIcon from "../Icons/Pause.vue";
import PlayIcon from "../Icons/Play";

export default {
  components: {
    PlayIcon,
    PauseIcon,
  },
  props: {
    sound: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    widget() {
      return this.$store.state.soundCloud.widget;
    },
    isPaused() {
        return this.$store.state.soundCloud.isPaused;
    },
    currentSound() {
      return this.$store.state.soundCloud.currentSound;
    },
    playingThisTrack() {
      return this.currentSound.id == this.sound.id && !this.isPaused;
    },
  },
  methods: {
    play() {
      if (this.currentSound.id != this.sound.id)
        this.widget.skip(this.sound.realIndex);
      else this.widget.toggle();
    },
  },
};
</script>

<style scoped>
.track-wrap {
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  margin-bottom: 9px;
  display: flex;
  align-items: center;
  padding: 12px;
}

.track-stat-info {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
}

.track-cover {
  margin-left: 10px;
  overflow: hidden;
  height: 86px;
  width: 86px;
  position: relative;
}

.artwork {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  cursor: pointer;
  transition: 0.15s ease;
  border-radius: 9px;
}

.track-cover:hover .overlay {
  opacity: 1;
}

.track-cover img {
  height: 100%;
  height: 100%;
}

.track-info {
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-left: 20px;
  max-width: 500px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}

.listens-count {
  margin-left: auto;
  margin-right: 12px;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
}
</style>