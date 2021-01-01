<template>
  <svg
    width="22"
    height="19"
    viewBox="0 0 22 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="iconStyle"
    @click="clickHandle"
  >
    <path
      d="M0.783691 8.133C0.783691 7.02843 1.67912 6.133 2.78369 6.133H6.45036L10.4206 2.27957C11.0547 1.66408 12.117 2.11343 12.117 2.99716V16.2688C12.117 17.1526 11.0547 17.6019 10.4206 16.9864L6.45036 13.133H2.78369C1.67912 13.133 0.783691 12.2376 0.783691 11.133V8.133Z"
      fill="white"
    />
    <rect x="13.7837" y="6.633" width="2" height="6" rx="1" :fill="color" />
    <rect x="16.7837" y="4.633" width="2" height="10" rx="1" :fill="color" />
    <rect x="19.7837" y="2.633" width="2" height="14" rx="1" :fill="color" />
  </svg>
</template>

<script>
import BaseIcon from "./BaseIcon";
export default {
  extends: BaseIcon,
};
</script>