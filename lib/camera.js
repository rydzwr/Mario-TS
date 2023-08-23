import { GameConstants } from "./gameConstants.js";
export class Camera {
    constructor() {
        this.pos = {
            x: 0,
            y: 0,
        };
        this.marginX = GameConstants.CAMERA_OFFSET_X;
        this.marginY = GameConstants.CAMERA_OFFSET_Y;
    }
    update(player, screenW) {
        const playerPosX = player.pos.x;
        if (playerPosX > this.pos.x + screenW - this.marginX) {
            this.pos.x = playerPosX - screenW + this.marginX;
        }
        if (playerPosX < this.pos.x + this.marginX) {
            this.pos.x = playerPosX - this.marginX;
        }
    }
}
//# sourceMappingURL=camera.js.map