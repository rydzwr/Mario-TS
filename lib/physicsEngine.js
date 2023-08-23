export class PhysicsEngine {
    applyForces(object, forceX, forceY, deltaTime) {
        forceX += -Math.sign(object.v.x) * object.dragCoeffX * Math.pow(object.v.x, 2);
        forceY += -Math.sign(object.v.y) * object.dragCoeffY * Math.pow(object.v.y, 2);
        forceX += -Math.sign(object.v.x) * object.frictionCoeffX;
        object.a.x = forceX;
        object.a.y = forceY;
        object.v.x += object.a.x * deltaTime;
        object.v.y += object.a.y * deltaTime;
        object.pos.x += object.v.x * deltaTime;
        object.pos.y += object.v.y * deltaTime;
    }
}
//# sourceMappingURL=physicsEngine.js.map