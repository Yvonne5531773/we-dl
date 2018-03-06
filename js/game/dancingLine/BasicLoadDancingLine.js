import BackToSubMenuState from '../../base/BackToSubMenuState.js'

import init from '../../../js/h5/js/init'
import cr from '../../../js/h5/js/cr'
import GLWrap from '../../../js/h5/js/GLWrap'
import runtime from '../../../js/h5/js/runtime'
import layout from '../../../js/h5/js/layout'
import eventStackFrame from '../../../js/h5/js/eventStackFrame'
import expvalue from '../../../js/h5/js/expvalue'
import sysExps from '../../../js/h5/js/sysExps'
import ajax from '../../../js/h5/js/ajax'
import arr from '../../../js/h5/js/arr'
import audio from '../../../js/h5/js/audio'
import browser from '../../../js/h5/js/browser'
import dictionary from '../../../js/h5/js/dictionary'
import fun from '../../../js/h5/js/function'
import keyboard from '../../../js/h5/js/keyboard'
import localStorage from '../../../js/h5/js/localStorage'
import mmPreloader from '../../../js/h5/js/mmPreloader'
import particles from '../../../js/h5/js/particles'
import rexDate from '../../../js/h5/js/rexDate'
import rexHash from '../../../js/h5/js/rexHash'
import rexZSorter from '../../../js/h5/js/rexZSorter'
import sprite from '../../../js/h5/js/sprite'
import text from '../../../js/h5/js/text'
import textBox from '../../../js/h5/js/textBox'
import tiledBg from '../../../js/h5/js/tiledBg'
import touch from '../../../js/h5/js/touch'
import vooxe from '../../../js/h5/js/vooxe'
import bullet from '../../../js/h5/js/bullet'
import fade from '../../../js/h5/js/fade'
import los from '../../../js/h5/js/los'
import pin from '../../../js/h5/js/pin'
import rexMoveTo from '../../../js/h5/js/rexMoveTo'
import rexRotateTo from '../../../js/h5/js/rexRotateTo'
import sin from '../../../js/h5/js/sin'
import timer from '../../../js/h5/js/timer'
import lunarrayTween from '../../../js/h5/js/lunarrayTween'
import rexAnchor2 from '../../../js/h5/js/rexAnchor2'
import scrollto from '../../../js/h5/js/scrollto'
import c2runtime from '../../../js/h5/js/c2runtime'
// require('../../../js/h5/js/init')
// require('../../../js/h5/js/cr')
// require('../../../js/h5/js/GLWrap')
// require('../../../js/h5/js/runtime')
// require('../../../js/h5/js/layout')
// require('../../../js/h5/js/eventStackFrame')
// require('../../../js/h5/js/expvalue')
// require('../../../js/h5/js/sysExps')
// require('../../../js/h5/js/ajax')
// require('../../../js/h5/js/arr')
// require('../../../js/h5/js/audio')
// require('../../../js/h5/js/browser')
// require('../../../js/h5/js/dictionary')
// require('../../../js/h5/js/function')
// require('../../../js/h5/js/keyboard')
// require('../../../js/h5/js/localStorage')
// require('../../../js/h5/js/mmPreloader')
// require('../../../js/h5/js/particles')
// require('../../../js/h5/js/rexDate')
// require('../../../js/h5/js/rexHash')
// require('../../../js/h5/js/rexZSorter')
// require('../../../js/h5/js/sprite')
// require('../../../js/h5/js/text')
// require('../../../js/h5/js/textBox')
// require('../../../js/h5/js/tiledBg')
// require('../../../js/h5/js/touch')
// require('../../../js/h5/js/vooxe')
// require('../../../js/h5/js/bullet')
// require('../../../js/h5/js/fade')
// require('../../../js/h5/js/los')
// require('../../../js/h5/js/pin')
// require('../../../js/h5/js/rexMoveTo')
// require('../../../js/h5/js/rexRotateTo')
// require('../../../js/h5/js/sin')
// require('../../../js/h5/js/timer')
// require('../../../js/h5/js/lunarrayTween')
// require('../../../js/h5/js/rexAnchor2')
// require('../../../js/h5/js/scrollto')
// require('../../../js/h5/js/timer')
// require('../../../js/h5/js/c2runtime')

export default class BasicLoadAnAnimationState extends BackToSubMenuState {
  constructor(game) {
    super();
    this.game = game;
  }

  init(key) {
    super.init(key);
  }

  preload() {
    // 加载图集
    // this.game.load.atlasJSONHash('bot', 'assets/basic/running_bot.png', null, runningBotAtlas);
  }

  create() {
	  cr_createRuntime(canvas)
  }

}
