<template>
  <div class="registerPage container">
    <div class="form-wrapper al-auto">
      <p class="title">
        Register
      </p>
      <p class="meta-title">
        Start you music experience by creating your very own account.
      </p>
      <form class="form">
        <div class="input">
          <input
            @change.prevent="evt => setFields(evt, 'username')"
            :value="username"
            type="text"
            name="username"
            placeholder="@username"
          />
        </div>
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
          <button :disabled="submitButton" @click.prevent="createAccount">Create Account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import './style.scss';

export default {
  name: 'RegisterComponent',
  data: () => ({
    username: '',
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
    createAccount() {
      firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          const userData = res.user.providerData[0];
          const authData = {
            email: userData.email,
            displayName: userData.displayName,
            phoneNumber: userData.phoneNumber,
            photoUrl: userData.photoURL,
          };
          localStorage.setItem('mc-auth', JSON.stringify(authData));
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
