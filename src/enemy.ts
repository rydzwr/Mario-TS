import { Camera } from "./camera.js";
import { GameConstants } from "./gameConstants.js";

export class Enemy {
  pos: { x: number; y: number };
  dim: { x: number; y: number };

  constructor(posX: number, posY: number) {

    this.pos = {
      x: posX,
      y: posY,
    };

    this.dim = {
      x: GameConstants.ENEMY_WIDTH,
      y: GameConstants.ENEMY_HEIGHT,
    };
  }

  update(_deltaTime: number): void {

  }

  draw(ctx: CanvasRenderingContext2D, camera: Camera): void {
    ctx.fillStyle = GameConstants.ENEMY_COLOR
    ctx.fillRect(this.pos.x - camera.pos.x, this.pos.y - camera.pos.y, this.dim.x, this.dim.y);
  }
}
