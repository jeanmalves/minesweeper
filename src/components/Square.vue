<template>
  <div>
    <div class="square"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SquareComponent extends Vue {}
</script>
<style scoped>
.square {
  margin: 1px;
  width: 50px;
  height: 50px;
  flex-grow: 1;
  background-color: #aeb0bd;
}
</style>
