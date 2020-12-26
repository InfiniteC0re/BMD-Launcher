import vue from "vue";
import vuex from "vuex";
import sortSongs from "../scripts/SortSongs";

vue.use(vuex);

export default new vuex.Store({
  state: {
    soundCloud: {
      widget: null,
      gotSounds: false,
      sounds: [],
      currentSound: {},
      isPaused: true,
      sortMode: 0,
    },
  },
  mutations: {
    setWidget(state, widget) {
      state.soundCloud.widget = widget;
    },
    setSound(state, sound) {
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
    sort(state) {
      state.soundCloud.sounds = sortSongs(
        state.soundCloud.sounds,
        state.soundCloud.sortMode
      );
    },
  },
});
