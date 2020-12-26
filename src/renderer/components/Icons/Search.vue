<template>
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
    :style="iconStyle"
  >
    <circle
      cx="8.18547"
      cy="8.18547"
      r="6.68547"
      stroke-width="3"
    />
    <path
      d="M12.9078 13.5371L16.3709 17.0002"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
import BaseIcon from "./BaseIcon";

export default {
  extends: BaseIcon,
  name: "settings-icon"
};
</script>
