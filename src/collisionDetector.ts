import { CollisionSide } from "./enums/collisionSite.js";

export class CollisionDetector {
  constructor() {}

  checkCollision(
    obj1: { pos: { x: number; y: number }; dim: { x: number; y: number } },
    obj2: { pos: { x: number; y: number }; dim: { x: number; y: number } }
  ): CollisionSide {
    if (obj1.pos.x + obj1.dim.x <= obj2.pos.x) return CollisionSide.NONE; // obj1 is completely to the left of obj2
    if (obj1.pos.x >= obj2.pos.x + obj2.dim.x) return CollisionSide.NONE; // obj1 is completely to the right of obj2
    if (obj1.pos.y + obj1.dim.y <= obj2.pos.y) return CollisionSide.NONE; // obj1 is completely above obj2
    if (obj1.pos.y >= obj2.pos.y + obj2.dim.y) return CollisionSide.NONE; // obj1 is completely below obj2

    // Now, determine the collision side based on relative positions
    const overlapX =
      obj1.pos.x + obj1.dim.x / 2 - (obj2.pos.x + obj2.dim.x / 2);
    const overlapY =
      obj1.pos.y + obj1.dim.y / 2 - (obj2.pos.y + obj2.dim.y / 2);

    if (Math.abs(overlapX) > Math.abs(overlapY)) {
      return overlapX > 0 ? CollisionSide.RIGHT : CollisionSide.LEFT;
    } else {
      return overlapY > 0 ? CollisionSide.BELOW : CollisionSide.ABOVE;
    }
  }
}
