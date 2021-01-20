<template>
  <div class="home">
    <GameMap />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GameMap from "@/components/GameMap.vue";

@Component({
  components: {
    GameMap
  }
})
export default class Home extends Vue {}
</script>
