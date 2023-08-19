import { Floor } from "./floor.js";
import { Player } from "./player.js";

export default class Game {
  canvas: HTMLCanvasElement;
  screenW: number;
  screenH: number;
  ctx: CanvasRenderingContext2D;
  gameObjects: any[];
  previousTime: number;
  score: number;
  static instance?: Game;

  constructor() {
    this.canvas = document.querySelector("canvas") as HTMLCanvasElement;
    this.canvas.width = 700;
    this.canvas.height = 500;

    this.screenW = this.canvas.width;
    this.screenH = this.canvas.height;

    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.gameObjects = [];
    this.previousTime = Date.now();

    this.score = 0;
  }

  setup(): void {
    this.gameObjects.push(new Player(10, 450));
    this.gameObjects.push(new Floor());
  }

  gameLoop(): void {
    const current = Date.now();
    const deltaTime = (current - this.previousTime) / 1000;
    this.previousTime = current;

    this.update(deltaTime);
    this.draw();

    requestAnimationFrame(() => {
      this.gameLoop();
    });
  }

  update(deltaTime: number): void {
    for (const object of this.gameObjects) {
      object.update(deltaTime);
    }
  }

  draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.font = "24px Arial";
    this.ctx.fillText("Score: " + this.score, 50, 50);

    for (const object of this.gameObjects) {
      this.ctx.save();
      object.draw(this.ctx);
      this.ctx.restore();
    }
  }

  static getInstance(): Game {
    if (Game.instance === undefined) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  static toScreen(worldVector: { x: number; y: number }): {
    x: number;
    y: number;
  } {
    return {
      x: worldVector.x * Game.instance!.screenW,
      y: -worldVector.y * Game.instance!.screenW,
    };
  }
}
