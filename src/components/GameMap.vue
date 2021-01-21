<template>
  <div>
    <div class="row" v-for="(size, row) in squares" :key="`row-${row}`">
      <square-component v-for="(size, column) in size" :key="`col-${column}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SquareComponent from "@/components/Square.vue";
import { Square } from "@/model/square";

@Component({
  components: {
    SquareComponent
  }
})
export default class GameMapComponent extends Vue {
  @Prop() readonly squares!: Square[][];
  @Prop() readonly size!: number;
}
</script>
<style scoped>
.row {
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
