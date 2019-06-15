<template>
  <div class="registerPage container">
    <div class="form-wrapper al-auto">
      <p class="title">
        Login
      </p>
      <p class="meta-title">
        A Magical experience awaits you.
      </p>
      <form class="form">
        <div class="input">
          <input
            @change.prevent="evt => setFields(evt, 'email')"
            :value="email"
            type="email"
            name="email"
            placeholder="jane.doe@address.com"
          />
        </div>
        <div class="input">
          <input
            @change.prevent="evt => setFields(evt, 'password')"
            :value="password"
            type="password"
            name="password"
            placeholder="********"
          />
        </div>
        <div class="input">
          <p class="error" v-if="error">
            {{ error }}
          </p>
        </div>
        <div class="input">
          <button :disabled="submitButton" @click.prevent="loginAccount">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from 'firebase';
import './style.scss';

export default {
  name: 'RegisterComponent',
  data: () => ({
    email: '',
    password: '',
    submitButton: true,
    error: null,
  }),
  watch: {
    username(val) {
      if (val !== '') { this.submitButton = false; }
    },
    email(val) {
      if (val !== '') { this.submitButton = false; }
    },
    password(val) {
      if (val !== '') { this.submitButton = false; }
    },
  },
  methods: {
    setFields(evt, field) { this[field] = evt.target.value; },
    loginAccount() {
      auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          const userData = res.user.providerData[0];
          localStorage.setItem('mc-auth', JSON.stringify(userData));
          this.error = null;
          this.$router.push({ name: 'dashboard' });
          return res;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>
