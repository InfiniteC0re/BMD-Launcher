<template>
  <div>
    <div id="form">
      <div class="main">
        <div class="blocks" :class="{ bottomM: sound.id }">
          <Block name="Vanilla" ip="pvp.land">
            <template v-slot:icon>
              <div class="image grass">
                <img
                  :src="require('@/assets/grasscube.png')"
                  draggable="false"
                />
                <img
                  :src="require('@/assets/grasscube.png')"
                  draggable="false"
                />
                <img
                  :src="require('@/assets/grasscube.png')"
                  draggable="false"
                />
              </div>
            </template>
          </Block>
          <Block name="RPG">
            <template v-slot:icon>
              <div class="image wizard">
                <img :src="require('@/assets/wizard.png')" draggable="false" />
              </div>
            </template>
          </Block>
          <Block name="Anarchy">
            <template v-slot:icon>
              <div class="image wizard">
                <img :src="require('@/assets/wizard.png')" draggable="false" />
              </div>
            </template>
          </Block>
          <Block name="Tech & Magic">
            <template v-slot:icon>
              <div class="image wizard">
                <img :src="require('@/assets/wizard.png')" draggable="false" />
              </div>
            </template>
          </Block>
          <Block name="Creative">
            <template v-slot:icon>
              <div class="image wizard">
                <img :src="require('@/assets/wizard.png')" draggable="false" />
              </div>
            </template>
          </Block>
          <Block name="Hi-tech">
            <template v-slot:icon>
              <div class="image wizard">
                <img :src="require('@/assets/wizard.png')" draggable="false" />
              </div>
            </template>
          </Block>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Block from "./MainScreen/Block";

export default {
  name: "main-screen",
  components: {
    Block,
  },
  mounted() {
    this.$store.commit("setHideHeader", false);
    this.$parent.setLogo(0);
    this.$parent.setTopOffset(12);
    this.$parent.setTitle("Серверы");
    this.$parent.setShowHands(false);
  },
  computed: {
    sound() {
      return this.$store.state.soundCloud.currentSound;
    },
  },
};
</script>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}

.main .blocks {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
  min-width: 0;
  padding: 24px;
  margin-top: 84px;
}

.bottomM {
  margin-bottom: 100px;
}

.image {
  position: absolute;
  left: 50%;
  top: -34px;
  transform: translateX(-50%);
}

.image.grass img:nth-child(1) {
  width: 87px;
  height: 93px;
  position: absolute;
  top: 84px;
  left: 10px;
  z-index: 9;
}

.image.grass img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.image.grass img:nth-child(3) {
  width: 87px;
  height: 93px;
  position: absolute;
  top: 84px;
  right: 10px;
  z-index: 9;
}

.top {
  padding: 20px;
}
</style>