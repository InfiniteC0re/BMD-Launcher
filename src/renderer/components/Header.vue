<template>
  <div id="header" v-show="!hidden">
    <SettingsButton />
    <ProfileButton />
  </div>
</template>

<script>
import SettingsButton from "./Header/Settings";
import ProfileButton from "./Header/Profile";

export default {
  name: "header-component",
  components: {
    SettingsButton,
    ProfileButton,
  },
  computed: {
    hidden() {
      return this.$store.state.hideHeader;
    }
  }
};
</script>

<style>
#header {
  height: 92px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 5px;
  padding: 16px;
  backdrop-filter: blur(24px);
  z-index: 9999;
  background: rgba(0, 0, 0, 0.1);
}
</style>