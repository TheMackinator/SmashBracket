<template>
  <div class="card" v-if="character">
    <div class="card-left" :style="{background: character.ColorTheme || ''}">
      <img :src="character.ThumbnailUrl"/>
    </div>
    <div class="card-content">
      <h4>{{ playerName }}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../services/apiService';

export default {
  name: "CharacterCard",
  props: {
    characterName: String,
    playerName: String,
  },
  data() {
    return {
      character: null,
    }
  },
  async created(){
    this.character = await api.getCharacter(this.characterName)  
  }
};
</script>

<style scoped>
h4 {
  margin: 0;
  padding: 0;
  text-transform: capitalize;
}
.card {
  background: #45616e;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 75px;
  width: 250px;
  display: flex;
  flex-direction: row;
  color: white;
}
.card-left {
  flex: 0 0 auto;
  border-right: 1px solid #587c8d;
  max-width: 70px;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;
}
.card-left img {
  height: 100%;
  width: 100%;
}
.card-content {
  flex: 1 0 auto;
  padding: 10px;
}
</style>
