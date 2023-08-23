import { GameConstants } from "./gameConstants.js";
import { InputManager } from "./inputManager.js";
import { PhysicsEngine } from "./physicsEngine.js";
export class Player {
    constructor() {
        this.gravityAccelY = 1500;
        this.dragCoeffX = 0.2;
        this.dragCoeffY = 0.008;
        this.frictionCoeffX = 0.05;
        this.movementForceX = 20000;
        this.jumpImpulse = GameConstants.PLAYER_JUMP_IMPULSE;
        this.pos = {
            x: GameConstants.PLAYER_POSITION_X,
            y: GameConstants.PLAYER_POSITION_GROUND,
        };
        this.dim = {
            x: GameConstants.PLAYER_WIDTH,
            y: GameConstants.PLAYER_HEIGHT,
        };
        this.v = {
            x: 0,
            y: 0,
        };
        this.a = {
            x: 0,
            y: 0,
        };
        this.physicEngine = new PhysicsEngine();
        this.validPosY = GameConstants.FLOOR_POSITION_Y - GameConstants.PLAYER_HEIGHT * GameConstants.PLAYER_HEIGHT_OFFSET;
    }
    update(deltaTime) {
        let forceX = 0;
        let forceY = this.gravityAccelY;
        this.keepPlayerAboveGround();
        forceX = this.processInputs(forceX);
        this.physicEngine.applyForces(this, forceX, forceY, deltaTime);
    }
    draw(ctx, camera) {
        ctx.fillStyle = GameConstants.PLAYER_COLOR;
        ctx.fillRect(this.pos.x - camera.pos.x, this.pos.y - camera.pos.y, this.dim.x, this.dim.y);
    }
    processInputs(forceX) {
        const input = InputManager.getInstance();
        if (input.getKey("KeyA")) {
            forceX -= this.movementForceX;
        }
        else if (input.getKey("KeyD")) {
            forceX += this.movementForceX;
        }
        if (this.pos.y >= this.validPosY && input.getKey("Space")) {
            this.v.y -= this.jumpImpulse;
        }
        return forceX;
    }
    keepPlayerAboveGround() {
        if (this.pos.y > this.validPosY) {
            this.pos.y = this.validPosY;
        }
    }
}
//# sourceMappingURL=player.js.map