import Phaser from 'libs/phaser-wx.min.js'
import GameExamples from 'game/index.js';

var game = new Phaser.Game({
  width: 1,
  height: 1,
  renderer: Phaser.CANVAS,
  canvas: canvas
});

new GameExamples(game);

game.state.start('basicLoadDancingLine');
