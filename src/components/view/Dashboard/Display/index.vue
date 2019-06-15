<template>
  <div id="repo-view" v-if="repoItems.length > 0">
    <div class="ui cards stackable three column">
      <div :key="index.id" v-for="(item, index) in repoItems" class="card">
        <div class="content">
          <img class="right floated mini ui image" :src="item.owner.avatar_url">
          <div class="header">{{item.name}}</div>
          <div class="meta">{{item.owner.login}}</div>
          <div class="description">
            {{item.description}} <br>
            <a target="_blank" :href="item.html_url">
              <font-awesome-icon :icon="['fab', 'github']" style="margin: 1rem 0"/>
            </a>
          </div>
        </div>
        <div class="extra content">
          <p style="text-align: center">{{ userRepos.includes(item.id) ? 'Save or ': ''}}{{'Clone this repo'}}</p>
          <div class="ui two buttons">
            <div v-if="userRepos.includes(item.id)" class="ui basic blue button">Saved</div>
            <div v-else class="ui basic green button" @click.prevent="() => addToRepos(item.id)">Add</div>
            <div class="ui basic orange button" @click.prevent="(evt) => copyCloneUrl(item.clone_url, evt)">Clone</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../../../utils";
import firebase from 'firebase';
import { Toast } from '../../../../assets/js/Toast.js';
import "./style.scss";

const db = firebase.firestore();

export default {
  name: "ReposMainDisplay",
  data: () => ({
    userId: firebase.auth().currentUser.uid,
    userRepos: [],
  }),
  computed: {
    repoItems: function() {
      return this.$store.getters.allRepoItems;
    }
  },
  methods: {
    copyCloneUrl(url, evt) {
      navigator.clipboard.writeText(url).then(function() {
        new Toast({
          message: `URL copied\n${url}`,
          type: 'success'
        });
      }, function(err) {
        new Toast({
          message: `URL could not be copied: \n${url}`,
          type: 'error'
        });
      });
    },
    addToRepos(newId, evt) {
      const savedRepoRef = db.collection("savedRepos").doc(this.userId);
      let savedRepos = [];
      if (!this.userRepos.includes(newId)) {
        this.userRepos.push(newId);
        return savedRepoRef.update({
          repos: this.userRepos
        })
        .then(function(e) {
          new Toast({
            message: 'Repo added!',
            type: 'success'
          });
        })
        .catch(function(error) {
          new Toast({
            message: 'Error saving your repo!',
            type: 'error'
          });
        });
      } else {
        new Toast({
          message: 'Repo already exists!',
          type: 'warning'
        });
      }
    }
  },
  mounted() {
    db.collection("savedRepos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            this.userRepos = doc.data().repos || [];
            console.log(this.userRepos);
        });
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.3/semantic.min.css");
@import url("../../../../assets/css/Toast.min.css");
</style>

