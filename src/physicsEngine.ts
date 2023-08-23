export class PhysicsEngine {
  applyForces(object: { pos: any, v: any, a: any, dragCoeffX: number, dragCoeffY: number, frictionCoeffX: number }, forceX: number, forceY: number, deltaTime: number): void {
    forceX += -Math.sign(object.v.x) * object.dragCoeffX * object.v.x ** 2;
    forceY += -Math.sign(object.v.y) * object.dragCoeffY * object.v.y ** 2;
    forceX += -Math.sign(object.v.x) * object.frictionCoeffX;

    object.a.x = forceX;
    object.a.y = forceY;

    object.v.x += object.a.x * deltaTime;
    object.v.y += object.a.y * deltaTime;

    object.pos.x += object.v.x * deltaTime;
    object.pos.y += object.v.y * deltaTime;
  }
}
