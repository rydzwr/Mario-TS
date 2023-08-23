import Game from "/lib/game.js";

function main() {
    const game = new Game();
    game.setup();
    game.gameLoop();
}

main();