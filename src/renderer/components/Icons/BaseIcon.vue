<script>
export default {
  name: "base-icon",
  props: {
    iconStyle: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#fff",
    },
  },
  methods: {
    clickHandle() {
      this.$emit("click");
    },
  },
};
</script>