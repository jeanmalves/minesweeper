<template>
  <div class="home">
    <game-map-component :squares="gameMap.squares" :size="gameMap.size" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import GameMapComponent from "@/components/GameMap.vue";

import { GameStore } from "@/store/game";

@Component({
  components: {
    GameMapComponent
  }
})
export default class Home extends Vue {
  gameStore = getModule(GameStore, this.$store);

  get gameMap() {
    return this.gameStore.gameMap;
  }

  setMines() {
    this.gameStore.setMines();
  }
}
</script>
