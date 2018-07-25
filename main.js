import mainState from "./states/play.js";
import startState from "./states/start.js";
import resting from "./states/resting.js";
import menu from "./states/mainmenu.js";

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState(game)); 
game.state.add("start", startState(game));
game.state.add("resting", resting(game));
game.state.add('menu', menu(game));

// Start the state to actually start the game
game.state.start('start');

window.game = game;