import { InputManager } from "./inputManager.js";

export class Player {
  gravityAccelY: number;
  dragCoeffX: number;
  dragCoeffY: number;
  frictionCoeffX: number;
  movementForceX: number;
  jumpImpulse: number;

  pos: { x: number; y: number };
  dim: { x: number; y: number };
  v: { x: number; y: number };
  a: { x: number; y: number };

  constructor(posX: number, posY: number) {
    this.gravityAccelY = 1500;

    this.dragCoeffX = 0.2;
    this.dragCoeffY = 0.008;

    this.frictionCoeffX = 0.05;
    this.movementForceX = 1600;
    this.jumpImpulse = 1500;

    this.pos = {
      x: posX,
      y: posY,
    };

    this.dim = {
      x: 20,
      y: 20,
    };

    this.v = {
      x: 0,
      y: 0,
    };

    this.a = {
      x: 0,
      y: 0,
    };
  }

  update(deltaTime: number): void {
    let forceX = 0;
    let forceY = this.gravityAccelY;

    this.keepPlayerAboveGround();

    const input = InputManager.getInstance();
    if (input.getKey("KeyA")) {
      forceX -= this.movementForceX;
    } else if (input.getKey("KeyD")) {
      forceX += this.movementForceX;
    }

    if (this.pos.y >= 442 && input.getKey("Space")) {
      this.v.y -= this.jumpImpulse;
    }

    forceX += -Math.sign(this.v.x) * this.dragCoeffX * this.v.x ** 2;
    forceY += -Math.sign(this.v.y) * this.dragCoeffY * this.v.y ** 2;

    forceX += -Math.sign(this.v.x) * this.frictionCoeffX;

    this.a.x = forceX;
    this.a.y = forceY;

    this.v.x += this.a.x * deltaTime;
    this.v.y += this.a.y * deltaTime;

    this.pos.x += this.v.x * deltaTime;
    this.pos.y += this.v.y * deltaTime;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "red";
    ctx.fillRect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
  }

  keepPlayerAboveGround(): void {
    if (this.pos.y >= 442) {
      this.pos.y = 442;
    }
  }
}
