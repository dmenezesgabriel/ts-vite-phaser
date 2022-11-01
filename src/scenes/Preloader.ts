import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    // Load atlas, images and tile maps
    this.load.image("logo", "assets/phaser3-logo.png");
  }

  create() {
    // Start main scene
    this.scene.start("game");
  }
}
