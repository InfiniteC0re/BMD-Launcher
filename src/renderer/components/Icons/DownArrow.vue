<template>
  <svg
    width="12"
    height="6"
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="iconStyle"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.163818 0L6.02619 5.86237L11.8886 0H0.163818Z"
      fill="black"
    />
  </svg>
</template>

<script>
import BaseIcon from "./BaseIcon";

export default {
  extends: BaseIcon,
  name: "downarrow-icon",
};
</script>