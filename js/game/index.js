import Phaser from '../libs/phaser-wx.min.js';
import BasicLoadDancingLine from './dancingLine/BasicLoadDancingLine.js'

export default class GameExamples {
  
  constructor(game) {
	  game.state.add('basicLoadDancingLine', new BasicLoadDancingLine(game));
  }

}
