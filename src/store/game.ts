import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

import { GameMap } from "@/model/game-map";
import { Square } from "@/model/square";

import { generateMines } from "@/services/game-map.service";
import SquareValue from "@/enum/square-enum";

@Module({ name: "GameStore" })
export class GameStore extends VuexModule {
  gameMapState = new GameMap();

  get gameMap() {
    return this.gameMapState;
  }

  @Mutation
  _setMines(squares: Square[][]) {
    this.gameMapState.squares = squares;
  }

  @Action({ commit: "_setMines" })
  setMines() {
    const mines = generateMines(this.gameMapState.totalMines);
    const squares: Square[][] = [];
    let square: Square;
    let row: number;
    let column: number;

    for (const mine of mines) {
      row = mine[0];
      column = mine[1];
      square = this.gameMapState.squares[row][column];
      square.value = SquareValue.MINE;
      squares[row][column] = square;
    }
    return squares;
  }
}
