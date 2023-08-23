import { Camera } from "./camera.js";
import { CollisionDetector } from "./collisionDetector.js";
import { Enemy } from "./enemy.js";
import { EnemyManager } from "./enemyManager.js";
import { CollisionSide } from "./enums/collisionSite.js";
import { Floor } from "./floor.js";
import { GameConstants } from "./gameConstants.js";
import { Player } from "./player.js";
export default class Game {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.canvas.width = GameConstants.GAME_WIDTH;
        this.canvas.height = GameConstants.GAME_HEIGHT;
        this.screenW = this.canvas.width;
        this.screenH = this.canvas.height;
        this.ctx = this.canvas.getContext("2d");
        this.gameObjects = [];
        this.previousTime = Date.now();
        this.collisionDetector = new CollisionDetector();
        this.enemyManager = new EnemyManager();
        this.camera = new Camera();
        this.score = 0;
    }
    setup() {
        this.gameObjects.push(new Player());
        this.gameObjects.push(new Floor());
        this.enemyManager.spawnEnemies(this.gameObjects);
    }
    gameLoop() {
        const current = Date.now();
        const deltaTime = (current - this.previousTime) / 1000;
        this.previousTime = current;
        this.update(deltaTime);
        this.draw();
        requestAnimationFrame(() => {
            this.gameLoop();
        });
    }
    update(deltaTime) {
        const player = this.gameObjects.find((obj) => obj instanceof Player);
        const enemies = this.gameObjects.filter((obj) => obj instanceof Enemy);
        this.camera.update(player, this.screenW);
        for (const object of this.gameObjects) {
            object.update(deltaTime, this.camera);
        }
        for (const enemy of enemies) {
            const collisionValue = this.collisionDetector.checkCollision(player, enemy);
            if (collisionValue !== CollisionSide.NONE) {
                console.log("Collision! : " + collisionValue);
                if (collisionValue === CollisionSide.ABOVE) {
                    this.score += 1;
                    const enemyIndex = this.gameObjects.indexOf(enemy);
                    if (enemyIndex > -1) {
                        this.gameObjects.splice(enemyIndex, 1);
                    }
                }
            }
        }
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawScore();
        for (const object of this.gameObjects) {
            this.ctx.save();
            object.draw(this.ctx, this.camera);
            this.ctx.restore();
        }
    }
    drawScore() {
        this.ctx.font = "24px Arial";
        this.ctx.fillText("Score: " + this.score, 50, 50);
    }
}
//# sourceMappingURL=game.js.map