// eslint-disable-next-line no-undef
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  // preload() {
  //   this.load.image('logo', 'https://res.cloudinary.com/pacyl20/image/upload/v1622210085/icon_k1qzvw.png');
  // }

  create() {
    this.scene.start('Preload');
  }
}