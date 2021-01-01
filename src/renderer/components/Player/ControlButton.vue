<template>
  <div class="control-button">
    <NextSongIcon @click="skip(1)" v-if="!prev" />
    <PrevSongIcon @click="skip(-1)" v-else />
  </div>
</template>

<script>
import NextSongIcon from "../Icons/NextSong";
import PrevSongIcon from "../Icons/PrevSong";

export default {
  components: {
    NextSongIcon,
    PrevSongIcon,
  },
  props: {
    prev: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    songs() {
      return this.$store.state.soundCloud.sounds;
    },
    currentSong() {
      return this.$store.state.soundCloud.currentSound;
    },
    widget() {
      return this.$store.state.soundCloud.widget;
    },
  },
  methods: {
    skip(i) {
      let currentSongIndex = this.songs.findIndex(
        (track) => track.id == this.currentSong.id
      );

      if (currentSongIndex >= 0 && this.songs[currentSongIndex + i]) {
        this.widget.skip(this.songs[currentSongIndex + i].realIndex);
        this.widget.seekTo(0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.control-button {
  cursor: pointer;
  transition: 0.1s transform;
  will-change: transform;
  height: 50px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.2);
  }
}
</style>