<template>
  <div>
    <div id="form">
      <div class="main" :class="{ marginM: sound.id }">
        <div class="people-wrap">
          <Artist
            :artist="artist"
            v-bind:key="artist._id"
            v-for="artist in artists"
          />
        </div>
        <div class="tracks-bar">
          <div class="left">
            <div class="sort-types">
              <div
                class="sort-type"
                :class="{ active: sortMode == 0 }"
                @click="changeSortMode(0)"
              >
                fresh
              </div>
              <div
                class="sort-type"
                :class="{ active: sortMode == 1 }"
                @click="changeSortMode(1)"
              >
                popular
              </div>
            </div>
            <div class="search">
              <input
                type="text"
                v-model="search"
                placeholder="Search..."
                @input="searchInput"
              />
              <SearchIcon class="search-icon" />
            </div>
          </div>
          <div class="right">
            <div class="column">всего</div>
          </div>
        </div>
        <div class="tracks-wrap">
          <div class="tracks-list">
            <Track
              :sound="sound"
              :index="index + 1"
              v-bind:key="sound._id"
              v-for="(sound, index) in filteredSounds"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Artist from "./MusicScreen/Artist";
import Track from "./MusicScreen/Track";
import SearchIcon from "./Icons/Search";

export default {
  name: "main-screen",
  components: {
    Artist,
    Track,
    SearchIcon,
  },
  data: () => ({
    search: "",
    filteredSounds: [],
    artists: [
      {
        avatar: require("@/assets/artists/lil_key.png"),
        name: "Lil Key",
        genre: "#hip hop & #pop",
      },
      {
        avatar: require("@/assets/artists/alex_ham.png"),
        name: "Alex Ham",
        genre: "#rock & #pop",
      },
      {
        avatar: require("@/assets/artists/alex_hideki.png"),
        name: "Alex Hideki",
        genre: "#trance",
      },
      {
        avatar: require("@/assets/artists/bmd.png"),
        name: "Black Mirror Designer",
        genre: "#vsio",
      },
      {
        avatar: require("@/assets/artists/odyssey.png"),
        name: "ODYSSEY",
        genre: "#fonk",
      },
      {
        avatar: require("@/assets/artists/odyssey.png"),
        name: "ODYSSEY",
        genre: "#fonk",
      },
    ],
  }),
  mounted() {
    this.$store.commit("setHideHeader", false);
    this.$parent.setLogo(0);
    this.$parent.setTopOffset(12);
    this.$parent.setTitle("Музыка");
    this.$parent.setShowHands(false);
    this.filteredSounds = this.sounds;
  },
  computed: {
    sounds() {
      return this.$store.state.soundCloud.sounds;
    },
    sound() {
      return this.$store.state.soundCloud.currentSound;
    },
    sortMode() {
      return this.$store.state.soundCloud.sortMode;
    },
  },
  watch: {
    // сброс при обновлении списка треков
    sounds(newState, oldState) {
      this.filteredSounds = newState;
      this.search = "";
    },
  },
  methods: {
    searchInput() {
      let lowered = this.search.toLowerCase();
      this.filteredSounds = this.sounds.filter(
        (song) =>
          song.title.toLowerCase().includes(lowered) ||
          (song.description &&
            song.description
              .replace(/\n/g, " ")
              .toLowerCase()
              .includes(lowered))
      );
    },
    changeSortMode(mode) {
      if (mode == 0 || mode == 1) {
        this.$store.state.soundCloud.sortMode = mode;
        this.$store.commit("sort");
      }
    },
  },
};
</script>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
}

.top {
  width: 100%;
  height: 100px;
  z-index: 6;
  padding: 20px;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 6px;
  margin-top: 120px;
}

.marginM {
  margin-bottom: 100px;
}

.people-wrap {
  display: flex;
  margin-bottom: 24px;
  min-height: 190px;
  overflow: hidden;
}

.people-wrap::-webkit-scrollbar {
  display: none;
}

.tracks-bar {
  flex: 1;
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0 22px;
  margin-bottom: 12px;
  max-height: 40px;
}

.sort-types {
  display: flex;
  justify-content: space-between;
  width: 150px;
  text-transform: uppercase;
}

.sort-type {
  transition: 0.1s ease;
  opacity: 0.5;
  cursor: pointer;
}

.sort-type.active {
  opacity: 1;
  pointer-events: none;
}

.search {
  width: 234px;
  height: 40px;
  display: flex;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 64px;
  margin-left: 24px;
  align-items: center;
}

.search-icon {
  margin-right: 16px;
}

.search input {
  outline: none;
  border: none;
  background: none;
  font-family: "BMD";
  font-size: 13px;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 0 16px;
  font-weight: bold;
  letter-spacing: 0.2px;
}

.search input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.left,
.right {
  display: flex;
  align-items: center;
}

.right {
  font-size: 13px;
  text-transform: uppercase;
}

.right .column:nth-last-child(1) {
  margin-right: 17px;
}

.tracks-wrap {
  margin: 0 12px;
  margin-right: 6px;
}

.tracks-list {
  padding: 0 10px;
}
</style>