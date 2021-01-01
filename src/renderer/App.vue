<template>
  <div id="app">
    <div id="wrap">
      <Header />
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
      <Background :logoType="logoType" :showHands="showHands" :title="title" :topOffset="topOffset" />
      <transition name="slide" mode="out-in" class="full">
        <router-view id="__router"></router-view>
      </transition>
      <div id="player-overlay" v-if="sound.id">
        <ShuffleButton />
        <ControlButton :prev="true" />
        <ToggleButton :size="70" />
        <ControlButton :prev="false" />
        <RepeatButton />
        <Visualizer />
        <div class="duration">
          <span>{{ toHHMMSS(position / 1000) }}</span>
          /
          <span>{{ sound ? toHHMMSS(sound.duration / 1000) : "00:00" }}</span>
        </div>
        <Volume />
        <div class="plays-count">
          <PlayIcon :style="{ transform: `scale(0.7)` }" />
          <p>{{ listensCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SC from "./scripts/SC";
import Background from "./components/Background";
import Header from "./components/Header";
import Frame from "./components/Frame";
import PlayIcon from "./components/Icons/Play";
import ControlButton from "./components/Player/ControlButton";
import ToggleButton from "./components/Player/ToggleButton";
import Visualizer from "./components/Player/Visualizer";
import Volume from "./components/Player/Volume";
import RepeatButton from "./components/Player/RepeatButton";
import ShuffleButton from "./components/Player/ShuffleButton";
import DiscordRPC from "discord-rpc";

const rpc = new DiscordRPC.Client({ transport: "ipc" });

export default {
  name: "bmd-launcher",
  components: {
    Background,
    Header,
    PlayIcon,
    Frame,
    ControlButton,
    ToggleButton,
    Visualizer,
    Volume,
    RepeatButton,
    ShuffleButton,
  },
  data: () => ({
    logoType: 0,
    showHands: true,
    lastRPC: {},
    defaultRPC: {
      details: "Находится в лаунчере",
      largeImageKey: "bmd",
      instance: true,
    },
    title: "",
    topOffset: 59,
  }),
  methods: {
    setLogo(i) {
      this.logoType = i;
    },
    setShowHands(i) {
      this.showHands = i;
    },
    setTitle(t) {
      this.title = t;
    },
    setTopOffset(i) {
      this.topOffset = i < 0 ? 59 : i;
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
  },
  computed: {
    songs() {
      return this.$store.state.soundCloud.sounds;
    },
    sound() {
      return this.$store.state.soundCloud.currentSound;
    },
    position() {
      return this.$store.state.soundCloud.position;
    },
    paused() {
      return this.$store.state.soundCloud.isPaused;
    },
    listensCount() {
      if (this.sound)
        return this.sound.playback_count
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      else return 0;
    },
  },
  mounted() {
    let widget = SC.Widget(this.$refs.sc);

    widget.bind(SC.Widget.Events.READY, () => {
      this.$store.commit("setWidget", widget);

      setInterval(() => {
        widget.getPosition((pos) => {
          this.$store.commit("setPosition", pos);
        });
      }, 250);

      // Discord RPC
      rpc.on("ready", () => {
        let start = Date.now();

        setInterval(() => {
          let newRPC = Object.assign({}, this.defaultRPC);
          newRPC.startTimestamp = start;

          if (!this.paused && this.sound.id) {
            newRPC.smallImageKey = "song";
            newRPC.smallImageText = `Прослушиваний: ${this.listensCount}`;
            newRPC.details = "Слушает музыку";
            newRPC.state = this.sound.title;

            newRPC.endTimestamp =
              this.$store.state.soundCloud.startTime + this.sound.duration;
          }

          if (JSON.stringify(newRPC) != JSON.stringify(this.lastRPC)) {
            console.log("RPC Updated!");
            rpc.setActivity(newRPC);
            this.lastRPC = Object.assign({}, newRPC);
          }
        }, 1000);
      });

      rpc.login({ clientId: "785443875169894440" });

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
        if (e.currentPosition >= this.sound.duration - 500) {
          if (!this.songs) return;

          if (this.$store.state.soundCloud.repeat) {
            widget.seekTo(0);
            return;
          }

          let track = this.songs.find((sound) => sound.id == e.soundId);

          let lastSong = this.songs[this.songs.length - 1];

          if (track.id != lastSong.id) {
            let trackIndex =
              this.songs.findIndex((sound) => sound.id == e.soundId) + 1;

            widget.skip(this.songs[trackIndex].realIndex);
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
}

#wrap {
  flex: 1;
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
}

#__router {
  flex: 1;
  z-index: 2;
  height: 100%;
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

#player-overlay {
  height: 100px;
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.1);
  position: fixed;
  bottom: -1px;
  left: 0;
  right: 5px;
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.duration {
  display: flex;
  margin-left: 6px;
  color: #fff;
  letter-spacing: 0.2em;
  font-size: 12px;
}

.duration span {
  min-width: 56px;
  text-align: center;
}

.plays-count {
  display: flex;
  align-items: center;
  width: 100px;
  margin-left: 8px;
}

.plays-count p {
  margin-left: 6px;
  color: #fff;
  letter-spacing: 0.2em;
  font-size: 14px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar {
  width: 4px;
  background: #fff;
}

.tooltip.clip {
  clip-path: polygon(100% 80%, 75% 90%, 50% 100%, 25% 90%, 0 80%, 0 0, 100% 0);
  padding-bottom: 12px;
}

.tooltip {
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  width: max-content;
  display: none;
  pointer-events: none;
  text-align: center;
  border-radius: 4px;
}

*:hover > .tooltip,
.show-tooltip {
  display: -webkit-box;
  animation: tooltip-appear 1s forwards;
}

@keyframes tooltip-appear {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }

  10% {
    opacity: 0;
  }

  30% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>
