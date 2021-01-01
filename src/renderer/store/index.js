import vue from "vue";
import vuex from "vuex";
import sortSongs from "../scripts/SortSongs";
import shuffleArray from "../scripts/ShuffleArray";

vue.use(vuex);

export default new vuex.Store({
  state: {
    hideHeader: false,
    soundCloud: {
      widget: null,
      gotSounds: false,
      sounds: [],
      currentSound: {},
      isPaused: true,
      sortMode: 0,
      position: 0,
      repeat: false,
      shuffle: false,
      startTime: 0,
    },
  },
  mutations: {
    setWidget(state, widget) {
      state.soundCloud.widget = widget;
    },
    setSound(state, sound) {
      state.soundCloud.startTime = Date.now();
      state.soundCloud.currentSound = sound;
    },
    getSounds(state) {
      if (!state.soundCloud.widget) return;

      state.soundCloud.widget.getSounds((sounds) => {
        if (!sounds.find((sound) => sound.title == undefined)) {
          sounds.forEach((sound, i) => {
            sound.realIndex = i;
          });

          state.soundCloud.sounds = sortSongs(sounds, 0);
          state.soundCloud.gotSounds = true;
        }
      });
    },
    setPaused(state, paused) {
      state.soundCloud.isPaused = paused;
    },
    setPosition(state, pos) {
      state.soundCloud.position = pos;
    },
    setRepeat(state, flagState) {
      state.soundCloud.repeat = flagState;
    },
    sort(state) {
      state.soundCloud.sounds = sortSongs(
        state.soundCloud.sounds,
        state.soundCloud.sortMode
      );
    },
    shuffleTracks(state) {
      state.soundCloud.shuffle ^= 1;

      if (state.soundCloud.shuffle) {
        shuffleArray(state.soundCloud.sounds);
      } else {
        state.songs = sortSongs(
          state.soundCloud.sounds,
          state.soundCloud.sortMode
        );
      }
    },
    setHideHeader(state, flagState) {
      state.hideHeader = flagState;
    },
  },
});
