<template>
  <div>
    <div id="form">
      <div class="top">
        <Header />
      </div>
      <div class="main">
        <Block name="Vanilla" ip="pvp.land">
          <template v-slot:icon>
            <div class="image grass">
              <img :src="require('@/assets/grasscube.png')" draggable="false" />
              <img :src="require('@/assets/grasscube.png')" draggable="false" />
              <img :src="require('@/assets/grasscube.png')" draggable="false" />
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
</template>

<script>
import Header from "./Header";
import Block from "./MainScreen/Block";

export default {
  name: "main-screen",
  components: {
    Block,
    Header,
  },
  mounted() {
    this.$parent.setLogo(1);
    this.$parent.setShowHands(false);
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
}
.main {
  flex: 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  min-width: 0;
  padding: 24px;
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