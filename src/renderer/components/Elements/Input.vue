<template>
  <div id="input-container" :class="{'valid': state == 1, 'showError': state == -1}">
    <div class="icon">
      <slot />
    </div>
    <div style="flex: 1">
      <div class="top-text">
        <p>{{ text }}</p>
        <a>{{ buttonText }}</a>
      </div>
      <input :type="type" :placeholder="placeholder" @input="handleInput" :value="value" />
      <div class="state-icon">
        <ErrorIcon v-if="state == -1" />
        <ValidIcon v-if="state == 1"/>
      </div>
      <div class="bottom-text">
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorIcon from "../Icons/Error";
import ValidIcon from "../Icons/Valid";

export default {
  name: "input-component",
  model: {
    prop: "value",
    event: "input",
  },
  components: {
    ErrorIcon,
    ValidIcon
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "тут нет текста",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "подсказка",
    },
    buttonText: {
      type: String,
      default: "",
    },
    buttonAction: {
      type: Function,
      default: () => {},
    },
    valid: {
      type: Boolean,
      default: true
    },
    error: {
      type: String,
      default: "ошибка"
    },
    state: {
      type: Number,
      default: 0
    }
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
  position: relative;
  margin-bottom: 4px;
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
  transition: 0.2s;
  padding-right: 24px;
}
input:focus {
  border-color: #000;
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

.bottom-text {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #ff008b;
}

.showError .bottom-text {
  display: block;
}

.valid input {
  border-color: #1BBB0D;
}

.showError input {
  border-color: #ff008b;
}

.state-icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
</style>