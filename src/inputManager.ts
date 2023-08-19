export class InputManager {
  keyboardState: { [key: string]: boolean };
  static instance?: InputManager;

  constructor() {
    this.keyboardState = {};
    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => (this.keyboardState[e.code] = true)
    );
    document.addEventListener(
      "keyup",
      (e: KeyboardEvent) => (this.keyboardState[e.code] = false)
    );
  }

  getKey(code: string): any {
    if (code in this.keyboardState) return this.keyboardState[code];
    return false;
  }

  static getInstance(): InputManager {
    if (InputManager.instance === undefined) {
      InputManager.instance = new InputManager();
    }
    return InputManager.instance;
  }
}
