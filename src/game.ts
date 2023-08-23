import { Camera } from "./camera.js";
import { CollisionDetector } from "./collisionDetector.js";
import { Enemy } from "./enemy.js";
import { EnemyManager } from "./enemyManager.js";
import { CollisionSide } from "./enums/collisionSite.js";
import { Floor } from "./floor.js";
import { GameConstants } from "./gameConstants.js";
import { Player } from "./player.js";

export default class Game {
  collisionDetector: CollisionDetector;
  ctx: CanvasRenderingContext2D;
  enemyManager: EnemyManager;
  canvas: HTMLCanvasElement;
  previousTime: number;
  playerLives: number;
  gameObjects: any[];
  screenW: number;
  screenH: number;
  camera: Camera;
  score: number;

  constructor() {
    this.canvas = document.querySelector("canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.collisionDetector = new CollisionDetector();
    this.canvas.height = GameConstants.GAME_HEIGHT;
    this.playerLives = GameConstants.PLAYER_LIVES;
    this.canvas.width = GameConstants.GAME_WIDTH;
    this.enemyManager = new EnemyManager();
    this.screenH = this.canvas.height;
    this.screenW = this.canvas.width;
    this.previousTime = Date.now();
    this.camera = new Camera();
    this.gameObjects = [];
    this.score = 0;
  }

  setup(): void {
    this.gameObjects.push(new Player());
    this.gameObjects.push(new Floor());
    this.enemyManager.spawnEnemies(this.gameObjects);
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
    const player = this.gameObjects.find((obj) => obj instanceof Player);
    const enemies = this.gameObjects.filter((obj) => obj instanceof Enemy);

    this.camera.update(player, this.screenW);

    for (const object of this.gameObjects) {
      object.update(deltaTime, this.camera);
    }

    for (const enemy of enemies) {
      const collisionValue = this.collisionDetector.checkCollision(
        player,
        enemy
      );
      if (collisionValue !== CollisionSide.NONE) {
        this.processCollision(collisionValue, enemy, player);
      }
    }
  }

  draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGameStats();

    for (const object of this.gameObjects) {
      this.ctx.save();
      object.draw(this.ctx, this.camera);
      this.ctx.restore();
    }
  }

  private drawGameStats(): void {
    this.ctx.font = "24px Arial";
    this.ctx.fillText("Score: " + this.score, 50, 50);
    this.ctx.fillText("Lives: " + this.playerLives, 50, 90);
  }

  private processCollision(collision: CollisionSide, enemy: Enemy, player: Player): void {
    if (collision === CollisionSide.ABOVE) {
      this.score += 1;
      // Remove the enemy from gameObjects
      const enemyIndex = this.gameObjects.indexOf(enemy);
      if (enemyIndex > -1) {
        this.gameObjects.splice(enemyIndex, 1);
      }
    }

    else if (collision === CollisionSide.LEFT) {
      this.playerLives--;
      player.pos.x -= 80;
      player.setGettingDamage(true);
    }
    else if (collision === CollisionSide.RIGHT) {
      this.playerLives--;
      player.pos.x += 80;
      player.setGettingDamage(true);
    }
  }
}
