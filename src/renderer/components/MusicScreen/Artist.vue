<template>
  <div class="artist-wrap">
    <img class="artist-avatar" :src="artist.avatar" draggable="false" />
    <div class="artist-info">
      <h5>{{ artist.name }}</h5>
      <p>{{ artist.genre }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.artist-wrap {
  display: flex;
  flex-direction: column;
  margin-left: 45px;
}

.artist-wrap:nth-last-child(1) {
  padding-right: 45px;
}

.artist-avatar {
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;
}

.artist-info {
  text-align: center;
  font-size: 13px;
  color: #fff;
  margin-top: 8px;
}

.artist-info h5 {
  font-size: 13px;
  margin: 0;
  padding: 0;
}

.artist-info p {
  margin: 0;
  padding: 0;
  opacity: 0.8;
}
</style>