<template>
  <div class="homePage container">
    <div class="home-action">
      <h1 class="title">
        Music is Choice, <br/>
        Collect all the music you want.
      </h1>
      <p class="meta-title">
        A website built solely for gathering peoples choice music
        and serving as a directory for viewing,
        listening, and updating them.
      </p>
      <p class="meta-title">
        Enjoy yourself.
      </p>
      <div class="search-action">
        <input placeholder="Enter any music by title" />
        <button>
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';

export default {
  name: 'HomeComponent',
};
</script>
