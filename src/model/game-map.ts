import { Square } from "./square";

export class GameMap {
  size = 10;
  totalMines = 10;
  squares: Square[][] = [];

  constructor() {
    this.initialize();
  }

  private initialize() {
    for (let row = 0; row < this.size; row++) {
      this.squares[row] = [];
      for (let column = 0; column < this.size; column++) {
        this.squares[row][column] = new Square(row, column);
      }
    }
  }
}
