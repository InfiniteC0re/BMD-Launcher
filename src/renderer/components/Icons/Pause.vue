<template>
  <svg
    width="18"
    height="23"
    viewBox="0 0 16 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="iconStyle"
  >
    <rect width="5" height="23" rx="2.5" :fill="color" />
    <rect x="11" width="5" height="23" rx="2.5" :fill="color" />
  </svg>
</template>

<script>
import BaseIcon from "./BaseIcon";
export default {
  extends: BaseIcon,
};
</script>