import { GameMap } from "@/model/game-map";
import { Module, VuexModule } from "vuex-module-decorators";

@Module({ name: "GameStore" })
export class GameStore extends VuexModule {
  gameMapState = new GameMap();

  get gameMap() {
    return this.gameMapState;
  }
}
