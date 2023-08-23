import { GameConstants } from "./gameConstants.js";
export class Enemy {
    constructor(posX, posY) {
        this.pos = {
            x: posX,
            y: posY,
        };
        this.dim = {
            x: GameConstants.ENEMY_WIDTH,
            y: GameConstants.ENEMY_HEIGHT,
        };
    }
    update(_deltaTime) {
    }
    draw(ctx, camera) {
        ctx.fillStyle = GameConstants.ENEMY_COLOR;
        ctx.fillRect(this.pos.x - camera.pos.x, this.pos.y - camera.pos.y, this.dim.x, this.dim.y);
    }
}
//# sourceMappingURL=enemy.js.map