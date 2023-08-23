export class GameConstants {
    // GAME
    public static GAME_WIDTH = 1200;
    public static GAME_HEIGHT = 800;

    // FLOOR
    public static FLOOR_COLOR = 'green';
    public static FLOOR_HEIGHT = 30;
    public static FLOOR_POSITION_Y = this.GAME_HEIGHT - this.FLOOR_HEIGHT;

    // PLAYER
    public static PLAYER_COLOR = 'royalblue';
    public static PLAYER_HEIGHT = 20;
    public static PLAYER_WIDTH = 20;
    public static PLAYER_POSITION_X = 10;
    public static PLAYER_POSITION_GROUND = this.FLOOR_POSITION_Y - this.PLAYER_HEIGHT;;
    public static PLAYER_HEIGHT_OFFSET = 1.4;
    public static PLAYER_JUMP_IMPULSE = 1500;

    // ENEMY
    public static ENEMY_COLOR = 'red';
    public static ENEMY_HEIGHT = 30;
    public static ENEMY_WIDTH = 30;
    public static ENEMY_POSITION_GROUND = this.FLOOR_POSITION_Y - this.ENEMY_HEIGHT;
}