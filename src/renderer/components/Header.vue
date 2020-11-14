<template>
  <div id="header">
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
    ProfileButton
  },
};
</script>

<style>
#header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
}
</style>