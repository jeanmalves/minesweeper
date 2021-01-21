function generateMinesPositions() {
  return [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
}

export function generateMines(totalMines: number): number[][] {
  const mines = [];

  for (let i = 0; i < totalMines; i++) {
    mines[i] = generateMinesPositions();
  }

  return mines;
}
