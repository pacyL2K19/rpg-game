/* eslint-disable max-len */
import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');
    this.add.image(GAME_WIDTH - 68, GAME_HEIGHT - 34, 'logo').setScale(0.3);

    this.soundModel = this.sys.game.globals.soundModel;
    if (this.soundModel.musicOn === true && this.soundModel.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.soundModel.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

    this.gameBtn = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) - 210, 'playGame').setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.scene.start('User');
    });

    this.settingsBtn = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) - 100, 'settings').setInteractive();
    this.settingsBtn.on('pointerdown', () => {
      this.scene.start('Options');
    });

    this.gameBtn = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) + 20, 'scores').setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.scene.start('Scores');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(1.1);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(1);
    });
  }
}