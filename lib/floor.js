import { GameConstants } from "./gameConstants.js";
export class Floor {
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
    update(_deltaTime) { }
    draw(ctx) {
        ctx.fillStyle = GameConstants.FLOOR_COLOR;
        ctx.fillRect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
    }
}
//# sourceMappingURL=floor.js.map