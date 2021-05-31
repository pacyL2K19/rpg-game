import Phaser from 'phaser';
import '../stylesheet/main.scss';
import config from '../config/config';
import BootScene from '../scenes/boot';
import PreloadScene from '../scenes/preload';
import TitleScene from '../scenes/title';
import OptionsScene from '../scenes/option';
import GameScene from '../scenes/game';
import ScoresScene from '../scenes/score';
import UserScene from '../scenes/user';
import EndGameScene from '../scenes/endGame';

import Sound from './sound';
import User from './user';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const soundModel = new Sound();
    const userModel = new User();
    this.globals = { soundModel, bgMusic: null, userModel };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preload', PreloadScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Scores', ScoresScene);
    this.scene.add('User', UserScene);
    this.scene.add('Game', GameScene);
    this.scene.add('EndGame', EndGameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();