<template>
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="iconStyle"
    @click="clickHandle"
  >
    <path
      fill="#fff"
      d="M9.57233 8.86602C8.90566 8.48112 8.90566 7.51888 9.57233 7.13397L20.0723 1.0718C20.739 0.686897 21.5723 1.16802 21.5723 1.93782L21.5723 14.0622C21.5723 14.832 20.739 15.3131 20.0723 14.9282L9.57233 8.86602Z"
    />
    <path
      fill="#fff"
      d="M0.706004 8.88032C0.00516673 8.50267 0.00516787 7.49733 0.706005 7.11968L8.84796 2.7323C9.5142 2.37329 10.3223 2.85582 10.3223 3.61263L10.3223 12.3874C10.3223 13.1442 9.5142 13.6267 8.84796 13.2677L0.706004 8.88032Z"
    />
  </svg>
</template>

<script>
import BaseIcon from "./BaseIcon";
export default {
  extends: BaseIcon,
};
</script>

<style scoped>
svg {
  min-width: 22px;
  min-height: 16px;
}
</style>