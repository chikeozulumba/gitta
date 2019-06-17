<template>
  <header id="navbar">
    <router-link class="brand-logo" to="/">
      Get Repo
    </router-link>
    <ul class="navMenu">
      <li class="navMenuItem">
        <router-link to="/about">
          About
        </router-link>
      </li>
      <li class="navMenuItem">
        <router-link to="/login">
          Login
        </router-link>
      </li>
      <li class="navMenuItem">
        <router-link to="/register">
          Get Started
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import './style.scss';

export default {
  name: 'Navigation',
};
</script>
