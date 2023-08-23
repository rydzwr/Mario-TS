import { GameConstants } from "./gameConstants.js";

export class Floor {
  pos: {
    x: number;
    y: number;
  };
  dim: {
    x: number;
    y: number;
  };

  constructor() {
    this.pos = {
      x: 0,
      y: GameConstants.FLOOR_POSITION_Y,
    };

    this.dim = {
      x: Number.MAX_SAFE_INTEGER,
      y: GameConstants.FLOOR_HEIGHT,
    };
  }

  update(_deltaTime: number): void {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = GameConstants.FLOOR_COLOR;
    ctx.fillRect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
  }
}
