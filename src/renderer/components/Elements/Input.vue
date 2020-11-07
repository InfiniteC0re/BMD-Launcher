<template>
  <div id="input-container">
    <div class="icon">
      <slot />
    </div>
    <div style="flex: 1">
      <div class="top-text">
        <p>{{ text }}</p>
        <a>{{ buttonText }}</a>
      </div>
      <input :type="type" :placeholder="placeholder" @input="handleInput" :value="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: "input-component",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Unnamed",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
    buttonText: {
      type: String,
      default: "",
    },
    buttonAction: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.currentTarget.value);
    },
  },
};
</script>

<style scoped>
#input-container {
  display: flex;
  align-items: center;
}
.icon {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}
input {
  margin-bottom: 21px;
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 8px 0;
  font-size: 22px;
  font-weight: bold;
  color: #454545;
  font-family: "BMD";
  font-weight: bold;
  cursor: text;
}
input::placeholder {
  color: #454545;
  opacity: 0.3;
}
.top-text {
  display: flex;
  justify-content: space-between;
  color: #454545;
}
.top-text p,
.top-text a {
  font-weight: bold;
}

.top-text a {
  color: #ff008b;
  cursor: pointer;
}
</style>