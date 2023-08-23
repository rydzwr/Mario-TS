import { Enemy } from "./enemy.js";
import { GameConstants } from "./gameConstants.js";
export class EnemyManager {
    constructor() { }
    spawnEnemies(gameObjects) {
        let lastEnemyPos = 200;
        gameObjects.push(new Enemy(lastEnemyPos, GameConstants.ENEMY_POSITION_GROUND));
        const enemiesCount = this.getRandomInRange(20, 50);
        for (let i = 0; i < enemiesCount; i++) {
            const offset = this.getRandomInRange(200, 500);
            lastEnemyPos += offset;
            gameObjects.push(new Enemy(lastEnemyPos, GameConstants.ENEMY_POSITION_GROUND));
        }
    }
    getRandomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
}
//# sourceMappingURL=enemyManager.js.map