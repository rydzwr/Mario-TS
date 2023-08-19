import Game from "/lib/game.js";

function main() {
    const game = Game.getInstance();
    game.setup();
    game.gameLoop();
}

main();