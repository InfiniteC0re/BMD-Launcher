<template>
  <div id="background">
    <svg
      width="120"
      height="46"
      viewBox="0 0 120 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-if="logoType == 0"
      class="logo"
      :style="{top: topOffset}"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.0012 33.5827C23.0438 35.3004 22.0907 36.965 20.4334 37.7545C18.1828 38.8266 15.4855 37.8788 14.4089 35.6375L0.443276 6.56254C-0.633311 4.32121 0.318471 1.63511 2.56914 0.56299C4.81981 -0.509134 7.51709 0.438703 8.59368 2.68004L15.4988 17.0558C17.4282 14.0999 20.7737 12.1451 24.5776 12.1451C30.5536 12.1451 35.398 16.9695 35.398 22.9207C35.398 28.8718 30.5536 33.6962 24.5776 33.6962C24.0422 33.6962 23.5158 33.6575 23.0012 33.5827ZM24.5776 26.6826C26.6639 26.6826 28.3552 24.9983 28.3552 22.9207C28.3552 20.843 26.6639 19.1588 24.5776 19.1588C22.4913 19.1588 20.8001 20.843 20.8001 22.9207C20.8001 24.9983 22.4913 26.6826 24.5776 26.6826Z"
        fill="white"
      />
      <path
        d="M95.0246 33.5844C89.0477 33.5844 84.2024 28.76 84.2024 22.8089C84.2024 16.8577 89.0477 12.0333 95.0246 12.0333C101.002 12.0333 105.847 16.8577 105.847 22.8089C105.847 28.76 101.002 33.5844 95.0246 33.5844ZM95.0246 26.6826C97.1113 26.6826 98.8029 24.9983 98.8029 22.9207C98.8029 20.843 97.1113 19.1588 95.0246 19.1588C92.938 19.1588 91.2464 20.843 91.2464 22.9207C91.2464 24.9983 92.938 26.6826 95.0246 26.6826Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M119.186 6.45073C120.263 4.20939 119.311 1.5233 117.06 0.451173C114.809 -0.62095 112.111 0.326886 111.034 2.56823L97.0663 31.6431C95.9895 33.8845 96.9415 36.5706 99.1925 37.6427C101.444 38.7148 104.141 37.767 105.218 35.5257L119.186 6.45073Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M72.7339 17.9229C74.4727 17.8809 76.1556 18.8365 76.9443 20.4917L85.9502 39.3919C87.0159 41.6285 86.0455 44.2955 83.7826 45.3489C81.5198 46.4022 78.8214 45.443 77.7557 43.2064L71.4546 29.9828L63.2077 38.2057C62.3194 39.0915 61.1494 39.5336 59.9799 39.5307C58.8104 39.5336 57.6404 39.0915 56.752 38.2057L48.4671 29.9448L42.148 43.2064C41.0823 45.443 38.3839 46.4022 36.1211 45.3489C33.8582 44.2955 32.8878 41.6285 33.9535 39.3919L42.9594 20.4917C43.7512 18.8301 45.444 17.8735 47.19 17.9235C48.3843 17.9011 49.5854 18.343 50.4928 19.2477L59.9799 28.7073L69.467 19.2477C70.3652 18.352 71.5514 17.91 72.7339 17.9229Z"
        fill="white"
      />
    </svg>

    <div class="logo-title">{{ title }}</div>
    <svg
      width="1024"
      height="526"
      viewBox="0 0 1024 526"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="hands"
      v-if="showHands"
    >
      <g filter="url(#filter0_di)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M120.404 241.349C119.52 238.911 118.213 236.648 116.544 234.668L58.0196 132.991C51.9702 122.474 38.6282 118.838 28.2196 124.868C17.8109 130.899 14.2771 144.313 20.3266 154.829L80.7869 259.927L89.9158 285.008C109.265 338.168 133.113 340.042 144.174 370.433L161.98 413.326C168.994 430.221 183.571 443.183 201.795 444.766C215.759 445.98 232.301 445.82 245.315 440.975C262.404 434.613 275.448 419.415 283.007 408.56C288.113 401.227 288.166 391.79 284.34 383.714L275.001 363.998C265.301 337.348 274.195 293.89 327.823 221.136C336.419 209.468 333.953 192.937 322.316 184.213C310.678 175.489 294.275 177.875 285.679 189.543L261.833 221.909C259.916 224.505 256.658 225.719 253.511 225.008C250.363 224.298 247.912 221.796 247.249 218.618L211.636 46.6089C210.05 38.9261 204.519 32.6551 197.126 30.1582C189.733 27.6613 181.602 29.3178 175.796 34.5038C169.989 39.6897 167.389 47.6172 168.975 55.3L196.599 195.071L120.404 241.349Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <g filter="url(#filter1_di)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M198.404 267.897C187.249 271.957 174.832 265.981 170.671 254.548L150.892 200.205C147.197 188.917 152.907 176.817 163.798 172.852C174.69 168.888 186.841 174.488 191.267 185.51L211.046 239.853C215.204 251.276 209.546 263.827 198.404 267.897Z"
          fill="#5D00E5"
        />
      </g>
      <g filter="url(#filter2_di)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M162.776 294.561C151.627 298.619 139.238 292.703 135.105 281.346L113.586 222.225C110.606 214.808 111.832 206.382 116.783 200.245C121.734 194.108 129.623 191.236 137.36 192.755C145.098 194.274 151.453 199.941 153.938 207.538L175.456 266.66C179.586 278.007 173.911 290.494 162.776 294.561Z"
          fill="#5D00E5"
        />
      </g>
      <path
        d="M161.654 266.697C161.654 266.697 157.353 273.977 152.738 275.657C149.817 276.686 146.743 277.24 143.605 277.303"
        stroke="#280071"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M199.249 239.843C199.249 239.843 194.948 247.124 190.332 248.804C187.411 249.832 184.338 250.386 181.2 250.45"
        stroke="#280071"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M226.307 289.625C226.307 289.625 210.471 312.535 194.416 318.378C184.261 321.97 173.658 324.135 162.909 324.812"
        stroke="#280071"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g filter="url(#filter3_di)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M912.9 248.384C913.756 246.021 915.025 243.829 916.647 241.91L973.467 143.397C979.34 133.207 992.325 129.702 1002.47 135.568C1012.61 141.433 1016.08 154.448 1010.2 164.637L951.504 266.465L942.656 290.774C923.903 342.299 900.685 344.077 889.964 373.534L873.069 414.205C866.035 431.139 851.405 444.137 833.126 445.6C819.714 446.675 804.014 446.404 791.599 441.783C775.142 435.657 762.519 421.164 755.104 410.651C749.936 403.324 749.875 393.845 753.718 385.744L762.569 367.08C771.971 341.25 763.24 299.089 710.906 228.444C702.517 217.114 704.891 201.086 716.208 192.644C727.526 184.202 743.501 186.543 751.89 197.873L775.161 229.301C777.031 231.822 780.205 233.004 783.269 232.32C786.333 231.637 788.715 229.214 789.356 226.133L823.752 59.3727C825.284 51.9243 830.66 45.8515 837.854 43.442C845.048 41.0324 852.968 42.6521 858.63 47.691C864.292 52.7298 866.836 60.4223 865.304 67.8707L838.635 203.379L912.9 248.384Z"
          fill="url(#paint1_linear)"
        />
      </g>
      <g filter="url(#filter4_di)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M835.648 274C846.803 278.061 859.13 272.331 863.18 261.202L882.435 208.302C886.022 197.309 880.227 185.444 869.335 181.48C858.444 177.516 846.378 182.88 842.06 193.606L822.806 246.507C818.759 257.627 824.506 269.931 835.648 274Z"
          fill="#5D00E5"
        />
      </g>
      <g filter="url(#filter5_di)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M871.276 299.77C882.425 303.828 894.73 298.142 898.76 287.069L919.741 229.426C922.652 222.197 921.362 213.947 916.376 207.905C911.391 201.864 903.502 198.993 895.799 200.416C888.097 201.839 881.806 207.33 879.389 214.739L858.408 272.383C854.382 283.446 860.14 295.703 871.276 299.77Z"
          fill="#5D00E5"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M836.044 245.007C838.288 245.073 840.632 244.601 842.776 245.204C845.444 245.954 848.377 246.808 850.188 248.984C859.081 259.666 832.908 258.314 836.475 245.605L836.044 245.007Z"
        fill="#D8D8D8"
      />
      <circle
        r="2.68535"
        transform="matrix(-0.939693 -0.34202 -0.34202 0.939693 843.546 251.015)"
        fill="black"
      />
      <circle
        r="0.895117"
        transform="matrix(-0.939693 -0.34202 -0.34202 0.939693 843.546 249.225)"
        fill="white"
      />
      <path
        d="M871.044 272.72C871.044 272.72 875.344 280 879.96 281.68C882.881 282.709 885.954 283.263 889.092 283.326"
        stroke="#280071"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M834.344 246.761C834.344 246.761 838.644 254.042 843.26 255.722C846.181 256.75 849.254 257.304 852.392 257.368"
        stroke="#280071"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M853.643 255.269C853.643 255.269 849.343 247.989 844.727 246.309C841.806 245.28 838.733 244.726 835.595 244.662"
        stroke="#280071"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M810.327 287.654C810.327 287.654 820.275 315.447 835.902 321.135C850.798 329.585 862.526 324.601 874.419 323.551"
        stroke="#280071"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_di"
          x="-25"
          y="3.05176e-05"
          width="448.89"
          height="525.928"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="22" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130831 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4447 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <filter
          id="filter1_di"
          x="119.611"
          y="163.505"
          width="122.969"
          height="157.743"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="22" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130831 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4447 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <filter
          id="filter2_di"
          x="81.8394"
          y="184.281"
          width="125.112"
          height="163.631"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="22" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130831 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4447 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <filter
          id="filter3_di"
          x="617"
          y="14.0306"
          width="437.875"
          height="511.703"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="22" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130831 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4447 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <filter
          id="filter4_di"
          x="791.472"
          y="172.132"
          width="122.051"
          height="155.22"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="22" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130831 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4447 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <filter
          id="filter5_di"
          x="827.1"
          y="192.014"
          width="124.194"
          height="161.108"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="22" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130831 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4447 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="129.796"
          y1="49.606"
          x2="269.094"
          y2="432.322"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5D00E5" />
          <stop offset="1" stop-color="#5D00E5" stop-opacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="903.443"
          y1="62.4121"
          x2="768.432"
          y2="433.353"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5D00E5" />
          <stop offset="1" stop-color="#5D00E5" stop-opacity="0.46" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "background",
  props: {
    logoType: {
      type: Number,
      default: 0,
    },
    showHands: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "",
    },
    topOffset: {
      type: Number,
      default: 12
    }
  },
};
</script>

<style scoped>
#hands {
  position: absolute;
  top: 185.79px;
  left: -11px;
  z-index: 0;
}
.logo {
  width: 120px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 9999999;
}
.logo-title {
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  z-index: 9999;
  color: #fff;
  text-transform: uppercase;
  margin-top: 4px;
  font-weight: bold;
  top: 59px;
}
</style>