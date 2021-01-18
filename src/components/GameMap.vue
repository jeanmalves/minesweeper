<template>
  <div>
    <div class="row">
      <Square />
    </div>
    <div class="row">
      <Square />
    </div>
    <div class="row">
      <Square />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Square from "@/components/Square.vue";

@Component({
  components: {
    Square
  }
})
export default class GameMap extends Vue {}
</script>
<style scoped>
.row {
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>