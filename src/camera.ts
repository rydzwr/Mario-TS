import { Player } from "./player";

export class Camera {
    pos: { x: number; y: number };
    marginX: number;
    marginY: number;
    
    constructor() {
        this.pos = {
            x: 0,
            y: 0,
        };
        
        this.marginX = 200;
        this.marginY = 50;
    }

    update(player: Player, screenW: number): void {
        const playerPosX = player.pos.x;

        if (playerPosX > this.pos.x + screenW - this.marginX) {
            this.pos.x = playerPosX - screenW + this.marginX;
        }

        if (playerPosX < this.pos.x + this.marginX) {
            this.pos.x = playerPosX - this.marginX;
        }
    }
}
