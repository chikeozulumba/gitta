<template>
  <div class="search-component">
    <input
      type="text"
      name="search-component"
      @keydown="onType"
      :value="searchString"
      placeholder="Find a repo"
    />
  </div>
</template>

<script>
import { debounce } from 'debounce';
import axios from 'axios';
import { EventBus } from '../../../../utils';
import './style.scss';

export default {
  name: 'SearchComponent',
  data: () => ({
    searchString: '',
  }),
  methods: {
    onType: debounce(function (e) {
        const vm = (this);
        EventBus.$emit('is-fetching', true);
        const data = axios
            .get(`https://api.github.com/search/repositories?q=${encodeURI(e.target.value)}&sort=stars&order=desc`, {
              method: 'GET',
              mode: 'no-cors',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'token 265d1d9cf09efa2e06d7c51176a587dfcb2989b4',
              },
              withCredentials: false,
              crossDomain: true,
              credentials: 'same-origin',
            })
            .then (function (res) {
              vm.$store.commit('commitItems', res.data.items);
              EventBus.$emit('is-fetching', false);
            })
            .catch ((error) => {
              console.log(error);
            })
    }, 2000),
  },
};
</script>
