export class Enemy {
    constructor(posX, posY) {
        this.gravityAccelY = 1500;
        this.dragCoeffX = 0.2;
        this.dragCoeffY = 0.008;
        this.frictionCoeffX = 0.05;
        this.movementForceX = 20000;
        this.pos = {
            x: posX,
            y: posY,
        };
        this.dim = {
            x: 30,
            y: 30,
        };
        this.v = {
            x: 0,
            y: 0,
        };
        this.a = {
            x: 0,
            y: 0,
        };
    }
    update(deltaTime) {
        let forceX = 0;
        let forceY = 0;
        forceX -= this.movementForceX;
        forceX += this.movementForceX;
        forceX += -Math.sign(this.v.x) * this.dragCoeffX * Math.pow(this.v.x, 2);
        forceY += -Math.sign(this.v.y) * this.dragCoeffY * Math.pow(this.v.y, 2);
        forceX += -Math.sign(this.v.x) * this.frictionCoeffX;
        this.a.x = forceX;
        this.a.y = forceY;
        this.v.x += this.a.x * deltaTime;
        this.v.y += this.a.y * deltaTime;
        this.pos.x += this.v.x * deltaTime;
        this.pos.y += this.v.y * deltaTime;
    }
    draw(ctx, camera) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.pos.x - camera.pos.x, this.pos.y - camera.pos.y, this.dim.x, this.dim.y);
    }
}
//# sourceMappingURL=enemy.js.map