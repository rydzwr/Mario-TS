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
      y: 470,
    };

    this.dim = {
      x: Number.MAX_SAFE_INTEGER,
      y: 30,
    };
  }

  update(_deltaTime: number): void {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "green";
    ctx.fillRect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
  }
}
