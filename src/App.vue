<template>
  <div id="app">
    <div class="input-form">
      <input type="text" v-model="player.playerName" placeholder="Player Name">
      <input type="text" v-model="player.characterName" placeholder="Character">
      <button @click="addPlayer">Add</button>
    </div>
    <div class="bracket">
    <character-card class="player-card" v-for="(player, index) in players" :key="index" :character-name="player.characterName" :player-name="player.playerName" />
    </div>
  </div>
</template>

<script>
import CharacterCard from "./components/CharacterCard.vue";

export default {
  name: "app",
  components: {
    CharacterCard
  },
  data(){
    return {
      player: {
        characterName: null,
        playerName: null,
      },
      players: []
    }
  },
  methods: {
    addPlayer() {
      this.players.push(this.player)
      this.player = {
        characterName: null,
        playerName: null,
      }
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700');
#app {
  font-family: "Noto Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
.bracket {
  padding: 50px;
  display: flex;
  flex-direction: column;
}
.player-card + .player-card {
  margin-top: 15px;
}
body {
    background-color: #2c3e50;
    color: #eee;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y:auto;
    font-family: 'Noto Sans', sans-serif;
}
</style>
