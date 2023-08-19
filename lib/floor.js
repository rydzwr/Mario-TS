export class Floor {
    constructor() {
        this.pos = {
            x: 0,
            y: 470,
        };
        this.dim = {
            x: Number.MAX_SAFE_INTEGER,
            y: 30,
        };
    }
    update(_deltaTime) { }
    draw(ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
    }
}
//# sourceMappingURL=floor.js.map