<template>
  <div id="suffleButton" @click="clickHandle">
    <ShuffleIcon :class="{ active }" />
    <div class="tooltip clip">SHUFFLE</div>
  </div>
</template>

<script>
import ShuffleIcon from "../Icons/Shuffle.vue";
export default {
  components: { ShuffleIcon },
  computed: {
    active() {
      return this.$store.state.soundCloud.shuffle;
    },
  },
  methods: {
    clickHandle() {
      this.$store.commit("shuffleTracks");
    },
  },
};
</script>

<style lang="scss" scoped>
#suffleButton {
  position: relative;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    svg {
      opacity: 0.6;
    }
  }

  svg {
    fill: rgba(255, 255, 255, 1);
    opacity: 0.2;
    transition: 0.2s opacity;

    &.active {
      opacity: 1;
    }
  }
}
</style>