<template>
  <div id="app">
    <div class="hidden">
      <iframe
        ref="sc"
        hidden
        width="100%"
        height="450"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/playlists/1024488982%3Fsecret_token%3Ds-t3rIoE0luqj&color=%23e81387&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
      ></iframe>
    </div>
    <Background :logoType="logoType" :showHands="showHands" />
    <Frame />
    <transition name="slide" mode="out-in" class="full">
      <router-view id="__router"></router-view>
    </transition>
  </div>
</template>

<script>
import SC from "./scripts/SC";
import Background from "./components/Background";
import Frame from "./components/Frame";

export default {
  name: "bmd-launcher",
  components: {
    Background,
    Frame,
  },
  data: () => ({
    logoType: 0,
    showHands: true,
  }),
  methods: {
    setLogo(i) {
      this.logoType = i;
    },
    setShowHands(i) {
      this.showHands = i;
    },
  },
  computed: {
    songs() {
      return this.$store.state.soundCloud.sounds;
    },
    sound() {
      return this.$store.state.soundCloud.currentSound;
    },
  },
  mounted() {
    let widget = SC.Widget(this.$refs.sc);

    widget.bind(SC.Widget.Events.READY, () => {
      this.$store.commit("setWidget", widget);

      // ждём получения всех треков
      let updateInterval = setInterval(() => {
        !this.$store.state.soundCloud.gotSounds
          ? this.$store.commit("getSounds")
          : clearInterval(updateInterval);
      }, 1000);

      widget.bind(SC.Widget.Events.PAUSE, () => {
        this.$store.commit("setPaused", true);
      });

      widget.bind(SC.Widget.Events.PLAY, (info) => {
        let soundId = info.soundId;
        this.$store.commit("setPaused", false);

        if (this.$store.state.soundCloud.currentSound.id != soundId) {
          let track = this.$store.state.soundCloud.sounds.find(
            (sound) => sound.id == soundId
          );

          if (track) {
            this.$store.commit("setSound", track);
          }

          widget.seekTo(0);
        }
      });

      widget.bind(SC.Widget.Events.PLAY_PROGRESS, (e) => {
        if (e.currentPosition >= this.sound.duration - 160) {
          if (!this.sounds) return;
          let track = this.sounds.find((sound) => sound.id == e.soundId);

          let lastSong = this.sounds[this.sounds.length - 1];

          if (track.id != lastSong.id) {
            let trackIndex = this.sounds.findIndex(
              (sound) => sound.id == e.soundId
            ) + 1;

            widget.skip(this.sounds[trackIndex].realIndex);
            widget.seekTo(0);
          }
        }
      });
    });
  },
};
</script>

<style>
@font-face {
  font-family: "BMD";
  font-weight: normal;
  src: url(./assets/fonts/sbc-font-Regular.ttf);
}

* {
  box-sizing: border-box;
  user-select: none;
}

p,
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: "BMD";
  overflow: hidden;
}

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at center top, #4e00b4, #1b005a);
  -webkit-font-smoothing: antialiased;
}

#__router {
  flex: 1;
  z-index: 2;
}

#form {
  height: 100%;
  position: relative;
  max-height: calc(100vh - 30px);
}

#form h2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 28px;
}

#form h2.top {
  top: 144px;
}

#form h2.bottom {
  bottom: 144px;
}

#form h3 {
  color: #fff;
  font-size: 28px;
}

.mainPanel {
  width: 405px;
  padding: 42px;
  background: #fff;
  border-radius: 37px;
  position: absolute;
  top: 204px;
  left: 50%;
  transform: translateX(-50%);
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.22s;
}
.slide-enter {
  will-change: transform, opacity;
  transform: translate(0, 100%);
  pointer-events: none;
}
.slide-leave-to {
  transform: translate(0, -100%);
  opacity: 0;
}

.noEvents {
  pointer-events: none;
}

.colorful {
  color: #ff008b !important;
}

.hidden {
  display: none;
}
</style>
