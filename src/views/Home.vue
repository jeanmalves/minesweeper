<template>
  <div class="home">
    <game-map-component :squares="gameMap.squares" :size="gameMap.size" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import GameMapComponent from "@/components/GameMap.vue";
import { GameMap } from "@/model/game-map";

@Component({
  components: {
    GameMapComponent
  }
})
export default class Home extends Vue {
  @Getter gameMap!: GameMap;
}
</script>
