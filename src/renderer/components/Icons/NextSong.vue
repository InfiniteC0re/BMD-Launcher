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
      d="M11.6766 7.14679C12.3145 7.53675 12.3145 8.46325 11.6766 8.85321L1.8439 14.8641C1.17755 15.2714 0.322326 14.7919 0.322326 14.0109L0.322327 1.98913C0.322327 1.20814 1.17755 0.728581 1.8439 1.13593L11.6766 7.14679Z"
    />
    <path
      fill="#fff"
      d="M20.5723 7.13397C21.239 7.51888 21.239 8.48113 20.5723 8.86603L13.0723 13.1962C12.4057 13.5811 11.5723 13.0999 11.5723 12.3301L11.5723 3.66987C11.5723 2.90007 12.4057 2.41895 13.0723 2.80385L20.5723 7.13397Z"
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