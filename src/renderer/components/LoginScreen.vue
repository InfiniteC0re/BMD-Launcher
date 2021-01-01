<template>
  <div>
    <div id="form">
      <button @click="openMainScreen" style="position: absolute; bottom: 0;z-index:99999999">главная</button>
      <h2 class="top">Войди в мир bmd:</h2>
      <div class="mainPanel">
        <TextInput
          text="юзернейм"
          v-model="form.login"
          @input="validateForm"
          placeholder="твой логин..."
        >
          <UserIcon />
        </TextInput>
        <TextInput
          text="пароль"
          v-model="form.password"
          @input="validateForm"
          placeholder="твой пароль..."
          buttonText="забыл?"
          type="password"
        >
          <PasswordIcon />
        </TextInput>
        <ButtonAlt
          text="войти"
          @click="login"
          :disabled="form.buttonDisabled"
          :accent="true"
          style="margin-top: 26px"
        />
      </div>
      <div class="bottom">
        <h3>Нет аккаунта? Заведи:</h3>
        <ButtonAlt
          text="регистрация"
          :accent="true"
          @click="openRegistrationScreen"
          style="margin-top: 26px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./Elements/Input";
import ButtonAlt from "./Elements/Button";
import UserIcon from "./Icons/User";
import PasswordIcon from "./Icons/Password";

export default {
  name: "login-screen",
  components: {
    TextInput,
    UserIcon,
    PasswordIcon,
    ButtonAlt,
  },
  data: () => ({
    form: {
      login: "",
      password: "",
      buttonDisabled: true,
    },
  }),
  mounted() {
    this.$store.commit("setHideHeader", true);
    this.$parent.setLogo(0);
    this.$parent.setTitle("");
    this.$parent.setShowHands(true);
  },
  methods: {
    validateForm() {
      let { login, password } = this.form;

      if (
        login.replace(/\s/g, "").length > 0 &&
        password.replace(/\s/g, "").length > 0
      )
        this.form.buttonDisabled = false;
      else this.form.buttonDisabled = true;
    },
    openRegistrationScreen() {
      this.$router.push("/registration");
    },
    openMainScreen() {
      this.$router.push("/main");
    },
    login() {
      let { login, password } = this.form;
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>