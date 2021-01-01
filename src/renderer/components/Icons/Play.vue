<template>
  <svg
    width="20"
    height="23"
    viewBox="3 0 26 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="iconStyle"
  >
    <path
      d="M12.0337 22.7654C10.7004 23.5352 9.0337 22.573 9.0337 21.0334L9.0337 2.84686C9.0337 1.30726 10.7004 0.345011 12.0337 1.11481L27.7837 10.2081C29.117 10.9779 29.117 12.9024 27.7837 13.6722L12.0337 22.7654Z"
      :fill="color"
    />
  </svg>
</template>

<script>
import BaseIcon from "./BaseIcon";
export default {
  extends: BaseIcon,
};
</script>