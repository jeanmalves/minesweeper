import SquareValue from "@/enum/square-enum";

export class Square {
  value: number;
  positionRow: number;
  positionColumn: number;

  constructor(row: number, column: number) {
    this.value = SquareValue.DEFAULT;
    this.positionRow = row;
    this.positionColumn = column;
  }
}
