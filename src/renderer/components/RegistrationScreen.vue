<template>
  <div>
    <div id="form">
      <button @click="openLoginScreen">назад</button>
      <h2 class="top">Регистрация нового аккаунта:</h2>
      <div class="mainPanel">
        <TextInput
          text="юзернейм"
          v-model="form.login"
          @input="validateForm"
          :state="form.loginState"
          :error="form.loginError"
          placeholder="твой логин..."
        >
          <UserIcon />
        </TextInput>
        <TextInput
          text="эл. почта"
          v-model="form.email"
          @input="validateForm"
          :state="form.emailState"
          :error="form.emailError"
          placeholder="твой адрес..."
        >
          <EmailIcon />
        </TextInput>
        <TextInput
          text="пароль"
          v-model="form.password"
          @input="validateForm"
          :state="form.passwordState"
          :error="form.passwordError"
          placeholder="сложный пароль..."
          type="password"
        >
          <PasswordIcon />
        </TextInput>
        <div class="center" style="margin-bottom: 48px">
          <CheckBox v-model="form.agreed" @change="validateForm">
            соглашаюсь со всеми <a>правилами bmd</a>
          </CheckBox>
        </div>
        <ButtonAlt
          text="зарегистрироваться"
          @click="login"
          :disabled="form.buttonDisabled"
          :accent="true"
          style="margin-top: 26px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./Elements/Input";
import CheckBox from "./Elements/CheckBox";
import ButtonAlt from "./Elements/Button";
import UserIcon from "./Icons/User";
import EmailIcon from "./Icons/Email";
import PasswordIcon from "./Icons/Password";

export default {
  name: "registration-screen",
  components: {
    TextInput,
    UserIcon,
    PasswordIcon,
    EmailIcon,
    ButtonAlt,
    CheckBox,
  },
  data: () => ({
    form: {
      // State: 0 - не отображать ничего; 1 - ввод верный; -1 - ошибка
      login: "",
      loginState: 0,
      loginError: "этот юзернейм уже занят",
      email: "",
      emailState: 0,
      emailError: "эта эл. почта уже занята",
      password: "",
      passwordState: 0,
      passwordError: "",
      agreed: false,
      buttonDisabled: true,
    },
  }),
  methods: {
    validateForm() {
      let {
        login,
        loginState,
        email,
        emailState,
        password,
        passwordState,
        agreed,
      } = this.form;

      if (
        login.replace(/\s/g, "").length > 0 &&
        password.replace(/\s/g, "").length > 0 &&
        loginState == 0 &&
        emailState == 0 &&
        passwordState == 0 &&
        agreed
      )
        this.form.buttonDisabled = false;
      else this.form.buttonDisabled = true;
    },
    login() {
      let { login, password } = this.form;
    },
    openLoginScreen() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  position: absolute;
  bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a {
  color: #ff008b;
}

.center {
  margin: auto;
  width: 240px;
}
</style>