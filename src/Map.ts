import { Tile } from './Tile';

// We need a hexagon map, width is length of the top and bottom side
// length is one side of the top right or bottom left, they are assumed to be equal
export class Map {
  private width: number;
  private length: number;
  private tiles: Array<Tile[]>;

  constructor(params: { width: number; length: number }) {
    const { width, length } = params;

    const tiles = [];
    // From top to bottom, how many rows do we have
    const totalRows = (length - 1) * 2 + 1;

    // this is the middle row which is the longest one
    const tilesInLongestRow = width + (length - 1);

    for (let i = 0; i < totalRows; i++) {
      // rows created before the middle row have increasing length
      let currentRowTiles = width + i;
      // after the middle row, the length starts decreasing until it reachs the width
      if (currentRowTiles > tilesInLongestRow) {
        currentRowTiles = width + (totalRows - i - 1);
      }

      for (let j = 0; j < currentRowTiles; j++) {
        tiles[i] = (tiles[i] || []).concat([new Tile()]);
      }
    }

    this.tiles = tiles;
  }

  getTiles() {
    return this.tiles;
  }
}
