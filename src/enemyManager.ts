import { Enemy } from "./enemy.js";
import { GameConstants } from "./gameConstants.js";

export class EnemyManager {
    constructor() {}

    public spawnEnemies(gameObjects: any[]) {
        let lastEnemyPos = 200;
        gameObjects.push(new Enemy(lastEnemyPos, GameConstants.ENEMY_POSITION_GROUND));
    
        const enemiesCount = this.getRandomInRange(20, 50);
        for (let i = 0; i < enemiesCount; i++) {
            const offset = this.getRandomInRange(200, 500);
            lastEnemyPos += offset;
            gameObjects.push(new Enemy(lastEnemyPos, GameConstants.ENEMY_POSITION_GROUND));
        }
    }
    
    private getRandomInRange(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}